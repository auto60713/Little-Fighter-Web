lf2.character.Davis = {
  setting: {
    name: 'Davis',
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
      pic: ['0', 0, 0], wait: 5, next: 'standing2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 3, next: 'standing3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 5, next: 'standing4', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 9, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [5, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [10, 0], center: [36, 80], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [10, 0], center: [37, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [10, 0], center: [32, 78], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 1, next: 'punch2', move: [0, 0], center: [42, 79],
      bdy: { x: 28, y: 12, w: 33, h: 70, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 1, next: 'punch3', move: [0, 0], center: [23, 79], sound: '007.wav',
      itr: { x: 21, y: 31, w: 43, h: 18, move: [2, 0], effect: 'injured', arest: 10, injury: 20, },
      bdy: { x: 13, y: 11, w: 31, h: 68, },
    },
    'punch3': {
      pic: ['0', 1, 2], wait: 1, next: 'punch4', move: [2, 0], center: [28, 79],
      bdy: { x: 17, y: 9, w: 31, h: 72, },
    },
    'punch4': {
      pic: ['0', 1, 3], wait: 1, next: 999, move: [2, 0], center: [41, 79],
      bdy: { x: 29, y: 10, w: 32, h: 70, },
    },

    'jump_attack': {
      pic: ['1', 6, 2], wait: 1, next: 'jump_attack2', move: [0, 0], center: [36, 75],
      bdy: { x: 18, y: 10, w: 35, h: 57, },
    },
    'jump_attack2': {
      pic: ['1', 6, 3], wait: 1, next: 'jump_attack3', move: [0, 0], center: [39, 74], sound: '007.wav',
      bdy: { x: 22, y: 9, w: 35, h: 56, },
    },
    'jump_attack3': {
      pic: ['1', 6, 4], wait: 1, next: 'jump_attack4', move: [0, 0], center: [35, 75],
      bdy: { x: 24, y: 6, w: 29, h: 60, },
    },
    'jump_attack4': {
      pic: ['1', 6, 5], wait: 3, next: 'jump_attack5', move: [0, 0], center: [25, 70],
      itr: { x: 17, y: 37, w: 52, h: 17, move: [9, -5], arest: 15, injury: 60, },
      bdy: { x: 11, y: 2, w: 29, h: 63, },
    },
    'jump_attack5': {
      pic: ['1', 6, 6], wait: 1, next: 'jump_attack6', move: [0, 0], center: [25, 71],
      itr: { x: 32, y: 40, w: 36, h: 16, move: [9, -5], arest: 15, injury: 60, },
      bdy: { x: 11, y: 5, w: 28, h: 63, },
    },
    'jump_attack6': {
      pic: ['1', 6, 7], wait: 3, next: 999, move: [0, 0], center: [33, 72],
      bdy: { x: 21, y: 6, w: 29, h: 58, },
    },

    'run_attack': {
      pic: ['1', 3, 0], wait: 2, next: 'run_attack2', move: [0, 0], center: [35, 79],
      bdy: { x: 17, y: 25, w: 44, h: 54, },
    },
    'run_attack2': {
      pic: ['1', 3, 1], wait: 1, next: 'run_attack3', move: [16, 0], center: [30, 79], sound: '007.wav',
      bdy: { x: 25, y: 24, w: 31, h: 55, },
    },
    'run_attack3': {
      pic: ['1', 3, 2], wait: 1, next: 'run_attack4', move: [0, 0], center: [25, 79],
      itr: { x: -18, y: 24, w: 88, h: 30, move: [20, 0], effect: 'falling', vrest: 7, injury: 55, },
      bdy: { x: 15, y: 19, w: 37, h: 62, },
    },
    'run_attack4': {
      pic: ['1', 3, 3], wait: 3, next: 'run_attack5', move: [0, 0], center: [20, 79],
      itr: { x: 28, y: 25, w: 43, h: 27, move: [17, 0], effect: 'falling', vrest: 10, injury: 40, },
      bdy: { x: 14, y: 14, w: 43, h: 67, },
    },
    'run_attack5': {
      pic: ['1', 3, 4], wait: 2, next: 'run_attack6', move: [0, 0], center: [20, 79],
      bdy: { x: 14, y: 14, w: 43, h: 67, },
    },
    'run_attack6': {
      pic: ['1', 3, 5], wait: 2, next: 'run_attack7', move: [0, 0], center: [30, 79],
      bdy: { x: 20, y: 11, w: 31, h: 68, },
    },
    'run_attack7': {
      pic: ['1', 3, 6], wait: 1, next: 999, move: [0, 0], center: [32, 79],
      bdy: { x: 20, y: 11, w: 31, h: 68, },
    },

    'dash_attack': {
      pic: ['1', 6, 2], wait: 1, next: 'dash_attack2', move: [0, 0], center: [36, 75],
      bdy: { x: 18, y: 10, w: 35, h: 57, },
    },
    'dash_attack2': {
      pic: ['1', 6, 3], wait: 1, next: 'dash_attack3', move: [0, 0], center: [39, 74], sound: '007.wav',
      bdy: { x: 22, y: 9, w: 35, h: 56, },
    },
    'dash_attack3': {
      pic: ['1', 6, 4], wait: 1, next: 'dash_attack4', move: [0, 0], center: [35, 75],
      bdy: { x: 24, y: 6, w: 29, h: 60, },
    },
    'dash_attack4': {
      pic: ['1', 6, 5], wait: 7, next: 'dash_attack5', move: [0, 0], center: [25, 70],
      itr: { x: 17, y: 37, w: 52, h: 17, move: [14, -5], arest: 9, injury: 80, },
      bdy: { x: 11, y: 2, w: 29, h: 63, },
    },
    'dash_attack5': {
      pic: ['1', 6, 6], wait: 1, next: 'dash_attack6', move: [0, 0], center: [25, 71],
      itr: { x: 32, y: 40, w: 36, h: 16, move: [14, -5], arest: 9, injury: 80, },
      bdy: { x: 11, y: 5, w: 28, h: 63, },
    },
    'dash_attack6': {
      pic: ['1', 6, 7], wait: 3, next: 'dash_attack6', move: [0, 0], center: [33, 72],
      bdy: { x: 21, y: 6, w: 29, h: 58, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60, },
      hit: {
        B2: 'defend',
      },
    },

    'falling': {
      pic: ['0', 3, 0], wait: 3, next: 'falling2', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3, next: 'falling3', move: [0, 0], center: [37, 85], drop: 'lyingDown',
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },

    'lyingDown': {
      pic: ['0', 3, 4], wait: 10, next: 999, move: [0, 0], center: [39, 66],
    },

    'jump': {
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -8], center: [39, 79], sound: '017.wav', flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
      hit: {
        R: 'jumpingMove', L: 'jumpingMove',
      },
    },
    'jumpingMove': {
      pic: ['0', 6, 2], wait: 0, next: 'jumping', move: [5, 0], center: [39, 79], flip: true,
      bdy: { x: 20, y: 11, w: 29, h: 61, },
    },
    'jumping': {
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 20, y: 11, w: 29, h: 61, },
      hit: {
        B1: 'jump_attack',
      },
    },

    'dash': {
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [9, -5], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
    },
    'dash2': {
      pic: ['0', 6, 3], wait: 8, next: 'dash3', move: [0, 0], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
      hit: {
        B1: 'dash_attack',
      },
    },
    'dash3': {
      pic: ['1', 4, 2], wait: 2, next: 'dash3', move: [0, 0], center: [39, 78],
      bdy: { x: 35, y: 8, w: 27, h: 27, },
      bdy: { x: 16, y: 30, w: 39, h: 37, },
      hit: {
        B1: 'dash_attack',
      },
    },

    'injured': {
      pic: ['1', 5, 0], wait: 2, next: 'injured2', move: [0, 0], center: [35, 79],
      bdy: { x: 25, y: 17, w: 29, h: 61, },
    },
    'injured2': {
      pic: ['1', 5, 1], wait: 3, next: 999, move: [0, 0], center: [34, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },

    // ==============================================================================
    // 技能
    // ==============================================================================

    'ball': {
      pic: ['2', 0, 0], wait: 1, next: 'ball2', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball2': {
      pic: ['2', 0, 1], wait: 1, next: 'ball3', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball3': {
      pic: ['2', 0, 2], wait: 1, next: 'ball4', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball4': {
      pic: ['2', 0, 3], wait: 1, next: 'ball5', move: [0, 0], center: [39, 79], sound: '048.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball5': {
      pic: ['2', 0, 4], wait: 1, next: 'ball6', move: [0, 0], center: [30, 79],
      opoint: { x: 90, y: 43, name: 'Davis', move: [0, 0], frame: 'standing', },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball6': {
      pic: ['2', 0, 6], wait: 1, next: 'ball7', move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'ball7': {
      pic: ['2', 0, 0], wait: 2, next: 999, move: [0, 0], center: [39, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },


    'many_punch': {
      pic: ['2', 1, 3], wait: 1, next: 'many_punch2', move: [7, 0], center: [37, 79], sound: '007.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch2': {
      pic: ['2', 1, 4], wait: 1, next: 'many_punch3', move: [5, 0], center: [33, 79],
      itr: { x: 17, y: 35, w: 61, h: 13, move: [7, 0], effect: 'injured', vrest: 7, injury: 25, },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch3': {
      pic: ['2', 1, 5], wait: 1, next: 'many_punch4', move: [3, 0], center: [38, 79], sound: '007.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch4': {
      pic: ['2', 1, 6], wait: 1, next: 'many_punch5', move: [3, 0], center: [32, 79],
      itr: { x: 14, y: 35, w: 58, h: 18, move: [7, 0], effect: 'injured', vrest: 7, injury: 25, },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch5': {
      pic: ['2', 1, 7], wait: 1, next: 'many_punch6', move: [3, 0], center: [24, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch6': {
      pic: ['2', 1, 8], wait: 1, next: 'many_punch7', move: [5, 0], center: [24, 79], sound: '007.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch7': {
      pic: ['2', 1, 9], wait: 1, next: 'many_punch8', move: [5, 0], center: [22, 79],
      itr: { x: -1, y: 22, w: 81, h: 25, move: [10, 0], effect: 'injured', vrest: 7, injury: 25, },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch8': {
      pic: ['2', 2, 9], wait: 1, next: 'many_punch9', move: [3, 0], center: [18, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch9': {
      pic: ['2', 2, 8], wait: 1, next: 'many_punch10', move: [5, 0], center: [22, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        B6: 'singlong',
      },
    },
    'many_punch10': {
      pic: ['2', 2, 7], wait: 1, next: 'many_punch11', move: [7, 0], center: [26, 79], sound: '007.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        B6: 'singlong',
      },
    },
    'many_punch11': {
      pic: ['2', 2, 6], wait: 1, next: 'many_punch12', move: [3, 0], center: [22, 79],
      itr: { x: 12, y: 11, w: 70, h: 51, move: [7, -15], effect: 'falling', vrest: 15, injury: 25, },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    'many_punch12': {
      pic: ['2', 2, 5], wait: 2, next: 'many_punch13', move: [3, 0], center: [27, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        U: 'jumphit',
      },
    },
    'many_punch13': {
      pic: ['2', 2, 4], wait: 3, next: 999, move: [0, 0], center: [34, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        U: 'jumphit',
      },
    },

    'jumphit': {
      pic: ['2', 2, 0], wait: 1, next: 'jumphit2', move: [8, -8], center: [32, 75], sound: '017.wav',
      bdy: { x: 13, y: 8, w: 38, h: 61, },
    },
    'jumphit2': {
      pic: ['2', 2, 1], wait: 2, next: 'jumphit3', move: [0, 0], center: [31, 75],
      bdy: { x: 15, y: 8, w: 34, h: 62, },
    },
    'jumphit3': {
      pic: ['2', 2, 1], wait: 15, next: 999, move: [0, 0], center: [37, 79],
      bdy: { x: 21, y: 8, w: 34, h: 66, },
      hit: {
        B1: 'jumphit4',
      },
    },

    'jumphit4': {
      pic: ['2', 2, 2], wait: 3, next: 'jumphit5', move: [0, 0], center: [26, 72], sound: '007.wav',
      itr: { x: 17, y: 19, w: 44, h: 45, move: [22, 15], effect: 'falling', arest: 12, injury: 50, },
      bdy: { x: 16, y: 20, w: 46, h: 46, },
    },
    'jumphit5': {
      pic: ['2', 2, 3], wait: 15, next: 999, move: [0, 0], center: [26, 72],
      bdy: { x: 16, y: 20, w: 46, h: 46, },
    },



    'singlong': {
      pic: ['2', 3, 0], wait: 1, next: 'singlong2', move: [7, -9], center: [30, 76], sound: '095.wav',
    },
    'singlong2': {
      pic: ['2', 3, 1], wait: 1, next: 'singlong3', move: [0, 0], center: [28, 79], sound: '031.wav',
      itr: { x: 10, y: 3, w: 72, h: 75, move: [7, -13], effect: 'falling', vrest: 10, injury: 85, },
    },
    'singlong3': {
      pic: ['2', 3, 2], wait: 1, next: 'singlong4', move: [0, 0], center: [26, 81],
      itr: { x: 13, y: -1, w: 67, h: 80, move: [7, -11], effect: 'falling', vrest: 10, injury: 60, },
      bdy: { x: 19, y: 7, w: 36, h: 69, },
    },
    'singlong4': {
      pic: ['2', 3, 3], wait: 1, next: 'singlong5', move: [0, 0], center: [26, 78],
      itr: { x: 11, y: -2, w: 63, h: 80, move: [7, -9], effect: 'falling', vrest: 10, injury: 45, },
      bdy: { x: 22, y: 6, w: 30, h: 69, },
    },
    'singlong5': {
      pic: ['2', 3, 4], wait: 2, next: 'singlong6', move: [0, 0], center: [34, 81],
      itr: { x: 19, y: 1, w: 61, h: 80, move: [7, -7], effect: 'falling', vrest: 10, injury: 30, },
      bdy: { x: 28, y: 12, w: 29, h: 66, },
    },
    'singlong6': {
      pic: ['2', 3, 5], wait: 2, next: 'singlong7', move: [0, 0], center: [33, 75],
      bdy: { x: 27, y: 7, w: 28, h: 65, },
    },
    'singlong7': {
      pic: ['2', 3, 6], wait: 3, next: 'singlong8', move: [0, 0], center: [29, 74],
      bdy: { x: 23, y: 11, w: 30, h: 61, },
    },
    'singlong8': {
      pic: ['2', 3, 7], wait: 2, next: 999, move: [0, 0], center: [29, 73],
      bdy: { x: 21, y: 3, w: 33, h: 68, },
    },


  }
};



lf2.derivative.Davis = {
  setting: {
    name: 'Davis',
    file: {
      'ball': { deputy: 'png', w: 82, h: 47 },
    },
    scale: 1,
  },
  frame: {

    'standing': {
      pic: ['ball', 0, 0], wait: 1, next: 'flying2', move: [4, 0], center: [56, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying2': {
      pic: ['ball', 0, 1], wait: 1, next: 'flying3', move: [5, 0], center: [53, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying3': {
      pic: ['ball', 0, 0], wait: 1, next: 'flying4', move: [7, 0], center: [56, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying4': {
      pic: ['ball', 0, 1], wait: 1, next: 'flying5', move: [9, 0], center: [52, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying5': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying6', move: [10, 0], center: [53, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying6': {
      pic: ['ball', 0, 3], wait: 1, next: 'flying7', move: [13, 0], center: [52, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying7': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying8', move: [16, 0], center: [53, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying8': {
      pic: ['ball', 0, 3], wait: 1, next: 'flying9', move: [18, 0], center: [53, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying9': {
      pic: ['ball', 2, 0], wait: 1, next: 'flying10', move: [20, 0], center: [55, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },
    'flying10': {
      pic: ['ball', 2, 1], wait: 1, next: 'flying9', move: [20, 0], center: [55, 24],
      itr: { x: 26, y: 12, w: 45, h: 24, move: [7, 0], arest: 6, injury: 30, next: 'falling', },
      bdy: { x: 26, y: 12, w: 45, h: 24, },
    },

    'falling': {
      pic: ['ball', 1, 0], wait: 1, next: 'hiting2', move: [0, 0], center: [55, 22],
    },
    'hiting2': {
      pic: ['ball', 1, 1], wait: 1, next: 'hiting3', move: [0, 0], center: [52, 23],
    },
    'hiting3': {
      pic: ['ball', 1, 2], wait: 1, next: 'hiting4', move: [0, 0], center: [46, 21],
    },
    'hiting4': {
      pic: ['ball', 1, 3], wait: 1, next: 1000, move: [0, 0], center: [43, 22],
    },


  }
};



