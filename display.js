class rectangleWood {
  constructor() {
    this.timer = setInterval(() => {
      this.widthReset();
    }, 2000); // 2000 ms = every 2 seconds
  }
  widthReset() {
    w.wood = 0;
  }
}

class rectangleStone {
  constructor() {
    this.timer = setInterval(() => {
      this.widthReset();
    }, 2000); // 2000 ms = every 2 seconds
  }
  widthReset() {
    w.stone = 0;
  }
}

class Display {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  background() {
    background(220);
    noFill();
    rect(this.x / 7, this.y / 7, 200, 500);
  }
  woodDisplay() {
    fill(0);
    textAlign(LEFT);
    text("Wood: " + wood.amount, 125, 125);
    noFill();
    rect(100, 140, w.wood, 10);
    w.wood = w.wood + 1.7;
  }
  stoneDisplay() {
    fill(0);
    text("Stone: " + stone.amount, 125, 175);
    if (stone.isDiscovered == true) {
      noFill();
      rect(100, 190, w.stone, 10);
      w.stone = w.stone + 1.7;
    }
  }
}
