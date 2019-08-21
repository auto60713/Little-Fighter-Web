

lf2.derivative.freezeBall = {
  setting: {
    name: 'freezeBall',
    file: {
      'ball': { deputy: 'png', w: 81, h: 82 },
      'col': { deputy: 'png', w: 110, h: 110 },
    },
    scale: 1,
  },
  frame: {

    standing: {
      next: 'fly2', pic: ['ball', 0, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly2: {
      next: 'fly3', pic: ['ball', 1, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly3: {
      next: 'fly4', pic: ['ball', 2, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },
    fly4: {
      next: 'standing', pic: ['ball', 3, 0], center: [40, 82], wait: 2, move: [4, 0],
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
    },


    cm: {
      next: 'cm2', pic: ['col', 20, 0], center: [0, 0], wait: 10, move: [4, 0], shadow: false,
      produce: { name: 'freezeBall', frame: 'cols', x: 0, y: 0, },
    },
    cm2: {
      next: 'cm3', pic: ['col', 20, 0], center: [0, 0], wait: 10, move: [4, 0], shadow: false,
      produce: { name: 'freezeBall', frame: 'colm', x: 0, y: 0, },
    },
    cm3: {
      next: 1000, pic: ['col', 20, 0], center: [0, 0], wait: 0, move: [4, 0], shadow: false,
      produce: { name: 'freezeBall', frame: 'coll', x: 0, y: 0, },
    },

    cols: {
      next: 'cols2', pic: ['col', 0, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols2: {
      next: 'cols3', pic: ['col', 1, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols3: {
      next: 'cols4', pic: ['col', 2, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols4: {
      next: 'cols5', pic: ['col', 3, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols5: {
      next: 'cols6', pic: ['col', 4, 2], center: [40, 109], wait: 1,
    },
    cols6: {
      next: 1000, pic: ['col', 5, 2], center: [40, 109], wait: 100,
    },

    colm: {
      next: 'colm2', pic: ['col', 0, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm2: {
      next: 'colm3', pic: ['col', 1, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm3: {
      next: 'colm4', pic: ['col', 2, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm4: {
      next: 'colm5', pic: ['col', 3, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm5: {
      next: 'colm6', pic: ['col', 4, 1], center: [60, 109], wait: 1,
    },
    colm6: {
      next: 1000, pic: ['col', 5, 1], center: [60, 109], wait: 100,
    },

    coll: {
      next: 'coll2', pic: ['col', 0, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll2: {
      next: 'coll3', pic: ['col', 1, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll3: {
      next: 'coll4', pic: ['col', 2, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll4: {
      next: 'coll5', pic: ['col', 3, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll5: {
      next: 'coll6', pic: ['col', 4, 0], center: [50, 109], wait: 1,
    },
    coll6: {
      next: 1000, pic: ['col', 5, 0], center: [50, 109], wait: 100,
    },

  }
};


