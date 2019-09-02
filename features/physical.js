
// 物理行為
lf2.physical = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['all'], type)) return;

  // 被抓中
  if (setting.catching) {
    var enemy = lf2.findScenesIndex(setting.catching);
    var enemyFrame = enemy.frame[enemy.setting.nowframe];
    setting.mirror = enemy.setting.mirror;
    var m = enemy.setting.mirror ? -1 : 1;
    if (enemyFrame.cpoint) {
      // FIXME: 與衍生物相同 if (setting.catching)相同
      var rect = lf2.whereAmI(enemy.setting, enemyFrame.center, enemyFrame.cpoint);

      // var asd = enemy.setting.mirror ? (enemy.setting.file[enemyFrame.pic[0]].w) : 0;
      lf2.updateLocation(
        setting,
        type,
        [rect.x, rect.y + 40],
        true
      );
      if (enemyFrame.cpoint.move) {
        const m = enemy.setting.mirror ? -1 : 1;
        const m2 = setting.mirror ? -1 : 1;
        lf2.updateSpeed(setting, [enemyFrame.cpoint.move[0], enemyFrame.cpoint.move[1]], m * m2);
      }
    }
    // 鬆開
    else {
      setting.catching = null;
      lf2.gotoFrame(thing, setting, type, 'falling');
    }

  }
  else {

    // 計算物件速度
    lf2.move(setting, frame, type, thing);

    // 更新物件位置
    // 固定在畫面某處 (通常為UI)
    if (setting.fixedPosition) {
      lf2.updateLocation(setting, type, [lf2.cameraPos[0] + setting.fixedPosition[0], lf2.cameraPos[1] + setting.fixedPosition[1]], true)
    }
    // 如果使用瞬間移動
    else if (frame.teleport) {
      var m = setting.mirror ? -1 : 1;
      lf2.updateLocation(setting, type, [lf2.findEnemyX(setting) - (100 * m), setting.y = lf2.mapLimit.y], true)
    }
    // 根據目前速度移動物件
    else {
      lf2.updateLocation(setting, type, [setting.xSpeed, setting.ySpeed], false)
    }

  }
}

// 物件速度計算
lf2.move = (setting, frame, type, thing) => {

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
      if (frame.drop && !setting.inSky) lf2.gotoFrame(thing, setting, type, frame.drop);
    }

    // move加速度
    if (frame.move) {
      var m = setting.mirror ? -1 : 1;
      lf2.updateSpeed(setting, frame.move, m);
    }
  }
  // 滯空偵測
  setting.inSky = lf2.skyDetection(setting, frame, type);
}

// 更新物件速度
lf2.updateSpeed = (setting, move, m) => {
  if (move[0] == 550) setting.xSpeed = 0;
  else if (move[0] != 0) setting.xSpeed = move[0] * m * 0.6;
  if (move[1] == 550) setting.ySpeed = 0;
  else if (move[1] != 0) setting.ySpeed = move[1];
}

// 更新物件位置
lf2.updateLocation = (setting, type, speed, absolute) => {

  if (absolute) {
    setting.x = speed[0];
    setting.y = speed[1];
  } else {
    // 邊界偵測
    if (!lf2.mapDetection(setting, type)) setting.x += speed[0];
    setting.y += speed[1];
  }

}


// 滯空狀態發生變換 且是變成不滯空 (預防跳的瞬間就落地)
lf2.dropDetection = (setting, frame, type) => {
  if ((type == 'character' || frame.physical) && setting.ySpeed >= 0)
    return setting.inSky != lf2.skyDetection(setting, frame, type) && !lf2.skyDetection(setting, frame, type);
  else return false;
}

lf2.skyDetection = (setting, frame, type) => {
  if (type == 'character' || frame.physical) return setting.y < lf2.mapLimit.y;
  else return false;
}





// 邊界偵測
lf2.mapDetection = (setting, type) => {
  var limit = false;
  if (type == 'derivative') {
    if (setting.x < -200 || setting.x > lf2.mapLimit.x + 200) setting.destroy = true;
  }
  else if (type == 'character') {
    if ((setting.x <= 0 && setting.xSpeed < 0) || (setting.x >= lf2.mapLimit.x && setting.xSpeed > 0)) limit = true;
  }

  return limit;
}
