lf2.character.Henry = {
  setting: {
    name: 'Henry',
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

    // 站立
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'thangLong', S: 'icePunch', D: 'thangLong',
      },
    },
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'thangLong', S: 'icePunch', D: 'thangLong',
      },
    },
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'thangLong', S: 'icePunch', D: 'thangLong',
      },
    },
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'thangLong', S: 'icePunch', D: 'thangLong',
      },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 4, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },
    walking2: {
      next: 'walking3', pic: ['0', 5, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },
    walking3: {
      next: 'walking4', pic: ['0', 6, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },
    walking4: {
      next: 'walking', pic: ['0', 7, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },



    // 跑步
    run: {
      next: 'run2', pic: ['0', 0, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },
    run2: {
      next: 'run3', pic: ['0', 1, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },
    run3: {
      next: 'run', pic: ['0', 2, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'iceBall', S: 'icePunch', D: 'thangLong',
      },
    },


    // 跑步跳躍
    runJumpPre: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 0, move: [6, -5],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runJumping: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        C: 'jumpAttack',
      },
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 1, move: [0, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'jumpPreMove', left: 'jumpPreMove',
      },
    },
    jumpPreMove: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 0, move: [4, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 2, 6], center: [40, 80], wait: 20, flip: true,

      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        C: 'jumpAttack',
      },
    },


    // 跳攻擊
    jumpAttack: {
      next: 'jumpAttack2', pic: ['0', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpAttack2: {
      next: 'jumpAttack3', pic: ['0', 5, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, 0], cd: 5, injury: 40, },
    },
    jumpAttack3: {
      next: 999, pic: ['0', 6, 1], center: [40, 80], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },





    // 跑步攻擊
    runAttack: {
      next: 'runAttack2', pic: ['1', 2, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack2: {
      next: 'runAttack3', pic: ['1', 3, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack3: {
      next: 'runAttack4', pic: ['1', 4, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
    },
    runAttack4: {
      next: 'runAttack5', pic: ['1', 5, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
    },
    runAttack5: {
      next: 999, pic: ['1', 6, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 普攻
    attack: {
      next: 'attack2', pic: ['0', 0, 1], center: [40, 80], wait: 1, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    attack2: {
      next: 'attack3', pic: ['0', 1, 1], center: [40, 80], wait: 1,
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -2], cd: 5, injury: 40, },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    attack3: {
      next: 999, pic: ['0', 0, 1], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 防禦
    defense: {
      next: 'defense', pic: ['0', 6, 5], center: [40, 80], wait: 3, flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 受傷
    injured: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 被打飛
    falling: {
      next: 'falling2', pic: ['0', 0, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling2: {
      next: 'falling3', pic: ['0', 1, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling3: {
      next: 'falling4', pic: ['0', 2, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling4: {
      next: 'falling4', pic: ['0', 3, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 躺地
    lyingDown: {
      next: 999, pic: ['0', 4, 3], center: [40, 75], wait: 10, lyingDown: true,
    },

    // ==============================================================================
    // 技能
    // ==============================================================================


  }
};




