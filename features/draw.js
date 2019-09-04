
// 將物件畫在上canvas上
lf2.draw = (setting, frame, type, thing) => {


  var file = type == 'map' ? thing.setting.file[frame.pic[0]] : setting.file[frame.pic[0]];
  var name = type == 'map' ? thing.setting.name : setting.name;
  var image = lf2.imageCenter[`${name}_${frame.pic[0]}`];
  var sx = frame.pic[2] * file.w;
  var sy = frame.pic[1] * file.h;
  var dx = (setting.x - lf2.cameraPos[0]) * setting.mirror;
  var dy = setting.y - lf2.cameraPos[1];

  var ct = frame.center || [0, 0];
  var anchorPoint = setting.mirror < 0 ? file.w : 0;

  lf2.ctx.save();
  lf2.ctx.scale(setting.mirror, 1);
  lf2.ctx.drawImage(image, sx, sy, file.w, file.h, dx - ct[0] + anchorPoint, dy - ct[1], file.w * setting.mirror, file.h);
  lf2.ctx.restore();
}

