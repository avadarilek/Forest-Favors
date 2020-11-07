import Phaser from "phaser";

export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "ball");

    this.scene = scene;

    scene.add.existing(this);
    scene.physics.add
      .existing(this)
      .setCollideWorldBounds(true)
      .setDrag(5, 5)
      .setFriction(0, 0)
      .setMaxVelocity(200, 400)
      .setBounce(0.6)
      .setInteractive()
      .setOrigin() // fixes interactive offset issue
      .on("pointerdown", function (pointer, localX, localY, event) {
        // Let's make something happen when we click on this animal
        this.setVelocity(0, -200);
      });

    scene.physics.add.collider(scene.pet, this, () => {
      let scene = this.scene;
      let posOffsetX = this.x - scene.pet.x;
      let posOffsetY = this.y - scene.pet.y;

      this.setVelocity(posOffsetX, -150);
    });
  }

  update() {}

  destroy() {
    // Remove this object's update listener from the scene
    //this.scene.events.removeListener("update", this.update, this);

    // Call this object's parent class destroy method
    super.destroy();
  }
}
