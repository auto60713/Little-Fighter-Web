lf2.character.Louis = {
  setting: {
    name: 'Louis',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    walkingSpeed: 4,
    jumpPower: 4.5,
    scale: 1,
    HP: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 9, next: 'standing2', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 3, next: 'standing3', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 4, next: 'standing4', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 5, next: 999, move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [5, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [10, 0], center: [48, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [10, 0], center: [51, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [10, 0], center: [50, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'r-catch', B5: '1000foot', B4: 'blastpush',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 4, next: 'punch2', move: [1, 0], center: [40, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 2, next: 999, move: [0, 0], center: [40, 79],
      itr: { x: 26, y: 37, w: 52, h: 14, move: [2, 0], effect: 'injured', arest: 10, injury: 20, },
      bdy: { x: 28, y: 12, w: 36, h: 68, },
    },

    'jump_attack': {
      pic: ['0', 1, 4], wait: 2, next: 'jump_attack2', move: [0, 0], center: [25, 80],
      bdy: { x: 25, y: 13, w: 25, h: 58, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 2, next: 'jump_attack3', move: [0, 0], center: [21, 79],
      bdy: { x: 24, y: 10, w: 31, h: 57, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 2, next: 'jump_attack4', move: [0, 0], center: [25, 79],
      itr: { x: 32, y: 30, w: 47, h: 28, move: [12, 0], effect: 'falling', arest: 75, injury: 45, },
      bdy: { x: 23, y: 10, w: 37, h: 67, },
    },
    'jump_attack4': {
      pic: ['0', 1, 7], wait: 1, next: 'jump_attack5', move: [0, 0], center: [38, 79],
      itr: { x: 35, y: 30, w: 30, h: 30, move: [12, 0], effect: 'falling', arest: 75, injury: 45, },
      bdy: { x: 33, y: 9, w: 36, h: 64, },
    },
    'jump_attack5': {
      pic: ['0', 1, 8], wait: 2, next: 999, move: [0, 0], center: [44, 79],
      bdy: { x: 23, y: 13, w: 39, h: 66, },
    },

    'run_attack': {
      pic: ['1', 3, 0], wait: 1, next: 'run_attack2', move: [6, 0], center: [41, 79],
      bdy: { x: 23, y: 9, w: 38, h: 71, },
    },
    'run_attack2': {
      pic: ['1', 3, 1], wait: 2, next: 'run_attack3', move: [4, 0], center: [42, 79],
      bdy: { x: 23, y: 12, w: 41, h: 68, },
    },
    'run_attack3': {
      pic: ['1', 3, 2], wait: 4, next: 'run_attack4', move: [12, 0], center: [35, 79],
      itr: { x: 18, y: 30, w: 61, h: 31, move: [14, 0], effect: 'falling', vrest: 7, injury: 65, },
      bdy: { x: 27, y: 15, w: 35, h: 64, },
      bdy: { x: 15, y: 31, w: 21, h: 50, },
    },
    'run_attack4': {
      pic: ['1', 3, 3], wait: 2, next: 'run_attack5', move: [12, 0], center: [35, 79],
      itr: { x: 17, y: 34, w: 55, h: 21, move: [14, 0], effect: 'falling', vrest: 7, injury: 65, },
      bdy: { x: 18, y: 29, w: 27, h: 54, },
      bdy: { x: 31, y: 12, w: 33, h: 65, },
    },
    'run_attack5': {
      pic: ['1', 3, 4], wait: 2, next: 'run_attack6', move: [0, 0], center: [36, 79],
      bdy: { x: 32, y: 9, w: 35, h: 73, },
      bdy: { x: 19, y: 34, w: 23, h: 46, },
    },
    'run_attack6': {
      pic: ['1', 3, 5], wait: 3, next: 999, move: [0, 0], center: [39, 79],
      bdy: { x: 20, y: 31, w: 16, h: 49, },
      bdy: { x: 30, y: 11, w: 30, h: 66, },
    },

    'dash_attack': {
      pic: ['1', 6, 2], wait: 1, next: 'dash_attack2', move: [-1, -1], center: [38, 73],
      bdy: { x: 19, y: 8, w: 27, h: 61, },
      bdy: { x: 11, y: 31, w: 43, h: 22, },
    },
    'dash_attack2': {
      pic: ['1', 6, 2], wait: 2, next: 'dash_attack3', move: [0, 0], center: [39, 74],
      bdy: { x: 19, y: 16, w: 28, h: 53, },
      bdy: { x: 10, y: 32, w: 46, h: 20, },
    },
    'dash_attack3': {
      pic: ['1', 6, 3], wait: 2, next: 'dash_attack4', move: [0, 0], center: [31, 73],
      bdy: { x: 27, y: 11, w: 25, h: 55, },
      bdy: { x: 22, y: 25, w: 39, h: 31, },
    },
    'dash_attack4': {
      pic: ['1', 6, 4], wait: 90, next: 'dash_attack4', move: [13, 6], center: [31, 73], drop: 'dash_attack5',
      itr: { x: 28, y: 34, w: 57, h: 45, move: [12, 0], effect: 'falling', vrest: 8, injury: 80, },
      bdy: { x: 29, y: 19, w: 39, h: 45, },
      bdy: { x: 16, y: 38, w: 36, h: 29, },
    },
    'dash_attack5': {
      pic: ['1', 6, 5], wait: 2, next: 'dash_attack6', move: [0, 0], center: [41, 77],
      bdy: { x: 42, y: 24, w: 32, h: 52, },
      bdy: { x: 18, y: 50, w: 47, h: 28, },
    },
    'dash_attack6': {
      pic: ['1', 6, 6], wait: 2, next: 'dash3', move: [0, 0], center: [31, 74],
      bdy: { x: 38, y: 24, w: 24, h: 55, },
      bdy: { x: 15, y: 46, w: 34, h: 32, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [37, 79], flip: true, hitHold: true,
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
      pic: ['0', 3, 1], wait: 3, next: 'falling3', move: [0, 0], center: [39, 79], drop: 'lyingDown',
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
      pic: ['0', 3, 4], wait: 10, next: 999, move: [0, 0], center: [39, 72],
    },

    'jump': {
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [47, 79], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -8], center: [48, 79], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
      hit: {
        R: 'jumpingMove', L: 'jumpingMove',
      },
    },
    'jumpingMove': {
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [5, 0], center: [39, 79], flip: true,
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
    },
    'jumping': {
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
      hit: {
        B1: 'jump_attack',
      },
    },

    'dash': {
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [9, -10], center: [39, 79],
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
      pic: ['1', 4, 2], wait: 2, next: 'dash3', move: [0, 0], center: [39, 79],
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
      pic: ['1', 5, 1], wait: 3, next: 999, move: [0, 0], center: [35, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },

    // ==============================================================================
    // 技能
    // ==============================================================================


    'r-catch': {
      pic: ['2', 2, 0], wait: 3, next: 'r-catch2', move: [0, 0], center: [43, 79],
      bdy: { x: 25, y: 12, w: 47, h: 68, },
    },
    'r-catch2': {
      pic: ['2', 2, 1], wait: 2, next: 'r-catch3', move: [8, 0], center: [43, 79], sound: '003.wav',
      itr: { x: 21, y: 34, w: 40, h: 28, injury: 40, next: 'c-throw', catching: true, },
      bdy: { x: 26, y: 10, w: 45, h: 72, },
    },
    'r-catch3': {
      pic: ['2', 2, 2], wait: 2, next: 'r-catch4', move: [8, 0], center: [43, 79], sound: '004.wav',
      itr: { x: 21, y: 29, w: 43, h: 30, injury: 40, next: 'c-throw', catching: true, },
      bdy: { x: 28, y: 12, w: 48, h: 65, },
    },
    'r-catch4': {
      pic: ['2', 2, 1], wait: 3, next: 999, move: [0, 0], center: [43, 79],
      itr: { x: 21, y: 29, w: 43, h: 30, injury: 40, next: 'c-throw', catching: true, },
      bdy: { x: 25, y: 12, w: 47, h: 68, },
    },


    'c-throw': {
      pic: ['2', 1, 0], wait: 2, next: 'c-throw2', move: [0, 0], center: [39, 79], sound: '015.wav',
      cpoint: { x: 83, y: 43, frame: 'falling', },
      itr: { x: 18, y: 24, w: 103, h: 56, move: [14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 19, y: 13, w: 47, h: 67, },
    },
    'c-throw2': {
      pic: ['2', 1, 1], wait: 2, next: 'c-throw3', move: [1, 0], center: [39, 79],
      cpoint: { x: 66, y: 59, injury: 20, frame: 'falling', },
      bdy: { x: 16, y: 12, w: 45, h: 65, },
    },
    'c-throw3': {
      pic: ['2', 1, 2], wait: 1, next: 'c-throw4', move: [1, 0], center: [34, 79], sound: '007.wav',
      cpoint: { x: -4, y: 38, frame: 'falling', },
      itr: { x: -48, y: 22, w: 107, h: 57, move: [-14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 15, y: 12, w: 42, h: 70, },
    },
    'c-throw4': {
      pic: ['2', 1, 3], wait: 2, next: 'c-throw5', move: [0, 0], center: [40, 79],
      cpoint: { x: 12, y: 19, frame: 'falling', },
      itr: { x: -35, y: -19, w: 109, h: 60, move: [-14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 23, y: 9, w: 42, h: 70, },
    },
    'c-throw5': {
      pic: ['2', 1, 4], wait: 2, next: 'c-throw6', move: [-2, 0], center: [38, 79],
      cpoint: { x: 71, y: 19, frame: 'falling', },
      itr: { x: 14, y: -16, w: 107, h: 67, move: [14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 16, y: 11, w: 41, h: 69, },
    },
    'c-throw6': {
      pic: ['2', 1, 5], wait: 1, next: 'c-throw7', move: [-1, 0], center: [39, 79],
      cpoint: { x: 74, y: 53, frame: 'falling', },
      itr: { x: 18, y: 10, w: 106, h: 65, move: [14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 11, y: 11, w: 45, h: 69, },
    },
    'c-throw7': {
      pic: ['2', 1, 5], wait: 1, next: 'c-throw8', move: [-1, 0], center: [39, 79],
      cpoint: { x: 74, y: 53, frame: 'falling', },
      itr: { x: 16, y: 11, w: 108, h: 64, move: [14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 11, y: 11, w: 45, h: 69, },
    },
    'c-throw8': {
      pic: ['2', 1, 1], wait: 1, next: 'c-throw9', move: [0, 0], center: [39, 79],
      cpoint: { x: 66, y: 57, frame: 'falling', },
      itr: { x: -15, y: 16, w: 119, h: 65, move: [14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 18, y: 11, w: 42, h: 68, },
    },
    'c-throw9': {
      pic: ['2', 1, 2], wait: 1, next: 'c-throw10', move: [0, 0], center: [36, 79],
      cpoint: { x: -5, y: 24, frame: 'falling', },
      itr: { x: -49, y: 0, w: 123, h: 55, move: [-14, 0], effect: 'falling', vrest: 75, injury: 65, },
      bdy: { x: 9, y: 8, w: 49, h: 72, },
    },
    'c-throw10': {
      pic: ['2', 1, 6], wait: 1, next: 'c-throw11', move: [0, 0], center: [43, 79], sound: '007.wav',
      cpoint: { x: 9, y: 49, frame: 'falling', move: [-8, -8], },
      bdy: { x: 19, y: 15, w: 28, h: 65, },
    },
    'c-throw11': {
      pic: ['2', 1, 6], wait: 3, next: -999, move: [0, 0], center: [43, 79],
      bdy: { x: 19, y: 15, w: 28, h: 65, },
    },




    '1000foot': {
      pic: ['2', 0, 0], wait: 1, next: '1000foot2', move: [0, 0], center: [44, 79],
      bdy: { x: 23, y: 14, w: 35, h: 64, },
    },
    '1000foot2': {
      pic: ['2', 0, 1], wait: 2, next: '1000foot3', move: [0, 0], center: [27, 79],
      bdy: { x: 23, y: 14, w: 35, h: 64, },
    },
    '1000foot3': {
      pic: ['2', 0, 2], wait: 1, next: '1000foot4', move: [2, 0], center: [23, 81], sound: '003.wav',
      bdy: { x: 24, y: 21, w: 44, h: 54, },
    },
    '1000foot4': {
      pic: ['2', 0, 3], wait: 1, next: '1000foot5', move: [8, 0], center: [28, 78],
      bdy: { x: 18, y: 18, w: 53, h: 41, },
    },
    '1000foot5': {
      pic: ['2', 0, 4], wait: 1, next: '1000foot6', move: [12, 0], center: [24, 84],
      bdy: { x: 10, y: 17, w: 43, h: 46, },
    },
    '1000foot6': {
      pic: ['2', 0, 5], wait: 2, next: '1000foot7', move: [12, 0], center: [38, 78], sound: '007.wav',
      itr: { x: 11, y: 31, w: 68, h: 27, move: [13, 0], effect: 'injured', vrest: 7, injury: 20, },
      bdy: { x: 13, y: 6, w: 41, h: 40, },
    },
    '1000foot7': {
      pic: ['2', 0, 6], wait: 2, next: '1000foot8', move: [12, 0], center: [38, 77], sound: '069.wav',
      bdy: { x: 9, y: 7, w: 45, h: 38, },
    },
    '1000foot8': {
      pic: ['2', 0, 7], wait: 2, next: '1000foot9', move: [12, 0], center: [38, 78], sound: '007.wav',
      itr: { x: 11, y: 31, w: 68, h: 27, move: [13, 0], effect: 'injured', vrest: 7, injury: 20, },
      bdy: { x: 9, y: 8, w: 45, h: 35, },
    },
    '1000foot9': {
      pic: ['2', 0, 8], wait: 2, next: '1000foot10', move: [12, 0], center: [38, 77], sound: '069.wav',
      itr: { x: 11, y: 31, w: 68, h: 27, move: [13, 0], effect: 'injured', vrest: 7, injury: 20, },
      bdy: { x: 10, y: 9, w: 44, h: 33, },
    },
    '1000foot10': {
      pic: ['2', 0, 5], wait: 2, next: '1000foot11', move: [12, 0], center: [38, 78], sound: '007.wav',
      bdy: { x: 10, y: 10, w: 38, h: 37, },
    },
    '1000foot11': {
      pic: ['2', 0, 6], wait: 2, next: '1000foot12', move: [12, 0], center: [38, 77], sound: '069.wav',
      itr: { x: 11, y: 31, w: 68, h: 27, move: [13, 0], effect: 'injured', vrest: 7, injury: 20, },
      bdy: { x: 9, y: 9, w: 40, h: 35, },
    },
    '1000foot12': {
      pic: ['2', 0, 7], wait: 2, next: '1000foot13', move: [12, 0], center: [38, 78], sound: '007.wav',
      bdy: { x: 7, y: 8, w: 36, h: 37, },
    },
    '1000foot13': {
      pic: ['2', 0, 8], wait: 2, next: '1000foot14', move: [12, 0], center: [38, 77], sound: '069.wav',
      itr: { x: 9, y: 22, w: 81, h: 35, move: [17, -7], effect: 'falling', vrest: 7, injury: 30, },
      bdy: { x: 9, y: 8, w: 40, h: 38, },
    },
    '1000foot14': {
      pic: ['2', 0, 9], wait: 2, next: '1000foot15', move: [5, 0], center: [46, 70],
      bdy: { x: 16, y: 13, w: 48, h: 54, },
    },
    '1000foot15': {
      pic: ['0', 3, 6], wait: 4, next: 999, move: [0, 0], center: [46, 76], sound: '009.wav',
      bdy: { x: 24, y: 43, w: 33, h: 37, },
      bdy: { x: 32, y: 24, w: 28, h: 28, },
    },


  }
};




