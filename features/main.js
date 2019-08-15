
// 
lf2.SelectedRole = () => {
  // 畫地圖
  lf2.draw2('UI');
}

// 
lf2.Entrance = () => {
  // 畫地圖
  lf2.draw2('UI');
}

// 
lf2.draw2 = (type) => {

  // 每個對象
  lf2.scenes[type].forEach((thing, index, object) => {

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
          lf2.nextframe(thing, Setting, type, frame.next);
        }

        // 呈現
        lf2.show(Setting, frame, type, thing);

        // 計時器
        lf2.counter(Setting, frame, type);

      });

    } else {
      // 從群組中移除
      object.splice(index, 1);
    }
  });


}

// 
lf2.battle = () => {
  // 畫地圖
  lf2.draw('map');
  // 畫角色
  lf2.draw('character');
  // 畫衍生物
  lf2.draw('derivative');
}

// 繪製項目
lf2.draw = (type) => {

  // 每個對象
  lf2.scenes[type].forEach((thing, index, object) => {

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
        lf2.produceDerivative(Setting, frame);

        // 被打偵測
        if (lf2.amIBeingBeaten(Setting, frame, thing)) {
          lf2.nextframe(thing, Setting, type, 20);
        }
        // 自然換幀
        else if (Setting.nowwait <= 0) {
          lf2.nextframe(thing, Setting, type, frame.next);
          lf2.skillll(Setting, frame, type, 'hitHold', thing);
        }
        // 技能換幀
        else {
          lf2.skillll(Setting, frame, type, 'hit', thing);
        }

        // 物理行為
        lf2.physical(Setting, frame, type, thing);

        // 呈現
        lf2.show(Setting, frame, type, thing);

        // 計時器
        lf2.counter(Setting, frame, type);

        // 攝影機
        lf2.camera();
      });

    } else {
      // 從群組中移除
      object.splice(index, 1);
    }
  });


}

// 衍生物
lf2.produceDerivative = (Setting, frame) => {
  if (frame.produce && !Setting.alreadyProduced) {

    var direction = Setting.mirror ? -1 : 1;

    lf2.adjunction('derivative', frame.produce.name,
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

// 被打偵測
lf2.amIBeingBeaten = (Setting, frame, thing) => {
  var isHit = false;
  if (frame.bdy) {
    // 問全部的衍生物
    lf2.scenes.derivative.forEach(det => {
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

// 技能
lf2.skillll = (Setting, frame, type, hhhh, thing) => {

  // 跳出換幀(技能)
  var breakFlag2 = false;

  if (frame[hhhh]) {
    var hit = Object.keys(frame[hhhh]);
    if (hit.length > 0) {
      hit.forEach(key => {

        if (Setting.keypress[key] && !breakFlag2) {
          lf2.nextframe(thing, Setting, type, frame[hhhh][key]);
          breakFlag2 = true;
        }

      });
    }
  }

}

