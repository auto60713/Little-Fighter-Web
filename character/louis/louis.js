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

    // 站
    'standing': {
      pic: ['0', 0, 0], wait: 9, next: 'standing2', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'standing2': {
      pic: ['0', 0, 1], wait: 3, next: 'standing3', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'standing3': {
      pic: ['0', 0, 2], wait: 4, next: 'standing4', move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'standing4': {
      pic: ['0', 0, 3], wait: 5, next: 999, move: [0, 0], center: [42, 79], flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62, },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },



    // 走
    'walking': {
      pic: ['0', 0, 4], wait: 3, next: 'walking2', move: [0, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'walking2': {
      pic: ['0', 0, 5], wait: 3, next: 'walking3', move: [0, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'walking3': {
      pic: ['0', 0, 6], wait: 3, next: 'walking4', move: [0, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'walking4': {
      pic: ['0', 0, 7], wait: 3, next: 'walking', move: [0, 0], center: [42, 79], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65, },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },


    // 跑步
    'running': {
      pic: ['0', 2, 0], wait: 3, next: 'running'2, move: [0, 0], center: [48, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'running2': {
      pic: ['0', 2, 1], wait: 3, next: 'running3', move: [0, 0], center: [51, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },
    'running3': {
      pic: ['0', 2, 2], wait: 3, next: 'running', move: [0, 0], center: [50, 79], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60, },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'rCatch', S: 'thousandFoot', D: 'blastpush',
      },
    },




    'punch': {
      pic: ['0', 1, 0], wait: 4, next: 'punch2', move: [1, 0], center: [40, 79],
      bdy: { x: 26, y: 12, w: 27, h: 68, },
    },
    'punch2': {
      pic: ['0', 1, 1], wait: 2, next: 999, move: [0, 0], center: [40, 79],
      itr: { x: 26, y: 37, w: 52, h: 14, move: [2, 0], injury: 20, },
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
      itr: { x: 32, y: 30, w: 47, h: 28, move: [12, 0], fall: true, arest: 75, injury: 45, },
      bdy: { x: 23, y: 10, w: 37, h: 67, },
    },
    'jump_attack4': {
      pic: ['0', 1, 7], wait: 1, next: 'jump_attack5', move: [0, 0], center: [38, 79],
      itr: { x: 35, y: 30, w: 30, h: 30, move: [12, 0], fall: true, arest: 75, injury: 45, },
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
      itr: { x: 18, y: 30, w: 61, h: 31, move: [14, 0], fall: true, vrest: 7, injury: 65, },
      bdy: { x: 27, y: 15, w: 35, h: 64, },
      bdy: { x: 15, y: 31, w: 21, h: 50, },
    },
    'run_attack4': {
      pic: ['1', 3, 3], wait: 2, next: 'run_attack5', move: [12, 0], center: [35, 79],
      itr: { x: 17, y: 34, w: 55, h: 21, move: [14, 0], fall: true, vrest: 7, injury: 65, },
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
      itr: { x: 32, y: 30, w: 47, h: 28, move: [12, 0], fall: true, arest: 75, injury: 45, },
      bdy: { x: 23, y: 10, w: 37, h: 67, },
    },
    'jump_attack4': {
      pic: ['0', 1, 7], wait: 1, next: 'jump_attack5', move: [0, 0], center: [38, 79],
      itr: { x: 35, y: 30, w: 30, h: 30, move: [12, 0], fall: true, arest: 75, injury: 45, },
      bdy: { x: 33, y: 9, w: 36, h: 64, },
    },
    'jump_attack5': {
      pic: ['0', 1, 8], wait: 2, next: 999, move: [0, 0], center: [44, 79],
      bdy: { x: 23, y: 13, w: 39, h: 66, },
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
      pic: ['1', 6, 4], wait: 90, next: 'dash_attack5', move: [23, 2], center: [31, 73], drop: 'dash_attack5',
      itr: { x: 28, y: 34, w: 57, h: 45, move: [12, 0], fall: true, vrest: 8, injury: 80, },
      bdy: { x: 29, y: 19, w: 39, h: 45, },
      bdy: { x: 16, y: 38, w: 36, h: 29, },
    },
    'dash_attack5': {
      pic: ['1', 6, 5], wait: 2, next: 'dash_attack6', move: [0, 0], center: [41, 77],
      bdy: { x: 42, y: 24, w: 32, h: 52, },
      bdy: { x: 18, y: 50, w: 47, h: 28, },
    },
    'dash_attack6': {
      pic: ['1', 6, 6], wait: 2, next: 999, move: [0, 0], center: [31, 74],
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
      pic: ['0', 3, 0], wait: 3, next: 0, move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 25, y: 25, w: 21, h: 20, },
    },
    'falling2': {
      pic: ['0', 3, 1], wait: 3, next: 0, move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 20, w: 24, h: 23, },
    },
    'falling3': {
      pic: ['0', 3, 2], wait: 3, next: 0, move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 27, y: 22, w: 20, h: 18, },
    },
    'falling4': {
      pic: ['0', 3, 3], wait: 3, next: 0, move: [0, 0], center: [39, 79], drop: 'lyingDown',
      bdy: { x: 22, y: 30, w: 27, h: 21, },
    },
    'lyingDown': {
      pic: ['0', 3, 4], wait: 3, next: 0, move: [0, 0], center: [39, 72],
    },


    'jump': {
      pic: ['0', 6, 0], wait: 1, next: 'jump2', move: [0, 0], center: [47, 79], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58, },
      hit: {
        right: 'jumpPreMove', left: 'jumpPreMove',
      },
    },
    'jump2': {
      pic: ['0', 6, 1], wait: 1, next: 'jump3', move: [0, 0], center: [48, 79], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56, },
    },
    'jump3': {
      pic: ['0', 6, 2], wait: 1, next: 0, move: [0, 0], center: [39, 79], flip: true,
      bdy: { x: 28, y: 3, w: 23, h: 65, },
      bdy: { x: 18, y: 29, w: 48, h: 17, },
      hit: {
        C: 'jumpAttack',
      },
    },


    'dash': {
      pic: ['0', 6, 3], wait: 0, next: 'dash2', move: [0, 0], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
    },
    'dash': {
      pic: ['0', 6, 3], wait: 8, next: 'dash2', move: [0, 0], center: [39, 79],
      bdy: { x: 43, y: 5, w: 23, h: 33, },
      bdy: { x: 28, y: 29, w: 21, h: 33, },
      bdy: { x: 18, y: 48, w: 27, h: 21, },
      hit: {
        C: 'jumpAttack',
      },
    },
    'dash': {
      pic: ['1', 4, 2], wait: 2, next: 0, move: [0, 0], center: [39, 79],
      bdy: { x: 35, y: 8, w: 27, h: 27, },
      bdy: { x: 16, y: 30, w: 39, h: 37, },
      hit: {
        C: 'jumpAttack',
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

    // 抓人
    catching: {
      next: 'catching2', pic: ['2', 0, 2], center: [40, 80], wait: 3, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, next: 'whirl', catching: true, },
      catching: { x: 30, y: 0, frame: 'falling', },
    },
    catching2: {
      next: 'catching3', pic: ['2', 1, 2], center: [40, 80], wait: 3, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, next: 'whirl', catching: true, },
      catching: { x: 30, y: 0, frame: 'falling', },
    },
    catching3: {
      next: 999, pic: ['2', 2, 2], center: [40, 80], wait: 3, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, next: 'whirl', catching: true, },
      catching: { x: 30, y: 0, frame: 'falling', },
    },

    // 抓到旋轉
    whirl: {
      next: 'whirl2', pic: ['2', 0, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 30, y: 0, frame: 'falling', },
    },
    whirl2: {
      next: 'whirl3', pic: ['2', 1, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 10, y: 20, frame: 'falling', },
    },
    whirl3: {
      next: 'whirl4', pic: ['2', 2, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: -30, y: 0, frame: 'falling', },
    },
    whirl4: {
      next: 'whirl5', pic: ['2', 3, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: -30, y: -20, frame: 'falling', },
    },
    whirl5: {
      next: 'whirl6', pic: ['2', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 10, y: -20, frame: 'falling', },
    },
    whirl6: {
      next: 'whirl7', pic: ['2', 5, 1], center: [40, 80], wait: 0,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 20, y: 10, frame: 'falling', },
    },
    whirl7: {
      next: 'whirl8', pic: ['2', 0, 1], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 20, y: 10, frame: 'falling', },
    },
    whirl8: {
      next: 'whirl9', pic: ['2', 1, 1], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: 20, y: 10, frame: 'falling', },
    },
    whirl9: {
      next: 'whirl10', pic: ['2', 2, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: -30, y: 0, frame: 'falling', },
    },
    whirl10: {
      next: -999, pic: ['2', 6, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -1], cd: 5, injury: 40, },
      catching: { x: -30, y: -30, frame: 'falling', move: [-20, -2], },
    },

  }
};




