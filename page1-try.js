//fade text in 
$(document).ready(function() {


  $('#fade1').hide().delay(2000).fadeIn(1000);

  $('#fade2').hide().delay(3000).fadeIn(2000);

});



//set up 3-d scene
let camera, scene, renderer, controls;
let geometry, material, mesh;

function build(x,y,z) {
  var roofVertices = [
    new THREE.Vector3(x+0, y+100, z), new THREE.Vector3(x+100, y+150, z+0), new THREE.Vector3(x+200, y+100, z+0),
    new THREE.Vector3(x+200, y+100, z+200), new THREE.Vector3(x+100, y+150, z+200), new THREE.Vector3(x+0, y+100, z+200)
  ];


  var material = new THREE.MeshBasicMaterial({
      color:0x760b00, //0xbd1f0c,
      side: THREE.DoubleSide,
      transparent: true
  });

  material.opacity = 0.8; 

  for (var i = 0; i < roofVertices.length; i++) {

      var v1 = roofVertices[i];
      var v2 = roofVertices[(i+1)%roofVertices.length];//wrap last vertex back to start

      var wallGeometry = new THREE.Geometry();
      
      wallGeometry.vertices = [
          v1,
          v2,
          new THREE.Vector3(v1.x, x, v1.z),
          new THREE.Vector3(v2.x, y, v2.z)
      ];

    



    //always the same for simple 2-triangle plane
    wallGeometry.faces = [new THREE.Face3(0, 1, 2), new THREE.Face3(1, 2, 3)];

    wallGeometry.computeFaceNormals();
    wallGeometry.computeVertexNormals();

    var wallMesh = new THREE.Mesh(wallGeometry, material);
    scene.add(wallMesh);

}
}

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(15, width/height, 0.1, 25000); // FOV, aspect ration, near, far
  camera.position.set(50, -6500, 100); // x, y (move up), back out on the z-axis
  scene.add(camera); // add camera to scene

  //let helper = new THREE.CameraHelper(camera);
  //scene.add(helper);

  for (i = 0; i < 70; i++) {
    console.log("Height: ", -height)
    //let x_pos = Math.random() * (width - (-width)) + (-width);
    let y_pos = Math.random() * (height- (-height)) + (-height);
    let z_pos = Math.random() * (600- (-600)) + (-600);
    let x = y_pos;
    let y = y_pos;
    let z = z_pos;  
    build(x,y,z); 
  }
  

/*


  let floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // x, y, vertices
  let floorMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
  let floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = Math.PI / 2; // rotate to lay flat
  scene.add(floor);
*/

/*

//CLONE


      var newHouse1 = wallMesh.clone();
      newHouse1.position.set(200,200,200);

      var newHouse2 = wallMesh.clone();
      newHouse2.position.set(200,400,200);

      var newHouse3 = wallMesh.clone();
      newHouse3.position.set(400,200,200);

//
      var newHouse4 = wallMesh.clone();
      newHouse4.position.set(-100,200,200);

      var newHouse5 = wallMesh.clone();
      newHouse5.position.set(-100,400,200);

      var newHouse6 = wallMesh.clone();
      newHouse6.position.set(-300,200,200);

//

      var newHouse7 = wallMesh.clone();
      newHouse7.position.set(200,-200,200);

      var newHouse8 = wallMesh.clone();
      newHouse8.position.set(200,-400,200);

      var newHouse9 = wallMesh.clone();
      newHouse9.position.set(400,-200,200);
//

      var newHouse10 = wallMesh.clone();
      newHouse10.position.set(-100,-200,200);

      var newHouse11 = wallMesh.clone();
      newHouse11.position.set(-100,-400,200);

      var newHouse12 = wallMesh.clone();
      newHouse12.position.set(-300,-200,200);
     

      scene.add(newHouse1, newHouse2, newHouse3, newHouse4,newHouse5, 
        newHouse6, newHouse7, newHouse8, newHouse9, newHouse10, newHouse11, newHouse12);

      

   
  */



  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //document.getElementById('container').appendChild(renderer.domElement);
  document.getElementById('container').appendChild(renderer.domElement);
  renderer.render(scene, camera);


}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  controls.update();
}


init(); 
animate();

//UPDATE POPULATION

var i = 1;                     //  set your counter to 1
var num = 3400; 
function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called                               //  your code here
      i++; 
      console.log("i'm working");
      count = num + i;  
      document.getElementById('fade2').innerHTML = "Population: " + count;                    //  increment the counter
      if (i < 100) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 2000)
}

myLoop();

window.onresize = function(){ location.reload(); }

/*
drawing of house inside a funciton and call the function multiple times (parameters for x,y,z)

draw the house in three js editor and upload it as a model (threejs.org) export GLTF file format.  <-- THIS

raycasting to make object hoverable */