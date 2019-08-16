
// 將物件畫在上canvas上
lf2.draw = (Setting, frame, type, thing) => {
  var file = thing.Setting.file[frame.pic[0]];
  // FIXME: 有計畫將name拿掉 直接是類別名稱
  var name = thing.Setting.name/*.toLowerCase()*/;
  var image = lf2.imageCenter[name + '_' + frame.pic[0]];
  var sx = frame.pic[1] * file.w;
  var sy = frame.pic[2] * file.h;
  var sWidth = file.w;
  var sHeight = file.h;
  var dx = Setting.x - lf2.cameraPos[0];
  var dy = Setting.y - lf2.cameraPos[1];
  var dWidth = sWidth;
  var dHeight = sHeight;

  var scale = thing.Setting.scale;
  var ct = [frame.center[0] * scale, frame.center[1] * scale];

  var m = Setting.mirror ? -1 : 1;

  lf2.ctx.save();
  lf2.ctx.scale(m * scale, 1 * scale);
  lf2.ctx.drawImage(image, sx, sy, sWidth, sHeight, ((dx - ct[0]) * m) / scale, (dy - ct[1]) / scale, dWidth * m, dHeight);
  lf2.ctx.restore();
}

