
// 換動作判斷
lf2.variousChangesFrame = (setting, frame, type, thing) => {

  var effect = lf2.amIBeingBeaten(setting, frame, type, thing);
  // 被打偵測
  if (!setting.catching && effect) {

    // 不同的打擊效果 會有不同的特效
    lf2.strikeEffect(type, thing, setting, effect);
  }
  // 被抓換動作
  else if (setting.catching) {
    var enemy = lf2.findScenesIndex(setting.catching);
    var enemyFrame = enemy.frame[enemy.setting.nowframe];
    lf2.gotoFrame(thing, setting, type, enemyFrame.cpoint.frame);
  }
  // 技能換動作
  else if (lf2.skill(setting, frame, type, thing)) {
    lf2.gotoFrame(thing, setting, type, lf2.ttttt);
  }
  // 循環到期換動作
  else if (setting.timeToGo[1] && setting.timeToGo[0] <= 0) {
    lf2.gotoFrame(thing, setting, type, setting.timeToGo[1]);
    setting.timeToGo[1] = null;
  }
  // 自然換動作
  else if (setting.nowwait <= 0) {
    lf2.gotoFrame(thing, setting, type, frame.next);
  }
  // 長壓保持動作
  else if (type == 'character' && setting.hitHold != '-' && !setting.keypress[setting.hitHold] && frame.hitHold) {
    lf2.gotoFrame(thing, setting, type, 999);
  }

  // 循環動作
  if (frame.timeToGo && !setting.timeToGo[1]) {
    setting.timeToGo = frame.timeToGo;
  }

}

// 技能
lf2.skill = (setting, frame, type, thing) => {
  var ddd = false;
  if (frame.hit) {
    // 目前動作可使用的技能按法
    var hit = Object.keys(frame.hit);

    dance: for (let i = 0; i < hit.length; i++) {
      // 前往的動作名稱(預計要用的技能)
      var next = frame.hit[hit[i]];
      // 前往的動作資訊
      var nextFrame = lf2.theFrame(type, thing, setting, next);

      if (nextFrame) {
        // 正在按
        if (setting.keypress[hit[i]]) {
          if (nextFrame.hitHold) setting.hitHold = hit[i];
          ddd = next;
          lf2.ttttt = next;
          break dance;
        }
        // 在反應表裡面有組合
        if (setting.keyReaction.length >= 2) {
          for (let y = 0; y < setting.keyReaction.length - 1; y++) {
            var key1 = setting.keyReaction[y][0];
            var key2 = setting.keyReaction[y + 1][0];
            if (key1 + key2 == hit[i]) {
              if (nextFrame.hitHold && setting.keypress[key2]) {
                setting.hitHold = key2;
                ddd = next;
                lf2.ttttt = next;
                break dance;
              }
            }
          }
        }
      }
    }
  }
  return ddd;
}

// 物件換影格
lf2.gotoFrame = (thing, setting, type, next) => {

  // 被動鏡像
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
  setting.alreadyProduced = false;
  setting.alreadySound = false;
}

// 計算器
lf2.counter = (setting, frame, type, thing) => {

  // 幀等待
  setting.nowwait--;

  if (setting.timeToGo[0] > 0) setting.timeToGo[0]--;

  if (type == 'character') {

    // 按鍵反應表
    setting.keyReaction.forEach((k, i, o) => {
      k[1]--;
      if (k[1] <= 0) o.splice(i, 1);
    });

    // 被打等待
    Object.keys(setting.hitCD).forEach(k => {
      setting.hitCD[k]--;
    });
  }

}

// 製造衍生物
lf2.produceDerivative = (setting, frame, type) => {
  if (lf2.state != 'battleMode' && lf2.state != 'shaoguanMode') return;
  if (type != 'character' && type != 'derivative') return;

  if (frame.opoint && !setting.alreadyProduced) {

    var m = setting.mirror ? -1 : 1;

    lf2.adjunction('derivative', frame.opoint.name, {
      x: setting.x - (frame.center[0] * m) + (frame.opoint.x * m),
      y: setting.y - frame.center[1] + frame.opoint.y,
      team: setting.team,
      mirror: setting.mirror,
      nowframe: frame.opoint.frame,
      nowwait: lf2.derivative[frame.opoint.name].frame[frame.opoint.frame].wait * lf2.waitMagnification,
    });

    setting.alreadyProduced = true;
  }
}


lf2.theFrame = (type, thing, setting, frameName) => {
  return type === 'map' ? thing.component[setting.component][frameName] : thing.frame[frameName];
}

lf2.shadowSystem = (setting, frame, type, thing) => {
  if (lf2.state != 'battleMode' && lf2.state != 'shaoguanMode') return;
  if (type != 'character' && type != 'derivative') return;

  if (!frame.shadowHide && (type == 'character' || type == 'derivative')) {

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
  setting2.y = lf2.mainMap.limit.y + y;
  lf2.draw(setting2, frame2, 'UI', thing);
}

// 某物件跟著某角色
lf2.ElefollowsCharacter = (ele, char, y) => {
  ele.x = char.x;
  ele.y = lf2.mainMap.limit.y + y;
}