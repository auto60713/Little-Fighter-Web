
// 物理行為
lf2.physical = (Setting, frame, type, thing) => {

  // 地上無慣性 / 空中有慣性
  if (!Setting.inSky) Setting.xSpeed = 0;

  lf2.move(Setting, frame, type);
  lf2.walk(Setting, frame, type);

  if (type == 'derivative') Setting.x += Setting.xSpeed;
  if (type == 'character') {
    // 邊界
    if ((Setting.x >= 0 && Setting.xSpeed < 0) || (Setting.x < lf2.mainMap.limit.x && Setting.xSpeed > 0)) {
      Setting.x += Setting.xSpeed;
    }
  }

  // 重力影響與落地
  if (type == 'character') {

    // 滯空偵測
    if (Setting.ySpeed < 0) Setting.inSky = true;

    // 自由落體
    Setting.y += Setting.ySpeed;
    // 重力加速度
    if (Setting.ySpeed < lf2.ySpeedMax && Setting.inSky) Setting.ySpeed += lf2.gravity;

    // 落地偵測
    if (Setting.y > lf2.mainMap.limit.y && Setting.inSky) {
      Setting.ySpeed = 0;
      Setting.xSpeed = 0;
      Setting.inSky = false;
      lf2.nextframe(thing, Setting, type, 0)
    }
  }
}

// move移動
lf2.move = (Setting, frame, type) => {
  if (frame.move) {
    var m = Setting.mirror ? -1 : 1;
    // 邊界消速度
    if ((type == 'character' && Setting.x >= 0 || Setting.x < lf2.mainMap.limit.x) || type == 'derivative') {
      Setting.xSpeed = frame.move[0] * m;
    }

    Setting.ySpeed = frame.move[1];
  }
}

// 走路移動
lf2.walk = (Setting, frame, type) => {
  if (frame.walk) {
    if (Setting.keypress.right) {
      Setting.xSpeed = Setting.walkingSpeed;
    }
    else if (Setting.keypress.left) {
      Setting.xSpeed = Setting.walkingSpeed * -1;
    }
  }
}