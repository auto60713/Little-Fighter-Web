
// 事前準備
lf2.loader = () => {

  lf2.imageOnload = 0;
  lf2.imageNum = 0;

  ['map', 'shaoguan', 'character', 'derivative', 'UI'].forEach(type => {
    Object.keys(lf2[type]).forEach(name => {

      const template = lf2[type][name];

      // 將每個角色/地圖的頭像匯入UI
      lf2.portraitUI(type, name);

      // 根據路徑將圖檔匯入圖檔中心
      lf2.fileManager(type, name, template);

      // 填入背景資訊(不需要特別設定的)
      lf2.undergroundInformation(type, name, template);

      // 轉換地圖腳本的設定
      lf2.mapTransform(type, name, template);

    });
  });

  lf2.canvas = document.getElementById('canvas');
  lf2.ctx = lf2.canvas.getContext('2d');

  document.addEventListener('keyup', lf2.logKey);
  document.addEventListener('keydown', lf2.logKey);
}

// 將每個角色/地圖的頭像匯入UI
lf2.portraitUI = (type, name) => {
  if (!lf2.passOnly(['all'], ['character', 'map', 'shaoguan'], type)) return;

  var whichFace = type == 'character' ? 'face' : `${type}face`;

  lf2.UI[name] = {
    setting: { file: {}, type: type },
    frame: { 'standing': { next: 'standing', pic: [whichFace, 0, 0], wait: 100, }, }
  };
  lf2.UI[name].setting.file[whichFace] = { deputy: 'png', w: 200, h: 150 };
}

// 根據路徑將圖檔匯入圖檔中心
lf2.fileManager = (type, name, template) => {

  if (template.setting.file)
    Object.keys(template.setting.file).forEach(key => {

      var file = template.setting.file[key];
      var img = new Image();
      lf2.imageNum++;

      img.onload = function () {
        lf2.imageOnload++;
        // 載入完成
        if (lf2.imageOnload == lf2.imageNum) {
          lf2.sceneSwitching('entrance');
          lf2.eachFrame();
        }
      }

      img.src = type == 'UI' ?
        (`${template.setting.type ? `${template.setting.type}/${name}` : type}/${key}.${file.deputy}`) :
        (`${type == 'derivative' ? 'character' : type}/${name}/${key}.${file.deputy}`);

      lf2.imageCenter[`${name}_${key}`] = img;
    });
}

// 填入背景資訊(不需要特別設定的)
lf2.undergroundInformation = (type, name, template) => {
  if (!lf2.passOnly(['all'], ['character', 'derivative', 'UI', 'map'], type)) return;

  const data = {

    name: name,
    nowhp: template.setting.hp,

    ySpeed: 0,
    xSpeed: 0,

    mirror: 1,

    // 按鍵反應表 (會重複 需順序性 故用array)
    keyReaction: [],
    // 被打等待 (唯一 故用Object)
    strikeCD: {},
    keypress: {},
  };

  Object.keys(data).forEach(key => {
    template.setting[key] = data[key];
  });

}

lf2.mapTransform = (type, name, template) => {
  if (!lf2.passOnly(['all'], ['map'], type)) return;

  const decorate = [];

  // 展開重複布置
  template.decorate.forEach(element => {

    // 背景資訊
    element.nowwait = template.component[element.nowframe].wait;
    element.ySpeed = 0;
    element.xSpeed = 0;
    element.mirror = 1;

    if (element.loop) {
      for (let i = 0; i < element.loop[1]; i++) {
        var clone = JSON.parse(JSON.stringify(element));
        clone.x = element.x + (element.loop[0] * i);
        decorate.push(clone);
      }
    }
    else decorate.push(element);
  });

  // 覆蓋回decorate
  template.decorate = decorate;

}
