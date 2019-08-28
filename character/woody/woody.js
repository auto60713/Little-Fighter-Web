lf2.character.Woody = {
  setting: {
    name: 'Woody',
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

    // 站
    'standing': {
      pic: ['0', 0, 0], wait: 5, next: 'standing2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 3, next: 'standing3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 5, next: 'standing4', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 9, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },

    // 走
    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [5, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },

    // 跑
    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [10, 0], center: [36, 80], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [10, 0], center: [41, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [10, 0], center: [40, 81], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'cleg', B5: 'flyCrash', B4: 'teleport',
      },
    },

    // 站攻
    'punch': {
      pic: ['0', 1, 0], wait: 1, next: 'punch2', move: [1, 0], center: [42, 79],
      bdy: { x: 34, y: 15, w: 24, h: 63, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 1, next: 'punch3', move: [0, 0], center: [28, 79],
      itr: { x: 21, y: 30, w: 54, h: 23, move: [2, 0], injury: 20, },
      bdy: { x: 18, y: 14, w: 31, h: 64, },
    },
    'punch3': {
      pic: ['0', 1, 2], wait: 1, next: 'punch4', move: [0, 0], center: [34, 79],
      bdy: { x: 27, y: 11, w: 27, h: 66, },
    },
    'punch4': {
      pic: ['0', 1, 3], wait: 1, next: 999, move: [0, 0], center: [37, 79],
      bdy: { x: 19, y: 9, w: 36, h: 71, },
    },

    // 跳攻
    'jump_attack': {
      pic: ['0', 3, 7], wait: 2, next: 'jump_attack2', move: [0, 0], center: [38, 77],
      bdy: { x: 23, y: 3, w: 29, h: 74, },
    },
    'jump_attack2': {
      pic: ['0', 3, 8], wait: 1, next: 'jump_attack3', move: [0, 0], center: [30, 74],
      itr: { x: 22, y: 24, w: 38, h: 29, move: [-1, -5], injury: 35, },
      bdy: { x: 17, y: 5, w: 24, h: 68, },
    },
    'jump_attack3': {
      pic: ['0', 3, 8], wait: 2, next: 'jump_attack4', move: [0, 0], center: [30, 74],
      bdy: { x: 17, y: 5, w: 24, h: 68, },
    },
    'jump_attack4': {
      pic: ['0', 1, 8], wait: 5, next: 'jump_attack5', move: [0, 0], center: [31, 80],
      itr: { x: 23, y: 37, w: 41, h: 18, move: [7, 3], arest: 15, injury: 35, },
      bdy: { x: 11, y: 13, w: 28, h: 62, },
    },
    'jump_attack5': {
      pic: ['0', 6, 8], wait: 6, next: 999, move: [0, 0], center: [31, 80],
      bdy: { x: 11, y: 13, w: 28, h: 62, },
    },

    // 跑攻
    'run_attack': {
      pic: ['1', 3, 0], wait: 3, next: 'run_attack2', move: [6, 0], center: [35, 79],
      bdy: { x: 27, y: 6, w: 27, h: 70, },
    },
    'run_attack2': {
      pic: ['1', 3, 1], wait: 2, next: 'run_attack3', move: [4, 0], center: [22, 79],
      itr: { x: 25, y: 28, w: 54, h: 23, move: [3, 0], arest: 10, injury: 35, },
      bdy: { x: 22, y: 12, w: 25, h: 67, },
    },
    'run_attack3': {
      pic: ['1', 3, 2], wait: 1, next: 'run_attack4', move: [0, 0], center: [19, 79],
      bdy: { x: 10, y: 16, w: 38, h: 62, },
    },
    'run_attack4': {
      pic: ['1', 3, 3], wait: 3, next: 999, move: [0, 0], center: [34, 79],
      bdy: { x: 27, y: 9, w: 31, h: 71, },
    },

    // 跑跳攻
    'dash_attack': {
      pic: ['1', 3, 8], wait: 2, next: 'dash_attack2', move: [0, 0], center: [26, 78],
      bdy: { x: 15, y: 20, w: 47, h: 51, },
    },
    'dash_attack2': {
      pic: ['1', 3, 9], wait: 6, next: 'dash_attack3', move: [0, 0], center: [20, 78],
      itr: { x: 24, y: 23, w: 55, h: 39, move: [12, 0], arest: 20, injury: 70, },
      bdy: { x: 11, y: 20, w: 41, h: 48, },
    },
    'dash_attack3': {
      pic: ['1', 3, 8], wait: 4, next: 'dash3', move: [0, 0], center: [25, 78],
      bdy: { x: 15, y: 22, w: 55, h: 42, },
    },

    // 防
    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60, },
    },

    // 被打飛
    'falling': {
      pic: ['0', 3, 0], wait: 3, next: 'falling2', move: [0, 0], center: [39, 79], falling: true,
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3, next: 'falling3', move: [0, 0], center: [37, 85], falling: true,
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3, next: 'falling4', move: [0, 0], center: [39, 79], falling: true,
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3, next: 'lyingDown', move: [0, 0], center: [39, 79], falling: true,
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },

    'lyingDown': {
      pic: ['0', 3, 4], wait: 20, next: 999, move: [0, 0], center: [39, 66], lyingDown: true,
    },

    // 跳
    'jump': {
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, -8], center: [39, 79], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58, },
      hit: {
        R: 'jump2Move', L: 'jump2Move',
      },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jump3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
    },
    'jump2Move': {
      pic: ['0', 6, 1], wait: 1, next: 'jump3', move: [4, 0], center: [39, 79], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
    },
    'jump3': {
      pic: ['0', 6, 2], wait: 1, next: 'jump3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 20, y: 11, w: 29, h: 61, },
      hit: {
        B1: 'jump_attack', B4: 'teleport',
      },
    },

    // 跑跳
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


    // ==============================================================================
    // 技能
    // ==============================================================================

    'teleport': {
      pic: ['2', 3, 1], wait: 1, next: 'teleport2', move: [550, 550], center: [39, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },
    'teleport2': {
      pic: ['2', 3, 2], wait: 1, next: 'teleport3', move: [550, 550], center: [39, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },
    'teleport3': {
      pic: ['2', 3, 3], wait: 1, next: 'teleport4', move: [550, 550], center: [39, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },
    'teleport4': {
      pic: ['2', 3, 4], wait: 1, next: 'teleport5', move: [550, 550], center: [39, 79],
    },
    'teleport5': {
      pic: ['2', 4, 8], wait: 1, next: 'teleport6', move: [550, 550], center: [39, 79],
    },
    'teleport6': {
      pic: ['2', 3, 4], wait: 1, next: 'teleport7', move: [550, 550], center: [39, 79],
    },
    'teleport7': {
      pic: ['2', 3, 5], wait: 1, next: 'teleport8', move: [550, 550], center: [39, 82],
    },
    'teleport8': {
      pic: ['2', 3, 6], wait: 1, next: 'teleport9', move: [550, 550], center: [39, 93],
    },
    'teleport9': {
      pic: ['2', 3, 6], wait: 1, next: 'teleport10', move: [0, 0], center: [39, 91], teleport: true, drop: 'teleport10',
    },
    'teleport10': {
      pic: ['2', 3, 5], wait: 1, next: 'teleport11', move: [0, 0], center: [39, 82],
    },
    'teleport11': {
      pic: ['2', 3, 7], wait: 1, next: 'teleport12', move: [0, 0], center: [30, 79],
    },
    'teleport12': {
      pic: ['2', 3, 8], wait: 1, next: 'teleport13', move: [0, 0], center: [32, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },
    'teleport13': {
      pic: ['2', 3, 9], wait: 1, next: 'teleport14', move: [0, 0], center: [32, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },
    'teleport14': {
      pic: ['2', 4, 9], wait: 2, next: 999, move: [0, 0], center: [32, 79],
      bdy: { x: 26, y: 36, w: 29, h: 44, },
    },


  }
};




