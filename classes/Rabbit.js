import Phaser from "phaser";

export default class Rabbit extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "rabbit", 0);
    this.scene = scene;

    scene.add.existing(this);
    scene.physics.add
      .existing(this)
      .setDrag(500, 0)
      .setMaxVelocity(200, 400)
      .setCollideWorldBounds(true)
      .setInteractive()
      .setOrigin() // fixes interactive offset issue
      .on("pointerdown", (pointer, localX, localY, event) => {
        // Let's make something happen when we click on this rabbit
      });

    // Create the animations we need from the pet spritesheet
    const anims = scene.anims;
    anims.create({
      key: "rabbit-idle",
      frames: anims.generateFrameNumbers("rabbit", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "rabbit-walk",
      frames: anims.generateFrameNumbers("rabbit", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.play("rabbit-idle", true);

    // Make sure the scene calls this object's update function every frame
    scene.events.on("update", this.update, this);
  }

  update(time, delta) {
    const onGround = this.body.touching.down;

    // Small chance this animal may move left or right
    if (onGround) {
      if (Math.random() < 0.04) {
        var leftOrRight = Math.random();
        if (leftOrRight < 0.5) {
          this.setVelocity(150, -70);
        } else {
          this.setVelocity(-150, -70);
        }
      }
    }

    if (this.body.velocity.x > 0) {
      this.anims.play("rabbit-walk", true);
      this.flipX = false;
    } else if (this.body.velocity.x < 0) {
      this.anims.play("rabbit-walk", true);
      this.flipX = true;
    } else {
      this.anims.play("rabbit-idle", true);
    }
  }

  destroy() {
    // Remove this object's update listener from the scene
    this.scene.events.removeListener("update", this.update, this);

    // Call this object's parent class destroy method
    super.destroy();
  }
}
