const davis = {
    Setting: {
        // 姓名
        name: 'Davis',
        // 頭像
        head: 'sprite\sys\davis_f.bmp',
        // 遊戲內臉圖
        small: 'sprite\sys\davis_s.bmp',
        // 動作圖
        file: [
            { src: 'sprite\sys\davis_0.bmp', w: 79, h: 79, row: 10, col: 7 },
            { src: 'sprite\sys\davis_1.bmp', w: 79, h: 79, row: 10, col: 7 },
            { src: 'sprite\sys\davis_2.bmp', w: 79, h: 79, row: 10, col: 7 },
        ],
        // 走速
        walking_frame_rate: 3,
        walking_speed: 5.000000,
        // 跑速
        running_frame_rate: 3,
        running_speed: 10.000000,
        heavy_walking_speed: 3.700000,
        heavy_running_speed: 6.200000,
        jump_height: -16.299999,
        jump_distance: 10.000000,
        dash_height: -10.000000,
        dash_distance: 18.000000,
        rowing_height: -2.000000,
        rowing_distance: 5.000000,
        hiden: 1,
    },
    frame: {
        // standing
        0: {
            pic: 0, state: 0, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79,
            hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 300, hit_Da: 270, hit_Uj: 290, hit_Fj: 85,
            bpoint: { x: 39, y: 34 },
            wpoint: { kind: 1, x: 23, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0, },
            bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 },
        },
        // standing
        1: {
            pic: 1, state: 0, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79,
            hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 300, hit_Da: 270, hit_Uj: 290, hit_Fj: 85,
            bpoint: { x: 39, y: 34 },
            wpoint: { kind: 1, x: 23, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0, },
            bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 },
        },
        // standing
        2: {
            pic: 2, state: 0, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79,
            hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 240, hit_Ua: 300, hit_Da: 270, hit_Uj: 290, hit_Fj: 85,
            bpoint: { x: 39, y: 34 },
            wpoint: { kind: 1, x: 23, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0, },
            bdy: { kind: 0, x: 21, y: 18, w: 43, h: 62 },
        },
    }
};