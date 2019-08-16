window.lf2 = {

  // 背景數據
  scenesIndex: 0,

  imageOnload: 0,
  imageNum: 0,
  imageCenter: {},

  cameraPos: [0, 0],

  state: '',

  mainMap: null,
  mainCharacter: null,

  UI: {},
  map: {},
  character: {},
  derivative: {},

  scenes: {
    map: [],
    character: [],
    derivative: [],
    UI: [],
  },

  // 設定有意思的值

  // wait等於幾幀
  waitMagnification: 2,
  // 重力
  gravity: 0.32,
  // 落下最大速度
  maxFallingSpeed: 10,

};

window.onload = () => { lf2.loader() };
