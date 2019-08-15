
// 事前準備
lf2.loader = () => {

  ['map', 'character', 'derivative', 'UI'].forEach(type => {
    Object.keys(lf2[type]).forEach(name => {

      const template = lf2[type][name];

      // 根據路徑將圖檔匯入圖檔中心
      Object.keys(template.Setting.file).forEach(key => {

        var file = template.Setting.file[key];

        var img = new Image();

        lf2.imageNum++;

        img.onload = function () {
    
          lf2.imageOnload++;
          if (lf2.imageOnload == lf2.imageNum) {
            lf2.sceneSwitching('Entrance');
            lf2.eachFrame();
          }
        }
        img.src = file.src;

        lf2.imageCenter[name + '_' + key] = img;
      });

      if (type == 'character') {
        const tt = name + 'face';
        lf2.UI[tt] = {
          Setting: {
            name: tt,
            file: {
              'main': { src: 'character/' + name + '/face.png', w: 100, h: 100 },
            },
            scale: 1,
          },
          frame: {
            0: {
              pic: ['main', 0, 0], center: [0, 0], next: 0, wait: 1,
            },
          }
        };
      }

      // 填入背景資訊(不需要特別設定的)
      if (type !== 'map') {

        const data = {

          nowframe: 0,
          nowwait: template.frame[0].wait,

          ySpeed: 0,
          xSpeed: 0,

          inSky: false,
          mirror: false,

          team: 0,

          hitCD: {},
          keypress: {},

          x: 0,
          y: 0,
        };

        Object.keys(data).forEach(key => {
          template.Setting[key] = data[key];
        });
      }

      if (type === 'map') {

        const arrange = [];

        // 展開重複布置
        template.arrange.forEach(element => {

          if (element.repeat) {

            // 從該屬性的初始值開始
            const start = element[element.repeat.attr];

            // 每一次加上repeat.numer
            for (let i = 0; i < element.repeat.times; i++) {
              var clone = JSON.parse(JSON.stringify(element));
              clone[clone.repeat.attr] = start + (clone.repeat.numer * i);
              arrange.push(clone);
            }
          }
          else arrange.push(element);

        });

        // 覆蓋回arrange
        template.arrange = arrange;
      }

    });
  });

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  lf2.canvas = canvas;
  lf2.ctx = ctx;

  document.addEventListener('keyup', lf2.logKey);
  document.addEventListener('keydown', lf2.logKey);
}
