
// 將物件畫在上canvas上
lf2.draw = (setting, frame, type, thing) => {

  var file = type == 'map' ? thing.setting.file[frame.pic[0]] : setting.file[frame.pic[0]];
  var name = type == 'map' ? thing.setting.name : setting.name;
  var image = lf2.imageCenter[name + '_' + frame.pic[0]];
  var sx = frame.pic[2] * file.w;
  var sy = frame.pic[1] * file.h;
  var sWidth = file.w;
  var sHeight = file.h;
  var dx = setting.x - lf2.cameraPos[0];
  var dy = setting.y - lf2.cameraPos[1];
  var dWidth = sWidth;
  var dHeight = sHeight;



  var ct = type == 'map' ? [0, 0] : [frame.center[0], frame.center[1]];

  var m = setting.mirror ? -1 : 1;
  var asd = setting.mirror ? sWidth : 0;

  lf2.ctx.save();
  lf2.ctx.scale(m, 1);
  lf2.ctx.drawImage(image, sx, sy, sWidth, sHeight, (dx * m) - ct[0] + asd, dy - ct[1], dWidth * m, dHeight);
  lf2.ctx.restore();
}

