
// 每一幀要做的事
lf2.eachFrame = () => {

  // 清空畫布
  lf2.ctx.clearRect(0, 0, lf2.canvas.width, lf2.canvas.height);

  // 目前模式
  switch (lf2.state) {
    case 'entrance':
    case 'modeSelection':
    case 'roleSelection':
    case 'mapSelection':
      lf2.thisFrame(['UI']);
      break;
    case 'battleMode':
    case 'shaoguanMode':
      lf2.thisFrame(['map', 'character', 'derivative', 'UI']);
      break;
  }

  // 60FPS
  setTimeout(lf2.eachFrame, 1000 / 60);
};

lf2.thisFrame = (layer) => {
  // 要運算的圖層
  layer.forEach(l => {
    lf2.arrange(l);
  });

  // 攝影機
  lf2.camera();

  if (lf2.gameOver != null) lf2.gameOver--;
}


lf2.arrange = (type) => {

  // 這個圖層的每個物件
  lf2.scenes[type].forEach((thing, index, object) => {

    if (!thing.setting.destroy) {

      let series = type == 'map' ? thing.decorate : [thing.setting];

      // 這個物件的每個元素 (其實就只有地圖是多元素)
      series.forEach(setting => {

        // 目前的幀
        var frame = lf2.theFrame(type, thing, setting, setting.nowframe);

        // 製造衍生物
        lf2.produceDerivative(setting, frame);

        // 換動作
        lf2.variousChangesFrame(setting, frame, type, thing);

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

    }
  });

  // 移除須銷毀的物件
  lf2.scenes[type].forEach((thing, index, object) => {
    if (thing.setting.destroy) object.splice(index, 1);
  });
}
