import {EventEmitter} from "events";
import * as THREE from "three";

export default class Time extends EventEmitter{
    constructor() {
        super(); //for event emitter
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        this.update();
      };

      update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        //console.log(this.delta);
        this.emit("hihihi");

        window.requestAnimationFrame(()=>this.update());

      }

    }