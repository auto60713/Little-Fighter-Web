lf2.character.Dennis = {
  setting: {
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    HP: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 5, next: 'standing2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 6, next: 'standing3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 5, next: 'standing4', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 6, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 999, move: [0, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 999, move: [0, 0], center: [39, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 0, move: [0, 0], center: [38, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 0, move: [0, 0], center: [41, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 0, move: [0, 0], center: [40, 81], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'many_foot', B5: 'c_foot', B4: 'chase_ball',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 2, next: 'punch2', move: [1, 0], center: [42, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 1, next: 'punch3', move: [0, 0], center: [27, 79], sound: '007.wav',
      itr: { x: 21, y: 30, w: 54, h: 23, move: [2, 0], effect: 'injured', arest: 10, injury: 30, },
      bdy: { x: 16, y: 19, w: 33, h: 59, },
    },
    'punch3': {
      pic: ['0', 1, 2], wait: 1, next: 'punch4', move: [0, 0], center: [25, 79],
      bdy: { x: 16, y: 20, w: 33, h: 61, },
    },
    'punch4': {
      pic: ['0', 1, 3], wait: 1, next: 999, move: [0, 0], center: [35, 79],
      bdy: { x: 19, y: 9, w: 36, h: 71, },
    },

    'jump_attack': {
      pic: ['0', 3, 7], wait: 2, next: 'jump_attack2', move: [0, 0], center: [38, 75], sound: '007.wav',
      bdy: { x: 10, y: 17, w: 43, h: 52, },
    },
    'jump_attack2': {
      pic: ['0', 3, 8], wait: 5, next: 'jump_attack3', move: [0, 0], center: [36, 74],
      itr: { x: 19, y: 40, w: 58, h: 17, move: [7, 0], effect: 'falling', arest: 15, injury: 35, },
      bdy: { x: 10, y: 19, w: 43, h: 49, },
    },
    'jump_attack3': {
      pic: ['0', 3, 7], wait: 3, next: 999, move: [0, 0], center: [36, 76],
      bdy: { x: 10, y: 17, w: 40, h: 52, },
    },

    'run_attack': {
      pic: ['1', 3, 2], wait: 1, next: 'run_attack2', move: [6, 0], center: [30, 79],
      bdy: { x: 11, y: 17, w: 37, h: 62, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 1, next: 'run_attack3', move: [4, 0], center: [27, 79], sound: '007.wav',
      bdy: { x: 11, y: 15, w: 39, h: 64, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 1, next: 'run_attack4', move: [0, 0], center: [27, 79],
      itr: { x: 9, y: 38, w: 68, h: 18, move: [10, 0], effect: 'injured', arest: 15, injury: 50, },
      bdy: { x: 10, y: 16, w: 38, h: 62, },
    },
    'run_attack4': {
      pic: ['1', 3, 5], wait: 1, next: 'run_attack5', move: [0, 0], center: [29, 79],
      itr: { x: 33, y: 41, w: 42, h: 25, move: [10, 0], effect: 'injured', arest: 15, injury: 50, },
      bdy: { x: 12, y: 16, w: 34, h: 63, },
    },
    'run_attack5': {
      pic: ['1', 3, 6], wait: 1, next: 999, move: [0, 0], center: [31, 79],
      bdy: { x: 12, y: 11, w: 36, h: 67, },
    },

    'dash_attack': {
      pic: ['1', 3, 7], wait: 2, next: 'dash_attack2', move: [0, 0], center: [26, 78],
      bdy: { x: 15, y: 20, w: 47, h: 51, },
    },
    'dash_attack2': {
      pic: ['1', 3, 8], wait: 6, next: 'dash_attack3', move: [0, 0], center: [20, 78], sound: '007.wav',
      itr: { x: 24, y: 23, w: 55, h: 39, move: [12, 0], effect: 'falling', arest: 20, injury: 70, },
      bdy: { x: 11, y: 20, w: 41, h: 48, },
    },
    'dash_attack3': {
      pic: ['1', 3, 9], wait: 4, next: 'dash3', move: [0, 0], center: [25, 78],
      bdy: { x: 15, y: 22, w: 55, h: 42, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [35, 79], flip: true, hitHold: true,
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
      pic: ['0', 3, 4], wait: 10, next: 999, move: [0, 0], center: [39, 72],
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
      pic: ['0', 6, 2], wait: 1, next: 'jumping', move: [5, 0], center: [39, 79], flip: true,
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
      pic: ['0', 6, 3], wait: 8, next: 'dash2', move: [9, -5], center: [39, 79],
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

    'many_foot': {
      pic: ['0', 1, 3], wait: 1, next: 'many_foot2', move: [2, 0], center: [35, 79],
      bdy: { x: 18, y: 17, w: 33, h: 63, },
    },
    'many_foot2': {
      pic: ['2', 2, 2], wait: 1, next: 'many_foot3', move: [2, 0], center: [26, 79], sound: '007.wav',
      itr: { x: 12, y: 51, w: 68, h: 17, move: [2, 0], effect: 'injured', vrest: 7, injury: 27, },
      bdy: { x: 9, y: 14, w: 35, h: 65, },
    },
    'many_foot3': {
      pic: ['2', 2, 3], wait: 1, next: 'many_foot4', move: [2, 0], center: [30, 79],
      bdy: { x: 18, y: 17, w: 33, h: 63, },
    },
    'many_foot4': {
      pic: ['2', 2, 4], wait: 1, next: 'many_foot5', move: [2, 0], center: [33, 79], sound: '007.wav',
      itr: { x: 21, y: 43, w: 63, h: 15, move: [2, 0], effect: 'injured', vrest: 7, injury: 27, },
      bdy: { x: 8, y: 18, w: 39, h: 59, },
    },
    'many_foot5': {
      pic: ['2', 2, 5], wait: 1, next: 'many_foot6', move: [2, 0], center: [34, 79],
      bdy: { x: 15, y: 18, w: 43, h: 61, },
    },
    'many_foot6': {
      pic: ['2', 2, 6], wait: 1, next: 'many_foot7', move: [2, 0], center: [29, 79], sound: '007.wav',
      itr: { x: 17, y: 35, w: 61, h: 13, move: [2, 0], effect: 'injured', vrest: 7, injury: 27, },
      bdy: { x: 13, y: 19, w: 32, h: 62, },
    },
    'many_foot7': {
      pic: ['2', 2, 7], wait: 1, next: 'many_foot8', move: [2, 0], center: [37, 79],
      bdy: { x: 18, y: 17, w: 33, h: 63, },
    },
    'many_foot8': {
      pic: ['2', 2, 8], wait: 1, next: 'many_foot9', move: [2, 0], center: [20, 79], sound: '007.wav',
      bdy: { x: 9, y: 14, w: 36, h: 65, },
    },
    'many_foot9': {
      pic: ['2', 2, 9], wait: 1, next: 'many_foot10', move: [2, 0], center: [9, 79],
      itr: { x: 11, y: 20, w: 56, h: 60, move: [15, 5], effect: 'falling', vrest: 15, injury: 27, },
      bdy: { x: 0, y: 15, w: 35, h: 66, },
    },
    'many_foot10': {
      pic: ['2', 3, 9], wait: 1, next: 'many_foot11', move: [0, 0], center: [15, 79],
      bdy: { x: 3, y: 17, w: 40, h: 64, },
    },
    'many_foot11': {
      pic: ['2', 3, 8], wait: 1, next: 'many_foot12', move: [0, 0], center: [24, 79],
      bdy: { x: 9, y: 17, w: 39, h: 66, },
    },
    'many_foot12': {
      pic: ['2', 3, 8], wait: 1, next: 999, move: [0, 0], center: [24, 79],
      bdy: { x: 18, y: 17, w: 33, h: 63, },
    },


    'c_foot': {
      pic: ['2', 3, 0], wait: 1, next: 'c_foot2', move: [0, 0], center: [38, 79],
      bdy: { x: 24, y: 21, w: 32, h: 58, },
    },
    'c_foot2': {
      pic: ['2', 3, 1], wait: 1, next: 'c_foot3', move: [0, 0], center: [33, 78],
      bdy: { x: 16, y: 12, w: 31, h: 62, },
    },
    'c_foot3': {
      pic: ['2', 3, 2], wait: 1, next: 'c_foot4', move: [1, 0], center: [30, 82],
      itr: { x: 20, y: 13, w: 64, h: 58, move: [13, 0], effect: 'injured', vrest: 7, injury: 35, },
      bdy: { x: 13, y: 3, w: 41, h: 37, },
    },
    'c_foot4': {
      pic: ['2', 3, 3], wait: 1, next: 'c_foot5', move: [2, 0], center: [29, 87],
      bdy: { x: 14, y: 5, w: 37, h: 37, },
    },
    'c_foot5': {
      pic: ['2', 3, 4], wait: 1, next: 'c_foot6', move: [10, 0], center: [38, 89], sound: '007.wav',
      itr: { x: 3, y: 11, w: 62, h: 65, move: [-4, 0], effect: 'injured', vrest: 7, injury: 35, },
      bdy: { x: 28, y: 9, w: 32, h: 35, },
      hit: {
        B2: 'c_foot9', B5: 'c_foot9',
      },
    },
    'c_foot6': {
      pic: ['2', 3, 5], wait: 1, next: 'c_foot7', move: [10, 0], center: [33, 85],
      bdy: { x: 24, y: 6, w: 31, h: 35, },
      hit: {
        B2: 'c_foot9', B5: 'c_foot9',
      },
    },
    'c_foot7': {
      pic: ['2', 3, 6], wait: 1, next: 'c_foot8', move: [10, 0], center: [27, 85],
      itr: { x: 25, y: 13, w: 61, h: 56, move: [13, 0], effect: 'injured', vrest: 7, injury: 35, },
      bdy: { x: 18, y: 11, w: 32, h: 30, },
      hit: {
        B2: 'c_foot9', B5: 'c_foot9',
      },
    },
    'c_foot8': {
      pic: ['2', 3, 3], wait: 1, next: 'c_foot5', move: [10, 0], center: [31, 85],
      bdy: { x: 22, y: 11, w: 31, h: 32, },
      hit: {
        B2: 'c_foot9', B5: 'c_foot9',
      },
    },
    'c_foot9': {
      pic: ['2', 3, 7], wait: 1, next: 'c_foot10', move: [3, 0], center: [36, 76],
      bdy: { x: 18, y: 10, w: 37, h: 30, },
    },
    'c_foot10': {
      pic: ['2', 4, 0], wait: 1, next: 'c_foot11', move: [2, 0], center: [41, 78],
      bdy: { x: 26, y: 19, w: 34, h: 61, },
    },
    'c_foot11': {
      pic: ['2', 3, 8], wait: 2, next: 999, move: [0, 0], center: [29, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },


    'chase_ball': {
      pic: ['2', 4, 1], wait: 2, next: 'chase_ball2', move: [0, 0], center: [24, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball2': {
      pic: ['2', 4, 2], wait: 2, next: 'chase_ball3', move: [0, 0], center: [24, 79], sound: '077.wav',
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball3': {
      pic: ['2', 4, 3], wait: 2, next: 'chase_ball4', move: [0, 0], center: [24, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball4': {
      pic: ['2', 4, 4], wait: 1, next: 'chase_ball5', move: [6, 0], center: [31, 79],
      // opoint: { x: 88, y: 42, name: 'Freeze', move: [0, 0], frame: 'standing', },
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball5': {
      pic: ['2', 4, 5], wait: 4, next: 'chase_ball6', move: [0, 0], center: [41, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball6': {
      pic: ['2', 4, 6], wait: 2, next: 'chase_ball7', move: [0, 0], center: [41, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },
    'chase_ball7': {
      pic: ['2', 4, 7], wait: 2, next: 999, move: [3, 0], center: [36, 79],
      bdy: { x: 12, y: 20, w: 36, h: 60, },
    },

  }
};




