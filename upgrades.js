let woodAxe = {
  num: 0,
  priceIncrease: 1.2,
  price: 10,
  increment: 1,
};

let woodPickaxe = {
  num: 0,
  priceIncrease: 1.2,
  price: 100,
  increment: 1,
};

let stoneAxe = {
  num: 0,
  priceIncrease: 1.2,
  price: 10,
  increment: 5,
};

function mouseClicked() {
  if (
    mouseX > (windowSize.x * 3) / 7 &&
    mouseX < (windowSize.x * 3) / 7 + 150 &&
    mouseY > windowSize.y / 7 &&
    mouseY < windowSize.y / 7 + 75
  ) {
    if (wood.amount >= woodAxe.price) {
      woodAxe.num++;
      wood.amount = wood.amount - woodAxe.price;
      wood.increment = wood.increment + woodAxe.increment;
      woodAxe.price = round(woodAxe.price * woodAxe.priceIncrease);
    } else {
      return;
    }
  }
  if (
    mouseX > (windowSize.x * 3) / 7 &&
    mouseX < (windowSize.x * 3) / 7 + 150 &&
    mouseY > windowSize.y / 7 + 75 &&
    mouseY < windowSize.y / 7 + 150
  ) {
    if (wood.amount >= woodPickaxe.price && woodAxe.num >= 1) {
      woodPickaxe.num++;
      wood.amount = wood.amount - woodPickaxe.price;
      stone.increment = stone.increment + woodPickaxe.increment;
      woodPickaxe.price = round(woodPickaxe.price * woodPickaxe.priceIncrease);
      stone.isDiscovered = true;
    } else {
      return;
    }
  }
}

class ItemUpgrades {
  woodAxe() {
    if (wood.isDiscovered == true) {
      fill(0);
      text("Wood Axe: " + woodAxe.num, 320, 130);
      text("Price: " + woodAxe.price + " wood", 320, 150);
      noFill();
      rect((windowSize.x * 3) / 7, windowSize.y / 7, 150, 75);
    }
  }
  woodPickaxe() {
    if (woodAxe.num >= 1) {
      fill(0);
      text("Wood Pickaxe: " + woodPickaxe.num, 320, 205);
      text("Price: " + woodPickaxe.price + " wood", 320, 225);
      noFill();
      rect((windowSize.x * 3) / 7, windowSize.y / 7 + 75, 150, 75);
    }
  }
  stoneAxe() {
    if (woodPickaxe.num >= 1) {
      fill(0);
      text("Stone Axe: " + stoneAxe.num, 320, 280);
      text("Price: " + stoneAxe.price + " stone", 320, 300);
      noFill();
      rect((windowSize.x * 3) / 7, windowSize.y / 7 + 150, 150, 75);
    }
  }
}
