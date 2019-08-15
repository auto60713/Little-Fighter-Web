

var scenesIndex = 0;

// ===========================================================
// 入口畫面
// ===========================================================

function SelectedRole() {
  // 畫地圖
  draw2('UI');
}

function Entrance() {
  // 畫地圖
  draw2('UI');
}

function draw2(type) {

  // 每個對象
  window.scenes[type].forEach((thing, index, object) => {

    if (!thing.Setting.destroy) {

      let series;
      switch (type) {
        case 'UI':
          series = [thing.Setting];
          break;
      }

      // 當中的每個元件
      series.forEach(Setting => {

        var frame = thing.frame[Setting.nowframe];

        // 自然換幀
        if (Setting.nowwait <= 0) {
          nextframe(thing, Setting, type, frame.next);
        }

        // 呈現
        show(Setting, frame, type, thing);

        // 計時器
        counter(Setting, frame, type);

      });

    } else {
      // 從群組中移除
      object.splice(index, 1);
    }
  });


}

function battle() {
  // 畫地圖
  draw('map');
  // 畫角色
  draw('character');
  // 畫衍生物
  draw('derivative');
}

// 繪製項目
function draw(type) {

  // 每個對象
  window.scenes[type].forEach((thing, index, object) => {

    if (!thing.Setting.destroy) {

      let series;
      switch (type) {
        case 'map':
          series = thing.arrange;
          break;
        case 'character':
        case 'derivative':
          series = [thing.Setting];
          break;
      }

      // 當中的每個元件 (其實就只有地圖是一對象多元件)
      series.forEach(Setting => {

        var frame = type === 'map' ? thing.component[Setting.component].frame[Setting.nowframe] : thing.frame[Setting.nowframe];

        // 衍生物檢測
        produceDerivative(Setting, frame);

        // 被打偵測
        if (amIBeingBeaten(Setting, frame, thing)) {
          nextframe(thing, Setting, type, 20);
        }
        // 自然換幀
        else if (Setting.nowwait <= 0) {
          nextframe(thing, Setting, type, frame.next);
          skillll(Setting, frame, type, 'hitHold', thing);
        }
        // 技能換幀
        else {
          skillll(Setting, frame, type, 'hit', thing);
        }

        // 物理行為
        physical(Setting, frame, type, thing);

        // 呈現
        show(Setting, frame, type, thing);

        // 計時器
        counter(Setting, frame, type);

        // 攝影機
        camera();
      });

    } else {
      // 從群組中移除
      object.splice(index, 1);
    }
  });


}

// ===========================================================
// 衍生物
// ===========================================================

function produceDerivative(Setting, frame) {
  if (frame.produce && !Setting.alreadyProduced) {

    var direction = Setting.mirror ? -1 : 1;

    adjunction('derivative', frame.produce.name,
      {
        x: Setting.x + (frame.produce.x * direction),
        y: Setting.y + frame.produce.y,
        team: Setting.team,
        mirror: Setting.mirror,
      }
    );

    Setting.alreadyProduced = true;
  }
}

// ===========================================================
// 被打偵測
// ===========================================================

function amIBeingBeaten(Setting, frame, thing) {
  var isHit = false;
  if (frame.bdy) {
    // 問全部的衍生物
    window.scenes.derivative.forEach(det => {
      var detFrame = det.frame[det.Setting.nowframe];
      if (detFrame.itr && (!det.Setting.hitCD[Setting.scenesIndex] || det.Setting.hitCD[Setting.scenesIndex] <= 0)) {
        if (Setting.team !== det.Setting.team) {
          if (Setting.x + frame.bdy.x + frame.bdy.w >= det.Setting.x + detFrame.itr.x
            && Setting.x + frame.bdy.x < det.Setting.x + detFrame.itr.x + detFrame.itr.w
            && Setting.y + frame.bdy.y + frame.bdy.h >= det.Setting.y + detFrame.itr.y
            && Setting.y + frame.bdy.y < det.Setting.y + detFrame.itr.y + detFrame.itr.h) {
            // 這個衍生物下次打我多久後
            det.Setting.hitCD[Setting.scenesIndex] = detFrame.itr.cd;
            const m = Setting.mirror ? -1 : 1;
            thing.frame[20].move = [detFrame.itr.move[0] * m, detFrame.itr.move[1]];
            isHit = true;
          }
        }

      }
    });
  }
  return isHit;
}
