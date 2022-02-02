import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

//---------------------------Initial configuration to have a 3D scene---------------------------
// global variables
let scene;
let camera;
let renderer;
const canvas = document.querySelector('.webgl');

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 50;
const aspect = window.innerWidth / window.innerHeight;
const near = .1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
scene.add(camera);

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

//---------------------------Orbitcontrol configuration to achieve an interaction in the scene---------------------------
// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);

//---------------------------Settings for the appearance of the Earth---------------------------
// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
    bumpScale: 0.3
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

//---------------------------Settings for the appearance of the clouds---------------------------
// cloud Geometry
const cloudGeometry = new THREE.SphereGeometry(0.33, 32, 32);

// cloud metarial
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
    transparent: true,
});

// cloud mesh
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

//---------------------------Settings for the appearance of the Planet Doja---------------------------
// Doja geometry
const DojaGeometry = new THREE.SphereGeometry(2, 20, 20);

// Doja material
const DojaMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap2k.jpg'),
});

// Doja mesh
const DojaMesh = new THREE.Mesh(DojaGeometry, DojaMaterial);
scene.add(DojaMesh);

//---------------------------Settings for the appearance of the clouds of the Planet Doja---------------------------
// cloud Geometry
const cloudDojaGeometry = new THREE.SphereGeometry(2.2, 20, 20);

// cloud metarial
const cloudDojaMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
    transparent: true,
});

// cloud mesh
const cloudDojaMesh = new THREE.Mesh(cloudDojaGeometry, cloudDojaMetarial);
scene.add(cloudDojaMesh);

//---------------------------Settings for the appearance of the Planet MusicS---------------------------
// MusicS geometry
const MusicSGeometry = new THREE.SphereGeometry(20.4, 20, 20);

// MusicS material
const MusicSMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap3k.jpg'),
});

// Doja mesh
const MusicSMesh = new THREE.Mesh(MusicSGeometry, MusicSMaterial);
scene.add(MusicSMesh);

//---------------------------Settings for the appearance of the clouds of the MusicS---------------------------
// cloud Geometry
const cloudMusicSGeometry = new THREE.SphereGeometry(21, 20, 20);

// cloud metarial
const cloudMusicSMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
    transparent: true,
});

// cloud mesh
const cloudMusicSMesh = new THREE.Mesh(cloudMusicSGeometry, cloudMusicSMetarial);
scene.add(cloudMusicSMesh);

//---------------------------Settings for the appearance of the Planet Chromatica---------------------------
// Chromatica geometry
const ChromaticaGeometry = new THREE.SphereGeometry(100, 20, 20);

// Chromatica material
const ChromaticaMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap4k.jpg'),
});

// Doja mesh
const ChromaticaMesh = new THREE.Mesh(ChromaticaGeometry, ChromaticaMaterial);
scene.add(ChromaticaMesh);

//---------------------------Settings for the appearance of the clouds of the Chromatica---------------------------
// cloud Geometry
const cloudChromaticaGeometry = new THREE.SphereGeometry(110, 20, 20);

// cloud metarial
const cloudChromaticaMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('texture/earthCloud2.png'),
    transparent: true,
});

// cloud mesh
const cloudChromaticaMesh = new THREE.Mesh(cloudChromaticaGeometry, cloudChromaticaMetarial);
scene.add(cloudChromaticaMesh);

//---------------------------Settings for the appearance of the galaxy---------------------------
// galaxy geometry
const starGeometry = new THREE.SphereGeometry(270, 32, 32);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('texture/galaxy.png'),
    side: THREE.BackSide
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

//---------------------------Settings for the light that will be set in the scene and the planets can be seen---------------------------
// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(200, 80, 200);
scene.add(pointLight);

// point light helper
const Helper = new THREE.PointLightHelper(pointLight);
scene.add(Helper);

//---------------------------Settings when the cursor is moved away---------------------------
// handling resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);

// current fps
const stats = Stats();
document.body.appendChild(stats.dom);

//---------------------------Settings (function animate) for the rotation of each planet---------------------------
const animate = () => {
    requestAnimationFrame(animate);
    starMesh.rotation.y -= 0.002;
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.001;
    DojaMesh.rotation.y -= 0.003;
    cloudDojaMesh.rotation.y -= 0.0036;
    MusicSMesh.rotation.y -= 0.004;
    cloudMusicSMesh.rotation.y -= 0.0048;
    ChromaticaMesh.rotation.y -= 0.005;
    cloudChromaticaMesh.rotation.y -= 0.0055;
    
    controls.update();
    render();
    stats.update();
};

//---------------------------Settings for rendering the scene---------------------------
const render = () => {
    renderer.render(scene, camera);
}

animate();