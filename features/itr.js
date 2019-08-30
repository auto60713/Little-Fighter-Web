
// 被打偵測
lf2.amIBeingBeaten = (setting, frame, type, thing) => {
  var effect = null;
  if (frame.bdy) {
    try {
      ['character', 'derivative'].forEach(dettype => {
        lf2.scenes[dettype].forEach(det => {
          var detFrame = det.frame[det.setting.nowframe];

          if (detFrame.itr && (!det.setting.hitCD[setting.scenesIndex] || det.setting.hitCD[setting.scenesIndex] <= 0)) {
            // 不同隊 而且 物件不是打同隊
            if ((setting.team !== det.setting.team && detFrame.itr.team != 'my')
              // 同隊 但是 物件打同隊
              || (setting.team === det.setting.team && detFrame.itr.team == 'my')) {

              // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
              var rect1 = lf2.whereAmI(setting, frame.center, frame.bdy);
              var rect2 = lf2.whereAmI(det.setting, detFrame.center, detFrame.itr);

              if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x &&
                rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y) {

                // 被打的中間
                var sc = setting.x + frame.bdy.x + (frame.bdy.w / 2);
                // 打人的中間
                var dc = det.setting.x + detFrame.itr.x + (detFrame.itr.w / 2);
                // 下次打我多久後
                // FIXME: vrest arest未來要做出區分
                var cd = detFrame.itr.vrest || detFrame.itr.arest;
                det.setting.hitCD[setting.scenesIndex] = cd;
                // 打擊換動作
                if (detFrame.itr.next) lf2.gotoFrame(det, det.setting, dettype, detFrame.itr.next);
                // 抓攻擊
                if (type == 'character' && detFrame.itr.catching) setting.catching = det.setting.scenesIndex;
                // 一般攻擊
                else {

                  let m = det.setting.mirror ? -1 : 1;
                  if (detFrame.itr.symmetry && sc * m < dc * m) m = m * -1

                  if (type == 'character') {
                    effect = detFrame.itr.effect;
                    lf2.asdasdasd(setting, detFrame.itr.move, m);
                  }
                  else effect = 'falling';

                }
                setting.nowHP -= detFrame.itr.injury;
                if (setting.nowHP > setting.HP) setting.nowHP = setting.HP;
                throw false;
              }

            }
          }
        });
      });
    } catch (e) { }
  }
  return effect;
}


// 打擊效果
lf2.strikeEffect = (type, thing, setting, effect) => {
  var sound = null, gotoFrame = null, UI = null;

  switch (effect) {
    case 'injured':
      sound = '001.wav';
      gotoFrame = 'injured';
      UI = 'hit';
      break;
    case 'falling':
      sound = '006.wav';
      gotoFrame = 'falling';
      UI = 'hit';
      break;
    case 'heal':
      sound = '049.wav';
      break;

  }

  lf2.sound(sound);
  if (gotoFrame) lf2.gotoFrame(thing, setting, type, gotoFrame);
  if (UI) lf2.adjunction('UI', UI, {
    x: setting.x,
    y: setting.y,
  });
}


// 血量系統
lf2.HPsystem = (setting, frame, type) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character'], type)) return;

  if (setting.scenesIndex == 1) {
    var pp = setting.nowHP / setting.HP;
    if (pp <= 0) pp = -1;
    lf2.mainHpbar2.file['hpbar2'].w = 820 * pp;
  }
  else if (setting.scenesIndex == 2) {
    var pp = setting.nowHP / setting.HP;
    if (pp <= 0) pp = -1;
    lf2.ElefollowsCharacter(lf2.otherhpbar, setting, 20);
    lf2.ElefollowsCharacter(lf2.otherhpbar2, setting, 20);
    lf2.otherhpbar2.file['otherhpbar2'].w = 70 * pp;
  }


  if (setting.nowHP <= 0 && lf2.gameOver == null) {
    lf2.adjunction('UI', 'ko');
    lf2.gameOver = 180;
  }

}



// 範圍視覺化
lf2.triggerView = (setting, frame, type) => {
  if (!lf2.passOnly(['battleMode'], ['character', 'derivative'], type)) return;

  if (frame.bdy) {
    var rect = lf2.whereAmI(setting, frame.center, frame.bdy);
    lf2.ctx.globalAlpha = 0.6;
    lf2.ctx.fillStyle = "#49B6E1";
    lf2.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    lf2.ctx.globalAlpha = 1.0;
  }

  if (frame.itr) {
    var rect = lf2.whereAmI(setting, frame.center, frame.itr);
    lf2.ctx.globalAlpha = 0.6;
    lf2.ctx.fillStyle = "#E1499B";
    lf2.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    lf2.ctx.globalAlpha = 1.0;
  }

}

// 我到底在哪
lf2.whereAmI = (setting, center, item) => {
  var m = setting.mirror ? -1 : 1;
  var anchorPoint = setting.mirror ? item.w : 0;
  return {
    x: setting.x + ((item.x - center[0]) * m) - anchorPoint,
    y: setting.y + item.y - center[1],
    w: item.w,
    h: item.h,
  };
}