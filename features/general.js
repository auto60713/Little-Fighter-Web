
lf2.variousChangesFrame = (setting, frame, type, thing) => {

  // 被打偵測
  if (!setting.catching
    && (lf2.amIBeingBeaten(setting, frame, 'character', thing) || lf2.amIBeingBeaten(setting, frame, 'derivative', thing))
  ) {
    lf2.adjunction('UI', 'hit', {
      x: setting.x,
      y: setting.y,
    });
    lf2.gotoFrame(thing, setting, type, 'falling');
  }
  // 被抓換動作
  else if (setting.catching) {
    var asdasd = lf2.findScenesIndex(setting.catching);
    var twerff = asdasd.frame[asdasd.setting.nowframe];
    lf2.gotoFrame(thing, setting, type, twerff.catching.frame);
  }
  // 技能換動作
  else if (lf2.skill(setting, frame, type, thing)) {
    lf2.gotoFrame(thing, setting, type, lf2.ttttt);
  }
  // 自然換動作
  else if (setting.nowwait <= 0) {
    lf2.gotoFrame(thing, setting, type, frame.next);
  }
  // 長壓保持動作
  else if (type == 'character' && setting.hitHold != '-' && !setting.keypress[setting.hitHold] && frame.hitHold) {
    lf2.gotoFrame(thing, setting, type, 999);
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
}

// 被打偵測
lf2.amIBeingBeaten = (setting, frame, type, thing) => {
  var isHit = false;
  if (frame.bdy) {
    lf2.scenes[type].forEach(det => {
      var detFrame = det.frame[det.setting.nowframe];
      if (detFrame.itr && (!det.setting.hitCD[setting.scenesIndex] || det.setting.hitCD[setting.scenesIndex] <= 0)) {
        if (setting.team !== det.setting.team) {

          // 被打最右邊 >= 打人最左邊
          if (setting.x + frame.bdy.x + frame.bdy.w >= det.setting.x + detFrame.itr.x
            // 被打最左邊 < 打人最右邊
            && setting.x + frame.bdy.x < det.setting.x + detFrame.itr.x + detFrame.itr.w
            // 被打最下邊 >= 打人最上邊
            && setting.y + frame.bdy.y + frame.bdy.h >= det.setting.y + detFrame.itr.y
            // 被打最上邊 < 打人最下邊
            && setting.y + frame.bdy.y < det.setting.y + detFrame.itr.y + detFrame.itr.h) {
            // 被打的中間
            var sc = setting.x + frame.bdy.x + (frame.bdy.w / 2);
            // 打人的中間
            var dc = det.setting.x + detFrame.itr.x + (detFrame.itr.w / 2);
            // 下次打我多久後
            det.setting.hitCD[setting.scenesIndex] = detFrame.itr.cd;
            // 打擊換動作
            if (detFrame.itr.next) lf2.gotoFrame(det, det.setting, type, detFrame.itr.next);
            // 抓攻擊
            if (detFrame.itr.catching) setting.catching = det.setting.scenesIndex;
            // 一般攻擊
            else {
              let m = det.setting.mirror ? -1 : 1;
              if (detFrame.itr.symmetry && sc * m < dc * m) {
                m = det.setting.mirror ? 1 : -1;
              }
              else {
                m = det.setting.mirror ? -1 : 1;
              }
              const m2 = setting.mirror ? -1 : 1;
              thing.frame['falling'].move = [detFrame.itr.move[0] * m * m2, detFrame.itr.move[1]];
              isHit = true;
            }
            setting.nowHP -= detFrame.itr.injury;
          }

        }
      }
    });
  }
  return isHit;
}



// 血量系統
lf2.HPsystem = (setting, frame, type) => {
  if (lf2.mainCharacter) {
    var pp = lf2.mainCharacter.nowHP / lf2.mainCharacter.HP;
    if (pp <= 0) pp = -1;
    lf2.mainHpbar2.file['hpbar2'].w = 820 * pp;
  }
  else {

  }

  if (setting.nowHP <= 0 && lf2.gameOver == null) {

    lf2.adjunction('UI', 'ko');
    lf2.gameOver = 180;
  }

}

// 計算器
lf2.counter = (setting, frame, type, thing) => {

  // 幀等待
  setting.nowwait--;

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
lf2.produceDerivative = (setting, frame) => {
  if (frame.produce && !setting.alreadyProduced) {

    var direction = setting.mirror ? -1 : 1;

    lf2.adjunction('derivative', frame.produce.name, {
      x: setting.x + (frame.produce.x * direction),
      y: setting.y + frame.produce.y,
      team: setting.team,
      mirror: setting.mirror,
      nowframe: frame.produce.frame,
      nowwait: lf2.derivative[frame.produce.name].frame[frame.produce.frame].wait * lf2.waitMagnification,
    });

    setting.alreadyProduced = true;
  }
}


lf2.theFrame = (type, thing, setting, frameName) => {
  return type === 'map' ? thing.component[setting.component][frameName] : thing.frame[frameName];
}


lf2.shadowSystem = (setting, frame, type, thing) => {
  if (!frame.shadowHide && (type == 'character' || type == 'derivative')) {

    var setting2 = lf2.UI.shadow.setting;
    var frame2 = lf2.UI.shadow.frame.standing;
    var type2 = 'UI';

    setting2.x = setting.x;
    setting2.y = lf2.mainMap.limit.y;

    lf2.draw(setting2, frame2, type2, thing);
  }
}


