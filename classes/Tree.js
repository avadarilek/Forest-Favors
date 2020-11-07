import Phaser from "phaser";
import HealthBar from "./HealthBar";
import Inventory from "./Inventory";
export default class Tree extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "tree", 0);
    this.scene = scene;

    this.name = "Tree Boi";
    this.age = 10 * Math.random(); // In tree years
    //this.health = 100;

    //these following lines create the three health bars!
    this.dirtHealth = new HealthBar(scene, 80, 5, 50, 10, 0x3f301d, 40000);
    this.waterHealth = new HealthBar(scene, 80, 10, 50, 10, 0x0077be, 10000);
    this.lightHealth = new HealthBar(scene, 80, 15, 50, 10, 0xfaca0f, 20000);
    scene.add.existing(this);
    scene.physics.add
      .existing(this)
      .setDrag(500, 0)
      .setMaxVelocity(200, 400)
      .setCollideWorldBounds(true)
      .setInteractive()
      .setOrigin() // fixes interactive offset issue
      .on("pointerdown", (pointer, localX, localY, event) => {
        this.addHealth("dirt", 1);
        this.addHealth("water", 1);
        this.addHealth("light", 1);
        this.treeTextureChange();

        //this stuff is temporary, just trying to get the texture changes working

        if (this.texture.key === "unhealthyTree") {
          this.setTexture("healthyTree");
        } else if (this.texture.key === "tree") {
          this.setTexture("unhealthyTree");
        } else {
          this.setTexture("tree");
        }

        //if (this.texture.key === "healthyTree") {
        //  this.setTexture("unhealthyTree");
        // }
      });
  }
  //now THIS addHealth method "transfers" items from the inventory to the tree health
  addHealth(item, amount) {
    if (item === "dirt") {
      if (this.scene.character.inventory.dirt >= amount) {
        this.dirtHealth.addHealth(amount);
        this.scene.character.inventory.removeItem(item, amount);
      }
    }
    if (this.scene.character.inventory.water >= amount) {
      if (item === "water") {
        this.waterHealth.addHealth(amount);
        this.scene.character.inventory.removeItem(item, amount);
      }
    }
    if (this.scene.character.inventory.light >= amount) {
      if (item === "light") {
        this.lightHealth.addHealth(amount);
        this.scene.character.inventory.removeItem(item, amount);
      }
    }
  }

  preUpdate(time, delta) {}

  destroy() {
    // Call this object's parent class destroy method
    super.destroy();
  }
}
