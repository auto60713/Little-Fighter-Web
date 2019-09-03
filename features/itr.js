
// 被打偵測
lf2.collisionDetection = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character', 'derivative'], type)) return;

  var effect = null;
  if (frame.bdy && !setting.catching) {
    try {
      ['character', 'derivative'].forEach(dettype => {
        lf2.scenes[dettype].forEach(det => {
          var detFrame = det.frame[det.setting.nowframe];

          if (detFrame.itr && (!det.setting.strikeCD[setting.scenesIndex] || det.setting.strikeCD[setting.scenesIndex] <= 0)) {
            // 不同隊 而且 物件不是打同隊
            if ((setting.team !== det.setting.team && detFrame.itr.team != 'my')
              // 同隊 但是 物件打同隊
              || (setting.team === det.setting.team && detFrame.itr.team == 'my')) {

              // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
              var rect1 = lf2.whereAmI(setting, frame.center, frame.bdy);
              var rect2 = lf2.whereAmI(det.setting, detFrame.center, detFrame.itr);

              if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x &&
                rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y) {

                // 下次打我多久後
                // FIXME: vrest arest未來要做出區分
                var cd = detFrame.itr.vrest || detFrame.itr.arest || 0;
                det.setting.strikeCD[setting.scenesIndex] = cd;

                // 打到人後換動作
                if (detFrame.itr.next) lf2.gotoFrame(det, det.setting, dettype, detFrame.itr.next);

                // 抓攻擊
                if (type == 'character' && detFrame.itr.catching) setting.catching = det.setting.scenesIndex;
                // 一般攻擊
                else {

                  // 對稱擊飛
                  let m3 = (detFrame.itr.symmetry && rect1.x + (rect1.w / 2) < rect2.x + (rect2.w / 2)) ? -1 : 1;
                  let m2 = det.setting.mirror ? -1 : 1;

                  if (type == 'character') {
                    effect = detFrame.itr.effect;
                    lf2.updateSpeed(setting, detFrame.itr.move, m2 * m3);
                  }
                  else effect = 'falling';

                }
                setting.nowhp -= detFrame.itr.injury;
                if (setting.nowhp > setting.hp) setting.nowhp = setting.hp;
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

