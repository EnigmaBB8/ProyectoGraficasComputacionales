import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

//Global Variables
let scene;
let camera;
let renderer;
const canvas = document.querySelector('.webgl');

scene = new THREE.Scene();

//vertical field of view, from bottom to top of view, in degrees
const fov = 60;
//Camera frustration aspect ratio
const aspect = window.innerWidth / window.innerHeight;
//Camera frustum near plane
const near = 0.1;
//Camera frustum far plane
const far = 1000;

//Constructor for the camera
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
scene.add(camera);

renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});

//The web browser can take the full screen correctly
renderer.setSize(window.innerWidth, window.innerHeight);
//For the proportion of pixeles by the device
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

//To maket the structure of the Earth
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
const startGeometry = new THREE.SphereGeometry(80, 64, 64);

const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map : THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
    bumpMap : THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
    bumpScale: 0.3
});
const cloudMaterial = new THREE.MeshPhongMaterial({
    map : THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
    transparent: true
});
const startMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('texture/galaxy.png'),
    side: THREE.BackSide
});

//The real way of the Earth
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(cloudMesh);
const startMesh = new THREE.Mesh(startGeometry, startMaterial);
scene.add(startMesh);

//This is the light source 
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

//To make more ligth in our objetc we use a pointLight
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5,3,5);
scene.add(pointLight);

//This function will run in each frame to animate the Earth
const animate = () =>{
    requestAnimationFrame(animate);
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.0015;
    startMesh.rotation.y -= 0.002;
    render();
}
const render = () =>{
    renderer.render(scene, camera);
}

animate();