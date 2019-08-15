window.lf2 = {

  scenesIndex: 0,

  imageOnload: 0,
  imageNum: 0,
  imageCenter: {},
  waitMagnification: 5,

  state: '',

  QPRESS: false,

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

  // 重力
  gravity: 0.32,
  ySpeedMax: 4.8,

  cameraPos: [0, 0],

};

window.onload = () => { lf2.loader() };


