import * as THREE from "three";
import Experience from "../Experience.js";

import Room from "./Room.js";
import { EventEmitter } from "events";
import {RectAreaLightHelper} from "three/addons/helpers/RectAreaLightHelper.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunlight();
    this.setLampLight();
    this.setShelfLight();
    this.setCandleLight();
    this.setMonitorLight();
  }

  //adding light1 - lamplight by the bed (on if at night)
  //function to swtich to night, call setLampLight()

  setLampLight() {
    //bedside lamp - adjusted
    this.lampLight = new THREE.PointLight("#ffb700", 0.55, 3, 2);

    this.lampLight.castShadow = true;
    this.lampLight.shadow.camera.far = 20;
    this.lampLight.shadow.mapSize.set(1024, 1024);
    this.lampLight.shadow.normalBias = 0.05;

    //const helper = new THREE.CameraHelper(this.lampLight.shadow.camera);
    //this.scene.add(helper);

    this.lampLight.position.set(-0.55, 0.81, 0.02);

    this.scene.add(this.lampLight);

    //------------------- i found the mix of the two lights together works the best

    this.glassLight = new THREE.PointLight("#ffffff", 0.55, 3, 2);

    this.glassLight.castShadow = true;
    this.glassLight.shadow.camera.far = 20;
    this.glassLight.shadow.mapSize.set(512, 512);
    this.glassLight.shadow.normalBias = 0.05;

    //const helper2 = new THREE.CameraHelper(this.glassLight.shadow.camera);
    //this.scene.add(helper2);

    this.glassLight.position.set(-0.55, 0.81, 0.02);

    this.scene.add(this.glassLight);
  }

  setShelfLight() {
    //see through lamp on the top of shelf - adjusted 

    this.shelfLight = new THREE.PointLight("#ffb700", 2, 1.5, 2);

    this.shelfLight.castShadow = true;
    this.shelfLight.shadow.camera.far = 20;
    this.shelfLight.shadow.mapSize.set(256, 256);
    this.shelfLight.shadow.normalBias = 0.05;

    const helper = new THREE.CameraHelper(this.shelfLight.shadow.camera);
    //this.scene.add(helper);

    this.shelfLight.position.set(0.57, 1.2, -0.63);

    this.scene.add(this.shelfLight);
  }

  setCandleLight() {
    //candle light in the shelf - adjusted

    this.candleLight = new THREE.PointLight("#ffb700", 1, 2, 2);

    this.candleLight.castShadow = true;
    this.candleLight.shadow.camera.far = 20;
    this.candleLight.shadow.mapSize.set(256, 256);
    this.candleLight.shadow.normalBias = 0.05;

    const helper = new THREE.CameraHelper(this.candleLight.shadow.camera);
    //this.scene.add(helper);

    this.candleLight.position.set(-1.2, 1, 0);

    this.scene.add(this.candleLight);
  }

  setMonitorLight() {
    //light coming from the monitor1

    const width = 0.5;
    const height = 0.26;
    const intensity = 3;

    this.rectLight = new THREE.RectAreaLight( "#0000ff", intensity,  width, height );

    const rectLightHelper = new RectAreaLightHelper( this.rectLight );
    //this.rectLight.add( rectLightHelper );

    this.rectLight.position.set( 0.25, 0.55, -0.91);
    this.rectLight.lookAt( 0, 0.55, -0.65 );

    this.scene.add( this.rectLight )

  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#edecdb", 0.15);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 10;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;

    const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    //this.scene.add(helper);

    this.sunLight.position.set(0, 10, 6);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#edecdb", 0.05);
    this.scene.add(this.ambientLight);
  }

  resize() {}

  update() {}
}
