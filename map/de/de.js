lf2.map.de = {
  setting: {
    file: {
      'g1': { src: 'map/de/g1.png', w: 69, h: 69 },
      'g2': { src: 'map/de/g2.png', w: 69, h: 69 },
      's1': { src: 'map/de/s1.png', w: 215, h: 71 },
    },
    limit: { x: 1320, y: 400, },
    backgroundColor: 'aliceblue',
  },
  // 物件 (相當於人物的frame)
  component: {
    'g1': {
      'standing': { next: 999, pic: ['g1', 0, 0], center: [0, 0], wait: 1, },
    }
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { component: 'g1', x: 0, y: 400, repeat: { attr: 'x', numer: 69, times: 20, }, },
  ],
}

