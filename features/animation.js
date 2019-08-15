
// 每一幀要做的事
lf2.eachFrame = () => {

  // 清空畫布
  lf2.ctx.clearRect(0, 0, lf2.canvas.width, lf2.canvas.height);

  // 目前模式
  switch (lf2.state) {
    // 入口畫面
    case 'entrance': lf2.ThisFrameEntrance(); break;
    // 選擇模式
    case 'modeSelection': lf2.ThisFrameModeSelection(); break;
    // 選擇角色
    case 'roleSelection': lf2.ThisFrameRoleSelection(); break;
    // 格鬥模式
    case 'battleMode': lf2.ThisFrameBattleMode(); break;
    // 闖關模式
    case 'shaoguanMode': lf2.ThisFrameShaoguanMode(); break;
  }

  // 60FPS
  setTimeout(lf2.eachFrame, 1000 / 60);
};

// 這一幀的入口畫面
lf2.ThisFrameEntrance = () => {
  // 畫介面
  lf2.arrange2('UI');
}

// 這一幀的選擇角色
lf2.ThisFrameRoleSelection = () => {
  // 畫介面
  lf2.arrange2('UI');
}

// 這一幀的格鬥模式
lf2.ThisFrameBattleMode = () => {
  // 畫地圖
  lf2.arrange('map');
  // 畫角色
  lf2.arrange('character');
  // 畫衍生物
  lf2.arrange('derivative');
  // 畫介面
  lf2.arrange('UI');
}

// 特地畫UI
lf2.arrange2 = (type) => {

  // 這個場景的每個物件
  lf2.scenes[type].forEach((thing, index, object) => {

    if (!thing.Setting.destroy) {

      let series;
      switch (type) {
        case 'UI':
          series = [thing.Setting];
          break;
      }

      series.forEach(Setting => {

        // 目前的幀
        var frame = thing.frame[Setting.nowframe];

        // 等待到了 自然換幀
        if (Setting.nowwait <= 0) {
          lf2.nextframe(thing, Setting, type, frame.next);
        }

        // 秀在畫面上
        lf2.draw(Setting, frame, type, thing);

        // 計算器
        lf2.counter(Setting, frame, type);

      });

    } else {
      // 從場景中移除
      object.splice(index, 1);
    }
  });

}

// 什麼都畫
lf2.arrange = (type) => {

  // 這個場景的每個物件
  lf2.scenes[type].forEach((thing, index, object) => {

    if (!thing.Setting.destroy) {

      let series;
      switch (type) {
        case 'map':
          series = thing.decorate;
          break;
        case 'character':
        case 'derivative':
          series = [thing.Setting];
          break;
      }

      // 此物件的每個元素 (其實就只有地圖是多元素)
      series.forEach(Setting => {

        // 目前的幀
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

        // 秀在畫面上
        lf2.draw(Setting, frame, type, thing);

        // 計算器
        lf2.counter(Setting, frame, type);

        // 攝影機
        lf2.camera();
      });

    } else {
      // 從場景中移除
      object.splice(index, 1);
    }
  });

}
