import Phaser from "phaser";
import LoadingScene from "/scenes/LoadingScene.js";
import TitleScene from "/scenes/TitleScene.js";
import PlayScene from "/scenes/PlayScene.js";
import UIScene from "/scenes/UIScene.js";
import CreditsScene from "/scenes/CreditsScene.js";

export const config = {
  type: Phaser.AUTO,
  parent: "game-container",
  pixelArt: true,
  /*
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  */
  autoRound: false,
  backgroundColor: "#000",
  scene: [LoadingScene, TitleScene, PlayScene, UIScene, CreditsScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 }
    }
  },
  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    width: 500 / 3,
    height: 300 / 3
  }
};
