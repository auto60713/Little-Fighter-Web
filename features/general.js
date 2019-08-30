
// 換動作判斷
lf2.variousChangesFrame = (setting, frame, type, thing) => {

  var effect = lf2.collisionDetection(setting, frame, type, thing);
  var skill = lf2.skill(setting, frame, type, thing);

  // 長壓保持動作
  if (frame.hitHold && !setting.keypress[setting.hitHold]) {
    lf2.gotoFrame(thing, setting, type, 999);
  }
  // 自然換動作
  else if (setting.nowwait <= 0) {
    lf2.gotoFrame(thing, setting, type, frame.next);
  }
  // 被打偵測
  else if (effect) {
    // 不同的打擊效果 會有不同的特效
    lf2.strikeEffect(type, thing, setting, effect);
  }
  // 技能換動作
  else if (skill) {
    lf2.gotoFrame(thing, setting, type, skill);
  }
  // 循環到期換動作 (通常為衍生物)
  else if (setting.timeToGo[1] && setting.timeToGo[0] <= 0) {
    lf2.gotoFrame(thing, setting, type, setting.timeToGo[1]);
    setting.timeToGo[1] = null;
  }
  // 被抓換動作
  else if (setting.catching) {
    var enemy = lf2.findScenesIndex(setting.catching);
    var enemyFrame = enemy.frame[enemy.setting.nowframe];
    lf2.gotoFrame(thing, setting, type, enemyFrame.cpoint.frame);
  }

}

// 技能
lf2.skill = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character'], type)) return;

  if (frame.hit) {
    var hit = Object.keys(frame.hit);
    try {
      hit.forEach(btName => {
        var skillName = frame.hit[btName];
        var nextFrame = lf2.theFrame(type, thing, setting, skillName);

        // 確認技能是否存在 (可能還沒被做出來 但先有按法)
        if (nextFrame) {
          // 正在按
          if (setting.keypress[btName]) {
            if (nextFrame.hitHold) setting.hitHold = btName;
            throw skillName;
          }
          // 檢視按鍵反應序
          if (setting.keyReaction.length >= 2) {
            for (let y = 0; y < setting.keyReaction.length - 1; y++) {
              // 目前只支援到雙鍵
              var key1 = setting.keyReaction[y][0];
              var key2 = setting.keyReaction[y + 1][0];
              // 在裡面有打出
              if (key1 + key2 == btName) {
                if (nextFrame.hitHold) setting.hitHold = key2;
                if (setting.keypress[key2] || !nextFrame.hitHold) {
                  throw skillName;
                }
              }
            }
          }
        }
      });
    } catch (skillName) { return skillName; }
  }
}

// 物件換影格
lf2.gotoFrame = (thing, setting, type, next) => {

  // next翻轉
  if (next < 0) {
    setting.mirror = !setting.mirror;
    next = next * -1;
  }

  if (next == 999) {
    if (type == 'character' && setting.nowHP <= 0) next = 'lyingDown';
    else if (type == 'character' && setting.inSky) next = 'jumping';
    else next = 'standing';
    setting.hitHold = '-';
  }
  else if (next == 1000) {
    setting.destroy = true;
    next = 'standing';
  }

  var nextFrame = lf2.theFrame(type, thing, setting, next);

  setting.nowframe = next;
  setting.nowwait = nextFrame.wait * lf2.waitMagnification;

  lf2.sound(nextFrame.sound);
  lf2.produceDerivative(setting, nextFrame, type);
}

// 計算器
lf2.counter = (setting, frame, type, thing) => {

  // 幀等待
  setting.nowwait--;

  // 循環動作
  if (setting.timeToGo[0] > 0) setting.timeToGo[0]--;

  if (frame.timeToGo && !setting.timeToGo[1]) {
    setting.timeToGo = frame.timeToGo;
  }

  if (type == 'character') {

    // 按鍵反應表
    setting.keyReaction.forEach((k, i, o) => {
      k[1]--;
      if (k[1] <= 0) o.splice(i, 1);
    });

    // 被打等待
    Object.keys(setting.strikeCD).forEach(k => {
      setting.strikeCD[k]--;
    });
  }

}

// 製造衍生物
lf2.produceDerivative = (setting, frame, type) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character', 'derivative'], type)) return;

  if (frame.opoint) {

    var m = setting.mirror ? -1 : 1;

    lf2.adjunction('derivative', frame.opoint.name, {
      x: setting.x - (frame.center[0] * m) + (frame.opoint.x * m),
      y: setting.y - frame.center[1] + frame.opoint.y,
      team: setting.team,
      mirror: setting.mirror,
      nowframe: frame.opoint.frame,
      nowwait: lf2.derivative[frame.opoint.name].frame[frame.opoint.frame].wait * lf2.waitMagnification,
    });
  }
}


lf2.theFrame = (type, thing, setting, frameName) => {
  return type === 'map' ? thing.component[setting.component][frameName] : thing.frame[frameName];
}

// 影子系統
lf2.shadowSystem = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character', 'derivative'], type)) return;

  if (!frame.shadowHide) {
    lf2.shadowSystem2(setting, thing, 'shadow', 0);

    if (setting.scenesIndex == 1)
      lf2.shadowSystem2(setting, thing, 'p1', 10);
    else if (setting.scenesIndex == 2) {
      lf2.shadowSystem2(setting, thing, 'p2', 10);
    }
  }
}
lf2.shadowSystem2 = (setting, thing, name, y) => {
  setting2 = lf2['UI'][name].setting;
  frame2 = lf2['UI'][name].frame.standing;
  setting2.x = setting.x;
  setting2.y = lf2.mapLimit.y + y;
  lf2.draw(setting2, frame2, 'UI', thing);
}



// 限制模式與種類
lf2.passOnly = (modeList, typeList, type) => {
  try {
    modeList.forEach(name => {
      // 如果是允許的模式
      if (lf2.state === name || name === 'all') throw false;
    });
  } catch (e) {
    // 接著檢查
    try {
      typeList.forEach(name => {
        // 如果是允許的類型
        if (type === name || name === 'all') throw false;
      });
    } catch (e) { return true; }
  }
  return false;
}