import Phaser from "phaser";
import { Scene } from "phaser";

const fontStyle = {
  fontSize: "12px",
  color: "#fff",
  stroke: "#000",
  strokeThickness: 2
};

let CREDITS_STRING =
  "Code: Dev Launchers\nAva Darilek\nArt: Ava Darilek\n R.G.";

export default class CreditsScene extends Scene {
  constructor() {
    super("CreditsScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    this.add.text(centerX, centerY, "Credits", fontStyle).setOrigin(0.5, 0.5);

    this.add
      .text(centerX, centerY + 22, CREDITS_STRING, fontStyle)
      .setOrigin(0.5, 0);

    this.input.on("pointerdown", () => {
      this.scene.manager.stop("CreditsScene");
    });
  }
}
