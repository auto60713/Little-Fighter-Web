lf2.character.Henry = {
  setting: {
    name: 'Henry',
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
      pic: ['0', 0, 0], wait: 4, next: 'standing2', move: [0, 0], center: [34, 79], flip: true,
      bdy: { x: 20, y: 10, w: 34, h: 67, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 4, next: 'standing3', move: [0, 0], center: [34, 79], flip: true,
      bdy: { x: 23, y: 9, w: 32, h: 67, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 4, next: 'standing4', move: [0, 0], center: [34, 79], flip: true,
      bdy: { x: 24, y: 9, w: 31, h: 70, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 4, next: 999, move: [0, 0], center: [34, 79], flip: true,
      bdy: { x: 22, y: 6, w: 31, h: 71, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },

    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [5, 0], center: [35, 78], flip: true, hitHold: true,
      bdy: { x: 24, y: 7, w: 31, h: 72, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [37, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 7, w: 26, h: 72, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 26, y: 7, w: 30, h: 72, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [40, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 6, w: 28, h: 74, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [11, 0], center: [37, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 11, w: 39, h: 68, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [11, 0], center: [37, 79], hitHold: true,
      bdy: { x: 25, y: 10, w: 42, h: 68, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [11, 0], center: [39, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 29, y: 14, w: 32, h: 64, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'flute', B5: '', B4: 'superArrow',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 1, next: 'punch2', move: [0, 0], center: [40, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 1, next: 'punch3', move: [0, 0], center: [31, 79],
      bdy: { x: 15, y: 5, w: 35, h: 73, },
    },
    'punch3': {
      pic: ['0', 1, 2], wait: 1, next: 'punch4', move: [0, 0], center: [24, 78], sound: '022.wav',
      bdy: { x: 9, y: 9, w: 35, h: 71, },
      bdy: { x: 23, y: 36, w: 41, h: 16, },
    },
    'punch4': {
      pic: ['0', 1, 3], wait: 1, next: 'punch5', move: [0, 0], center: [38, 78],
      bdy: { x: 24, y: 10, w: 33, h: 68, },
      bdy: { x: 28, y: 34, w: 42, h: 19, },
    },
    'punch5': {
      pic: ['0', 1, 4], wait: 1, next: 'punch6', move: [0, 0], center: [39, 78], sound: '024.wav',
      opoint: { x: 95, y: 57, name: 'Henry', move: [22, -3], frame: 'fly', },
      bdy: { x: 22, y: 7, w: 35, h: 71, },
      bdy: { x: 26, y: 22, w: 47, h: 29, },
    },
    'punch6': {
      pic: ['0', 1, 5], wait: 1, next: 999, move: [0, 0], center: [35, 78],
      bdy: { x: 23, y: 9, w: 33, h: 70, },
      bdy: { x: 15, y: 32, w: 51, h: 15, },
    },

    'jump_attack': {
      pic: ['0', 0, 8], wait: 1, next: 'jump_attack2', move: [0, 0], center: [18, 78],
      bdy: { x: 19, y: 10, w: 39, h: 57, },
    },
    'jump_attack2': {
      pic: ['0', 0, 9], wait: 1, next: 'jump_attack3', move: [0, 0], center: [18, 78],
      bdy: { x: 19, y: 12, w: 38, h: 59, },
    },
    'jump_attack3': {
      pic: ['0', 4, 9], wait: 1, next: 'jump_attack4', move: [0, 0], center: [18, 79], sound: '022.wav',
      bdy: { x: 18, y: 12, w: 38, h: 58, },
    },
    'jump_attack4': {
      pic: ['0', 5, 8], wait: 1, next: 'jump_attack5', move: [-1, -3], center: [18, 79],
      bdy: { x: 12, y: 7, w: 44, h: 63, },
    },
    'jump_attack5': {
      pic: ['0', 5, 9], wait: 11, next: 999, move: [0, 0], center: [18, 79], sound: '024.wav',
      opoint: { x: 80, y: 77, name: 'Henry', move: [12, 9], frame: 'fly2', },
      bdy: { x: 15, y: 10, w: 42, h: 63, },
    },

    'run_attack': {
      pic: ['0', 3, 7], wait: 1, next: 'run_attack2', move: [5, 0], center: [42, 79],
      bdy: { x: 20, y: 8, w: 35, h: 71, },
    },
    'run_attack2': {
      pic: ['0', 2, 9], wait: 1, next: 'run_attack3', move: [4, 0], center: [15, 79],
      itr: { x: 106, y: 115, w: 1, h: 1, move: [10, 0], fall: false, vrest: 15, injury: 35, },
      bdy: { x: 3, y: 12, w: 36, h: 67, },
    },
    'run_attack3': {
      pic: ['0', 3, 8], wait: 3, next: 'run_attack4', move: [4, 0], center: [15, 79], sound: '007.wav',
      itr: { x: 34, y: 4, w: 47, h: 89, move: [10, 0], fall: false, vrest: 15, injury: 35, },
      bdy: { x: 5, y: 27, w: 43, h: 52, },
    },
    'run_attack4': {
      pic: ['0', 3, 9], wait: 2, next: 999, move: [0, 0], center: [15, 79],
      bdy: { x: 9, y: 19, w: 37, h: 61, },
    },

    'dash_attack': {
      pic: ['1', 3, 6], wait: 1, next: 'dash_attack2', move: [0, 0], center: [38, 77],
      bdy: { x: 20, y: 3, w: 31, h: 74, },
    },
    'dash_attack2': {
      pic: ['1', 3, 7], wait: 2, next: 'dash_attack3', move: [0, 0], center: [15, 78], sound: '007.wav',
      itr: { x: 27, y: 3, w: 50, h: 57, move: [12, 0], fall: false, vrest: 20, injury: 45, },
      bdy: { x: 9, y: 7, w: 33, h: 70, },
    },
    'dash_attack3': {
      pic: ['1', 3, 8], wait: 0, next: 'dash_attack3', move: [0, 0], center: [15, 78],
      bdy: { x: 9, y: 7, w: 33, h: 70, },
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
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [33, 79], flip: true,
      bdy: { x: 18, y: 26, w: 30, h: 54, },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -8], center: [34, 79], sound: '017.wav', flip: true,
      bdy: { x: 15, y: 27, w: 35, h: 54, },
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
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [9, -4], center: [39, 79],
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
        B1: 'dash_attackF',
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

    'super_arrow': {
      pic: ['0', 1, 0], wait: 1, next: 'super_arrow2', move: [0, 0], center: [40, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow2': {
      pic: ['0', 1, 1], wait: 1, next: 'super_arrow3', move: [0, 0], center: [30, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow3': {
      pic: ['0', 1, 2], wait: 1, next: 'super_arrow4', move: [0, 0], center: [24, 78],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow4': {
      pic: ['2', 0, 4], wait: 1, next: 'super_arrow5', move: [0, 0], center: [38, 78], sound: '022.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow5': {
      pic: ['2', 0, 5], wait: 1, next: 'super_arrow8', move: [0, 0], center: [38, 78], sound: '059.wav',
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow6': {
      pic: ['2', 0, 5], wait: 1, next: 'super_arrow8', move: [0, 0], center: [38, 78],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow7': {
      pic: ['2', 0, 5], wait: 1, next: 'super_arrow8', move: [0, 0], center: [38, 78],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow8': {
      pic: ['2', 0, 6], wait: 1, next: 'super_arrow9', move: [0, 0], center: [39, 78], sound: '024.wav',
      // opoint: { x: 95, y: 41, name: 'Deep', move: [22, 0], frame: 'standing', },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow9': {
      pic: ['2', 0, 7], wait: 1, next: 'super_arrow10', move: [0, 0], center: [36, 78],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'super_arrow10': {
      pic: ['0', 1, 5], wait: 1, next: 999, move: [0, 0], center: [36, 78],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },


    'flute': {
      pic: ['2', 0, 0], wait: 8, next: 'flute2', move: [0, 0], center: [36, 79], sound: '056.wav',
      bdy: { x: 22, y: 8, w: 36, h: 73, },
    },
    'flute2': {
      pic: ['2', 0, 1], wait: 0, next: 'flute3', move: [0, 0], center: [36, 79],
      itr: { x: -184, y: -37, w: 438, h: 200, vrest: 10, injury: 10, move: [0, -1], fall: true },
      bdy: { x: 22, y: 8, w: 36, h: 73, },
      hit: {
        B6: 999, B2: 999,
      },
    },
    'flute3': {
      pic: ['2', 0, 1], wait: 9, next: 'flute4', move: [0, 0], center: [36, 79], sound: '057.wav',
      itr: { x: -184, y: -37, w: 438, h: 200, vrest: 10, injury: 10, move: [0, -1], fall: true },
      bdy: { x: 22, y: 8, w: 36, h: 73, },
      hit: {
        B6: 999, B2: 999,
      },
    },
    'flute4': {
      pic: ['2', 0, 2], wait: 27, next: 'flute5', move: [0, 0], center: [36, 79], sound: '058.wav',
      itr: { x: -184, y: -37, w: 438, h: 200, vrest: 10, injury: 10, move: [0, -1], fall: true },
      bdy: { x: 22, y: 8, w: 36, h: 73, },
      hit: {
        B6: 999, B2: 999,
      },
    },
    'flute5': {
      pic: ['2', 0, 3], wait: 9, next: 'flute6', move: [0, 0], center: [36, 79], sound: '101.wav',
      itr: { x: -184, y: -37, w: 438, h: 200, vrest: 10, injury: 10, move: [0, -1], fall: true },
      bdy: { x: 22, y: 8, w: 36, h: 73, },
      hit: {
        B6: 999, B2: 999,
      },
    },
    'flute6': {
      pic: ['2', 0, 0], wait: 50, next: 999, move: [0, 0], center: [36, 79], sound: '102.wav',
      itr: { x: -184, y: -37, w: 438, h: 200, vrest: 10, injury: 10, move: [0, -1], fall: true },
      bdy: { x: 22, y: 8, w: 36, h: 73, },
      hit: {
        B6: 999, B2: 999,
      },
    },



  }
};





lf2.derivative.Henry = {
  setting: {
    name: 'Henry',
    file: {
      'arrow': { deputy: 'png', w: 49, h: 49 },
    },
    scale: 1,
    physical: true,
  },
  frame: {


    'fly': {
      pic: ['arrow', 0, 0], wait: 0, next: 'standing', move: [20, -4], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },

    'fly2': {
      pic: ['arrow', 0, 4], wait: 3, next: 'throwing6', move: [13, 10], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },


    'standing': {
      pic: ['arrow', 0, 0], wait: 3, next: 'throwing2', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing2': {
      pic: ['arrow', 0, 1], wait: 5, next: 'throwing3', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing3': {
      pic: ['arrow', 0, 2], wait: 4, next: 'throwing4', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing4': {
      pic: ['arrow', 0, 3], wait: 3, next: 'throwing5', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing5': {
      pic: ['arrow', 0, 4], wait: 3, next: 'throwing6', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing6': {
      pic: ['arrow', 0, 5], wait: 3, next: 'throwing7', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },
    'throwing7': {
      pic: ['arrow', 0, 6], wait: 0, next: 'throwing7', move: [0, 0], center: [24, 40], drop: 1000,
      itr: { x: 3, y: 4, w: 40, h: 39, move: [9, 0], fall: false, injury: 40, next: 'falling', },
      bdy: { x: 3, y: 4, w: 40, h: 39, },
    },




    'injured': {
      pic: ['arrow', 1, 0], wait: 0, next: 'in_the_sky2', move: [-4, -4], center: [24, 40], drop: 1000,
    },
    'falling': {
      pic: ['arrow', 1, 0], wait: 0, next: 'in_the_sky2', move: [-4, -4], center: [24, 40], drop: 1000,
    },

    'in_the_sky': {
      pic: ['arrow', 1, 0], wait: 0, next: 'in_the_sky2', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky2': {
      pic: ['arrow', 1, 1], wait: 0, next: 'in_the_sky3', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky3': {
      pic: ['arrow', 1, 2], wait: 0, next: 'in_the_sky4', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky4': {
      pic: ['arrow', 1, 3], wait: 0, next: 'in_the_sky5', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky5': {
      pic: ['arrow', 1, 4], wait: 0, next: 'in_the_sky6', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky6': {
      pic: ['arrow', 1, 5], wait: 0, next: 'in_the_sky7', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky7': {
      pic: ['arrow', 1, 6], wait: 0, next: 'in_the_sky8', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky8': {
      pic: ['arrow', 1, 7], wait: 0, next: 'in_the_sky9', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky9': {
      pic: ['arrow', 1, 8], wait: 0, next: 'in_the_sky10', move: [0, 0], center: [24, 40], drop: 1000,
    },
    'in_the_sky10': {
      pic: ['arrow', 1, 9], wait: 0, next: 'in_the_sky', move: [0, 0], center: [24, 40], drop: 1000,
    },



  }
};



