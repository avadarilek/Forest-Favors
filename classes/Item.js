import Phaser from "phaser";
export default class Item extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, imageKey = "item") {
    super(scene, x, y, imageKey);
    this.scene = scene;
    this.imageKey = imageKey;

    // Add this object to our rendering engine
    scene.add.existing(this);

    // Add this object to our physics engine
    scene.physics.add
      .existing(this)
      .setDrag(450)
      .setInteractive()
      .setCollideWorldBounds(false)
      .setOrigin() // fixes interactive offset issue
      .on("pointerup", function (pointer, localX, localY, event) {
        this.addToInventory();
        this.destroy();
      });
  }

  addToInventory() {
    this.scene.character.inventory.addItem(this.imageKey, 1);
  }
}
