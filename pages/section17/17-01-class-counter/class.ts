class Monster {
  power = 50;
  attack(): void {
    console.log("hit!");
  }
}

class SuperMonster extends Monster {
  run(): void {
    console.log("run away!");
  }

  attack(): void {
    console.log("super hit!");
  }
}

const monster = new Monster();
monster.attack();
const superMonster = new SuperMonster();
superMonster.attack();
