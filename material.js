let wood = {
  amount: 10000000,
  increment: 1,
  isDiscovered: true,
};

let stone = {
  amount: 10000000,
  increment: 0,
  isDiscovered: false,
};

function woodIncrement() {
  wood.amount += wood.increment;
}

function stoneIncrement() {
  stone.amount += stone.increment;
}

class ResourceIncrease{
  constructor(){
    this.timer = setInterval(() => {
      if(wood.isDiscovered) this.woodIncrease();
      if(stone.isDiscovered) this.stoneIncrease();
    }, 2000); // 2000 ms = every 2 seconds
  }
  woodIncrease(){
    woodIncrement();
  }
  stoneIncrease() {
    stoneIncrement();
  }
}
