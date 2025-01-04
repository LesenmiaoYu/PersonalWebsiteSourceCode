import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import World from "./World/World.js"
//include three and all the util functions

export default class Experience {
  //this is to set up the singleton pattern - we dont want a lot of different canvases, scenes, etc.
  static instance;

  constructor(canvas) {
    //if experience's canvas exists, then just return the same one
    if (Experience.instance) {
      return Experience.instance;
    }
    //if not, we start a new one and set everything up
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.sizes = new Sizes();
    this.time = new Time();

    this.camera = new Camera();
    this.renderer = new Renderer();

    this.resources = new Resources(assets);

    this.world = new World();

    //when we receive an event that's emitted from time() called "hihihi", we call the function update()
    this.time.on("hihihi", () => {
      this.update();
    });

    this.sizes.on("resize", () => {
        this.resize();
    });
  }

  //call all the functions from camera and renderer to help update
  update() {
    this.camera.update();
    this.renderer.update();
  }

  //same here for resize 
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  

  /* STARTER CODE
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry,material);

        scene.add(cube);

        camera.position.z = 5;

        function animate(){
            window.requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            //cube.rotation.z += 5;

            renderer.render(scene,camera);
        };

        animate();
        */
}
