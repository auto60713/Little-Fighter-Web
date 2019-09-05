window.lf2 = {

  mode: {
    'mapSelection': '',
    'shaoguanSelection': '',
  },

  gameOver: null,

  character: {},
  derivative: {},
  UI: {},
  map: {},
  shaoguan: {},

  imageCenter: {},


  // 設定有意思的值

  themeColor: '#4172A5',
  // wait等於幾幀
  waitMagnification: 1,
  // 重力
  gravity: 0.37,
  // 落下最大速度
  maxFallingSpeed: 11,

};

window.onload = () => { lf2.loader() };
