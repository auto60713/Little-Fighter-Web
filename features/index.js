window.lf2 = {

  imageOnload: 0,
  imageNum: 0,
  imageCenter: {},

  state: '',
  gameOver: null,

  mode: {
    'mapSelection': '',
    'shaoguanSelection': '',
  },
  backgroundColor: {
    'entrance': '#102463',
    'modeSelection': '#102463',

    'roleSelection': '#102463',

    'mapSelection': '#102463',
    'battleMode': '',

    'shaoguanSelection': '#102463',
    'shaoguanMode': '',
  },

  UI: {},
  map: {},
  character: {},
  derivative: {},
  shaoguan: {},

  // 設定有意思的值

  // wait等於幾幀
  waitMagnification: 3,
  // 重力
  gravity: 0.35,
  // 落下最大速度
  maxFallingSpeed: 10.7,

};

window.onload = () => { lf2.loader() };
