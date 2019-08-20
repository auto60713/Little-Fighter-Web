
// 物理行為
lf2.physical = (setting, frame, type, thing) => {

  // 地上無慣性 / 空中有慣性
  if (!setting.inSky) setting.xSpeed = 0;

  lf2.move(setting, frame, type);
  // lf2.walk(setting, frame, type);
  if (type == 'UI') lf2.FixedPosition(setting, frame, type);

  if (type != 'character'
    // 邊界
    || (setting.x >= 0 && setting.xSpeed < 0) || (setting.x < lf2.mainMap.limit.x && setting.xSpeed > 0)) {
    setting.x += setting.xSpeed;
  }
  setting.y += setting.ySpeed;


  // 重力影響與落地
  if (type == 'character') {

    // 滯空偵測
    if (setting.ySpeed < 0) setting.inSky = true;

    // 重力加速度
    if (setting.ySpeed < lf2.maxFallingSpeed && setting.inSky) setting.ySpeed += lf2.gravity;

    // 落地偵測
    if (setting.y > lf2.mainMap.limit.y && setting.inSky && setting.ySpeed > 0) {
      setting.ySpeed = 0;
      setting.xSpeed = 0;
      setting.y = lf2.mainMap.limit.y;
      setting.inSky = false;
      if (frame.falling) {
        lf2.gotoFrame(thing, setting, type, 'lyingDown');
      }
      else {
        lf2.gotoFrame(thing, setting, type, 'standing');
      }

    }

    // 翻轉允許
    if (frame.flip) {
      if (setting.keypress.right) setting.mirror = false;
      else if (setting.keypress.left) setting.mirror = true;
    }
  }


  // 衍生物離場銷毀
  if (type == 'derivative' && (setting.x < -200 || setting.x > lf2.mainMap.limit.x + 200)) setting.destroy = true;
}

// move移動
lf2.move = (setting, frame, type) => {
  if (frame.move) {
    var m = setting.mirror ? -1 : 1;
    // 邊界消速度
    if ((type == 'character' && setting.x >= 0 || setting.x < lf2.mainMap.limit.x) || type == 'derivative') {
      setting.xSpeed = frame.move[0] * m;
    }

    setting.ySpeed = frame.move[1];
  }
}

// 走路移動
lf2.walk = (setting, frame, type) => {
  if (frame.walk) {
    if (setting.keypress.right) {
      setting.xSpeed = setting.walkingSpeed;
    }
    else if (setting.keypress.left) {
      setting.xSpeed = setting.walkingSpeed * -1;
    }
  }
}

// 固定在畫面某處
lf2.FixedPosition = (setting, frame, type) => {

  if (setting.fixedPosition) {
    setting.x = setting.fixedPosition[0] + lf2.cameraPos[0];
    setting.y = setting.fixedPosition[1] + lf2.cameraPos[1];
  }
}