let windowSize = {
  x: 700,
  y: 700,
};

function setup() {
  createCanvas(windowSize.x, windowSize.y);
  fill(0);
  windowDisplay = new Display(windowSize.x, windowSize.y);
  upgrades = new itemUpgrades();
  resourceIncrement = new ResourceIncrease();
}

function draw() {
  upgrades.woodAxe();
  upgrades.woodPickaxe();
  upgrades.stoneAxe();
  windowDisplay.background();
  windowDisplay.woodDisplay();
  windowDisplay.stoneDisplay();
}
