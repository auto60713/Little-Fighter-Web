
// 物理行為
lf2.physical = (setting, frame, type, thing) => {

  // 計算物件速度
  lf2.move(setting, frame, type);

  // 根據目前速度移動物件
  setting.x += setting.xSpeed;
  setting.y += setting.ySpeed;

  // 固定位置
  lf2.fixedPosition(setting, frame, type);

  // 重力影響與落地
  if (type == 'character') {

    // 重力加速度
    if (setting.ySpeed < lf2.maxFallingSpeed && setting.inSky) setting.ySpeed += lf2.gravity;

    // 落地偵測
    if (lf2.dropDetection(setting)) {
      setting.ySpeed = 0;
      setting.xSpeed = 0;
      setting.y = lf2.mainMap.limit.y;
      lf2.gotoFrame(thing, setting, type, frame.falling ? 'lyingDown' : 'standing');
    }

    // 滯空偵測
    setting.inSky = lf2.skyDetection(setting);

    if (frame.falling && !setting.inSky) lf2.gotoFrame(thing, setting, type, 'lyingDown');

    // 翻轉允許
    if (frame.flip) {
      if (setting.keypress.right) setting.mirror = false;
      else if (setting.keypress.left) setting.mirror = true;
    }
  }

}


lf2.move = (setting, frame, type) => {

  // 地上無慣性 / 空中有慣性
  if (type == 'character' && !setting.inSky) setting.xSpeed = 0;

  if (frame.move) {
    var m = setting.mirror ? -1 : 1;

    // 邊界偵測
    if (!lf2.mapDetection(setting, type))
      setting.xSpeed = frame.move[0] * m;
    setting.ySpeed = frame.move[1];
  }

}

lf2.dropDetection = (setting, frame, type) => {
  return setting.inSky != lf2.skyDetection(setting) && !lf2.skyDetection(setting);
}

lf2.skyDetection = (setting, frame, type) => {
  return setting.y < lf2.mainMap.limit.y;
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


// 固定在畫面某處
lf2.fixedPosition = (setting, frame, type) => {

  if (setting.fixedPosition) {
    setting.x = setting.fixedPosition[0] + lf2.cameraPos[0];
    setting.y = setting.fixedPosition[1] + lf2.cameraPos[1];
  }
}