import Phaser from "phaser";
import Item from "./Item";
export default class Dirt extends Item {
  constructor(scene, x, y) {
    super(scene, x, y, "dirt");
    this.scene = scene;
  }
}
