lf2.character.Firen = {
  setting: {
    file: {
      '0': { w: 80, h: 80 },
      '1': { w: 80, h: 80 },
      '2': { w: 80, h: 80 },
    },
    hp: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 3 * 4, next: 'standing2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 3 * 6, next: 'standing3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 3 * 5, next: 'standing4', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 3 * 5, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3 * 3, next: 'walking2', move: [4, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3 * 3, next: 'walking3', move: [4, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3 * 3, next: 'walking4', move: [4, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3 * 3, next: 'walking', move: [4, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 5, next: 'running2', move: [6, 0], center: [35, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 5, next: 'running3', move: [6, 0], center: [41, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 5, next: 'running', move: [6, 0], center: [36, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'explosion', B5: 'burn_run', B4: 'ball',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 3 * 2, next: 'punch2', move: [1, 0], center: [37, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 3 * 3, next: 999, move: [0, 0], center: [36, 79], sound: '007.wav',
      itr: { x: 33, y: 33, w: 42, h: 16, move: [10, 0], effect: 'injured', arest: 10, injury: 20, },
      bdy: { x: 25, y: 11, w: 35, h: 69, },
    },

    'jump_attack': {
      pic: ['0', 1, 4], wait: 6, next: 'jump_attack2', move: [0, 0], center: [32, 85], sound: '007.wav',
      bdy: { x: 15, y: 10, w: 39, h: 63, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 5, next: 'jump_attack3', move: [0, 0], center: [33, 84],
      itr: { x: 30, y: 44, w: 42, h: 27, move: [7, 0], effect: 'falling', arest: 15, injury: 35, },
      bdy: { x: 21, y: 14, w: 33, h: 57, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 4, next: 'jump_attack3', move: [0, 0], center: [35, 84],
      bdy: { x: 17, y: 13, w: 39, h: 58, },
    },

    'run_attack': {
      pic: ['1', 3, 2], wait: 3 * 1, next: 'run_attack2', move: [6, 0], center: [34, 79],
      bdy: { x: 19, y: 24, w: 35, h: 54, },
      bdy: { x: 10, y: 36, w: 27, h: 15, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 3 * 1, next: 'run_attack3', move: [4, 0], center: [30, 79], sound: '007.wav',
      bdy: { x: 8, y: 51, w: 38, h: 27, },
      bdy: { x: 9, y: 8, w: 35, h: 47, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 3 * 2, next: 'run_attack4', move: [0, 0], center: [28, 79],
      itr: { x: 29, y: 22, w: 47, h: 37, move: [10, 0], effect: 'falling', arest: 15, injury: 50, },
      bdy: { x: 10, y: 59, w: 41, h: 24, },
      bdy: { x: 23, y: 19, w: 32, h: 37, },
    },
    'run_attack4': {
      pic: ['1', 3, 5], wait: 3 * 4, next: 999, move: [0, 0], center: [28, 79],
      itr: { x: 29, y: 22, w: 47, h: 37, move: [10, 0], effect: 'falling', arest: 15, injury: 50, },
      bdy: { x: 31, y: 27, w: 33, h: 28, },
      bdy: { x: 7, y: 55, w: 48, h: 26, },
    },

    'dash_attack': {
      pic: ['1', 3, 6], wait: 3 * 3, next: 'dash_attack2', move: [0, 0], center: [30, 78],
      bdy: { x: 24, y: 18, w: 25, h: 55, },
      bdy: { x: 13, y: 36, w: 52, h: 18, },
      bdy: { x: 31, y: 9, w: 25, h: 29, },
    },
    'dash_attack2': {
      pic: ['1', 3, 7], wait: 3 * 1, next: 'dash_attack3', move: [0, 0], center: [31, 78], sound: '007.wav',
      itr: { x: 27, y: 38, w: 53, h: 23, move: [12, -3], effect: 'falling', arest: 20, injury: 70, },
      bdy: { x: 22, y: 40, w: 33, h: 26, },
      bdy: { x: 24, y: 6, w: 30, h: 34, },
    },
    'dash_attack3': {
      pic: ['1', 3, 8], wait: 3 * 3, next: 'dash3', move: [0, 0], center: [33, 77],
      itr: { x: 27, y: 38, w: 53, h: 23, move: [12, -3], effect: 'falling', arest: 20, injury: 70, },
      bdy: { x: 23, y: 38, w: 28, h: 25, },
      bdy: { x: 22, y: 36, w: 50, h: 18, },
      bdy: { x: 24, y: 6, w: 30, h: 34, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 3 * 12, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60, },
      hit: {
        B2: 'defend',
      },
    },

    'falling': {
      pic: ['0', 3, 0], wait: 3 * 3, next: 'falling2', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3 * 3, next: 'falling3', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3 * 3, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3 * 3, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },

    'lyingDown': {
      pic: ['0', 3, 4], wait: 3 * 10, next: 999, move: [0, 0], center: [39, 72],
    },

    'jump': {
      pic: ['0', 6, 0], wait: 3 * 1, next: 'jump2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 3 * 1, next: 'jumping', move: [0, -8], center: [42, 79], sound: '017.wav', flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
      hit: {
        R: 'jumpingMove', L: 'jumpingMove',
      },
    },
    'jumpingMove': {
      pic: ['0', 6, 2], wait: 3 * 1, next: 'jumping', move: [4, 0], center: [39, 79], flip: true,
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
    },
    'jumping': {
      pic: ['0', 6, 2], wait: 3 * 1, next: 'jumping', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
      hit: {
        B1: 'jump_attack',
      },
    },

    'dash': {
      pic: ['0', 6, 3], wait: 3 * 0, next: 'dash2', move: [8, -5], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
    },
    'dash2': {
      pic: ['0', 6, 3], wait: 3 * 8, next: 'dash3', move: [0, 0], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
      hit: {
        B1: 'dash_attack',
      },
    },
    'dash3': {
      pic: ['1', 4, 2], wait: 3 * 2, next: 'dash3', move: [0, 0], center: [39, 79],
      bdy: { x: 35, y: 8, w: 27, h: 27, },
      bdy: { x: 16, y: 30, w: 39, h: 37, },
      hit: {
        B1: 'dash_attack',
      },
    },

    'injured': {
      pic: ['1', 5, 0], wait: 3 * 2, next: 'injured2', move: [0, 0], center: [35, 79],
      bdy: { x: 25, y: 17, w: 29, h: 61, },
    },
    'injured2': {
      pic: ['1', 5, 1], wait: 3 * 3, next: 999, move: [0, 0], center: [35, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },

    // ==============================================================================
    // 技能
    // ==============================================================================

    'ball': {
      pic: ['2', 0, 0], wait: 3 * 1, next: 'ball2', move: [0, 0], center: [44, 79], sound: '067.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball2': {
      pic: ['2', 0, 1], wait: 3 * 1, next: 'ball3', move: [1, 0], center: [44, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball3': {
      pic: ['2', 0, 5], wait: 3 * 1, next: 'ball4', move: [0, 0], center: [31, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball4': {
      pic: ['2', 0, 2], wait: 3 * 1, next: 'ball5', move: [0, 0], center: [33, 79],
      opoint: { x: 68, y: 44, frame: 'standing', },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball5': {
      pic: ['2', 0, 3], wait: 3 * 1, next: 'ball6', move: [0, 0], center: [34, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball6': {
      pic: ['2', 0, 4], wait: 3 * 2, next: 999, move: [0, 0], center: [30, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
      hit: {
        B4: 'ball7',
      },
    },

    'ball7': {
      pic: ['2', 0, 6], wait: 3 * 1, next: 'ball8', move: [0, 0], center: [30, 79], sound: '067.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball8': {
      pic: ['2', 0, 7], wait: 3 * 1, next: 'ball9', move: [0, 0], center: [30, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball9': {
      pic: ['2', 0, 8], wait: 3 * 1, next: 'ball10', move: [1, 0], center: [30, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball10': {
      pic: ['2', 0, 9], wait: 3 * 1, next: 'ball11', move: [0, 0], center: [32, 79],
      opoint: { x: 59, y: 44, frame: 'standing', },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball11': {
      pic: ['2', 1, 9], wait: 3 * 1, next: 'ball12', move: [0, 0], center: [32, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball12': {
      pic: ['2', 1, 8], wait: 3 * 2, next: 999, move: [0, 0], center: [30, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
      hit: {
        B4: 'ball13',
      },
    },

    'ball13': {
      pic: ['2', 1, 7], wait: 3 * 1, next: 'ball14', move: [0, 0], center: [30, 79], sound: '067.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball14': {
      pic: ['2', 1, 6], wait: 3 * 1, next: 'ball15', move: [0, 0], center: [33, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball15': {
      pic: ['2', 1, 5], wait: 3 * 1, next: 'ball16', move: [1, 0], center: [34, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball16': {
      pic: ['2', 1, 4], wait: 3 * 1, next: 'ball17', move: [0, 0], center: [34, 79],
      opoint: { x: 71, y: 43, frame: 'standing', },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball17': {
      pic: ['2', 1, 3], wait: 3 * 1, next: 'ball18', move: [0, 0], center: [34, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'ball18': {
      pic: ['2', 1, 2], wait: 3 * 2, next: 999, move: [0, 0], center: [32, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },


    'burn_run': {
      pic: ['2', 2, 3], wait: 5, next: 'burn_run2', move: [0, 0], center: [32, 79], sound: '003.wav',
      bdy: { x: 17, y: 15, w: 41, h: 62, },
    },
    'burn_run2': {
      pic: ['2', 2, 4], wait: 5, next: 'burn_run3', move: [6, 0], center: [36, 79], sound: '070.wav',
      bdy: { x: 30, y: 16, w: 31, h: 62, },
    },
    'burn_run3': {
      pic: ['2', 2, 5], wait: 5, next: 'burn_run7', move: [6, 0], center: [32, 79], sound: '004.wav',
      opoint: { x: 18, y: 81, frame: 'ground_fire', },
      itr: { x: 20, y: 11, w: 49, h: 70, move: [2, -4], effect: 'falling', vrest: 20, injury: 45, },
      bdy: { x: 18, y: 14, w: 43, h: 65, },
      hit: {
        B2: 'stop_running',
      },
    },

    'burn_run4': {
      pic: ['2', 2, 0], wait: 3 * 2, next: 'burn_run5', move: [6, 0], center: [32, 79], sound: '003.wav',
      opoint: { x: 18, y: 81, frame: 'ground_fire', },
      itr: { x: 20, y: 11, w: 49, h: 70, move: [2, -4], effect: 'falling', vrest: 20, injury: 45, },
      bdy: { x: 12, y: 10, w: 51, h: 70, },
      hit: {
        B2: 'stop_running',
      },
    },
    'burn_run5': {
      pic: ['2', 2, 1], wait: 3 * 2, next: 'burn_run6', move: [6, 0], center: [37, 79], sound: '070.wav',
      opoint: { x: 18, y: 81, frame: 'ground_fire', },
      itr: { x: 20, y: 11, w: 49, h: 70, move: [2, -4], effect: 'falling', vrest: 20, injury: 45, },
      bdy: { x: 19, y: 12, w: 50, h: 68, },
      hit: {
        B2: 'stop_running',
      },
    },
    'burn_run6': {
      pic: ['2', 2, 2], wait: 3 * 2, next: 'burn_run7', move: [6, 0], center: [33, 79], sound: '004.wav',
      opoint: { x: 18, y: 81, frame: 'ground_fire', },
      itr: { x: 20, y: 11, w: 49, h: 70, move: [2, -4], effect: 'falling', vrest: 20, injury: 45, },
      bdy: { x: 16, y: 11, w: 47, h: 69, },
      hit: {
        B2: 'stop_running',
      },
    },
    'burn_run7': {
      pic: ['2', 2, 1], wait: 3 * 2, next: 'burn_run4', move: [6, 0], center: [37, 79], sound: '071.wav',
      opoint: { x: 18, y: 81, frame: 'ground_fire', },
      itr: { x: 20, y: 11, w: 49, h: 70, move: [2, -4], effect: 'falling', vrest: 20, injury: 45, },
      bdy: { x: 20, y: 12, w: 47, h: 68, },
      hit: {
        B2: 'stop_running',
      },
    },

    'stop_running': {
      pic: ['1', 4, 4], wait: 3 * 5, next: 999, move: [1, 0], center: [39, 79], sound: '009.wav',
      bdy: { x: 17, y: 25, w: 30, h: 55, },
      bdy: { x: 45, y: 47, w: 16, h: 32, },
    },



    'explosion': {
      pic: ['2', 3, 5], wait: 3 * 1, next: 'explosion2', move: [0, 0], center: [43, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion2': {
      pic: ['2', 3, 6], wait: 3 * 1, next: 'explosion3', move: [0, 0], center: [43, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion3': {
      pic: ['2', 3, 7], wait: 3 * 1, next: 'explosion4', move: [0, 0], center: [43, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion4': {
      pic: ['2', 3, 8], wait: 3 * 1, next: 'explosion5', move: [0, 0], center: [43, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion5': {
      pic: ['2', 3, 9], wait: 3 * 1, next: 'explosion6', move: [0, 0], center: [46, 79], sound: '071.wav',
      opoint: { x: 48, y: 81, frame: 'explosion', },
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion6': {
      pic: ['2', 3, 9], wait: 3 * 16, next: 'explosion7', move: [0, 0], center: [46, 79], sound: '020.wav',
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion7': {
      pic: ['2', 4, 9], wait: 3 * 1, next: 'explosion8', move: [0, 0], center: [46, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion8': {
      pic: ['2', 4, 8], wait: 3 * 1, next: 'explosion9', move: [0, 0], center: [43, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },
    'explosion9': {
      pic: ['2', 3, 5], wait: 3 * 2, next: 999, move: [0, 0], center: [44, 79],
      bdy: { x: 8, y: 19, w: 41, h: 60, },
    },



  }
};





lf2.derivative.Firen = {
  setting: {
    file: {
      'ball': { w: 82, h: 83 },
      'grd': { w: 36, h: 50 },
      'exp': { w: 160, h: 160 },
    },
  },
  frame: {


    'standing': {
      pic: ['ball', 0, 0], wait: 1, next: 'flying2', move: [10, 0], center: [51, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying2': {
      pic: ['ball', 0, 1], wait: 1, next: 'flying3', move: [10, 0], center: [53, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying3': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying4', move: [10, 0], center: [51, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying4': {
      pic: ['ball', 0, 3], wait: 1, next: 'flying5', move: [10, 0], center: [54, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying5': {
      pic: ['ball', 1, 0], wait: 1, next: 'flying6', move: [10, 0], center: [55, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying6': {
      pic: ['ball', 1, 1], wait: 1, next: 'standing', move: [10, 0], center: [54, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [10, -10], effect: 'falling', vrest: 10, injury: 45, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },

    'falling': {
      pic: ['ball', 2, 0], wait: 3, next: 'hiting2', move: [550, 0], center: [40, 43],
    },
    'hiting2': {
      pic: ['ball', 2, 1], wait: 3, next: 'hiting3', move: [0, 0], center: [40, 42],
    },
    'hiting3': {
      pic: ['ball', 2, 2], wait: 3, next: 'hiting4', move: [0, 0], center: [44, 41],
    },
    'hiting4': {
      pic: ['ball', 2, 3], wait: 3, next: 1000, move: [0, 0], center: [52, 40],
    },



    'ground_fire': {
      pic: ['grd', 0, 0], wait: 3 * 1, next: 'ground_fire2', move: [0, 0], center: [16, 47],
    },
    'ground_fire2': {
      pic: ['grd', 0, 1], wait: 3 * 1, next: 'ground_fire3', move: [0, 0], center: [16, 47],
      opoint: { x: -1, y: 47, frame: 'ground_fire5', },
    },

    'ground_fire3': {
      pic: ['grd', 0, 2], wait: 3 * 1, next: 'ground_fire4', move: [0, 0], center: [16, 46],
      itr: { x: 0, y: 15, w: 36, h: 32, move: [0, 0], effect: 'injured', vrest: 20, injury: 20, },
    },
    'ground_fire4': {
      pic: ['grd', 0, 3], wait: 3 * 1, next: 'ground_fire5', move: [0, 0], center: [16, 46],
    },
    'ground_fire5': {
      pic: ['grd', 1, 0], wait: 3 * 1, next: 'ground_fire6', move: [0, 0], center: [16, 46],
    },
    'ground_fire6': {
      pic: ['grd', 1, 1], wait: 3 * 1, next: 'ground_fire7', move: [0, 0], center: [16, 47],
    },
    'ground_fire7': {
      pic: ['grd', 1, 2], wait: 3 * 1, next: 'ground_fire8', move: [0, 0], center: [16, 46],
    },
    'ground_fire8': {
      pic: ['grd', 1, 3], wait: 3 * 1, next: 'ground_fire9', move: [0, 0], center: [16, 47], timeToGo: [50, 'ground_fire11'],
    },
    'ground_fire9': {
      pic: ['grd', 0, 0], wait: 3 * 1, next: 'ground_fire10', move: [0, 0], center: [16, 47],
    },
    'ground_fire10': {
      pic: ['grd', 0, 1], wait: 3 * 1, next: 'ground_fire3', move: [0, 0], center: [16, 47],
    },

    'ground_fire11': {
      pic: ['grd', 2, 0], wait: 3 * 1, next: 'ground_fire12', move: [0, 0], center: [16, 47],
    },
    'ground_fire12': {
      pic: ['grd', 2, 1], wait: 3 * 1, next: 'ground_fire13', move: [0, 0], center: [16, 47],
    },
    'ground_fire13': {
      pic: ['grd', 2, 2], wait: 3 * 1, next: 'ground_fire14', move: [0, 0], center: [16, 47],
    },
    'ground_fire14': {
      pic: ['grd', 3, 3], wait: 3 * 1, next: 1000, move: [0, 0], center: [16, 47],
    },



    'explosion': {
      pic: ['exp', 0, 0], wait: 3, next: 'explosion2', move: [0, 0], center: [78, 148],
      itr: { x: 23, y: 36, w: 112, h: 110, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion2': {
      pic: ['exp', 0, 1], wait: 3, next: 'explosion3', move: [0, 0], center: [78, 148],
      itr: { x: 20, y: 16, w: 122, h: 135, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion3': {
      pic: ['exp', 0, 2], wait: 3, next: 'explosion4', move: [0, 0], center: [78, 148],
      itr: { x: 19, y: 18, w: 127, h: 131, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion4': {
      pic: ['exp', 0, 3], wait: 3, next: 'explosion5', move: [0, 0], center: [78, 148],
      itr: { x: 7, y: 16, w: 146, h: 132, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion5': {
      pic: ['exp', 0, 4], wait: 3, next: 'explosion6', move: [0, 0], center: [78, 150],
      itr: { x: 13, y: 13, w: 137, h: 132, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion6': {
      pic: ['exp', 1, 0], wait: 3, next: 'explosion7', move: [0, 0], center: [78, 155],
      itr: { x: 7, y: 14, w: 145, h: 117, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion7': {
      pic: ['exp', 1, 1], wait: 3, next: 'explosion8', move: [0, 0], center: [78, 157],
      itr: { x: 15, y: 6, w: 128, h: 123, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion8': {
      pic: ['exp', 1, 2], wait: 3, next: 'explosion9', move: [0, 0], center: [78, 164],
      itr: { x: 15, y: 6, w: 128, h: 123, move: [12, -10], effect: 'falling', vrest: 300, injury: 125, symmetry: true, },
    },
    'explosion9': {
      pic: ['exp', 1, 3], wait: 3, next: 'explosion10', move: [0, 0], center: [78, 171],
    },
    'explosion10': {
      pic: ['exp', 1, 4], wait: 3, next: 'explosion11', move: [0, 0], center: [78, 177],
    },
    'explosion11': {
      pic: ['exp', 2, 0], wait: 3, next: 1000, move: [0, 0], center: [76, 172],
    },



  }
};
