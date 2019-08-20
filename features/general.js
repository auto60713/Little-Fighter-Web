
lf2.variousChangesFrame = (setting, frame, type, thing) => {

  // 被打偵測
  if (lf2.amIBeingBeaten(setting, frame, 'character', thing)
    || lf2.amIBeingBeaten(setting, frame, 'derivative', thing)) {
    lf2.adjunction('UI', 'hit', {
      x: setting.x,
      y: setting.y,
    });
    lf2.gotoFrame(thing, setting, type, 'falling');
  }
  // 技能換幀
  else if (lf2.skill2(setting, frame, type, thing)) {
    lf2.skill(setting, frame, type, thing);
  }
  // 自然換幀
  else if (setting.nowwait <= 0) {
    lf2.gotoFrame(thing, setting, type, frame.next);
  }
  // 長壓保持動作
  else if (setting.hitHold != '-' && !setting.keypress[setting.hitHold]) {
    lf2.gotoFrame(thing, setting, type, 999);
  }

}

// 技能
lf2.skill = (setting, frame, type, thing) => {
  if (type == 'character' && frame.hit) {
    // 技能組
    var hit = Object.keys(frame.hit);

    dance: for (let i = 0; i < hit.length; i++) {
      var next = frame.hit[hit[i]];
      var nextFrame = lf2.theFrame(type, thing, setting, next);

      // 正在按
      if (setting.keypress[hit[i]]) {
        if (nextFrame.hitHold) setting.hitHold = hit[i];
        lf2.gotoFrame(thing, setting, type, next);
        break dance;
      }
      // 在反應表裡面有組合
      if (setting.keyReaction.length >= 2) {
        for (let y = 0; y < setting.keyReaction.length - 1; y++) {
          var key1 = setting.keyReaction[y][0];
          var key2 = setting.keyReaction[y + 1][0];
          if (key1 + key2 == hit[i]) {
            if (lf2.theFrame(type, thing, setting, next).hitHold && setting.keypress[key2]) {
              if (nextFrame.hitHold) setting.hitHold = key2;
              lf2.gotoFrame(thing, setting, type, next);
              break dance;
            }

          }
        }
      }
    }
  }
}

lf2.skill2 = (setting, frame, type, thing) => {
  var ddd = false;
  if (type == 'character' && frame.hit) {
    // 技能組
    var hit = Object.keys(frame.hit);

    dance: for (let i = 0; i < hit.length; i++) {
      var next = frame.hit[hit[i]];
      var nextFrame = lf2.theFrame(type, thing, setting, next);

      // 正在按
      if (setting.keypress[hit[i]]) {
        if (nextFrame.hitHold) setting.hitHold = hit[i];
        ddd = next;
        break dance;
      }
      // 在反應表裡面有組合
      if (setting.keyReaction.length >= 2) {
        for (let y = 0; y < setting.keyReaction.length - 1; y++) {
          var key1 = setting.keyReaction[y][0];
          var key2 = setting.keyReaction[y + 1][0];
          if (key1 + key2 == hit[i]) {
            if (lf2.theFrame(type, thing, setting, next).hitHold && setting.keypress[key2]) {
              if (nextFrame.hitHold) setting.hitHold = key2;
              ddd = next;
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
          if (setting.x + frame.bdy.x + frame.bdy.w >= det.setting.x + detFrame.itr.x
            && setting.x + frame.bdy.x < det.setting.x + detFrame.itr.x + detFrame.itr.w
            && setting.y + frame.bdy.y + frame.bdy.h >= det.setting.y + detFrame.itr.y
            && setting.y + frame.bdy.y < det.setting.y + detFrame.itr.y + detFrame.itr.h) {
            // 下次打我多久後
            det.setting.hitCD[setting.scenesIndex] = detFrame.itr.cd;
            const m = det.setting.mirror ? -1 : 1;
            const m2 = setting.mirror ? -1 : 1;
            setting.nowHP -= detFrame.itr.injury;
            thing.frame['falling'].move = [detFrame.itr.move[0] * m * m2, detFrame.itr.move[1]];
            isHit = true;
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

    lf2.adjunction('UI', 'ko',
      {
        fixedPosition: [400, 300],
      }
    );
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
    });

    setting.alreadyProduced = true;
  }
}


lf2.theFrame = (type, thing, setting, frameName) => {
  var frame = type === 'map' ? thing.component[setting.component][frameName] : thing.frame[frameName];
  return frame;
}
