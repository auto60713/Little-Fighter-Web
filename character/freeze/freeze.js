lf2.character.Freeze = {
  Setting: {
    name: 'Freeze',
    file: {
      '0': { src: 'character/freeze/freeze_0.png', w: 80, h: 80 },
      '1': { src: 'character/freeze/freeze_1.png', w: 80, h: 80 },
      '2': { src: 'character/freeze/freeze_2.png', w: 80, h: 80 },
    },
    walkingSpeed: 4,
    jumpPower: 4.5,
    scale: 1,
    HP: 500,
  },
  frame: {
    // 站立
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 走路
    walking: {
      next: 999, pic: ['0', 4, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking2', left: 'walking2', },
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking2: {
      next: 999, pic: ['0', 5, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking3', left: 'walking3', },
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking3: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking4', left: 'walking4', },
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking4: {
      next: 999, pic: ['0', 7, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking', left: 'walking', },
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 0, move: [0, -8], flip: true, walk: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 2, 6], center: [40, 80], wait: 1, flip: true,
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
      next: 999, pic: ['0', 6, 5], center: [40, 80], wait: 3, flip: true,
      hitHold: { X: 'defense', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 受傷
    injured: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 冰彈
    iceBall: {
      next: 'iceBall2', pic: ['2', 0, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall2: {
      next: 'iceBall3', pic: ['2', 1, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall3: {
      next: 'iceBall4', pic: ['2', 2, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall4: {
      next: 'iceBall5', pic: ['2', 3, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      produce: { name: 'freezeBall', x: 60, y: 7, }
    },
    iceBall5: {
      next: 'iceBall6', pic: ['2', 4, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall6: {
      next: 999, pic: ['2', 5, 0], center: [40, 80], wait: 3,
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





  }
};






lf2.derivative.freezeBall = {
  Setting: {
    name: 'freezeBall',
    file: {
      '0': { src: 'character/freeze/freeze_ball.png', w: 81, h: 82 },
    },
    scale: 1,
  },
  frame: {
    standing: {
      next: 'fly2', pic: ['0', 0, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly2: {
      next: 'fly3', pic: ['0', 1, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly3: {
      next: 'fly4', pic: ['0', 2, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly4: {
      next: 'standing', pic: ['0', 3, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
  }
};


