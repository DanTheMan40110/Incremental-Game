class Display {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  background(){
    background(220);
    noFill();
    rect(this.x / 7, this.y / 7, 200, 500);
  }
  woodDisplay(){
    fill(0);
    text("Wood: " + wood.amount, 175, 125);
    upgrades.woodAxe();
    upgrades.woodPickaxe();
  }
  stoneDisplay(){
    fill(0);
    text("Stone: " + stone.amount, 175, 175);
  }
}
