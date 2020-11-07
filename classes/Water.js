import Phaser from "phaser";
import Item from "./Item";
export default class Water extends Item {
  constructor(scene, x, y) {
    super(scene, x, y, "water");
    this.scene = scene;
  }
}
