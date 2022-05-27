import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorelPanel: ScorePanel;
  direction: string = "";
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorelPanel = new ScorePanel();
    this.init();
  }

  // 游戏的初始化方法，调用游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));

    // 调用run方法
    this.run();
  }

  // 创建键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // 检查event.key的值是否合法

    // 修改direction属性
    this.direction = event.key;
  }

  // 创建控制蛇移动的方法
  run() {
    // 根据方向来使蛇的位置改变
    // 获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改X值和Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }
    // 检查蛇吃到食物
    this.checkEat(X, Y);
    
    // 修改蛇的X和Y值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      alert(e.message);
      this.isLive = false;
    }

    // 开启定时调用
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorelPanel.level - 1) * 30);
  }

  // 定义蛇是否吃到食物方法
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorelPanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
