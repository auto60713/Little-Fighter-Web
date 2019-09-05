lf2.map.ft = {
  setting: {
    file: {
      'sky': { deputy: 'png', w: 1000, h: 1000, },

      'w1': { deputy: 'png', w: 1000, h: 1000, },
      'w2': { deputy: 'png', w: 1000, h: 1000, },
      'w3': { deputy: 'png', w: 1000, h: 1000, },

      'g1': { deputy: 'png', w: 1000, h: 1000, },
      'g2': { deputy: 'png', w: 1000, h: 1000, },
      'g3': { deputy: 'png', w: 1000, h: 1000, },
      'g4': { deputy: 'png', w: 1000, h: 1000, },
      'g5': { deputy: 'png', w: 1000, h: 1000, },

      'c1': { deputy: 'png', w: 1000, h: 1000, },
      'c2': { deputy: 'png', w: 1000, h: 1000, },

      'f1': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 0, c2: 0, },
      'f2': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 1, c2: 1, },
      'f3': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 2, c2: 2, },
      'f4': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 3, c2: 3, },
      'f5': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 4, c2: 4, },
      'f6': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 5, c2: 5, },
      'f7': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 6, c2: 6, },
      'f8': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 7, c2: 7, },
      'f9': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 8, c2: 8, },
      'fa': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 9, c2: 9, },
      'fb': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 10, c2: 10, },
      'fc': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 11, c2: 11, },
      'fd': { deputy: 'png', w: 1000, h: 1000, cc: 13, c1: 12, c2: 12, },

    },
    limit: { x: 2400, y: 400, },
    backgroundColor: '#000000',
  },
  // 物件 (相當於人物的frame)
  component: {
    'sky': { next: 'sky', pic: ['sky', 0, 0], wait: 100, },

    'w1': { next: 'w1', pic: ['w1', 0, 0], wait: 100, },
    'w2': { next: 'w2', pic: ['w2', 0, 0], wait: 100, },
    'w3': { next: 'w3', pic: ['w3', 0, 0], wait: 100, },

    'g1': { next: 'g1', pic: ['g1', 0, 0], wait: 100, },
    'g2': { next: 'g2', pic: ['g2', 0, 0], wait: 100, },
    'g3': { next: 'g3', pic: ['g3', 0, 0], wait: 100, },
    'g4': { next: 'g4', pic: ['g4', 0, 0], wait: 100, },
    'g5': { next: 'g5', pic: ['g5', 0, 0], wait: 100, },

    'c1': { next: 'c1', pic: ['c1', 0, 0], wait: 100, },
    'c2': { next: 'c2', pic: ['c2', 0, 0], wait: 100, },

    'f1': { next: 'f2', pic: ['f1', 0, 0], wait: 3, },
    'f2': { next: 'f3', pic: ['f2', 0, 0], wait: 3, },
    'f3': { next: 'f4', pic: ['f3', 0, 0], wait: 3, },
    'f4': { next: 'f5', pic: ['f4', 0, 0], wait: 3, },
    'f5': { next: 'f6', pic: ['f5', 0, 0], wait: 3, },
    'f6': { next: 'f7', pic: ['f6', 0, 0], wait: 3, },
    'f7': { next: 'f8', pic: ['f7', 0, 0], wait: 3, },
    'f8': { next: 'f9', pic: ['f8', 0, 0], wait: 3, },
    'f9': { next: 'fa', pic: ['f9', 0, 0], wait: 3, },
    'fa': { next: 'fb', pic: ['fa', 0, 0], wait: 3, },
    'fb': { next: 'fc', pic: ['fb', 0, 0], wait: 3, },
    'fc': { next: 'fd', pic: ['fc', 0, 0], wait: 3, },
    'fd': { next: 'f1', pic: ['fd', 0, 0], wait: 3, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { nowframe: 'sky', x: 0, y: 143, },

    { nowframe: 'w1', x: 0, y: 129, loop: [144, 17], },
    { nowframe: 'w2', x: 0, y: 160, loop: [144, 17], },
    { nowframe: 'w3', x: 0, y: 217, loop: [144, 17], },

    { nowframe: 'g1', x: 0, y: 247, loop: [162, 15], },
    { nowframe: 'g2', x: 0, y: 306, loop: [140, 18], },
    { nowframe: 'g5', x: 0, y: 317, loop: [800, 3], },
    { nowframe: 'g3', x: 0, y: 494, loop: [140, 18], },
    { nowframe: 'g4', x: 0, y: 506, loop: [128, 19], },

    { nowframe: 'c1', x: 95, y: 129, loop: [324, 8], },
    { nowframe: 'c2', x: 92, y: 263, loop: [324, 8], },

    { nowframe: 'f1', x: 95, y: 129, loop: [324, 8], },
  ],
}

