import * as THREE from "three";
import Experience from "../Experience.js";

import Room from "./Room.js";
import Environment from "./Environment.js";
import { EventEmitter } from "events";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
      //console.log("made room");
    });
  }

  resize() {}

  update() {}

  updateScroll(scrollY) {
    const normalizedScroll = scrollY / document.body.scrollHeight;

    // Example: Move the room model up and down based on scroll
    if (this.room && this.room.actualRoom) {
      this.room.actualRoom.position.y = -normalizedScroll * 5;
    }
  }


}
