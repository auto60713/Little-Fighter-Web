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
  waitMagnification: 3,
  // 重力
  gravity: 0.35,
  // 落下最大速度
  maxFallingSpeed: 10.7,

};

window.onload = () => { lf2.loader() };
