
// 每一幀要做的事
lf2.eachFrame = () => {

  if (!lf2.pause) {

    // 清空畫布
    lf2.ctx.clearRect(0, 0, lf2.canvas.width, lf2.canvas.height);

    // 要運算的圖層
    ['map', 'character', 'derivative', 'UI'].forEach(layer => {
      lf2.arrange(layer);
    });

    // 攝影機
    lf2.camera();
    // 副本模式 是否下一階段
    lf2.enemyFinished();

    if (lf2.gameOver != null) lf2.gameOver--;

  }
  // 60FPS
  setTimeout(lf2.eachFrame, 1000 / 60);
};

lf2.arrange = (type) => {

  // 這個圖層的每個物件
  lf2.scenes[type].forEach(thing => {

    if (!thing.setting.destroy) {

      let series = type == 'map' ? thing.decorate : [thing.setting];

      // 這個物件的每個元素 (其實就只有地圖是多元素)
      series.forEach(setting => {

        // 目前的幀
        var frame = lf2.theFrame(type, thing, setting, setting.nowframe);

        // 物理行為
        lf2.physical(setting, frame, type, thing);

        // 物件位置
        lf2.location(setting, frame, type);

        // 換動作
        lf2.variousChangesFrame(setting, frame, type, thing);

        // 角色跟隨視覺
        lf2.SomeThingsFollowTheRole(setting, frame, type);

        // 秀在畫面上
        lf2.draw(setting, frame, type, thing);

        // 計算器
        lf2.counter(setting, frame, type);

        // 我是機器人
        // lf2.bot(setting, frame, type, thing);

        // 打擊區 受傷區視覺化
        // lf2.triggerView(setting, frame, type);

      });

    }
  });

  // 移除須銷毀的物件
  lf2.scenes[type].forEach((thing, index, object) => {
    if (thing.setting.destroy) object.splice(index, 1);
  });
}
