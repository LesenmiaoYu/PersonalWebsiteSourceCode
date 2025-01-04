import {EventEmitter} from "events";
import * as THREE from "three";
//we need to keep track of sizes and time changing so that we can adjust/update everything accordingly

export default class Sizes extends EventEmitter{
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.emit("resize");
    });
  }
}
