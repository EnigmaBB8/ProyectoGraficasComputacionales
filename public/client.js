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

const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
});

//The real way of the Earth
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

//SOON 22
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);


renderer.render(scene, camera);