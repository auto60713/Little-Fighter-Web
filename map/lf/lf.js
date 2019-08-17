lf2.map.lf = {
  setting: {
    name: 'lf',
    file: {
      'forests': { deputy: 'bmp', w: 800, h: 70 },
      'forestm1': { deputy: 'png', w: 800, h: 104 },
      'forestt': { deputy: 'png', w: 253, h: 162 },
    },
    limit: { x: 1600, y: 300, },
    backgroundColor: '#104F10',
  },
  // 物件 (相當於人物的frame)
  component: {
    // 天空
    'forests': {
      'standing': { next: 999, pic: ['forests', 0, 0], center: [0, 0], wait: 1, },
    },
    // 山
    'forestm1': {
      'standing': { next: 999, pic: ['forestm1', 0, 0], center: [0, 0], wait: 1, },
    },
    // 樹
    'forestt': {
      'standing': { next: 999, pic: ['forestt', 0, 0], center: [0, 0], wait: 1, },
    },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { component: 'forests', scale: 1, x: 0, y: 0, repeat: { attr: 'x', numer: 800, times: 2, }, },
    { component: 'forestm1', scale: 1, x: 0, y: 18, repeat: { attr: 'x', numer: 800, times: 2, }, },
    { component: 'forestt', scale: 1, x: 0, y: 101, repeat: { attr: 'x', numer: 253, times: 20, }, },
  ],
}

