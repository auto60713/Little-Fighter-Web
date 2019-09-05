
// 被打偵測
lf2.collisionDetection = (setting, frame, type) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character', 'derivative'], type)) return;

  var effect = null;
  if (frame.bdy && !setting.catching) {
    try {
      ['character', 'derivative'].forEach(dettype => {
        lf2.scenes[dettype].forEach(det => {
          var detFrame = det.frame[det.setting.nowframe];

          if (detFrame.itr && !det.setting.strikeCD[setting.scenesIndex]) {
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
                var cd = detFrame.itr.vrest || detFrame.itr.arest;
                det.setting.strikeCD[setting.scenesIndex] = cd;

                // 打到人後換動作
                if (detFrame.itr.next) lf2.gotoFrame(det, det.setting, dettype, detFrame.itr.next);

                // 抓攻擊
                if (type == 'character' && detFrame.itr.catching) setting.catching = det.setting.scenesIndex;
                // 一般攻擊
                else {
                  // 對稱擊飛
                  let m = (detFrame.itr.symmetry && rect1.x + (rect1.w / 2) < rect2.x + (rect2.w / 2)) ? -1 : 1;

                  effect = detFrame.itr.effect;
                  lf2.updateSpeed(setting, detFrame.itr.move, det.setting.mirror * m);
                }
                // 血量變化
                setting.nowhp -= detFrame.itr.injury;
                if (setting.nowhp > setting.hp) setting.nowhp = setting.hp;
                else if (setting.nowhp < 0) setting.nowhp = 0;
                throw effect;
              }

            }
          }
        });
      });
    } catch (effect) { return effect; }
  }
}

// 打擊效果
lf2.strikeEffect = (type, thing, setting, effect) => {
  switch (effect) {
    case 'injured':
      lf2.sound('001.wav');
      lf2.gotoFrame(thing, setting, type, 'injured');
      lf2.adjunction('UI', 'hit', { x: setting.x, y: setting.y });
      break;
    case 'falling':
      lf2.sound('006.wav');
      lf2.gotoFrame(thing, setting, type, 'falling');
      lf2.adjunction('UI', 'hit', { x: setting.x, y: setting.y });
      break;
    case 'heal':
      lf2.sound('049.wav');
      break;
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

