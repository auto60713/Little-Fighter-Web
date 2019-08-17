
// 被打偵測
lf2.amIBeingBeaten = (Setting, frame, type, thing) => {
  var isHit = false;
  if (frame.bdy) {
    lf2.scenes[type].forEach(det => {
      var detFrame = det.frame[det.Setting.nowframe];
      if (detFrame.itr && (!det.Setting.hitCD[Setting.scenesIndex] || det.Setting.hitCD[Setting.scenesIndex] <= 0)) {
        if (Setting.team !== det.Setting.team) {
          if (Setting.x + frame.bdy.x + frame.bdy.w >= det.Setting.x + detFrame.itr.x
            && Setting.x + frame.bdy.x < det.Setting.x + detFrame.itr.x + detFrame.itr.w
            && Setting.y + frame.bdy.y + frame.bdy.h >= det.Setting.y + detFrame.itr.y
            && Setting.y + frame.bdy.y < det.Setting.y + detFrame.itr.y + detFrame.itr.h) {
            // 下次打我多久後
            det.Setting.hitCD[Setting.scenesIndex] = detFrame.itr.cd;
            const m = det.Setting.mirror ? -1 : 1;
            const m2 = Setting.mirror ? -1 : 1;
            Setting.nowHP -= detFrame.itr.injury;
            thing.frame['falling'].move = [detFrame.itr.move[0] * m * m2, detFrame.itr.move[1]];
            isHit = true;
          }
        }
      }
    });
  }
  return isHit;
}

// 技能
lf2.skill = (Setting, frame, type, hitset, thing) => {

  // 跳出換幀(技能)
  var breakFlag2 = false;

  if (frame[hitset]) {
    var hit = Object.keys(frame[hitset]);
    if (hit.length > 0) {
      hit.forEach(key => {

        if (Setting.keypress[key] && !breakFlag2) {
          lf2.nextframe(thing, Setting, type, frame[hitset][key]);
          breakFlag2 = true;
        }

      });
    }
  }

}

// 物件換影格
lf2.nextframe = (thing, Setting, type, next) => {
  if (type !== 'map') {
    if (next == 999) {
      if (Setting.nowHP <= 0) next = 'lyingDown';
      else if (Setting.inSky) next = 'jumping';
      else next = 'standing';
    }
    else if (next == 1000) {
      Setting.destroy = true;
      next = 'standing';
    }
    Setting.nowframe = next;
    Setting.nowwait = thing.frame[Setting.nowframe].wait * lf2.waitMagnification;
    Setting.alreadyProduced = false;
  }
}

// 血量系統
lf2.HPsystem = (Setting, frame, type) => {
  if (lf2.mainCharacter) {
    var pp = lf2.mainCharacter.nowHP / lf2.mainCharacter.HP;
    if (pp <= 0) pp = -1;
    lf2.mainHpbar2.file['hpbar2'].w = 820 * pp;
  }
  else {

  }

  if (Setting.nowHP <= 0 && !lf2.gameOver) {

    lf2.adjunction('UI', 'ko',
      {
        x: 400,
        y: 300,
        originalPosition: [400, 300],
      }
    );
    lf2.gameOver = true;
  }

}

// 計算器
lf2.counter = (Setting, frame, type) => {

  // 幀等待
  Setting.nowwait--;

  // 被打等待
  if (Setting.hitCD) Object.keys(Setting.hitCD).forEach(k => {
    Setting.hitCD[k]--;
  });

  // 翻轉允許
  if (frame.flip) {
    if (Setting.keypress.right) {
      Setting.mirror = false;
    }
    else if (Setting.keypress.left) {
      Setting.mirror = true;
    }
  }

  // 銷毀偵測
  if (type == 'derivative' && (Setting.x < -200 || Setting.x > lf2.mainMap.limit.x + 200)) Setting.destroy = true;
}
