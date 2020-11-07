import Phaser from "phaser";

export default class Heart extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "heart", 0);
    this.scene = scene;

    scene.add.existing(this);

    // Make sure the scene calls this object's update function every frame
    scene.events.on("update", this.update, this);

    this.destroyTimer = scene.time.addEvent({
      delay: 1500, // ms
      callback: () => {
        this.destroy();
      }
    });
  }

  update(time, delta) {
    this.y -= 1;
    this.x += 1 - parseInt(Math.random() * 3);
  }

  destroy() {
    // Remove this object's update listener from the scene
    this.scene.events.removeListener("update", this.update, this);

    // Call this object's parent class destroy method
    super.destroy();
  }
}
