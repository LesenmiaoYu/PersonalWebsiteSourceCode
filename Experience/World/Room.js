import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.setModel();

    //const geometry  = new THREE.BoxGeometry(1,1,1);
    //const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    //const cube = new THREE.Mesh(geometry, material);

    //this.scene.add(cube);
  }

  //this is where we are actually loading in the blender model
  setModel() {
    this.actualRoom.children.forEach(child=>{
      child.castShadow = true;
      child.receiveShadow = true; 

      if(child instanceof THREE.Group){
        child.children.forEach(groupchild=>{
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        })
      }
    });


    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.5, 0.5, 0.5); //this is to make the room 2x2
    //this.actualRoom.rotation.y = Math.PI * -1.5;

    //adding a plane to the bottom of the world
    /*
    const geometry = new THREE.PlaneGeometry( 25, 25 );
    const material = new THREE.MeshBasicMaterial( {color: "e1d9c3", side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material );
    this.scene.add(plane);
    plane.rotation.x = Math.PI*1.5
    plane.translateZ(-0.05)
    */

  }

  resize() {}

  update() {}
}
