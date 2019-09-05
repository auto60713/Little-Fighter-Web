lf2.map.bc = {
  setting: {
    file: {
      'bc1': { w: 1000, h: 1000, },
      'bc2': { w: 1000, h: 1000, },
      'bc3': { w: 1000, h: 1000, },
      'bc4': { w: 1000, h: 1000, },
      'bc5': { w: 1000, h: 1000, },
    },
    limit: { x: 1500, y: 300, },
    backgroundColor: '#000000',
  },
  // 物件 (相當於人物的frame)
  component: {
    'bc1': { next: 'bc1', pic: ['bc1', 0, 0], wait: 100, },
    'bc2': { next: 'bc2', pic: ['bc2', 0, 0], wait: 100, },
    'bc3': { next: 'bc3', pic: ['bc3', 0, 0], wait: 100, },
    'bc4': { next: 'bc4', pic: ['bc4', 0, 0], wait: 100, },
    'bc5': { next: 'bc5', pic: ['bc5', 0, 0], wait: 100, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { nowframe: 'bc1', x: 0, y: 129, },
    { nowframe: 'bc2', x: 460, y: 129, },
    { nowframe: 'bc3', x: 920, y: 129, },
    { nowframe: 'bc4', x: 0, y: 261, loop: [800, 10], },
    { nowframe: 'bc5', x: 0, y: 296, loop: [600, 10], },
  ],
}

