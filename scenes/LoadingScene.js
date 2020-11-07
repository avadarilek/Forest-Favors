import { Scene } from "phaser";

const fontStyle = {
  fontSize: "16px",
  color: "#fff"
};

export default class LoadingScene extends Scene {
  constructor() {
    super("LoadingScene");
  }

  nextScene() {
    this.scene.start("TitleScene");
  }

  preload() {
    // Actual loading follows
    this.load.image("sky", "../assets/sky.png");
    this.load.image("ground", "../assets/ground.png");
    this.load.image("ball", "../assets/ball.png");
    this.load.image("heart", "../assets/heart.png");
    this.load.image("unhealthyTree", "../assets/unhealthyTree.png");
    this.load.image("tree", "../assets/tree.png");
    this.load.image("healthyTree", "../assets/healthyTree.png");
    this.load.image("light", "../assets/light.png");
    this.load.image("water", "../assets/water.png");
    this.load.image("dirt", "../assets/dirt.png");

    // Load the pet's spritesheet
    this.load.spritesheet("pet", "../assets/pet.png", {
      frameWidth: 17,
      frameHeight: 21,
      margin: 0,
      spacing: 0
    });
    this.load.spritesheet("rabbit", "../assets/rabbit.png", {
      frameWidth: 17,
      frameHeight: 21,
      margin: 0,
      spacing: 0
    });
    this.load.spritesheet("frog", "../assets/frog.png", {
      frameWidth: 17,
      frameHeight: 21,
      margin: 0,
      spacing: 0
    });
    this.load.spritesheet("character", "../assets/character.png", {
      frameWidth: 17,
      frameHeight: 21,
      margin: 0,
      spacing: 0
    });
  }

  // The rest of this file makes the visual loading bar work!

  init() {
    // Loading bar code
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let barWidth = this.cameras.main.width - 24;
    let barHeight = 25;

    this.add
      .text(centerX, centerY - 24, "Loading", fontStyle)
      .setOrigin(0.5, 0.5);

    var progressBox = this.add.rectangle(
      centerX,
      centerY,
      barWidth,
      barHeight,
      0x000000
    );
    var progressBar = this.add
      .rectangle(
        progressBox.x - parseInt(progressBox.width / 2),
        centerY,
        barWidth,
        barHeight,
        0xffffff
      )
      .setOrigin(0, 0.5)
      .setScale(0, 1);

    this.load.on("progress", (value) => {
      progressBar.setScale(value, 1);
      if (value === 1) {
        // Loading is complete
        setTimeout(() => {
          this.nextScene();
          this.loadingProgressComplete = true;
        }, 2000);
      }
    });
    ////////////////////////////////////////
  }
}
