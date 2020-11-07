// luke wuz here
import Phaser from "phaser";
import Water from "../classes/Water.js";
import Light from "../classes/Light.js";
import Dirt from "../classes/Dirt.js";

export default class Inventory extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.scene = scene;
    this.water = 0;
    this.dirt = 0;
    this.light = 0;

    // Create a rectangle game object here!
    var rectangle = scene.add.rectangle(90, 15, 78, 25, 0xcecee5);
    // Then add the game object to this container!
    this.add(rectangle);

    scene.add.existing(this);
    this.hideInventory();
    //this is what actually displays the inventory!
    var water = scene.add.image(60, 7, "water");
    this.add(water);
    var dirt = scene.add.image(90, 7, "dirt");
    this.add(dirt);
    var light = scene.add.image(115, 7, "light");
    this.add(light);
    this.setDepth(1);
    this.textStuff = this.scene.add.text(
      60,
      15,
      this.water + "  " + this.dirt + "  " + this.light
    );
    this.add(this.textStuff);
  }

  displayInventory() {
    this.setVisible(true);
  }

  hideInventory() {
    this.setVisible(false);
  }

  updateInventoryText() {
    this.textStuff.setText(this.water + " " + this.dirt + " " + this.light);
  }

  //this method adds items to the inventory, depending on which item you click
  addItem(item, amount) {
    if (item === "water") {
      this.water += amount;
    } else if (item === "light") {
      this.light += amount;
    } else if (item === "dirt") {
      this.dirt += amount;
    }
    //this.displayInventory();
    this.updateInventoryText();
  }

  //this method removes items from the iventory. Thus the name 'removeItem'
  removeItem(item, amount) {
    if (item === "water") {
      this.water -= amount;
    } else if (item === "light") {
      this.light -= amount;
    } else if (item === "dirt") {
      this.dirt -= amount;
    }
    this.updateInventoryText();
  }
}
