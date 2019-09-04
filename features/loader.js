
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
      lf2.undergroundInformation(type, template);

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
    setting: { file: {} },
    frame: { 'standing': { next: 'standing', pic: [whichFace, 0, 0], center: [0, 0], wait: 100, }, }
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

      // UI類別裡的角色頭像 需要去角色資料夾找
      if (type == 'UI') {
        if (key == 'face') img.src = `character/${name}/${key}.${file.deputy}`;
        else if (key == 'mapface') img.src = `map/${name}/${key}.${file.deputy}`;
        else if (key == 'shaoguanface') img.src = `shaoguan/${name}/${key}.${file.deputy}`;
        else img.src = `${type}/${key}.${file.deputy}`;
      }
      else if (type == 'derivative') img.src = `character/${name}/${key}.${file.deputy}`;
      else img.src = `${type}/${name}/${key}.${file.deputy}`;

      lf2.imageCenter[`${name}_${key}`] = img;
    });
}

// 填入背景資訊(不需要特別設定的)
lf2.undergroundInformation = (type, template) => {
  if (type !== 'map' && type !== 'shaoguan') {

    const data = {

      nowframe: 'standing',
      nowwait: template.frame['standing'].wait * lf2.waitMagnification,
      nowhp: template.setting.hp,

      ySpeed: 0,
      xSpeed: 0,

      inSky: false,
      mirror: 1,
      keyReaction: [],

      team: 0,

      strikeCD: {},
      keypress: {},

      x: 0,
      y: 0,
    };

    Object.keys(data).forEach(key => {
      template.setting[key] = data[key];
    });
  }
}

lf2.mapTransform = (type, name, template) => {
  if (type === 'map') {

    const decorate = [];

    // 展開重複布置
    template.decorate.forEach(element => {

      // 背景資訊
      element.nowframe = 'standing';
      element.nowwait = 0;
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
}
