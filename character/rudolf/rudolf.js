lf2.character.Rudolf = {
  setting: {
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 150, h: 88 },
      '3': { deputy: 'png', w: 95, h: 65 },
    },
    HP: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 4, next: 'standing2', move: [0, 0], center: [41, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 4, next: 'standing3', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 4, next: 'standing4', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 4, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [6, 0], center: [41, 78], flip: true, hitHold: true,
      bdy: { x: 22, y: 13, w: 34, h: 64, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [6, 0], center: [40, 79], flip: true, hitHold: true,
      bdy: { x: 23, y: 12, w: 33, h: 67, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [6, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 24, y: 11, w: 34, h: 67, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [6, 0], center: [43, 78], flip: true, hitHold: true,
      bdy: { x: 26, y: 12, w: 34, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [13, 0], center: [32, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [13, 0], center: [32, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [13, 0], center: [32, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: '+man', B5: 'jump_sword', B4: '',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 3, next: 'punch2', move: [0, 0], center: [40, 79],
      bdy: { x: 23, y: 15, w: 31, h: 63, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 2, next: 'punch3', move: [0, 0], center: [42, 79], sound: '007.wav',
      bdy: { x: 28, y: 14, w: 29, h: 63, },
    },
    'punch3': {
      pic: ['0', 1, 2], wait: 1, next: 'punch4', move: [0, 0], center: [40, 79],
      opoint: { x: 75, y: 57, move: [19, -3], frame: 'fly', },
      bdy: { x: 26, y: 16, w: 30, h: 64, },
    },
    'punch4': {
      pic: ['0', 1, 3], wait: 4, next: 999, move: [0, 0], center: [41, 79],
      bdy: { x: 23, y: 12, w: 32, h: 69, },
    },

    'jump_attack': {
      pic: ['0', 6, 7], wait: 1, next: 'jump_attack2', move: [0, 0], center: [18, 78],
      bdy: { x: 12, y: 12, w: 30, h: 63, },
    },
    'jump_attack2': {
      pic: ['0', 6, 8], wait: 1, next: 'jump_attack3', move: [0, 0], center: [18, 78], sound: '028.wav',
      itr: { x: 27, y: 8, w: 53, h: 40, move: [-2, -2], effect: 'injured', arest: 15, injury: 35, },
      bdy: { x: 8, y: 15, w: 34, h: 60, },
    },
    'jump_attack3': {
      pic: ['0', 6, 9], wait: 1, next: 'jump_attack4', move: [0, 0], center: [37, 77],
      itr: { x: 5, y: 2, w: 75, h: 22, move: [-2, -2], effect: 'injured', arest: 15, injury: 35, },
      bdy: { x: 25, y: 13, w: 32, h: 64, },
    },
    'jump_attack4': {
      pic: ['0', 2, 9], wait: 1, next: 'jump_attack5', move: [0, 0], center: [41, 75],
      bdy: { x: 28, y: 4, w: 35, h: 70, },
    },
    'jump_attack5': {
      pic: ['0', 3, 9], wait: 1, next: 'jump_attack6', move: [0, 0], center: [25, 79], sound: '029.wav',
      itr: { x: 42, y: 6, w: 37, h: 62, move: [1, 0], effect: 'injured', arest: 15, injury: 35, },
      bdy: { x: 10, y: 8, w: 34, h: 67, },
    },
    'jump_attack6': {
      pic: ['0', 4, 9], wait: 1, next: 'jump_attack7', move: [0, 0], center: [40, 78],
      itr: { x: 8, y: 39, w: 67, h: 38, move: [1, 0], effect: 'injured', arest: 15, injury: 35, },
      bdy: { x: 21, y: 8, w: 37, h: 68, },
    },
    'jump_attack7': {
      pic: ['0', 5, 9], wait: 12, next: 999, move: [0, 0], center: [46, 78],
      bdy: { x: 27, y: 8, w: 39, h: 71, },
    },

    'run_attack': {
      pic: ['2', 0, 0], wait: 1, next: 'run_attack2', move: [12, 0], center: [36, 85],
      bdy: { x: 21, y: 34, w: 50, h: 52, },
    },
    'run_attack2': {
      pic: ['2', 0, 1], wait: 1, next: 'run_attack3', move: [12, 0], center: [28, 85], sound: '029.wav',
      itr: { x: 56, y: 31, w: 66, h: 48, move: [-4, -4], injury: 45, },
      bdy: { x: 14, y: 33, w: 49, h: 51, },
    },
    'run_attack3': {
      pic: ['2', 0, 2], wait: 1, next: 'run_attack4', move: [0, 0], center: [39, 85], sound: '028.wav',
      itr: { x: 56, y: 31, w: 66, h: 48, move: [-4, -4], injury: 45, },
      bdy: { x: 21, y: 34, w: 51, h: 48, },
    },
    'run_attack4': {
      pic: ['2', 0, 3], wait: 1, next: 'run_attack5', move: [0, 0], center: [44, 85],
      itr: { x: 13, y: 30, w: 81, h: 53, move: [10, -7], effect: 'falling', vrest: 15, injury: 35, },
      bdy: { x: 27, y: 34, w: 49, h: 52, },
    },
    'run_attack5': {
      pic: ['2', 0, 4], wait: 6, next: 'run_attack6', move: [0, 0], center: [48, 85],
      bdy: { x: 32, y: 36, w: 45, h: 49, },
    },
    'run_attack6': {
      pic: ['1', 5, 9], wait: 2, next: 'run_attack7', move: [0, 0], center: [43, 78],
      bdy: { x: 22, y: 17, w: 46, h: 63, },
    },
    'run_attack7': {
      pic: ['1', 4, 9], wait: 3, next: 999, move: [0, 0], center: [42, 78], sound: '027.wav',
      bdy: { x: 21, y: 15, w: 42, h: 64, },
    },

    'dash_attack': {
      pic: ['2', 0, 5], wait: 1, next: 'dash_attack2', move: [0, 0], center: [36, 85],
      bdy: { x: 21, y: 34, w: 50, h: 52, },
    },
    'dash_attack2': {
      pic: ['2', 0, 6], wait: 1, next: 'dash_attack3', move: [0, 0], center: [41, 85], sound: '029.wav',
      bdy: { x: 29, y: 28, w: 53, h: 52, },
    },
    'dash_attack3': {
      pic: ['2', 0, 7], wait: 1, next: 'dash_attack4', move: [0, 0], center: [40, 85], sound: '028.wav',
      itr: { x: 53, y: 24, w: 54, h: 55, move: [10, -7], effect: 'falling', vrest: 15, injury: 75, },
      bdy: { x: 21, y: 34, w: 51, h: 48, },
    },
    'dash_attack4': {
      pic: ['2', 0, 8], wait: 1, next: 'dash_attack5', move: [0, 0], center: [44, 85],
      itr: { x: 53, y: 24, w: 54, h: 55, move: [10, -7], effect: 'falling', vrest: 15, injury: 75, },
      bdy: { x: 27, y: 34, w: 49, h: 52, },
    },
    'dash_attack5': {
      pic: ['2', 0, 9], wait: 6, next: 'dash_attack5', move: [0, 0], center: [39, 85],
      bdy: { x: 32, y: 36, w: 45, h: 49, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [28, 79], flip: true, hitHold: true,
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
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 22, y: 28, w: 36, h: 52, },

    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -8], center: [44, 79], sound: '017.wav', flip: true,
      bdy: { x: 27, y: 28, w: 34, h: 52, },
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
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [12, -5], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
    },
    'dash2': {
      pic: ['0', 6, 3], wait: 8, next: 'dash3', move: [0, -0], center: [39, 79],
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
      pic: ['1', 5, 0], wait: 2, next: 'injured2', move: [0, 0], center: [47, 79],
      bdy: { x: 25, y: 17, w: 29, h: 61, },
    },
    'injured2': {
      pic: ['1', 5, 1], wait: 3, next: 999, move: [0, 0], center: [42, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },

    // ==============================================================================
    // 技能
    // ==============================================================================


    'jump_sword': {
      pic: ['0', 2, 2], wait: 1, next: 'jump_sword2', move: [0, 0], center: [31, 78],
      bdy: { x: 15, y: 30, w: 52, h: 46, },
    },
    'jump_sword2': {
      pic: ['3', 0, 0], wait: 1, next: 'jump_sword3', move: [13, -4], center: [40, 59], sound: '017.wav',
      bdy: { x: 23, y: 7, w: 44, h: 57, },
    },
    'jump_sword3': {
      pic: ['3', 0, 0], wait: 2, next: 'jump_sword4', move: [0, 0], center: [40, 56],
      bdy: { x: 23, y: 6, w: 43, h: 56, },
    },
    'jump_sword4': {
      pic: ['3', 0, 1], wait: 1, next: 'jump_sword5', move: [0, 0], center: [22, 57], sound: '028.wav',
      itr: { x: 39, y: 19, w: 55, h: 44, move: [2, 0], effect: 'injured', vrest: 15, injury: 35, },
      bdy: { x: 4, y: 3, w: 61, h: 56, },
    },
    'jump_sword5': {
      pic: ['3', 0, 2], wait: 1, next: 'jump_sword6', move: [0, 0], center: [23, 57],
      itr: { x: 33, y: 1, w: 49, h: 38, move: [2, 0], effect: 'injured', vrest: 15, injury: 35, },
      bdy: { x: 5, y: 8, w: 56, h: 53, },
    },
    'jump_sword6': {
      pic: ['3', 0, 3], wait: 1, next: 'jump_sword7', move: [0, 0], center: [48, 57],
      itr: { x: 17, y: 5, w: 54, h: 24, move: [2, 0], effect: 'injured', vrest: 15, injury: 35, },
      bdy: { x: 29, y: 7, w: 51, h: 56, },
    },
    'jump_sword7': {
      pic: ['3', 0, 4], wait: 1, next: 'jump_sword8', move: [0, 0], center: [44, 54],
      bdy: { x: 26, y: 5, w: 50, h: 59, },
    },
    'jump_sword8': {
      pic: ['3', 0, 5], wait: 1, next: 'jump_sword9', move: [0, 0], center: [33, 52],
      bdy: { x: 16, y: 8, w: 47, h: 56, },
    },
    'jump_sword9': {
      pic: ['3', 0, 0], wait: 7, next: 999, move: [0, 0], center: [41, 54], sound: '027.wav',
      bdy: { x: 20, y: 6, w: 49, h: 57, },
    },


    '+man': {
      pic: ['1', 1, 5], wait: 3, next: '+man2', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man2': {
      pic: ['1', 1, 4], wait: 2, next: '+man3', move: [0, 0], center: [41, 79], sound: '062.wav',
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man3': {
      pic: ['1', 1, 5], wait: 2, next: '+man4', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man4': {
      pic: ['1', 1, 4], wait: 1, next: '+man5', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man5': {
      pic: ['1', 0, 8], wait: 1, next: '+man6', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man6': {
      pic: ['1', 0, 9], wait: 1, next: '+man7', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man7': {
      pic: ['1', 1, 8], wait: 1, next: '+man8', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man8': {
      pic: ['1', 1, 6], wait: 2, next: '+man9', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man9': {
      pic: ['1', 1, 9], wait: 1, next: '+man10', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man10': {
      pic: ['1', 1, 7], wait: 1, next: '+man11', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man11': {
      pic: ['1', 1, 8], wait: 1, next: '+man12', move: [0, 0], center: [41, 79],
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },
    '+man12': {
      pic: ['1', 0, 9], wait: 1, next: 999, move: [0, 0], center: [41, 79],
      // opoint: { x: 40, y: 79, move: [0, 0], frame: 'standing', },
      bdy: { x: 21, y: 18, w: 43, h: 62, },
    },


  }
};






lf2.derivative.Rudolf = {
  setting: {
    file: {
      'weapon': { deputy: 'png', w: 49, h: 49 },
    },
  },
  frame: {


    'fly': {
      pic: ['weapon', 0, 0], wait: 0, next: 'standing', move: [13, -3], center: [24, 40], drop: 1000, physical: true,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [2, 0], effect: 'injured', injury: 22, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },



    'standing': {
      pic: ['weapon', 0, 0], wait: 1, next: 'throwing2', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [2, 0], effect: 'injured', injury: 22, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing2': {
      pic: ['weapon', 0, 1], wait: 1, next: 'throwing3', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [2, 0], effect: 'injured', injury: 22, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing3': {
      pic: ['weapon', 0, 2], wait: 1, next: 'throwing4', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [2, 0], effect: 'injured', injury: 22, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing4': {
      pic: ['weapon', 0, 3], wait: 1, next: 999, move: [0, 0], center: [24, 40], drop: 1000, physical: true,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [2, 0], effect: 'injured', injury: 22, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },




    'injured': {
      pic: ['weapon', 0, 0], wait: 0, next: 'in_the_sky2', move: [-4, -4], center: [24, 40], drop: 1000, physical: true,
    },
    'falling': {
      pic: ['weapon', 0, 0], wait: 0, next: 'in_the_sky2', move: [-4, -4], center: [24, 40], drop: 1000, physical: true,
    },

    'in_the_sky': {
      pic: ['weapon', 0, 0], wait: 0, next: 'in_the_sky2', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
    },
    'in_the_sky2': {
      pic: ['weapon', 0, 1], wait: 0, next: 'in_the_sky3', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
    },
    'in_the_sky3': {
      pic: ['weapon', 0, 2], wait: 0, next: 'in_the_sky4', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
    },
    'in_the_sky4': {
      pic: ['weapon', 0, 3], wait: 0, next: 'in_the_sky', move: [0, 0], center: [24, 40], drop: 1000, physical: true,
    },


  }
};


