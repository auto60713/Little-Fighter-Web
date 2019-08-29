lf2.character.John = {
  setting: {
    name: 'John',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
      '3': { deputy: 'png', w: 110, h: 110 },
    },
    walkingSpeed: 4,
    jumpPower: 4.5,
    scale: 1,
    HP: 500,
  },
  frame: {

    'standing': {
      pic: ['0', 0, 0], wait: 6, next: 'standing2', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'heal_other', B5: 'force_field', B4: 'DA_action',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 5, next: 'standing3', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'heal_other', B5: 'force_field', B4: 'DA_action',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 5, next: 'standing4', move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'heal_other', B5: 'force_field', B4: 'DA_action',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 6, next: 999, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'heal_other', B5: 'force_field', B4: 'DA_action',
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
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [5, 0], center: [41, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [5, 0], center: [41, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [5, 0], center: [42, 78], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'singlong', B5: 'many_punch', B4: 'ball',
      },
    },

    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running2', move: [10, 0], center: [32, 79], sound: '003.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'addMan', B5: 'jump_sword', B4: '',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [10, 0], center: [32, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'addMan', B5: 'jump_sword', B4: '',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [10, 0], center: [26, 79], sound: '004.wav', hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        U: 'dash',
        B1: 'run_attack', B2: 'defend', B6: 'addMan', B5: 'jump_sword', B4: '',
      },
    },

    'punch': {
      pic: ['0', 1, 0], wait: 2, next: 'punch2', move: [1, 0], center: [35, 79],
      itr: { x: 21, y: 57, w: 37, h: 24, vrest: 1, },
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 3, next: 999, move: [0, 0], center: [21, 79], sound: '007.wav',
      itr: { x: 26, y: 37, w: 52, h: 14, move: [2, 0], effect: 'injured', arest: 10, injury: 20, },
      bdy: { x: 13, y: 12, w: 29, h: 68, },
      bdy: { x: 2, y: 38, w: 60, h: 18, },
    },

    'jump_attack': {
      pic: ['0', 1, 4], wait: 4, next: 'jump_attack2', move: [0, 0], center: [39, 70], sound: '007.wav',
      bdy: { x: 25, y: 13, w: 25, h: 58, },
    },
    'jump_attack2': {
      pic: ['0', 1, 5], wait: 2, next: 'jump_attack3', move: [0, 0], center: [39, 70],
      itr: { x: 37, y: 30, w: 36, h: 20, move: [7, 0], effect: 'falling', arest: 15, injury: 45, },
      bdy: { x: 24, y: 10, w: 31, h: 57, },
    },
    'jump_attack3': {
      pic: ['0', 1, 6], wait: 2, next: 'jump_attack4', move: [0, 0], center: [39, 70],
      itr: { x: 46, y: 40, w: 31, h: 21, move: [7, 0], effect: 'falling', arest: 15, injury: 45, },
      bdy: { x: 30, y: 7, w: 28, h: 61, },
    },
    'jump_attack4': {
      pic: ['0', 1, 7], wait: 5, next: 999, move: [0, 0], center: [39, 70],
      bdy: { x: 33, y: 9, w: 36, h: 64, },
    },

    'run_attack': {
      pic: ['1', 3, 2], wait: 4, next: 'run_attack2', move: [6, 0], center: [31, 79],
      bdy: { x: 19, y: 24, w: 35, h: 54, },
      bdy: { x: 10, y: 36, w: 27, h: 15, },
    },
    'run_attack2': {
      pic: ['1', 3, 3], wait: 2, next: 'run_attack3', move: [4, 0], center: [19, 79], sound: '007.wav',
      itr: { x: 19, y: 37, w: 61, h: 17, move: [10, 0], effect: 'falling', arest: 15, injury: 50, },
      bdy: { x: 24, y: 36, w: 55, h: 19, },
      bdy: { x: 8, y: 51, w: 38, h: 27, },
      bdy: { x: 23, y: 18, w: 28, h: 23, },
    },
    'run_attack3': {
      pic: ['1', 3, 4], wait: 3, next: 999, move: [0, 0], center: [14, 79],
      bdy: { x: 18, y: 36, w: 39, h: 24, },
      bdy: { x: 2, y: 57, w: 41, h: 22, },
      bdy: { x: 19, y: 20, w: 24, h: 27, },
    },

    'dash_attack': {
      pic: ['1', 3, 6], wait: 3, next: 'dash_attack2', move: [0, 0], center: [38, 73],
      bdy: { x: 24, y: 18, w: 25, h: 55, },
      bdy: { x: 13, y: 36, w: 52, h: 18, },
      bdy: { x: 31, y: 9, w: 25, h: 29, },
    },
    'dash_attack2': {
      pic: ['1', 3, 7], wait: 3, next: 'dash3', move: [0, 0], center: [31, 73], sound: '007.wav',
      itr: { x: 27, y: 38, w: 53, h: 23, move: [12, 0], effect: 'falling', arest: 20, injury: 70, },
      bdy: { x: 7, y: 19, w: 37, h: 45, },
      bdy: { x: 22, y: 36, w: 50, h: 18, },
      bdy: { x: 24, y: 6, w: 30, h: 34, },
    },

    'defend': {
      pic: ['0', 5, 6], wait: 12, next: 999, move: [0, 0], center: [39, 79], flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60, },
      hit: {
        B2: 'defend',
      },
    },

    'falling': {
      pic: ['0', 3, 0], wait: 3, next: 'falling2', move: [0, 0], center: [39, 79],
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3, next: 'falling3', move: [0, 0], center: [39, 79],
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3, next: 'falling4', move: [0, 0], center: [39, 79],
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3, next: 'falling4', move: [0, 0], center: [39, 79],
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
      pic: ['0', 6, 1], wait: 1, next: 'jumping', move: [0, -8], center: [42, 79], sound: '017.wav', flip: true,
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

    'DA_action': {
      pic: ['1', 6, 2], wait: 1, next: 'DA_action2', move: [0, 0], center: [25, 79],
      bdy: { x: 8, y: 39, w: 61, h: 23, },
      bdy: { x: 11, y: 12, w: 34, h: 66, },
    },
    'DA_action2': {
      pic: ['1', 6, 3], wait: 1, next: 'DA_action3', move: [0, 0], center: [24, 79], sound: '018.wav',
      bdy: { x: 8, y: 39, w: 61, h: 23, },
      bdy: { x: 9, y: 13, w: 33, h: 66, },
    },
    'DA_action3': {
      pic: ['1', 6, 4], wait: 1, next: 'DAA_action1', move: [0, 0], center: [24, 79],
      bdy: { x: 8, y: 39, w: 61, h: 23, },
      bdy: { x: 8, y: 12, w: 34, h: 68, },
    },

    'DAA_action1': {
      pic: ['3', 0, 0], wait: 1, next: 'DAA_action12', move: [-4, 0], center: [39, 109], sound: '019.wav',
      bdy: { x: 19, y: 42, w: 38, h: 68, },
      bdy: { x: 10, y: 66, w: 58, h: 19, },
    },
    'DAA_action12': {
      pic: ['3', 0, 1], wait: 1, next: 'DAA_action13', move: [0, 0], center: [31, 109],
      opoint: { x: 95, y: 78, name: 'John', move: [0, 0], frame: 'standing', },
      bdy: { x: 9, y: 43, w: 37, h: 65, },
      bdy: { x: 4, y: 67, w: 57, h: 19, },
    },
    'DAA_action13': {
      pic: ['3', 0, 2], wait: 1, next: 'DAA_action14', move: [0, 0], center: [28, 109],
      bdy: { x: 0, y: 68, w: 63, h: 16, },
      bdy: { x: 12, y: 42, w: 31, h: 69, },
    },
    'DAA_action14': {
      pic: ['3', 0, 3], wait: 1, next: 999, move: [0, 0], center: [28, 109],
      bdy: { x: 13, y: 42, w: 30, h: 69, },
      bdy: { x: 4, y: 75, w: 54, h: 13, },
    },




    'force_field': {
      pic: ['2', 2, 1], wait: 1, next: 'force_field2', move: [0, 0], center: [39, 79], sound: '018.wav',
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field2': {
      pic: ['2', 2, 3], wait: 1, next: 'force_field3', move: [0, 0], center: [39, 79], sound: '052.wav',
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field3': {
      pic: ['2', 2, 4], wait: 1, next: 'force_field4', move: [0, 0], center: [23, 78],
      itr: { x: 34, y: 49, w: 28, h: 18, move: [2, 0], injury: 20, },
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field4': {
      pic: ['2', 2, 5], wait: 1, next: 'force_field5', move: [0, 0], center: [22, 78],
      itr: { x: 45, y: 28, w: 33, h: 35, move: [2, 0], injury: 20, },
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field5': {
      pic: ['2', 2, 6], wait: 1, next: 'force_field6', move: [0, 0], center: [22, 78],
      itr: { x: 61, y: 26, w: 18, h: 33, move: [2, 0], injury: 20, },
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field6': {
      pic: ['2', 2, 7], wait: 1, next: 'force_field7', move: [0, 0], center: [22, 78],
      itr: { x: 61, y: 25, w: 17, h: 34, move: [2, 0], injury: 20, },
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field7': {
      pic: ['2', 2, 8], wait: 1, next: 'force_field8', move: [0, 0], center: [22, 78],
      opoint: { x: 73, y: 40, name: 'John', move: [0, 0], frame: 'force_field', },
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field8': {
      pic: ['2', 2, 9], wait: 1, next: 'force_field9', move: [0, 0], center: [22, 78],
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'force_field9': {
      pic: ['2', 0, 6], wait: 1, next: 999, move: [0, 0], center: [35, 79],
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },


    'heal_other': {
      pic: ['2', 0, 0], wait: 2, next: 'heal_other2', move: [0, 0], center: [39, 79], sound: '050.wav',
      bdy: { x: 20, y: 13, w: 37, h: 67, },
    },
    'heal_other2': {
      pic: ['2', 0, 1], wait: 2, next: 'heal_other3', move: [0, 0], center: [39, 79], sound: '052.wav',
      bdy: { x: 18, y: 14, w: 39, h: 66, },
    },
    'heal_other3': {
      pic: ['2', 0, 2], wait: 2, next: 'heal_other4', move: [0, 0], center: [39, 79],
      bdy: { x: 18, y: 14, w: 38, h: 66, },
    },
    'heal_other4': {
      pic: ['2', 1, 0], wait: 2, next: 'heal_other5', move: [0, 0], center: [39, 79],
      bdy: { x: 17, y: 16, w: 39, h: 64, },
    },
    'heal_other5': {
      pic: ['2', 1, 1], wait: 2, next: 'heal_other6', move: [0, 0], center: [36, 79],
      bdy: { x: 15, y: 15, w: 42, h: 65, },
    },
    'heal_other6': {
      pic: ['2', 1, 2], wait: 2, next: 'heal_other7', move: [0, 0], center: [36, 79],
      opoint: { x: 78, y: 36, name: 'John', move: [0, 0], frame: 'healball', },
      bdy: { x: 18, y: 11, w: 37, h: 68, },
    },
    'heal_other7': {
      pic: ['2', 1, 3], wait: 2, next: 999, move: [0, 0], center: [36, 79],
      bdy: { x: 20, y: 10, w: 36, h: 69, },
    },



  }
};





lf2.derivative.John = {
  setting: {
    name: 'John',
    file: {
      'ball': { deputy: 'png', w: 82, h: 83 },
    },
    scale: 1,
  },
  frame: {

    'standing': {
      pic: ['ball', 0, 0], wait: 1, next: 'flying2', move: [18, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [9, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying2': {
      pic: ['ball', 0, 1], wait: 1, next: 'flying3', move: [18, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [9, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying3': {
      pic: ['ball', 0, 2], wait: 1, next: 'flying4', move: [18, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [9, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },
    'flying4': {
      pic: ['ball', 0, 1], wait: 1, next: 999, move: [18, 0], center: [40, 41],
      itr: { x: 22, y: 27, w: 55, h: 27, move: [9, 0], effect: 'falling', vrest: 10, injury: 55, next: 'falling', },
      bdy: { x: 22, y: 27, w: 55, h: 27, },
    },

    'falling': {
      pic: ['ball', 0, 4], wait: 1, next: 'hiting2', move: [0, 0], center: [-10, 41],
    },
    'hiting2': {
      pic: ['ball', 0, 5], wait: 1, next: 'hiting3', move: [0, 0], center: [-10, 41],
    },
    'hiting3': {
      pic: ['ball', 0, 6], wait: 1, next: 'hiting4', move: [0, 0], center: [-10, 41],
    },
    'hiting4': {
      pic: ['ball', 0, 7], wait: 1, next: 1000, move: [0, 0], center: [-10, 41],
    },


    'force_field': {
      pic: ['ball', 4, 0], wait: 2, next: 'force_field2', move: [0, 0], center: [41, 44],
      itr: { x: 46, y: 30, w: 10, h: 32, move: [10, 0], vrest: 8, injury: 40, effect: 'falling', next: 'force_field6', },
    },
    'force_field2': {
      pic: ['ball', 4, 1], wait: 2, next: 'force_field3', move: [0, 0], center: [41, 45],
      itr: { x: 41, y: 21, w: 19, h: 47, move: [10, 0], vrest: 8, injury: 40, effect: 'falling', next: 'force_field6', },
    },
    'force_field3': {
      pic: ['ball', 4, 2], wait: 1, next: 'force_field4', move: [0, 0], center: [35, 41], sound: '051.wav',
      itr: { x: 33, y: 15, w: 26, h: 55, move: [10, 0], vrest: 8, injury: 40, effect: 'falling', next: 'force_field6', },
    },
    'force_field4': {
      pic: ['ball', 4, 3], wait: 1, next: 'force_field5', move: [0, 0], center: [37, 41],
      itr: { x: 38, y: 16, w: 21, h: 53, move: [10, 0], vrest: 8, injury: 40, effect: 'falling', next: 'force_field6', },
    },
    'force_field5': {
      pic: ['ball', 4, 4], wait: 1, next: 'force_field3', move: [0, 0], center: [37, 41], timeToGo: [200, 'force_field6'],
      itr: { x: 36, y: 14, w: 23, h: 55, move: [10, 0], vrest: 8, injury: 40, effect: 'falling', next: 'force_field6', },
    },


    'force_field6': {
      pic: ['ball', 4, 5], wait: 2, next: 'force_field7', move: [0, 0], center: [39, 40], sound: '053.wav',
    },
    'force_field7': {
      pic: ['ball', 4, 6], wait: 2, next: 'force_field8', move: [0, 0], center: [33, 39],
    },
    'force_field8': {
      pic: ['ball', 4, 7], wait: 2, next: 1000, move: [0, 0], center: [33, 38],
    },


    'healball': {
      pic: ['ball', 3, 0], wait: 3, next: 'healball2', move: [0, 0], center: [40, 26], timeToGo: [200, 'healball6'],
      itr: { x: 25, y: 13, w: 32, h: 34, move: [0, 0], injury: -100, effect: 'heal', vrest: 10, next: 'stars', },
    },
    'healball2': {
      pic: ['ball', 3, 1], wait: 3, next: 'healball3', move: [0, 0], center: [40, 26],
      opoint: { x: 40, y: 39, name: 'John', move: [0, 0], frame: 'stars3', },
      itr: { x: 25, y: 13, w: 32, h: 34, move: [0, 0], injury: -100, effect: 'heal', vrest: 10, next: 'stars', },
    },
    'healball3': {
      pic: ['ball', 3, 2], wait: 3, next: 'healball4', move: [0, 0], center: [40, 26],
      opoint: { x: 40, y: 39, name: 'John', move: [0, 0], frame: 'stars3', },
      itr: { x: 25, y: 13, w: 32, h: 34, move: [0, 0], injury: -100, effect: 'heal', vrest: 10, next: 'stars', },
    },
    'healball4': {
      pic: ['ball', 3, 4], wait: 3, next: 'healball5', move: [0, 0], center: [40, 26],
      itr: { x: 25, y: 13, w: 32, h: 34, move: [0, 0], injury: -100, effect: 'heal', vrest: 10, next: 'stars', },
    },
    'healball5': {
      pic: ['ball', 3, 3], wait: 3, next: 'healball2', move: [0, 0], center: [40, 26],
      opoint: { x: 40, y: 39, name: 'John', move: [0, 0], frame: 'stars3', },
      itr: { x: 25, y: 13, w: 32, h: 34, move: [0, 0], injury: -100, effect: 'heal', vrest: 10, next: 'stars', },
    },

    'healball6': {
      pic: ['ball', 3, 5], wait: 2, next: 'healball7', move: [0, 0], center: [40, 26],
    },
    'healball7': {
      pic: ['ball', 3, 6], wait: 1, next: 'healball8', move: [0, 0], center: [40, 26],
    },
    'healball8': {
      pic: ['ball', 3, 7], wait: 1, next: 1000, move: [0, 0], center: [40, 26],
    },


    'stars': {
      pic: ['ball', 2, 0], wait: 3, next: 'stars2', move: [0, 0], center: [40, 41], sound: '049.wav',
    },
    'stars2': {
      pic: ['ball', 2, 1], wait: 3, next: 'stars3', move: [0, 0], center: [40, 41],
      opoint: { x: 40, y: 39, name: 'John', move: [0, 0], frame: 'stars5', },
    },
    'stars3': {
      pic: ['ball', 2, 2], wait: 3, next: 'stars4', move: [0, 0], center: [40, 41],
    },
    'stars4': {
      pic: ['ball', 2, 3], wait: 3, next: 1000, move: [0, 0], center: [40, 41],
    },

    'stars5': {
      pic: ['ball', 2, 4], wait: 2, next: 'stars6', move: [0, 0], center: [40, 26],
    },
    'stars6': {
      pic: ['ball', 2, 5], wait: 2, next: 'stars7', move: [0, 0], center: [40, 26],
    },
    'stars7': {
      pic: ['ball', 2, 6], wait: 2, next: 'stars8', move: [0, 0], center: [40, 26],
    },
    'stars8': {
      pic: ['ball', 2, 7], wait: 2, next: 1000, move: [0, 0], center: [40, 26],
    },



  }
};


