lf2.character.freeze = {
  Setting: {
    name: 'Freeze',
    file: {
      '0': { src: 'character/freeze/freeze_0.png', w: 80, h: 80 },
      '1': { src: 'character/freeze/freeze_1.png', w: 80, h: 80 },
      '2': { src: 'character/freeze/freeze_2.png', w: 80, h: 80 },
    },
    walkingSpeed: 8,
    jumpPower: 4.5,
    scale: 1,
  },
  frame: {
    // standing
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', right: 'walking1', left: 'walking1', },
    },
    // standing
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', right: 'walking1', left: 'walking1', },
    },
    // standing
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', right: 'walking1', left: 'walking1', },
    },
    // standing
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', right: 'walking1', left: 'walking1', },
    },


    // walking
    walking1: {
      next: 999, pic: ['0', 4, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking2', left: 'walking2', },
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', },
    },
    // walking
    walking2: {
      next: 999, pic: ['0', 5, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking3', left: 'walking3', },
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', },
    },
    // walking
    walking3: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking4', left: 'walking4', },
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', },
    },
    // walking
    walking4: {
      next: 999, pic: ['0', 7, 0], center: [40, 80], wait: 4, flip: true, walk: true,
      hitHold: { right: 'walking1', left: 'walking1', },
      hit: { C: 'attack1', A: 'iceBall1', up: 'jumpPre', },
    },



    // jump-pre
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 0, move: [0, -8], flip: true, walk: true,
    },
    // jumping
    jumping: {
      next: 'jumping', pic: ['0', 2, 6], center: [40, 80], wait: 1, flip: true,
    },



    // 普攻
    attack1: {
      next: 'attack2', pic: ['0', 0, 1], center: [40, 80], wait: 1, move: [1, 0],
    },
    // 普攻
    attack2: {
      next: 'attack3', pic: ['0', 1, 1], center: [40, 80], wait: 1,
    },
    // 普攻
    attack3: {
      next: 999, pic: ['0', 0, 1], center: [40, 80], wait: 1,
    },


    // 防禦
    defense: {
      next: 999, pic: ['0', 6, 5], center: [40, 80], wait: 3,
    },

    // 受傷
    injured: {
      next: 999, pic: ['0', 6, 0], center: [0, 0], wait: 2,
    },

    // 冰彈
    iceBall1: {
      next: 'iceBall2', pic: ['2', 0, 0], center: [40, 80], wait: 1,
    },
    // 冰彈
    iceBall2: {
      next: 'iceBall3', pic: ['2', 1, 0], center: [40, 80], wait: 1,
    },
    // 冰彈
    iceBall3: {
      next: 'iceBall4', pic: ['2', 2, 0], center: [40, 80], wait: 1,
    },
    // 冰彈
    iceBall4: {
      next: 'iceBall5', pic: ['2', 3, 0], center: [40, 80], wait: 1,
    },
    // 冰彈
    iceBall5: {
      next: 'iceBall6', pic: ['2', 4, 0], center: [40, 80], wait: 1,
    },
    // 冰彈
    iceBall6: {
      next: 999, pic: ['2', 5, 0], center: [40, 80], wait: 1,
    },










  }
};

