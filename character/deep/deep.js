lf2.character.Deep = {
  setting: {
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    hp: 650,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 12, next: 'standing2', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 12, next: 'standing3', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 12, next: 'standing4', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 12, next: 999, move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 9, next: 'walking2', move: [3, 0], center: [28, 78], flip: true, hitHold: true,
      bdy: { x: 9, y: 11, w: 32, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 9, next: 'walking3', move: [3, 0], center: [31, 79], flip: true, hitHold: true,
      bdy: { x: 16, y: 11, w: 29, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 9, next: 'walking4', move: [3, 0], center: [28, 79], flip: true, hitHold: true,
      bdy: { x: 14, y: 11, w: 26, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 9, next: 'walking', move: [3, 0], center: [26, 78], flip: true, hitHold: true,
      bdy: { x: 10, y: 10, w: 29, h: 68, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 9, next: 'running2', move: [6, 0], center: [32, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 9, next: 'running3', move: [6, 0], center: [32, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 9, next: 'running', move: [6, 0], center: [26, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'jump_sword', B5: 'dash_sword', B4: 'blast',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 9, next: 'punch2', move: [0, 0], center: [40, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 8], wait: 3, next: 'punch3', move: [0, 0], center: [23, 79], sound: '007.wav',
      itr: { x: 8, y: 47, w: 43, h: 17, move: [2, 0], effect: 'injured', arest: 10, injury: 35, },
      bdy: { x: 7, y: 14, w: 30, h: 65, },
      bdy: { x: 2, y: 38, w: 60, h: 18, },
    },
    'punch3': {
      pic: ['0', 1, 1], wait: 3, next: 999, move: [0, 0], center: [24, 79],
      itr: { x: 31, y: 32, w: 47, h: 26, move: [2, 0], effect: 'injured', arest: 10, injury: 35, },
      bdy: { x: 9, y: 14, w: 31, h: 67, },
      bdy: { x: 2, y: 38, w: 60, h: 18, },
    },

    'jump_attack': {
      pic: ['0', 1, 4], wait: 3, next: 'jump_attack2', move: [0, 0], center: [28, 80], sound: '007.wav',
      bdy: { x: 12, y: 12, w: 30, h: 63, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 3, next: 'jump_attack3', move: [0, 0], center: [21, 78],
      itr: { x: 32, y: 16, w: 45, h: 75, move: [7, 7], effect: 'falling', arest: 15, injury: 60, },
      bdy: { x: 11, y: 7, w: 39, h: 69, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 33, next: 999, move: [0, 0], center: [29, 77],
      bdy: { x: 24, y: 9, w: 32, h: 68, },
    },

    'run_attack': {
      pic: ['1', 3, 2], wait: 12, next: 'run_attack2', move: [6, 0], center: [31, 79],
      bdy: { x: 16, y: 10, w: 29, h: 68, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 6, next: 'run_attack3', move: [4, 0], center: [19, 79], sound: '007.wav',
      itr: { x: 41, y: 4, w: 36, h: 50, move: [-3, 12], injury: 60, },
      bdy: { x: 8, y: 51, w: 38, h: 27, },
      bdy: { x: 14, y: 16, w: 27, h: 36, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 9, next: 'run_attack4', move: [0, 0], center: [14, 79],
      itr: { x: 43, y: 37, w: 40, h: 42, move: [5, 12], effect: 'falling', vrest: 15, injury: 15, },
      bdy: { x: 2, y: 57, w: 41, h: 22, },
      bdy: { x: 18, y: 26, w: 33, h: 38, },
    },
    'run_attack4': {
      pic: ['1', 3, 5], wait: 9, next: 999, move: [0, 0], center: [14, 79],
      bdy: { x: 2, y: 57, w: 41, h: 22, },
      bdy: { x: 20, y: 21, w: 27, h: 42, },
    },

    'dash_attack': {
      pic: ['1', 3, 6], wait: 3, next: 'dash_attack2', move: [0, 0], center: [40, 77], sound: '007.wav',
      bdy: { x: 22, y: 7, w: 44, h: 62, },
    },
    'dash_attack2': {
      pic: ['1', 3, 7], wait: 6, next: 'dash_attack3', move: [0, 0], center: [15, 78],
      itr: { x: 22, y: 5, w: 58, h: 64, move: [12, 12], effect: 'falling', vrest: 12, injury: 70, },
      bdy: { x: 5, y: 9, w: 34, h: 59, },
    },
    'dash_attack3': {
      pic: ['1', 3, 8], wait: 10, next: 'dash_attack3', move: [0, 0], center: [22, 78],
      bdy: { x: 17, y: 12, w: 41, h: 63, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 10, next: 999, move: [0, 0], center: [37, 79], flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60, },
      hit: {
        B2: 'defend',
      },
    },

    'falling': {
      pic: ['0', 3, 0], wait: 9, next: 'falling2', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 9, next: 'falling3', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 9, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 9, next: 'falling4', move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },

    'lyingDown': {
      pic: ['0', 3, 4], wait: 30, next: 999, move: [0, 0], center: [39, 72],
    },


    'jump': {
      pic: ['0', 6, 0], wait: 3, next: 'jump2', move: [0, 0], center: [33, 79], flip: true,
      bdy: { x: 18, y: 26, w: 30, h: 54, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -7], center: [34, 79], sound: '017.wav', flip: true,
      bdy: { x: 15, y: 27, w: 35, h: 54, },
      hit: {
        R: 'jumpingMove', L: 'jumpingMove',
      },
    },
    'jumpingMove': {
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [3, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 3, w: 30, h: 77, },
      bdy: { x: 31, y: 24, w: 36, h: 21, },
    },
    'jumping': {
      pic: ['0', 6, 2], wait: 10, next: 'jumping', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 3, w: 30, h: 77, },
      bdy: { x: 31, y: 24, w: 36, h: 21, },
      hit: {
        B1: 'jump_attack',
      },
    },


    'dash': {
      pic: ['0', 6, 3], wait: 1, next: 'dash2', move: [6, -5], center: [46, 79],
      bdy: { x: 39, y: 6, w: 30, h: 68, },
      bdy: { x: 20, y: 34, w: 33, h: 12, },
    },
    'dash2': {
      pic: ['0', 6, 3], wait: 24, next: 'dash3', move: [0, 0], center: [46, 79],
      bdy: { x: 39, y: 6, w: 30, h: 68, },
      bdy: { x: 20, y: 34, w: 33, h: 12, },
      hit: {
        B1: 'dash_attack',
      },
    },
    'dash3': {
      pic: ['1', 4, 2], wait: 24, next: 'dash3', move: [0, 0], center: [50, 79],
      bdy: { x: 37, y: 5, w: 32, h: 68, },
      bdy: { x: 16, y: 29, w: 37, h: 11, },
      hit: {
        B1: 'dash_attack',
      },
    },

    'injured': {
      pic: ['1', 5, 0], wait: 6, next: 'injured2', move: [0, 0], center: [47, 79],
      bdy: { x: 25, y: 17, w: 29, h: 61, },
    },
    'injured2': {
      pic: ['1', 5, 1], wait: 9, next: 999, move: [0, 0], center: [42, 79],
      bdy: { x: 32, y: 16, w: 27, h: 63, },
      bdy: { x: 22, y: 37, w: 26, h: 42, },
    },

    // ==============================================================================
    // 技能
    // ==============================================================================

    'blast': {
      pic: ['1', 6, 5], wait: 3, next: 'blast2', move: [0, 0], center: [34, 79], sound: '043.wav',
      bdy: { x: 17, y: 14, w: 31, h: 66, },
      bdy: { x: 13, y: 43, w: 39, h: 19, },
    },
    'blast2': {
      pic: ['1', 6, 6], wait: 6, next: 'blast3', move: [0, 0], center: [15, 79], sound: '007.wav',
      itr: { x: 44, y: 12, w: 33, h: 55, move: [10, 0], effect: 'injured', injury: 15, },
      bdy: { x: 2, y: 13, w: 35, h: 67, },
      bdy: { x: 22, y: 39, w: 44, h: 15, },
    },
    'blast3': {
      pic: ['1', 6, 7], wait: 3, next: 'blast4', move: [0, 0], center: [42, 79],
      opoint: { x: 92, y: 45, move: [0, 0], frame: 'standing', },
      bdy: { x: 16, y: 10, w: 34, h: 27, },
      bdy: { x: 25, y: 20, w: 38, h: 61, },
    },
    'blast4': {
      pic: ['1', 6, 8], wait: 3, next: 'blast5', move: [0, 0], center: [42, 79],
      itr: { x: 15, y: 11, w: 21, h: 19, move: [2, 0], effect: 'injured', injury: 15, },
      bdy: { x: 25, y: 19, w: 37, h: 62, },
      bdy: { x: 16, y: 32, w: 35, h: 14, },
    },
    'blast5': {
      pic: ['1', 6, 9], wait: 6, next: 999, move: [0, 0], center: [46, 79],
      bdy: { x: 27, y: 11, w: 33, h: 70, },
      hit: {
        B1: 'blast6', B4: 'blast6',
      },
    },

    'blast6': {
      pic: ['1', 0, 8], wait: 3, next: 'blast7', move: [0, 0], center: [50, 79], sound: '043.wav',
      bdy: { x: 32, y: 9, w: 30, h: 72, },
      bdy: { x: 18, y: 39, w: 38, h: 12, },
    },
    'blast7': {
      pic: ['1', 0, 9], wait: 3, next: 'blast8', move: [0, 0], center: [48, 79], sound: '007.wav',
      bdy: { x: 32, y: 11, w: 31, h: 70, },
      bdy: { x: 21, y: 21, w: 44, h: 15, },
    },
    'blast8': {
      pic: ['1', 1, 8], wait: 2, next: 'blast9', move: [0, 0], center: [20, 79],
      itr: { x: 39, y: 31, w: 36, h: 48, move: [10, 0], effect: 'injured', injury: 15, },
      bdy: { x: 5, y: 15, w: 32, h: 66, },
    },
    'blast9': {
      pic: ['1', 1, 9], wait: 1, next: 'blast10', move: [0, 0], center: [25, 79],
      opoint: { x: 79, y: 53, move: [0, 0], frame: 'standing', },
      bdy: { x: 10, y: 15, w: 32, h: 65, },
    },
    'blast10': {
      pic: ['1', 3, 9], wait: 2, next: 999, move: [0, 0], center: [29, 79],
      bdy: { x: 12, y: 17, w: 38, h: 63, },
      hit: {
        B1: 'blast11', B4: 'blast11',
      },
    },

    'blast11': {
      pic: ['1', 3, 0], wait: 1, next: 'blast12', move: [0, 0], center: [45, 79], sound: '043.wav',
      bdy: { x: 32, y: 17, w: 37, h: 65, },
      bdy: { x: 19, y: 33, w: 28, h: 19, },
    },
    'blast12': {
      pic: ['1', 3, 1], wait: 1, next: 'blast13', move: [0, 0], center: [45, 79], sound: '007.wav',
      bdy: { x: 31, y: 11, w: 37, h: 70, },
      bdy: { x: 19, y: 38, w: 23, h: 22, },
    },
    'blast13': {
      pic: ['1', 4, 0], wait: 2, next: 'blast14', move: [0, 0], center: [24, 79],
      itr: { x: 34, y: 28, w: 42, h: 42, move: [10, 0], effect: 'injured', injury: 35, },
      bdy: { x: 15, y: 18, w: 38, h: 61, },
    },
    'blast14': {
      pic: ['1', 4, 1], wait: 1, next: 'blast15', move: [0, 0], center: [25, 79],
      opoint: { x: 78, y: 41, move: [0, 0], frame: 'standing', },
      bdy: { x: 15, y: 18, w: 34, h: 60, },
    },
    'blast15': {
      pic: ['1', 4, 9], wait: 2, next: 'blast16', move: [0, 0], center: [21, 79],
      bdy: { x: 8, y: 13, w: 38, h: 65, },
    },
    'blast16': {
      pic: ['1', 5, 9], wait: 2, next: 999, move: [0, 0], center: [20, 78],
      bdy: { x: 9, y: 12, w: 36, h: 68, },
    },

    'dash_sword': {
      pic: ['2', 2, 0], wait: 1, next: 'dash_sword2', move: [3, 0], center: [25, 78], sound: '045.wav',
      bdy: { x: 8, y: 14, w: 18, h: 60, },
    },
    'dash_sword2': {
      pic: ['2', 2, 1], wait: 1, next: 'dash_sword3', move: [6, 0], center: [18, 78], sound: '054.wav',
      bdy: { x: 3, y: 17, w: 19, h: 59, },
    },
    'dash_sword3': {
      pic: ['2', 2, 2], wait: 1, next: 'dash_sword4', move: [11, 0], center: [17, 78],
      itr: { x: 18, y: 18, w: 76, h: 62, move: [10, -8], effect: 'falling', vrest: 10, injury: 54, },
      bdy: { x: 2, y: 21, w: 18, h: 58, },
    },
    'dash_sword4': {
      pic: ['2', 2, 3], wait: 1, next: 'dash_sword5', move: [6, 0], center: [42, 78],
      itr: { x: -4, y: 47, w: 62, h: 24, move: [-7, 0], effect: 'injured', injury: 15, },
      bdy: { x: 20, y: 16, w: 20, h: 60, },
    },
    'dash_sword5': {
      pic: ['2', 2, 4], wait: 1, next: 'dash_sword6', move: [6, 0], center: [41, 78],
      bdy: { x: 25, y: 20, w: 16, h: 59, },
    },
    'dash_sword6': {
      pic: ['2', 2, 5], wait: 1, next: 'dash_sword7', move: [12, 0], center: [44, 78], sound: '054.wav',
      bdy: { x: 24, y: 15, w: 19, h: 64, },
    },
    'dash_sword7': {
      pic: ['2', 2, 6], wait: 1, next: 'dash_sword8', move: [6, 0], center: [26, 78],
      itr: { x: 2, y: 15, w: 90, h: 63, move: [10, -6], effect: 'falling', vrest: 10, injury: 42, },
      bdy: { x: 5, y: 16, w: 17, h: 63, },
    },
    'dash_sword8': {
      pic: ['2', 2, 7], wait: 1, next: 'dash_sword9', move: [6, 0], center: [19, 78],
      itr: { x: 43, y: 0, w: 46, h: 78, move: [10, -6], effect: 'falling', vrest: 10, injury: 42, },
      bdy: { x: 7, y: 12, w: 18, h: 65, },
    },
    'dash_sword9': {
      pic: ['2', 2, 8], wait: 1, next: 'dash_sword10', move: [6, 0], center: [26, 78],
      bdy: { x: 16, y: 14, w: 17, h: 63, },
    },
    'dash_sword10': {
      pic: ['2', 2, 9], wait: 1, next: 'dash_sword11', move: [12, 0], center: [19, 78], sound: '054.wav',
      bdy: { x: 7, y: 12, w: 18, h: 65, },
    },
    'dash_sword11': {
      pic: ['2', 3, 9], wait: 1, next: 'dash_sword12', move: [6, 0], center: [20, 78],
      itr: { x: 25, y: 4, w: 57, h: 77, move: [10, -7], effect: 'falling', vrest: 10, injury: 42, },
      bdy: { x: 9, y: 12, w: 15, h: 65, },
    },
    'dash_sword12': {
      pic: ['2', 3, 8], wait: 1, next: 'dash_sword13', move: [6, 0], center: [48, 78],
      itr: { x: 4, y: 38, w: 82, h: 39, move: [-8, 0], effect: 'injured', injury: 42, },
      bdy: { x: 36, y: 13, w: 17, h: 65, },
    },
    'dash_sword13': {
      pic: ['2', 3, 7], wait: 1, next: 'dash_sword14', move: [6, 0], center: [34, 78],
      bdy: { x: 23, y: 13, w: 22, h: 67, },
    },
    'dash_sword14': {
      pic: ['2', 3, 6], wait: 1, next: 'dash_sword15', move: [6, 0], center: [31, 78], sound: '054.wav',
      bdy: { x: 31, y: 11, w: 14, h: 69, },
    },
    'dash_sword15': {
      pic: ['2', 3, 5], wait: 1, next: 'dash_sword16', move: [6, 0], center: [10, 78],
      itr: { x: -4, y: 27, w: 99, h: 42, move: [17, -11], effect: 'falling', vrest: 10, injury: 48, },
      bdy: { x: 5, y: 19, w: 15, h: 63, },
    },
    'dash_sword16': {
      pic: ['2', 3, 4], wait: 1, next: 'dash_sword17', move: [12, 0], center: [14, 78],
      itr: { x: -6, y: 31, w: 98, h: 34, move: [17, -11], effect: 'falling', vrest: 10, injury: 48, },
      bdy: { x: 6, y: 13, w: 15, h: 69, },
    },
    'dash_sword17': {
      pic: ['2', 3, 3], wait: 1, next: 'dash_sword18', move: [0, 0], center: [42, 78],
      itr: { x: -11, y: 30, w: 102, h: 18, move: [-7, 0], effect: 'injured', injury: 20, },
      bdy: { x: 24, y: 30, w: 21, h: 48, },
    },
    'dash_sword18': {
      pic: ['2', 3, 2], wait: 1, next: 'dash_sword19', move: [0, 0], center: [42, 78],
      bdy: { x: 24, y: 22, w: 53, h: 58, },
    },
    'dash_sword19': {
      pic: ['2', 3, 1], wait: 1, next: 'dash_sword20', move: [0, 0], center: [34, 78],
      bdy: { x: 19, y: 17, w: 48, h: 62, },
    },
    'dash_sword20': {
      pic: ['2', 3, 0], wait: 2, next: 999, move: [0, 0], center: [35, 78],
      bdy: { x: 16, y: 16, w: 40, h: 65, },
    },



    'jump_sword': {
      pic: ['2', 0, 0], wait: 1, next: 'jump_sword2', move: [5, 0], center: [29, 78],
      bdy: { x: 13, y: 20, w: 13, h: 60, },
    },
    'jump_sword2': {
      pic: ['2', 0, 1], wait: 1, next: 'jump_sword3', move: [0, 0], center: [26, 68], sound: '054.wav',
      itr: { x: 6, y: 39, w: 83, h: 28, move: [6, -17], effect: 'falling', vrest: 10, injury: 54, },
      bdy: { x: 12, y: 12, w: 20, h: 59, },
    },
    'jump_sword3': {
      pic: ['2', 0, 2], wait: 1, next: 'jump_sword4', move: [0, 0], center: [23, 74],
      itr: { x: 26, y: -1, w: 61, h: 75, move: [6, -17], effect: 'falling', vrest: 10, injury: 54, },
      bdy: { x: 11, y: 17, w: 17, h: 57, },
    },
    'jump_sword4': {
      pic: ['2', 0, 3], wait: 1, next: 'jump_sword5', move: [0, 0], center: [57, 76],
      itr: { x: -7, y: -10, w: 101, h: 37, move: [-9, 0], effect: 'falling', vrest: 10, injury: 18, },
      bdy: { x: 62, y: 24, w: 11, h: 47, },
    },
    'jump_sword5': {
      pic: ['2', 0, 4], wait: 1, next: 'jump_sword6', move: [0, 0], center: [57, 73],
      itr: { x: -7, y: 26, w: 51, h: 40, move: [-8, 0], effect: 'falling', vrest: 10, injury: 18, },
      bdy: { x: 59, y: 17, w: 16, h: 55, },
    },
    'jump_sword6': {
      pic: ['2', 1, 7], wait: 1, next: 'jump_sword7', move: [0, 0], center: [57, 78],
      bdy: { x: 47, y: 22, w: 31, h: 54, },
      hit: {
        U: 'jump_sword9',
      },
    },
    'jump_sword7': {
      pic: ['2', 1, 6], wait: 1, next: 'jump_sword8', move: [0, 0], center: [48, 78],
      bdy: { x: 32, y: 20, w: 32, h: 57, },
      hit: {
        U: 'jump_sword9',
      },
    },
    'jump_sword8': {
      pic: ['2', 1, 5], wait: 3, next: 999, move: [0, 0], center: [30, 79], U: 'jump_sword-8',
      bdy: { x: 18, y: 16, w: 29, h: 63, },
      hit: {
        U: 'jump_sword9', B1: 'jump_swordII', B6: 'jump_swordII',
      },
    },

    // 跳
    'jump_sword9': {
      pic: ['2', 0, 5], wait: 1, next: 'jump_sword10', move: [9, -7], center: [50, 81], sound: '017.wav',
      bdy: { x: 28, y: 13, w: 53, h: 30, },
    },
    'jump_sword10': {
      pic: ['2', 0, 6], wait: 10, next: 'jump_sword10', move: [0, 0], center: [49, 80],
      bdy: { x: 19, y: 13, w: 60, h: 30, },
      hit: {
        B1: 'jump_sword11',
      },
    },

    // 跳攻
    'jump_sword11': {
      pic: ['2', 0, 7], wait: 1, next: 'jump_sword12', move: [0, -1], center: [52, 78],
      bdy: { x: 30, y: 14, w: 42, h: 28, },
    },
    'jump_sword12': {
      pic: ['2', 0, 8], wait: 1, next: 'jump_sword13', move: [0, 0], center: [51, 77], sound: '054.wav',
      itr: { x: 1, y: 5, w: 53, h: 20, move: [7, 12], effect: 'falling', vrest: 10, injury: 78, },
      bdy: { x: 30, y: 13, w: 41, h: 29, },
    },
    'jump_sword13': {
      pic: ['2', 0, 9], wait: 1, next: 'jump_sword14', move: [0, 1], center: [19, 75],
      itr: { x: 27, y: -2, w: 53, h: 63, move: [7, 12], effect: 'falling', vrest: 10, injury: 78, },
      bdy: { x: 3, y: 17, w: 29, h: 51, },
    },
    'jump_sword14': {
      pic: ['2', 1, 9], wait: 1, next: 'jump_sword15', move: [0, 0], center: [18, 74],
      itr: { x: 15, y: 39, w: 54, h: 43, move: [7, 12], effect: 'falling', vrest: 10, injury: 78, },
      bdy: { x: 4, y: 13, w: 32, h: 53, },
    },
    'jump_sword15': {
      pic: ['2', 1, 8], wait: 1, next: 'jump_sword15', move: [0, 0], center: [19, 72],
      bdy: { x: 3, y: 8, w: 30, h: 55, },
    },

    'jump_swordII': {
      pic: ['2', 1, 1], wait: 1, next: 'jump_swordII2', move: [5, 0], center: [12, 79],
      itr: { x: 0, y: 47, w: 81, h: 33, move: [6, -17], effect: 'falling', vrest: 10, injury: 60, },
      bdy: { x: 4, y: 19, w: 14, h: 58, },
    },
    'jump_swordII2': {
      pic: ['2', 1, 0], wait: 1, next: 'jump_swordII3', move: [0, 0], center: [12, 79], sound: '054.wav',
      itr: { x: 17, y: 15, w: 73, h: 55, move: [6, -17], effect: 'falling', vrest: 10, injury: 60, },
      bdy: { x: 4, y: 18, w: 17, h: 60, },
    },
    'jump_swordII3': {
      pic: ['2', 1, 2], wait: 1, next: 'jump_swordII4', move: [0, 0], center: [40, 80],
      itr: { x: 4, y: 2, w: 79, h: 39, move: [-5, -10], effect: 'falling', vrest: 10, injury: 30, },
      bdy: { x: 52, y: 21, w: 21, h: 61, },
    },
    'jump_swordII4': {
      pic: ['2', 1, 3], wait: 1, next: 'jump_swordII5', move: [0, 0], center: [40, 80],
      itr: { x: -8, y: 15, w: 49, h: 36, move: [-9, 0], effect: 'falling', vrest: 10, injury: 30, },
      bdy: { x: 54, y: 23, w: 17, h: 56, },
    },
    'jump_swordII5': {
      pic: ['2', 1, 4], wait: 1, next: 'jump_swordII6', move: [0, 0], center: [45, 79],
      bdy: { x: 37, y: 19, w: 30, h: 60, },
    },
    'jump_swordII6': {
      pic: ['2', 3, 0], wait: 2, next: 999, move: [0, 0], center: [36, 79],
      bdy: { x: 18, y: 14, w: 34, h: 65, },
      hit: {
        U: 'jump_sword9', B1: 'jump_sword', B6: 'jump_sword',
      },
    },

  }
};



lf2.derivative.Deep = {
  setting: {
    file: {
      'ball': { deputy: 'png', w: 82, h: 83 },
    },
  },
  frame: {

    'standing': {
      pic: ['ball', 0, 0], wait: 1, next: 'flying2', move: [15, 0], center: [40, 41], timeToGo: [10, 'falling'],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying2': {
      pic: ['ball', 0, 1], wait: 1, next: 'flying3', move: [15, 0], center: [35, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying3': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying4', move: [15, 0], center: [36, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying4': {
      pic: ['ball', 0, 3], wait: 1, next: 'flying5', move: [15, 0], center: [37, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying5': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying6', move: [15, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying6': {
      pic: ['ball', 0, 1], wait: 1, next: 'standing', move: [15, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },

    'falling': {
      pic: ['ball', 1, 0], wait: 1, next: 'hiting2', move: [0, 0], center: [39, 41],
    },
    'hiting2': {
      pic: ['ball', 1, 1], wait: 1, next: 'hiting3', move: [0, 0], center: [37, 41],
    },
    'hiting3': {
      pic: ['ball', 1, 2], wait: 1, next: 'hiting4', move: [0, 0], center: [37, 41],
    },
    'hiting4': {
      pic: ['ball', 1, 3], wait: 1, next: 1000, move: [0, 0], center: [28, 41],
    },



  }
};



