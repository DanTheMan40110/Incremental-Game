let windowSize = {
  x: 700,
  y: 700,
};

let w = {
  wood: 0,
  stone: 0
}

function setup() {
  createCanvas(windowSize.x, windowSize.y);
  fill(0);
  windowDisplay = new Display(windowSize.x, windowSize.y);
  upgrades = new ItemUpgrades();
  resourceIncrement = new ResourceIncrease();
  rectWood = new rectangleWood();
  rectStone = new rectangleStone();
}

function draw() {
  windowDisplay.background();
  windowDisplay.stoneDisplay();
  windowDisplay.woodDisplay();
  upgrades.woodAxe();
  upgrades.woodPickaxe();
  upgrades.stoneAxe();
  upgrades.stonePickaxe();
}
