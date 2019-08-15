
// 畫
function show(Setting, frame, type, thing) {
  var file = thing.Setting.file[frame.pic[0]];
  // FIXME: 有計畫將name拿掉 直接是類別名稱
  var name = thing.Setting.name.toLowerCase();
  var image = window.imageCenter[name + '_' + frame.pic[0]];
  var sx = frame.pic[1] * file.w;
  var sy = frame.pic[2] * file.h;
  var sWidth = file.w;
  var sHeight = file.h;
  var dx = Setting.x - cameraPos[0];
  var dy = Setting.y - cameraPos[1];
  var dWidth = sWidth;
  var dHeight = sHeight;
  var ct = frame.center;
  var scale = thing.Setting.scale;

  var m = Setting.mirror ? -1 : 1;

  ctx.save();
  ctx.scale(m * scale, 1 * scale);
  ctx.drawImage(image, sx, sy, sWidth, sHeight, ((dx - ct[0]) * m) / scale, (dy - ct[1]) / scale, dWidth * m, dHeight);
  ctx.restore();
}

