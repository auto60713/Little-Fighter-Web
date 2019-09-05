lf2.map.lf = {
  setting: {
    file: {
      'forests': { deputy: 'bmp', w: 1000, h: 1000, },
      'forestm1': { deputy: 'png', w: 1000, h: 1000, },
      'forestm2': { deputy: 'bmp', w: 1000, h: 1000, },
      'forestm3': { deputy: 'bmp', w: 1000, h: 1000, },
      'forestm4': { deputy: 'bmp', w: 1000, h: 1000, },
      'forestt': { deputy: 'png', w: 1000, h: 1000, },
      'land1': { deputy: 'bmp', w: 1000, h: 1000, },
      'land2': { deputy: 'bmp', w: 1000, h: 1000, },
      'land4': { deputy: 'bmp', w: 1000, h: 1000, },
      'g': { deputy: 'png', w: 1000, h: 1000, },
    },
    limit: { x: 1600, y: 400, },
    backgroundColor: '#000000',
  },
  // 物件 (相當於人物的frame)
  component: {
    'forests': { next: 'forests', pic: ['forests', 0, 0], wait: 100, },
    'forestm1': { next: 'forestm1', pic: ['forestm1', 0, 0], wait: 100, },
    'forestm2': { next: 'forestm2', pic: ['forestm2', 0, 0], wait: 100, },
    'forestm3': { next: 'forestm3', pic: ['forestm3', 0, 0], wait: 100, },
    'forestm4': { next: 'forestm4', pic: ['forestm4', 0, 0], wait: 100, },
    'forestt': { next: 'forestt', pic: ['forestt', 0, 0], wait: 100, },
    'land1': { next: 'land1', pic: ['land1', 0, 0], wait: 100, },
    'land2': { next: 'land2', pic: ['land2', 0, 0], wait: 100, },
    'land4': { next: 'land4', pic: ['land4', 0, 0], wait: 100, },
    'g': { next: 'g', pic: ['g', 0, 0], wait: 100, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    // 天空
    { nowframe: 'forests', x: 0, y: 128, },
    // 山
    { nowframe: 'forestm1', x: 0, y: 147, },
    { nowframe: 'forestm2', x: 800, y: 147, },
    // 左石頭
    { nowframe: 'forestm3', x: 0, y: 170, },
    // 右石頭
    { nowframe: 'forestm4', x: 1416, y: 155, },
    // 樹
    { nowframe: 'forestt', x: 0, y: 199, loop: [253, 13], },
    { nowframe: 'g', x: 0, y: 361, loop: [800, 2], },
    // 草地
    { nowframe: 'land1', x: 0, y: 356, loop: [520, 7], },
    { nowframe: 'land2', x: 300, y: 385, loop: [530, 6], },
    { nowframe: 'land4', x: 600, y: 420, loop: [570, 5], },
  ],
}

