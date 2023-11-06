const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts)
    this.shieldPts = this.shieldPts
    this.stance = 'attacking'
  }

  attack(targetCharacter) {
    if (this.stance === 'attacking') {
      super.attack(targetCharacter)
    }
  }

  switchStance() {
    if (this.stance === 'attacking') {
      this.stance = 'defending'
      this.defensePts += this.shieldPts
    } else {
      this.stance = 'attacking'
      this.defensePts.Pts -= this.shieldPts
    }
  }
}