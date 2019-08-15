


['map', 'character', 'derivative'].forEach(type => {
  Object.keys(window[type]).forEach(name => {

    // 根據路徑將圖檔匯入圖檔中心
    Object.keys(window[type][name].Setting.file).forEach(key => {

      var file = window[type][name].Setting.file[key];

      var img = new Image();
      window.loaderG++;
      img.onload = function () {
        window.loader++;
        if (window.loader == window.loaderG) animate();
      }
      img.src = file.src;

      window.imageCenter[name + '_' + key] = img;
    });

    // 填入背景資訊(不需要特別設定的)
    if (type === 'character' || type === 'derivative') {

      const data = {

        nowframe: 0,
        nowwait: window[type][name].frame[0].wait,

        ySpeed: 0,
        xSpeed: 0,

        uceDe: false,
        jumping: false,
        mirror: false,

        team: 0,

        hitCD: {},
        keypress: {},

        x: 0,
        y: 0,
      };

      Object.keys(data).forEach(key => {
        window[type][name].Setting[key] = data[key];
      });
    }

  });
});
