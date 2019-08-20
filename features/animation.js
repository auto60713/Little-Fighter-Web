
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
  lf2.arrange('UI');
}

// 這一幀的選擇模式
lf2.ThisFrameModeSelection = () => {
  lf2.arrange('UI');
}

// 這一幀的選擇角色
lf2.ThisFrameRoleSelection = () => {
  lf2.arrange('UI');
}

// 這一幀的格鬥模式
lf2.ThisFrameBattleMode = () => {
  lf2.arrange('map');
  lf2.arrange('character');
  lf2.arrange('derivative');
  lf2.arrange('UI');

  lf2.camera();

  if (lf2.gameOver != null) lf2.gameOver--;
}

// 這一幀的闖關模式
lf2.ThisFrameShaoguanMode = () => {
  lf2.arrange('map');
  lf2.arrange('character');
  lf2.arrange('derivative');
  lf2.arrange('UI');

  lf2.camera();

  if (lf2.gameOver >= 0) lf2.gameOver--;
}


lf2.arrange = (type) => {

  // 這個場景的每個物件
  lf2.scenes[type].forEach((thing, index, object) => {

    if (!thing.setting.destroy) {

      let series;
      switch (type) {
        case 'map':
          series = thing.decorate;
          break;
        case 'character':
        case 'derivative':
        case 'UI':
          series = [thing.setting];
          break;
      }

      // 此物件的每個元素 (其實就只有地圖是多元素)
      series.forEach(setting => {

        // 目前的幀
        var frame = type === 'map' ? thing.component[setting.component][setting.nowframe] : thing.frame[setting.nowframe];

        // 製造衍生物
        lf2.produceDerivative(setting, frame);



        // 被打偵測
        if (lf2.amIBeingBeaten(setting, frame, 'character', thing)
          || lf2.amIBeingBeaten(setting, frame, 'derivative', thing)) {
          lf2.adjunction('UI', 'hit', {
            x: setting.x,
            y: setting.y,
          });
          lf2.gotoFrame(thing, setting, type, 'falling');
        }
        // 自然換幀
        else if (setting.nowwait <= 0) {
          lf2.gotoFrame(thing, setting, type, frame.next);
        }
        // 長壓保持動作
        else if (type == 'character' && setting.hitHold != '-' && !setting.keypress[setting.hitHold]) {
          lf2.gotoFrame(thing, setting, type, 999);
        }
        // 技能換幀
        else {
          lf2.skill(setting, frame, type, 'hit', thing);
        }

        // 物理行為
        lf2.physical(setting, frame, type, thing);

        // 秀在畫面上
        lf2.draw(setting, frame, type, thing);

        // 計算器
        lf2.counter(setting, frame, type, thing);

        // 血量
        lf2.HPsystem(setting, frame, type);

        // 我是機器人
        // lf2.bot(setting, frame, type, thing);



      });

    } else {
      // 從場景中移除
      object.splice(index, 1);
    }
  });

}
