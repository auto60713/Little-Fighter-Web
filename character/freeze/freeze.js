lf2.character.Freeze = {
  setting: {
    name: 'Freeze',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    scale: 1,
    HP: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 16, next: 'standing2', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'Down_punch', B6: 'ball',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 7, next: 'standing3', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'Down_punch', B6: 'ball',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 5, next: 'standing4', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'Down_punch', B6: 'ball',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 7, next: 999, move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'Down_punch', B6: 'ball',
      },
    },


    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 999, move: [0, 0], center: [39, 78],
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 28, y: 15, w: 27, h: 65, },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 999, move: [0, 0], center: [39, 79],
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 28, y: 15, w: 27, h: 65, },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 999, move: [0, 0], center: [39, 79],
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 28, y: 15, w: 27, h: 65, },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 999, move: [0, 0], center: [39, 78],
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 28, y: 15, w: 27, h: 65, },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 0, move: [0, 0], center: [35, 79], sound: '003.wav',
      bdy: { x: 25, y: 19, w: 38, h: 60, },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 0, move: [0, 0], center: [41, 79],
      bdy: { x: 25, y: 19, w: 38, h: 60, },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 0, move: [0, 0], center: [36, 79], sound: '004.wav',
      bdy: { x: 25, y: 19, w: 38, h: 60, },
    },
    'punch': {
      pic: ['0', 1, 0], wait: 2, next: 'punch2', move: [1, 0], center: [42, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 2, next: 999, move: [0, 0], center: [35, 79], sound: '007.wav',
      itr: { x: 44, y: 31, w: 35, h: 22, move: [2, 0], injury: 20, },
      bdy: { x: 25, y: 11, w: 35, h: 69, },
    },
    'jump_attack': {
      pic: ['0', 1, 4], wait: 3, next: 'jump_attack2', move: [0, 0], center: [40, 75], sound: '007.wav',
      bdy: { x: 26, y: 3, w: 36, h: 69, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 1, next: 'jump_attack3', move: [0, 0], center: [26, 76],
      itr: { x: 28, y: 32, w: 40, h: 25, move: [7, 0], fall: true, arest: 15, injury: 35, },
      bdy: { x: 13, y: 5, w: 36, h: 70, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 5, next: 999, move: [0, 0], center: [30, 76],
      itr: { x: 28, y: 36, w: 44, h: 22, move: [7, 0], fall: true, arest: 15, injury: 35, },
      bdy: { x: 14, y: 3, w: 36, h: 69, },
    },
    'run_attack': {
      pic: ['1', 3, 2], wait: 1, next: 'run_attack2', move: [6, 0], center: [36, 79],
      bdy: { x: 18, y: 9, w: 38, h: 69, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 1, next: 'run_attack3', move: [4, 0], center: [36, 79], sound: '007.wav',
      bdy: { x: 18, y: 9, w: 39, h: 70, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 1, next: 'run_attack4', move: [0, 0], center: [17, 79],
      itr: { x: 21, y: 33, w: 57, h: 30, move: [10, 0], fall: true, arest: 15, injury: 50, },
      bdy: { x: 10, y: 12, w: 40, h: 68, },
    },
    'run_attack4': {
      pic: ['1', 3, 5], wait: 2, next: 'run_attack5', move: [0, 0], center: [16, 79],
      itr: { x: 13, y: 35, w: 64, h: 37, move: [10, 0], fall: true, arest: 15, injury: 50, },
      bdy: { x: 15, y: 15, w: 41, h: 63, },
    },
    'run_attack5': {
      pic: ['1', 3, 6], wait: 3, next: 999, move: [0, 0], center: [17, 79],
      bdy: { x: 16, y: 20, w: 38, h: 61, },
    },
    'dash_attack': {
      pic: ['1', 3, 7], wait: 2, next: 'dash_attack2', move: [0, 0], center: [26, 78],
      bdy: { x: 17, y: 5, w: 29, h: 68, },
      bdy: { x: 6, y: 27, w: 44, h: 18, },
    },
    'dash_attack2': {
      pic: ['1', 3, 8], wait: 3, next: 'dash_attack3', move: [0, 0], center: [20, 78], sound: '007.wav',
      itr: { x: 24, y: 23, w: 55, h: 39, move: [12, 0], fall: true, arest: 20, injury: 70, },
      bdy: { x: 15, y: 38, w: 30, h: 32, },
      bdy: { x: 23, y: 9, w: 28, h: 29, },
    },
    'dash_attack3': {
      pic: ['1', 3, 9], wait: 3, next: '216', move: [0, 0], center: [29, 77],
      bdy: { x: 19, y: 37, w: 29, h: 37, },
      bdy: { x: 24, y: 6, w: 30, h: 34, },
    },
    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [39, 79],
      bdy: { x: 20, y: 19, w: 38, h: 60, },
    },
    'falling': {
      pic: ['0', 3, 0], wait: 3, next: 0, move: [0, 0], center: [39, 79],
      itr: { x: 21, y: 14, w: 29, h: 44, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3, next: 0, move: [0, 0], center: [37, 85],
      itr: { x: 8, y: 15, w: 30, h: 32, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      itr: { x: 27, y: 35, w: 28, h: 21, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3, next: 0, move: [0, 0], center: [39, 79],
      itr: { x: 13, y: 18, w: 46, h: 26, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3, next: 0, move: [0, 0], center: [39, 79],
      itr: { x: 32, y: 18, w: 33, h: 27, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      itr: { x: 10, y: 38, w: 38, h: 21, move: [2, 0], fall: true, vrest: 20, injury: 30, },
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },
    'falling5': {
      pic: ['0', 3, 4], wait: 3, next: 0, move: [0, 0], center: [39, 72],
    },
    'jump': {
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [39, 79],
      bdy: { x: 22, y: 24, w: 35, h: 58, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jump3', move: [0, 0], center: [42, 79], sound: '017.wav',
      bdy: { x: 26, y: 26, w: 34, h: 56, },
    },
    'jump3': {
      pic: ['0', 6, 2], wait: 1, next: 0, move: [0, 0], center: [39, 79],
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
    },
    'dash': {
      pic: ['0', 6, 3], wait: 8, next: 'dash2', move: [0, 0], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
    },
    'dash': {
      pic: ['1', 4, 2], wait: 2, next: 0, move: [0, 0], center: [39, 79],
      bdy: { x: 35, y: 8, w: 27, h: 27, },
      bdy: { x: 16, y: 30, w: 39, h: 37, },
    },
    'injured': {
      pic: ['1', 5, 0], wait: 2, next: 'injured2', move: [0, 0], center: [35, 79],
      bdy: { x: 25, y: 17, w: 29, h: 61, },
    },
    'injured2': {
      pic: ['1', 5, 1], wait: 3, next: 999, move: [0, 0], center: [35, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },




    // ==============================================================================
    // 技能
    // ==============================================================================

    'ball1': {
      pic: ['2', 0, 0], wait: 1, next: 'ball12', move: [0, 0], center: [40, 79], sound: '064.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball12': {
      pic: ['2', 0, 1], wait: 1, next: 'ball13', move: [0, 0], center: [39, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball13': {
      pic: ['2', 0, 2], wait: 1, next: 'ball14', move: [4, 0], center: [22, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball14': {
      pic: ['2', 0, 3], wait: 1, next: 'ball15', move: [3, 0], center: [37, 79],
      opoint: { x: 80, y: 46, name: 'Freeze', move: [0, 0], frame: 'standing', },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball15': {
      pic: ['2', 0, 4], wait: 2, next: 'ball16', move: [1, 0], center: [37, 79],
      bdy: { x: 25, y: 11, w: 35, h: 67, },
    },
    'ball16': {
      pic: ['2', 0, 5], wait: 3, next: 999, move: [0, 0], center: [32, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },


    'Down_punch': {
      pic: ['1', 0, 8], wait: 1, next: 'Down_punch2', move: [0, 0], center: [39, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch2': {
      pic: ['1', 0, 9], wait: 1, next: 'Down_punch3', move: [0, 0], center: [30, 79], sound: '019.wav',
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch3': {
      pic: ['1', 1, 7], wait: 1, next: 'Down_punch4', move: [0, 0], center: [30, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch4': {
      pic: ['1', 1, 8], wait: 1, next: 'Down_punch5', move: [2, 0], center: [28, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch5': {
      pic: ['1', 1, 9], wait: 1, next: 'Down_punch6', move: [2, 0], center: [32, 79], sound: '020.wav',
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch6': {
      pic: ['1', 4, 5], wait: 2, next: 'Down_punch7', move: [1, 0], center: [32, 79],
      opoint: { x: 105, y: 77, name: 'Freeze', move: [0, 0], frame: 'column_mother', },
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch7': {
      pic: ['1', 4, 6], wait: 4, next: 'Down_punch8', move: [0, 0], center: [32, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Down_punch8': {
      pic: ['1', 4, 9], wait: 3, next: 999, move: [0, 0], center: [32, 79],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },


    'Whirlwind': {
      pic: ['2', 1, 0], wait: 1, next: 'Whirlwind2', move: [0, 0], center: [35, 78],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind2': {
      pic: ['2', 1, 1], wait: 1, next: 'Whirlwind3', move: [0, 0], center: [41, 75], sound: '005.wav',
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind3': {
      pic: ['2', 1, 2], wait: 1, next: 'Whirlwind4', move: [0, 0], center: [39, 75],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind4': {
      pic: ['2', 1, 3], wait: 1, next: 'Whirlwind5', move: [0, 0], center: [36, 71],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind5': {
      pic: ['2', 1, 4], wait: 2, next: 'Whirlwind6', move: [0, 0], center: [42, 70],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind6': {
      pic: ['2', 1, 5], wait: 2, next: 'Whirlwind7', move: [0, 0], center: [33, 71],
      opoint: { x: 33, y: 71, name: 'Freeze', move: [0, 0], frame: 'standing', },
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind7': {
      pic: ['2', 1, 6], wait: 2, next: 'Whirlwind8', move: [0, 0], center: [38, 72],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind8': {
      pic: ['2', 1, 7], wait: 3, next: 'Whirlwind9', move: [0, 0], center: [36, 72],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },
    'Whirlwind9': {
      pic: ['2', 1, 8], wait: 3, next: 999, move: [0, 0], center: [38, 75],
      bdy: { x: 24, y: 14, w: 31, h: 64, },
    },



  }
};







lf2.derivative.Freeze = {
  setting: {
    name: 'Freeze',
    file: {
      'ball': { deputy: 'png', w: 82, h: 83 },
      'col': { deputy: 'png', w: 110, h: 110 },
      'ww': { deputy: 'png', w: 160, h: 160 },
    },
    scale: 1,
  },
  frame: {

    standing: {
      next: 'standing2', pic: ['ball', 0, 0], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing2: {
      next: 'standing3', pic: ['ball', 0, 1], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing3: {
      next: 'standing4', pic: ['ball', 0, 2], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing4: {
      next: 'standing5', pic: ['ball', 3, 0], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing5: {
      next: 'standing6', pic: ['ball', 2, 0], center: [40, 43], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing6: {
      next: 'standing', pic: ['ball', 3, 0], center: [40, 43], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },


    falling: {
      next: 'disappear2', pic: ['ball', 0, 1], center: [44, 41], wait: 1, move: [2, 0],
    },
    disappear2: {
      next: 'disappear3', pic: ['ball', 1, 1], center: [44, 41], wait: 1,
    },
    disappear3: {
      next: 'disappear4', pic: ['ball', 2, 1], center: [44, 41], wait: 1,
    },
    disappear4: {
      next: 1000, pic: ['ball', 3, 1], center: [44, 41], wait: 1,
    },


    'column_mother': {
      pic: ['col', 0, 6], wait: 1, next: 'column_mother2', move: [4, 0], center: [1, 0], 
    },
    'column_mother2': {
      pic: ['col', 0, 6], wait: 5, next: 'column_mother3', move: [6, 0], center: [1, 0], 
      opoint: { x: -13, y: 5, name: 'Freeze', move: [0, 0], frame: 'columnS', },
    },
    'column_mother3': {
      pic: ['col', 0, 6], wait: 5, next: 'column_mother4', move: [6, 0], center: [1, 0], 
      opoint: { x: -5, y: 5, name: 'Freeze', move: [0, 0], frame: 'columnM', },
    },
    'column_mother4': {
      pic: ['col', 0, 6], wait: 1, next: 1000, move: [6, 0], center: [1, 0], 
      opoint: { x: 29, y: 5, name: 'Freeze', move: [0, 0], frame: 'columnL', },
    },
    

    'columnL': {
      pic: ['col', 0, 0], wait: 1, next: 'columnL2', move: [0, 0], center: [44, 111], 
      itr: { x: 3, y: 59, w: 42, h: 51, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 3, y: 59, w: 42, h: 51, },
    },
    'columnL2': {
      pic: ['col', 0, 1], wait: 2, next: 'columnL3', move: [0, 0], center: [48, 111], sound: '072.wav', 
      itr: { x: 14, y: 7, w: 66, h: 101, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 14, y: 7, w: 66, h: 101, },
    },
    'columnL3': {
      pic: ['col', 0, 2], wait: 2, next: 'columnL4', move: [0, 0], center: [51, 112], 
      itr: { x: 14, y: 15, w: 70, h: 95, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 14, y: 15, w: 70, h: 95, },
    },
    'columnL4': {
      pic: ['col', 0, 3], wait: 4, next: 'columnL5', move: [0, 0], center: [52, 112], 
      itr: { x: 14, y: 15, w: 70, h: 95, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 18, y: 12, w: 66, h: 98, },
    },
    'columnL5': {
      pic: ['col', 0, 4], wait: 3, next: 'columnL6', move: [0, 0], center: [52, 112], 
      itr: { x: 6, y: 7, w: 74, h: 98, vrest: 1, },
      bdy: { x: 6, y: 7, w: 74, h: 98, },
    },
    'columnL6': {
      pic: ['col', 0, 5], wait: 175, next: 'columnL7', move: [0, 0], center: [52, 112], 
      itr: { x: 4, y: 13, w: 62, h: 95, vrest: 1, },
      bdy: { x: 4, y: 13, w: 62, h: 95, },
    },
    'columnL7': {
      pic: ['col', 0, 5], wait: 1, next: 1000, move: [0, 0], center: [52, 112], 
    },

  
    'columnM': {
      pic: ['col', 1, 0], wait: 1, next: 'columnM2', move: [0, 0], center: [35, 111], 
      itr: { x: 3, y: 59, w: 42, h: 51, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 3, y: 59, w: 42, h: 51, },
    },
    'columnM2': {
      pic: ['col', 1, 1], wait: 2, next: 'columnM3', move: [0, 0], center: [38, 111], sound: '072.wav', 
      itr: { x: 12, y: 20, w: 57, h: 87, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 12, y: 20, w: 57, h: 87, },
    },
    'columnM3': {
      pic: ['col', 1, 2], wait: 2, next: 'columnM4', move: [0, 0], center: [40, 112], 
      itr: { x: 14, y: 26, w: 65, h: 84, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 14, y: 26, w: 65, h: 84, },
    },
    'columnM4': {
      pic: ['col', 1, 3], wait: 4, next: 'columnM5', move: [0, 0], center: [34, 112], 
      itr: { x: 5, y: 23, w: 65, h: 84, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 4, y: 20, w: 68, h: 90, },
    },
    'columnM5': {
      pic: ['col', 1, 4], wait: 3, next: 'columnM6', move: [0, 0], center: [39, 112], 
      itr: { x: 11, y: 19, w: 66, h: 91, vrest: 1, },
      bdy: { x: 11, y: 19, w: 66, h: 91, },
    },
    'columnM6': {
      pic: ['col', 1, 5], wait: 175, next: 'columnM7', move: [0, 0], center: [41, 112], 
      itr: { x: 13, y: 19, w: 64, h: 89, vrest: 1, },
      bdy: { x: 13, y: 19, w: 64, h: 89, },
    },
    'columnM7': {
      pic: ['col', 1, 6], wait: 1, next: 1000, move: [0, 0], center: [52, 112], 
    },

    
    'columnS': {
      pic: ['col', 2, 0], wait: 1, next: 'columnS2', move: [0, 0], center: [25, 111], 
      itr: { x: 16, y: 83, w: 26, h: 25, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 16, y: 83, w: 26, h: 25, },
    },
    'columnS2': {
      pic: ['col', 2, 1], wait: 2, next: 'columnS3', move: [0, 0], center: [35, 111], sound: '072.wav', 
      itr: { x: 23, y: 44, w: 41, h: 64, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 23, y: 44, w: 41, h: 64, },
    },
    'columnS3': {
      pic: ['col', 2, 2], wait: 2, next: 'columnS4', move: [0, 0], center: [38, 112], 
      itr: { x: 17, y: 44, w: 54, h: 58, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 17, y: 44, w: 54, h: 58, },
    },
    'columnS4': {
      pic: ['col', 2, 3], wait: 4, next: 'columnS5', move: [0, 0], center: [35, 112], 
      itr: { x: 11, y: 27, w: 51, h: 79, move: [7, -10], fall: false, vrest: 50, injury: 60, },
      bdy: { x: 10, y: 28, w: 54, h: 79, },
    },
    'columnS5': {
      pic: ['col', 2, 4], wait: 3, next: 'columnS6', move: [0, 0], center: [33, 112], 
      itr: { x: 6, y: 29, w: 56, h: 78, vrest: 1, },
      bdy: { x: 6, y: 29, w: 56, h: 78, },
    },
    'columnS6': {
      pic: ['col', 2, 5], wait: 175, next: 'columnS7', move: [0, 0], center: [37, 112], 
      itr: { x: 13, y: 30, w: 50, h: 75, vrest: 1, },
      bdy: { x: 13, y: 30, w: 50, h: 75, },
    },
    'columnS7': {
      pic: ['col', 2, 6], wait: 1, next: 1000, move: [0, 0], center: [52, 112], 
    },

    

  }
};


