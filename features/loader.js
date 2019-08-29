
// 事前準備
lf2.loader = () => {

  ['map', 'character', 'derivative', 'UI'].forEach(type => {
    Object.keys(lf2[type]).forEach(name => {

      const template = lf2[type][name];

      // 將每個角色/地圖的頭像匯入UI
      lf2.portraitUI(type, name, template);

      // 根據路徑將圖檔匯入圖檔中心
      lf2.fileManager(type, name, template);

      // 填入背景資訊(不需要特別設定的)
      lf2.undergroundInformation(type, name, template);

      // 轉換地圖腳本的設定
      lf2.mapTransform(type, name, template);

    });
  });

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  lf2.canvas = canvas;
  lf2.ctx = ctx;

  document.addEventListener('keyup', lf2.logKey);
  document.addEventListener('keydown', lf2.logKey);
}


lf2.portraitUI = (type, name, template) => {
  if (type == 'character') {
    lf2.UI[name] = {
      setting: {
        name: name,
        file: { 'face': { deputy: 'png', w: 100, h: 100 }, },
        scale: 1,
      },
      frame: { 'standing': { next: 999, pic: ['face', 0, 0], center: [0, 0], wait: 100, }, }
    };
  }
  else if (type == 'map') {
    lf2.UI[name] = {
      setting: {
        name: name,
        file: { 'mapface': { deputy: 'png', w: 200, h: 150 }, },
        scale: 1,
      },
      frame: { 'standing': { next: 999, pic: ['mapface', 0, 0], center: [0, 0], wait: 100, }, }
    };
  }
}

lf2.fileManager = (type, name, template) => {

  Object.keys(template.setting.file).forEach(key => {

    var file = template.setting.file[key];
    var img = new Image();

    lf2.imageNum++;

    img.onload = function () {
      lf2.imageOnload++;
      if (lf2.imageOnload == lf2.imageNum) {
        lf2.sceneSwitching('entrance');
        lf2.eachFrame();
      }
    }

    // UI類別裡的角色頭像 需要去角色資料夾找
    if (type == 'UI') {
      if (key == 'face') img.src = `character/${name}/${key}.${file.deputy}`;
      else if (key == 'mapface') img.src = `map/${name}/${key}.${file.deputy}`;
      else img.src = `${type}/${key}.${file.deputy}`;
    }
    else if (type == 'derivative') img.src = `character/${name}/${key}.${file.deputy}`;
    else img.src = `${type}/${name}/${key}.${file.deputy}`;

    lf2.imageCenter[name + '_' + key] = img;
  });
}

lf2.undergroundInformation = (type, name, template) => {
  if (type !== 'map') {

    const data = {

      nowframe: 'standing',
      nowwait: template.frame['standing'].wait * lf2.waitMagnification,
      nowHP: template.setting.HP,

      ySpeed: 0,
      xSpeed: 0,

      inSky: false,
      mirror: false,
      keyReaction: [],
      timeToGo: [0, null],
      hitHold: '-',

      team: 0,

      hitCD: {},
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
      element.timeToGo = [0, null];

      if (element.repeat) {
        // 從該屬性的初始值開始
        const start = element[element.repeat.attr];

        // 每一次加上repeat.numer
        for (let i = 0; i < element.repeat.times; i++) {
          var clone = JSON.parse(JSON.stringify(element));
          clone[clone.repeat.attr] = start + (clone.repeat.numer * i);
          decorate.push(clone);
        }
      }
      else decorate.push(element);
    });

    // 覆蓋回decorate
    template.decorate = decorate;
  }
}
