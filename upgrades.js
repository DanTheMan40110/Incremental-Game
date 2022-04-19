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

let stonePickaxe = {
  num: 0,
  priceIncrease: 1.2,
  price: 100,
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
  if (
    mouseX > (windowSize.x * 3) / 7 &&
    mouseX < (windowSize.x * 3) / 7 + 150 &&
    mouseY > windowSize.y / 7 + 150 &&
    mouseY < windowSize.y / 7 + 225
  ) {
    if (stone.amount >= stoneAxe.price && woodPickaxe.num >= 1) {
      stoneAxe.num++;
      stone.amount = stone.amount - stoneAxe.price;
      wood.increment = wood.increment + stoneAxe.increment;
      stoneAxe.price = round(stoneAxe.price * stoneAxe.priceIncrease);
    } else {
      return;
    }
  }
  if (
    mouseX > (windowSize.x * 3) / 7 &&
    mouseX < (windowSize.x * 3) / 7 + 150 &&
    mouseY > windowSize.y / 7 + 225 &&
    mouseY < windowSize.y / 7 + 300
  ) {
    if (stone.amount >= stonePickaxe.price && stoneAxe.num >= 1) {
      stonePickaxe.num++;
      stone.amount = stone.amount - stonePickaxe.price;
      stone.increment = stone.increment + stonePickaxe.increment;
      stonePickaxe.price = round(
        stonePickaxe.price * stonePickaxe.priceIncrease
      );
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
  stonePickaxe() {
    if (stoneAxe.num >= 1) {
      fill(0);
      text("Stone Pickaxe: " + stonePickaxe.num, 320, 355);
      text("Price: " + stonePickaxe.price + " stone", 320, 375);
      noFill();
      rect((windowSize.x * 3) / 7, windowSize.y / 7 + 225, 150, 75);
    }
  }
}
