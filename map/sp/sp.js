lf2.map.sp = {
  setting: {
    file: {
      'wall': { deputy: 'png', w: 1000, h: 1000, },

      'wall4': { deputy: 'png', w: 1000, h: 1000, cc: 6, c1: 0, c2: 2, },

      'wall3': { deputy: 'png', w: 1000, h: 1000, cc: 16, c1: 4, c2: 7, },
      'wall2': { deputy: 'png', w: 1000, h: 1000, cc: 16, c1: 8, c2: 11, },
      'wall3': { deputy: 'png', w: 1000, h: 1000, cc: 16, c1: 12, c2: 15, },

      'fire1': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 0, c2: 1, },
      'fire2': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 2, c2: 3, },
      'fire3': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 4, c2: 5, },
      'fire4': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 6, c2: 7, },
      'fire5': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 8, c2: 9, },
      'fire6': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 10, c2: 11, },
      'fire7': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 12, c2: 13, },

      'g': { deputy: 'png', w: 1000, h: 1000, cc: 14, c1: 12, c2: 13, },
    },
    limit: { x: 2400, y: 400, },
    backgroundColor: '#000000',
  },
  // 物件 (相當於人物的frame)
  component: {
    'wall': { next: 'wall', pic: ['wall', 0, 0], wait: 100, },

    'wall4': { next: 'wall4', pic: ['wall4', 0, 0], wait: 100, },

    'wall3': { next: 'wall2', pic: ['wall3', 0, 0], wait: 9, },
    'wall2': { next: 'wall3', pic: ['wall2', 0, 0], wait: 9, },

    'fire1': { next: 'fire2', pic: ['fire1', 0, 0], wait: 3, },
    'fire2': { next: 'fire3', pic: ['fire2', 0, 0], wait: 3, },
    'fire3': { next: 'fire4', pic: ['fire3', 0, 0], wait: 3, },
    'fire4': { next: 'fire5', pic: ['fire4', 0, 0], wait: 3, },
    'fire5': { next: 'fire6', pic: ['fire5', 0, 0], wait: 3, },
    'fire6': { next: 'fire7', pic: ['fire6', 0, 0], wait: 3, },
    'fire7': { next: 'fire1', pic: ['fire7', 0, 0], wait: 3, },

    'g': { next: 'g', pic: ['g', 0, 0], wait: 100, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { nowframe: 'wall', x: 0, y: 128, loop: [277, 9], },
    { nowframe: 'wall4', x: -41, y: 128, loop: [277, 9], },
    { nowframe: 'wall3', x: -57, y: 269, loop: [277, 9], },
    { nowframe: 'fire1', x: 0, y: 128, loop: [277, 9], },

    { nowframe: 'g', x: 0, y: 308, loop: [800, 3], },
  ],
}

