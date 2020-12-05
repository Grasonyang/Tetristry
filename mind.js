'use strict';//嚴格模式
/** @type {HTMLCanvasElement} */ // 宣告作業環境，語法提示
const canvas = document.getElementById('drawplace'); // 取得畫布 $("#drawplace")
const ctx = canvas.getContext('2d'); // 宣告2D畫布
class Gui {//介面
  constructor(args) {
    let def = {
      w: 12,
      h: 22,
      span: 30,//延展
    }

    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {//畫畫布
    for (let i = 0; i < gui.h; i++) {
      for (let j = 0; j < gui.w; j++) {
        if (map[i][j]) {
          decoration(j, i, getdraw[map[i][j]]);
        }
      }
    }
  }
}
let gui = new Gui({
  b: 10,
});//顯示介面
let wwidth = gui.w * gui.span;
let wwhigh = gui.h * gui.span;
canvas.width = wwidth;
canvas.height = wwhigh;

let getdraw = [[], [30, 30, 30], [60, 60, 60], [90, 90, 90], [120, 120, 120], [150, 150, 150], [180, 180, 180], [210, 210, 210], [0, 0, 0]];
let Block = [
  [[1, 1, 1], [0, 1, 0]],
  [[2, 2], [2, 2]],
  [[0, 3, 3], [3, 3, 0]],
  [[4, 4, 0], [0, 4, 4]],
  [[5, 5, 5, 5]],
  [[6, 6, 6], [0, 0, 6]],
  [[7, 7, 7], [7, 0, 0]],
];
let map = [];
function init() { //初始化
  for (let i = 0; i < gui.h; i++) {
    map[i] = [];
    for (let j = 0; j < gui.w; j++) {
      if (i === 0 || j === 0 || i === gui.h - 1 || j === gui.w - 1) {
        map[i][j] = 8;
      } else {
        map[i][j] = 0;
      }
    }
  }
  gui.draw();
}
init();

function update() { //更新

}

function draw() { //畫圖

}

function decoration(x, y, color) { //裝飾
  ctx.save();

  ctx.translate(x * gui.span, y * gui.span);//移動畫布
  ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`//填補顏色
  ctx.fillRect(0, 0, gui.span, gui.span)//原點

  ctx.restore();
}


function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function sa(i) {
  return JSON.parse(JSON.stringify(i));
};


