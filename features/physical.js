
// 物理行為
lf2.physical = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character', 'derivative'], type)) return;

  // 被抓中 (實驗功能 未開放)
  if (setting.catching) {
    var enemy = lf2.findScenesIndex(setting.catching);
    var enemyFrame = enemy.frame[enemy.setting.nowframe];
    setting.mirror = enemy.setting.mirror;
    if (enemyFrame.cpoint) {
      // FIXME: 與衍生物相同 if (setting.catching)相同
      var rect = lf2.whereAmI(enemy.setting, enemyFrame.center, enemyFrame.cpoint);

      // var asd = enemy.setting.mirror<0 ? (enemy.setting.file[enemyFrame.pic[0]].w) : 0;
      lf2.updateLocation(
        setting,
        type,
        [rect.x, rect.y + 40],
        true
      );
      if (enemyFrame.cpoint.move) {
        lf2.updateSpeed(setting, [enemyFrame.cpoint.move[0], enemyFrame.cpoint.move[1]], enemy.setting.mirror * setting.mirror);
      }
    }
    // 鬆開
    else {
      setting.catching = null;
      lf2.gotoFrame(thing, setting, type, 'falling');
    }

  }
  else lf2.move(setting, frame, type, thing);
}

// 物件速度計算
lf2.move = (setting, frame, type, thing) => {

  // 物品被丟出時第一幀要先檢查滯空
  if (frame.physical) setting.inSky = lf2.skyDetection(setting, frame, type);

  // 落地偵測 (速度停止)
  if (lf2.dropDetection(setting, frame, type)) {
    lf2.updateSpeed(setting, [550, 550]);
    setting.y = lf2.mapLimit.y;

    // 落地換動作
    if (frame.drop) lf2.gotoFrame(thing, setting, type, frame.drop);
    else lf2.gotoFrame(thing, setting, type, 'standing');
  }
  else {

    if (type == 'character' || frame.physical) {
      // 地板摩擦力
      if (!setting.inSky) setting.xSpeed = setting.xSpeed * 0.7;
      // 重力加速度
      if (setting.inSky && setting.ySpeed < lf2.maxFallingSpeed) setting.ySpeed += lf2.gravity;
      // 落地換動作
      if (frame.drop && !setting.inSky && setting.ySpeed >= 0) lf2.gotoFrame(thing, setting, type, frame.drop);
    }

    // move加速度
    if (frame.move) lf2.updateSpeed(setting, frame.move, setting.mirror);
  }
  // 滯空偵測
  setting.inSky = lf2.skyDetection(setting, frame, type);
}

// 更新物件速度
lf2.updateSpeed = (setting, move, m) => {
  if (move[0] == 550) setting.xSpeed = 0;
  else if (move[0] != 0) setting.xSpeed = move[0] * m;
  if (move[1] == 550) setting.ySpeed = 0;
  else if (move[1] != 0) setting.ySpeed = move[1];
}

// 滯空狀態發生變換 且是變成不滯空 (預防跳的瞬間就落地)
lf2.dropDetection = (setting, frame, type) => {
  if ((type == 'character' || frame.physical) && setting.ySpeed >= 0)
    return setting.inSky != lf2.skyDetection(setting, frame, type) && !lf2.skyDetection(setting, frame, type);
}

lf2.skyDetection = (setting, frame, type) => {
  if (type == 'character' || frame.physical) return setting.y < lf2.mapLimit.y;
}

