
// 物理行為
lf2.physical = (setting, frame, type, thing) => {

  // 固定在畫面某處 (通常為UI)
  if (setting.fixedPosition) {

    setting.x = lf2.cameraPos[0] + setting.fixedPosition[0];
    setting.y = lf2.cameraPos[1] + setting.fixedPosition[1];
  }
  // 被抓中
  else if (setting.catching) {
    var enemy = lf2.findScenesIndex(setting.catching);
    var enemyFrame = enemy.frame[enemy.setting.nowframe];
    setting.mirror = enemy.setting.mirror;
    var m = enemy.setting.mirror ? -1 : 1;
    if (enemyFrame.cpoint) {
      // FIXME: 與衍生物相同 if (setting.catching)相同
      var asd = enemy.setting.mirror ? (enemy.setting.file[enemyFrame.pic[0]].w) : 0;
      setting.x = enemy.setting.x - enemyFrame.center[0] + (enemyFrame.cpoint.x * m) + asd;
      setting.y = enemy.setting.y - (enemyFrame.center[1] / 2) + enemyFrame.cpoint.y;
      if (enemyFrame.cpoint.move) {
        const m = enemy.setting.mirror ? -1 : 1;
        const m2 = setting.mirror ? -1 : 1;
        thing.frame['falling'].move = [enemyFrame.cpoint.move[0] * m * m2, enemyFrame.cpoint.move[1]];
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
    lf2.move(setting, frame, type);

    // 根據目前速度移動物件
    // 邊界偵測
    if (!lf2.mapDetection(setting, type)) {
      setting.x += setting.xSpeed;
    }
    setting.y += setting.ySpeed;

    // 重力影響與落地
    if (type == 'character' || frame.physical) {

      // 重力加速度
      if (setting.ySpeed < lf2.maxFallingSpeed && setting.inSky) setting.ySpeed += lf2.gravity;

      // 瞬間移動
      if (frame.teleport) {
        var m = setting.mirror ? -1 : 1;
        setting.x = lf2.findEnemyX(setting) - (100 * m);
        setting.y = setting.y = lf2.mainMap.limit.y;
      }

      // 落地偵測
      if (lf2.dropDetection(setting)) {
        setting.ySpeed = 0;
        setting.xSpeed = 0;
        setting.y = lf2.mainMap.limit.y;
        lf2.gotoFrame(thing, setting, type, 'standing');
      }

      // 滯空偵測
      setting.inSky = lf2.skyDetection(setting);

      // 落地換動作
      if (frame.drop && (setting.ySpeed >= 0 && setting.y == lf2.mainMap.limit.y)) lf2.gotoFrame(thing, setting, type, frame.drop);

      // 翻轉允許
      if (frame.flip) {
        if (setting.keypress['R']) setting.mirror = false;
        else if (setting.keypress['L']) setting.mirror = true;
      }
    }
  }
}


lf2.move = (setting, frame, type) => {
  // 地上無慣性 / 空中有慣性
  if (type == 'character' && !setting.inSky) {
    setting.xSpeed = setting.xSpeed * 0.7;
  }
  if (frame.move) {
    var m = setting.mirror ? -1 : 1;
    lf2.asdasdasd(setting, frame.move, m);
  }
}

lf2.dropDetection = (setting, frame, type) => {
  return setting.inSky != lf2.skyDetection(setting) && !lf2.skyDetection(setting);
}

lf2.skyDetection = (setting, frame, type) => {
  return setting.y < lf2.mainMap.limit.y;
}

lf2.asdasdasd = (setting, move, m) => {
  if (move[0] == 550) setting.xSpeed = 0;
  else if (move[0] != 0) setting.xSpeed = move[0] * m * 0.6;
  if (move[1] == 550) setting.ySpeed = 0;
  else if (move[1] != 0) setting.ySpeed = move[1];
}

lf2.mapDetection = (setting, type) => {
  var limit = false;
  if (type == 'derivative') {
    if (setting.x < -200 || setting.x > lf2.mainMap.limit.x + 200) setting.destroy = true;
  }
  else if (type == 'character') {
    if ((setting.x <= 0 && setting.xSpeed < 0) || (setting.x >= lf2.mainMap.limit.x && setting.xSpeed > 0)) limit = true;
  }

  return limit;
}

// 找第一個敵人
lf2.findEnemyX = (setting, frame, type) => {
  var someone = lf2.scenes['character'];
  for (let i = 0; i < someone.length; i++) {
    if (someone[i].setting.team != setting.team) return someone[i].setting.x;
  }
}

// 找抓我的人
lf2.findScenesIndex = (index) => {
  var someone = lf2.scenes['character'];
  for (let i = 0; i < someone.length; i++) {
    if (someone[i].setting.scenesIndex == index) return someone[i];
  }
}