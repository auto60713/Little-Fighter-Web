lf2.character.Deep = {
  setting: {
    name: 'Deep',
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
      pic: ['0', 0, 0], wait: 4, next: 'standing2', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 4, next: 'standing3', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 4, next: 'standing4', move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 4, next: 999, move: [0, 0], center: [37, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [5, 0], center: [28, 78], flip: true, hitHold: true,
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 9, y: 11, w: 32, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [31, 79], flip: true, hitHold: true,
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 16, y: 11, w: 29, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [28, 79], flip: true, hitHold: true,
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 14, y: 11, w: 26, h: 69, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [26, 78], flip: true, hitHold: true,
      itr: { x: 40, y: 16, w: 25, h: 65, },
      bdy: { x: 10, y: 10, w: 29, h: 68, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },


    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [8, 0], center: [32, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [8, 0], center: [32, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [8, 0], center: [26, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dash_sword', B4: 'blast',
      },
    },


    'punch': {
      pic: ['0', 1, 0], wait: 3, next: 'punch2', move: [0, 0], center: [40, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 8], wait: 1, next: 'punch3', move: [0, 0], center: [23, 79], sound: '007.wav',
      itr: { x: 8, y: 47, w: 43, h: 17, move: [2, 0], fall: false, injury: 35, },
      bdy: { x: 7, y: 14, w: 30, h: 65, },
      bdy: { x: 2, y: 38, w: 60, h: 18, },
    },
    'punch3': {
      pic: ['0', 1, 1], wait: 1, next: 999, move: [0, 0], center: [24, 79],
      itr: { x: 31, y: 32, w: 47, h: 26, move: [2, 0], fall: false, injury: 35, },
      bdy: { x: 9, y: 14, w: 31, h: 67, },
      bdy: { x: 2, y: 38, w: 60, h: 18, },
    },


    'jump_attack': {
      pic: ['0', 1, 4], wait: 1, next: 'jump_attack2', move: [0, 0], center: [28, 80], sound: '007.wav',
      bdy: { x: 12, y: 12, w: 30, h: 63, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 1, next: 'jump_attack3', move: [0, 0], center: [21, 78],
      itr: { x: 32, y: 16, w: 45, h: 75, move: [7, 7], fall: true, arest: 15, injury: 60, },
      bdy: { x: 11, y: 7, w: 39, h: 69, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 11, next: 999, move: [0, 0], center: [29, 77],
      bdy: { x: 24, y: 9, w: 32, h: 68, },
    },

    'run_attack': {
      pic: ['1', 3, 2], wait: 4, next: 'run_attack2', move: [6, 0], center: [31, 79],
      bdy: { x: 16, y: 10, w: 29, h: 68, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 2, next: 'run_attack3', move: [4, 0], center: [19, 79], sound: '007.wav',
      itr: { x: 41, y: 4, w: 36, h: 50, move: [-3, 12], injury: 60, },
      bdy: { x: 8, y: 51, w: 38, h: 27, },
      bdy: { x: 14, y: 16, w: 27, h: 36, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 3, next: 'run_attack4', move: [0, 0], center: [14, 79],
      itr: { x: 43, y: 37, w: 40, h: 42, move: [5, 12], fall: true, vrest: 15, injury: 15, },
      bdy: { x: 2, y: 57, w: 41, h: 22, },
      bdy: { x: 18, y: 26, w: 33, h: 38, },
    },
    'run_attack4': {
      pic: ['1', 3, 5], wait: 3, next: 999, move: [0, 0], center: [14, 79],
      bdy: { x: 2, y: 57, w: 41, h: 22, },
      bdy: { x: 20, y: 21, w: 27, h: 42, },
    },

    'dash_attack': {
      pic: ['1', 3, 6], wait: 1, next: 'dash_attack2', move: [0, 0], center: [40, 77], sound: '007.wav',
      bdy: { x: 22, y: 7, w: 44, h: 62, },
    },
    'dash_attack2': {
      pic: ['1', 3, 7], wait: 2, next: 'dash_attack3', move: [0, 0], center: [15, 78],
      itr: { x: 22, y: 5, w: 58, h: 64, move: [12, 12], fall: true, vrest: 12, injury: 70, },
      bdy: { x: 5, y: 9, w: 34, h: 59, },
    },
    'dash_attack3': {
      pic: ['1', 3, 8], wait: 0, next: 0, move: [0, 0], center: [22, 78],
      bdy: { x: 17, y: 12, w: 41, h: 63, },
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
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, -8], center: [33, 79], flip: true,
      bdy: { x: 18, y: 26, w: 30, h: 54, },
      hit: {
        R: 'jump2Move', L: 'jump2Move',
      },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, 0], center: [34, 79], sound: '017.wav', flip: true,
      bdy: { x: 15, y: 27, w: 35, h: 54, },
    },
    'jump2Move': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [5, 0], center: [34, 79], sound: '017.wav', flip: true,
      bdy: { x: 15, y: 27, w: 35, h: 54, },
    },
    'jumping': {
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 3, w: 30, h: 77, },
      bdy: { x: 31, y: 24, w: 36, h: 21, },
      hit: {
        B1: 'jump_attack',
      },
    },


    'dash': {
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [7, -5], center: [46, 79],
      bdy: { x: 39, y: 6, w: 30, h: 68, },
      bdy: { x: 20, y: 34, w: 33, h: 12, },
      hit: {
        B1: 'dash_attack',
      },
    },
    'dash2': {
      pic: ['0', 6, 3], wait: 8, next: 'dash3', move: [0, 0], center: [46, 79],
      bdy: { x: 39, y: 6, w: 30, h: 68, },
      bdy: { x: 20, y: 34, w: 33, h: 12, },
      hit: {
        B1: 'dash_attack',
      },
    },
    'dash3': {
      pic: ['1', 4, 2], wait: 2, next: 'dash3', move: [0, 0], center: [50, 79],
      bdy: { x: 37, y: 5, w: 32, h: 68, },
      bdy: { x: 16, y: 29, w: 37, h: 11, },
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

    // 第一刀波
    blast: {
      next: 'blast2', pic: ['1', 5, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast2: {
      next: 'blast3', pic: ['1', 6, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast3: {
      next: 'blast4', pic: ['1', 7, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast4: {
      next: 'blast5', pic: ['1', 8, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast5: {
      next: 999, pic: ['1', 9, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B4: 'blast6',
      },
    },
    // 第二刀波
    blast6: {
      next: 'blast7', pic: ['1', 8, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast7: {
      next: 'blast8', pic: ['1', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast8: {
      next: 'blast9', pic: ['1', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast9: {
      next: 'blast10', pic: ['1', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast10: {
      next: 999, pic: ['1', 9, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B4: 'blast11',
      },
    },
    // 第三刀波
    blast11: {
      next: 'blast12', pic: ['1', 0, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast12: {
      next: 'blast13', pic: ['1', 1, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast13: {
      next: 'blast14', pic: ['1', 0, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast14: {
      next: 'blast15', pic: ['1', 1, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast15: {
      next: 'blast16', pic: ['1', 9, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast16: {
      next: 999, pic: ['1', 9, 5], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
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
      itr: { x: 18, y: 18, w: 76, h: 62, move: [10, -8], fall: true, vrest: 10, injury: 54, },
      bdy: { x: 2, y: 21, w: 18, h: 58, },
    },
    'dash_sword4': {
      pic: ['2', 2, 3], wait: 1, next: 'dash_sword5', move: [6, 0], center: [42, 78],
      itr: { x: -4, y: 47, w: 62, h: 24, move: [-7, 0], fall: false, injury: 15, },
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
      itr: { x: 2, y: 15, w: 90, h: 63, move: [10, -6], fall: true, vrest: 10, injury: 42, },
      bdy: { x: 5, y: 16, w: 17, h: 63, },
    },
    'dash_sword8': {
      pic: ['2', 2, 7], wait: 1, next: 'dash_sword9', move: [6, 0], center: [19, 78],
      itr: { x: 43, y: 0, w: 46, h: 78, move: [10, -6], fall: true, vrest: 10, injury: 42, },
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
      itr: { x: 25, y: 4, w: 57, h: 77, move: [10, -7], fall: true, vrest: 10, injury: 42, },
      bdy: { x: 9, y: 12, w: 15, h: 65, },
    },
    'dash_sword12': {
      pic: ['2', 3, 8], wait: 1, next: 'dash_sword13', move: [6, 0], center: [48, 78],
      itr: { x: 4, y: 38, w: 82, h: 39, move: [-8, 0], fall: false, injury: 42, },
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
      itr: { x: -4, y: 27, w: 99, h: 42, move: [17, -11], fall: true, vrest: 10, injury: 48, },
      bdy: { x: 5, y: 19, w: 15, h: 63, },
    },
    'dash_sword16': {
      pic: ['2', 3, 4], wait: 1, next: 'dash_sword17', move: [12, 0], center: [14, 78],
      itr: { x: -6, y: 31, w: 98, h: 34, move: [17, -11], fall: true, vrest: 10, injury: 48, },
      bdy: { x: 6, y: 13, w: 15, h: 69, },
    },
    'dash_sword17': {
      pic: ['2', 3, 3], wait: 1, next: 'dash_sword18', move: [0, 0], center: [42, 78],
      itr: { x: -11, y: 30, w: 102, h: 18, move: [-7, 0], fall: false, injury: 20, },
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





    // 第一上斬
    jumpSword: {
      next: 'jumpSword2', pic: ['2', 0, 0], center: [40, 80], wait: 2, move: [2, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword2: {
      next: 'jumpSword3', pic: ['2', 1, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword3: {
      next: 'jumpSword4', pic: ['2', 2, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword4: {
      next: 'jumpSword5', pic: ['2', 3, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword5: {
      next: 'jumpSword6', pic: ['2', 4, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword6: {
      next: 'jumpSword7', pic: ['2', 7, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword7: {
      next: 'jumpSword8', pic: ['2', 6, 2], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'jumpSword15',
      },
    },
    jumpSword8: {
      next: 999, pic: ['2', 5, 2], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword9', U: 'jumpSword15',
      },
    },

    // 第二上斬
    jumpSword9: {
      next: 'jumpSword10', pic: ['2', 1, 1], center: [40, 80], wait: 2, move: [2, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword10: {
      next: 'jumpSword11', pic: ['2', 0, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword11: {
      next: 'jumpSword12', pic: ['2', 2, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword12: {
      next: 'jumpSword13', pic: ['2', 3, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword13: {
      next: 'jumpSword14', pic: ['2', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'jumpSword15',
      },
    },
    jumpSword14: {
      next: 999, pic: ['2', 0, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword', U: 'jumpSword15',
      },
    },


    // 上斬跳
    jumpSword15: {
      next: 'jumpSword16', pic: ['2', 5, 0], center: [40, 80], wait: 2, move: [5, -8],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword16: {
      next: 'jumpSword16', pic: ['2', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword17',
      },
    },

    // 下斬
    jumpSword17: {
      next: 'jumpSword18', pic: ['2', 7, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword18: {
      next: 'jumpSword19', pic: ['2', 8, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword19: {
      next: 'jumpSword20', pic: ['2', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword20: {
      next: 'jumpSword21', pic: ['2', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword21: {
      next: 'jumpSword21', pic: ['2', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

  }
};




