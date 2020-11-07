import Phaser from "phaser";

export default class healthBar extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, width, height, color, duration) {
    super(scene, x, y, "healthbar", 0);
    this.scene = scene;

    this.health = 50;
    this.maxHealth = 50;
    this.healthBarBackground = scene.add.rectangle(
      x,
      y,
      this.maxHealth,
      4,
      0xff0000
    );
    this.healthBarBackground.setScrollFactor(0, 0);

    // scene.add.rectangle(x, y, width, height, color)
    this.healthBar = scene.add.rectangle(x, y, this.health, 4, color);
    this.healthBar.width = 50;
    this.healthBar.setScrollFactor(0, 0);

    setInterval(() => {
      this.removeHealth(4);
    }, duration);
  }
  addHealth(amount) {
    if (this.health < this.maxHealth) {
      this.health += amount;
    }
    this.updateHealthBarDisplay();
  }
  // removeHealth() : removes health from this tree
  removeHealth(amount) {
    if (this.health > 0) {
      this.health -= amount;
    }
    this.updateHealthBarDisplay();
  }

  updateHealthBarDisplay() {
    this.healthBar.width = this.health;
  }
}
