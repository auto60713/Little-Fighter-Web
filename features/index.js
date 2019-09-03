window.lf2 = {

  mode: {
    'mapSelection': '',
    'shaoguanSelection': '',
  },

  gameOver: null,

  character: {},
  derivative: {},
  map: {},
  UI: {},
  shaoguan: {},

  imageCenter: {},


  // 設定有意思的值

  // wait等於幾幀
  waitMagnification: 3,
  // 重力
  gravity: 0.35,
  // 落下最大速度
  maxFallingSpeed: 10.7,

};

window.onload = () => { lf2.loader() };
