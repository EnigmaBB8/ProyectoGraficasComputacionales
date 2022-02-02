# Computer Graphics Project
_Jose Manuel Cruz Gil A01747740_

## IDEA
The idea of the following project is about showing the Earth in a 3D scene, and other planets that I invented. These planets can be seen while you move the cursor backwards, you can also see the planets and move them on their axis of rotation. The planets have their own rotation. The following resources were used in the development of this project

## RESOURCES

### WEBGL
WebGL (Web Graphics Library) is a standard specification that defines an API implemented in JavaScript for rendering 3D graphics within any web browser. To include it in the project the following line of code was made in the index.html file.
```
<canvas class="webgl"></canvas>
```
And in the client.js file
```
const canvas = document.querySelector('.webgl');
```

### THREE.JS
Three.js is a lightweight library written in JavaScript for creating and displaying animated 3D computer graphics in a Web browser and can be used in conjunction with the HTML5, SVG, or WebGL canvas element. To include it in the project it was necessary to import it with the following line of code in the client.js file
```
import * as THREE from '/build/three.module.js';
```
And in the server.js file these lines of code were included
```
app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
```

### EXPRESS
Express is the most popular Node web framework, and is the underlying library for a large number of other popular Node web frameworks. To import it into the project the following line was written in the server.js file
```
const express = require('express');
const app = express();
const path = require('path');
```

## GLOBAL VARIABLES 
In order to have our 3D scene we must have 3 basic elements and they are the camera, the scene and the render. The following lines initialize these elements
```
let scene;
let camera;
let renderer;
```

## CAMERA SETUP 
For camera setup we use PerspectiveCamera. This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used to render a 3D scene. Constructor
```
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
```
* **fov** — Camera frustum vertical field of view.
* **aspect** — Camera frustum aspect ratio.
* **near** — Camera frustum near plane.
* **far** — Camera frustum far plane.


## RENDERER SETUP 
Constructor
```
WebGLRenderer( parameters : Object )
```
The constructor also does not accept any parameters. In all cases, it will assume sensible defaults when parameters are missing. The following are valid parameters that we use in the project
* **Canvas** - A canvas where the renderer draws its output. This corresponds to the domElement property below. If not passed in here, a new canvas element will be created.
* **Antialias** - whether to perform antialiasing. The value is **true**
The following methods and their respective values were also used
```
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
```

## ORBITCONTROL
Orbit controls allow the camera to orbit around a target. Constructor
* **object** - (required) The camera to be controlled. The camera must not be a child of another object, unless that object is the scene itself.
* **domElement** The HTML element used for event listeners.
```
OrbitControls( object : Camera, domElement : HTMLDOMElement )
```

## EARTH AND PLANETS
To simulate a planet, different resources were used:

### Geometry
SphereGeometry: A class for generating sphere geometries. Constructor
```
SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
```
  Code example
```
const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);
```

### Material
MeshPhongMaterial: A material for shiny surfaces with specular highlights. Constructor
```
MeshPhongMaterial( parameters : Object )
```
The propiertes that were used were:
* **roughness**
* **metalness**
* **map:** The color map. Default is null. The texture map color is modulated by the diffuse .color.
* **bumpMap:** The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights. Bump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will be ignored. (This only were used for the Earth)
* **bumpScale:** How much the bump map affects the material. Typical ranges are 0-1. Default is 1.(This only were used for the Earth)
  Code example
```
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
    bumpScale: 0.3
});
```

### Mesh
Mesh: Class representing triangular polygon mesh based objects. Also serves as a base for other classes such as SkinnedMesh. Constructor
```
Mesh( geometry : BufferGeometry, material : Material )
```
The propiertes that were used were
* **geometry** — (optional) an instance of BufferGeometry. Default is a new BufferGeometry.
* **material** — (optional) a single or an array of Material. Default is a new MeshBasicMaterial
  Code example
```
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);
```

### Clouds
The clouds of the planets were modeled in the same way as the planets, only in the **Material** the _transparent_ property was used
  Code example
```
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
    transparent: true,
});
```

### Galaxy
The galaxy was modeled in the same way as the planets, only in the **Material** the _Sidet_ property was used
  Code example
```
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('texture/galaxy.png'),
    side: THREE.BackSide
});
```

## LIGHT
The lights used in the project were diverse so that each planet could be seen. Throughout the animation, the further away the planet is, the light decreases. The following functions for the implementation of the light that were used are the following

### AmbientLigth
THREE.AmbientLight: This light globally illuminates all objects in the scene equally. This light cannot be used to cast shadows as it does not have a direction. Constructor
```
AmbientLight( color : Integer, intensity : Float )
```
*   **color** - (optional) Numeric value of the RGB component of the color. Default is 0xffffff.
* **intensity** - (optional) Numeric value of the light's strength/intensity. Default is 1.

### PointLight
THREE.PointLight: A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb. Constructor
```
PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
```
* **color** - (optional) hexadecimal color of the light. Default is 0xffffff (white).
* **intensity** - (optional) numeric value of the light's strength/intensity. Default is 1.
* **distance** - Maximum range of the light. Default is 0 (no limit).
* **decay** - The amount the light dims along the distance of the light. Default is 1. For physically 

### PointLightHelper
THREE.PointLightHelper: This displays a helper object consisting of a spherical Mesh for visualizing a PointLight. Constructor
```
PointLightHelper( light : PointLight, sphereSize : Float, color : Hex )
```
* **light** -- The light to be visualized. 
* **sphereSize** -- (optional) The size of the sphere helper. Default is 1.
* **color** -- (optional) if this is not the set the helper will take the color of the light.

## EVENT CONTROL
For when the cursor is made to move away from the image, the scene must be handled, that is why the _element.addEventListener_ method was used. Register an event to a specific object. The specific object can be a simple element in a file, the document itself, a window, or an XMLHttpRequest.
Code
```
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);
```

## ANIMATE FUNCTION
The _Animate_ function is the most important because here we will be using the following methods y propierties
* **requestAnimationFrame():** informs the browser that you want to perform an animation and requests that the browser schedule the window to repaint for the next animation cycle.
* **.rotation:** Object's local rotation (see Euler angles), in radians. In this case all the objects rotate in its axes _y_
* **controls.update():** Required if controls.enableDamping or controls.autoRotate are set to true
* **render():** Render the whole scene
Code
```
const animate = () => {
    requestAnimationFrame(animate);
    starMesh.rotation.y -= 0.002;
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.001; 
    controls.update();
    render();
    stats.update();
};
```

## SAMPLE VIDEO 
[Video](http://www.dropwizard.io/1.0.2/docs/)

## HOW TO SEE THIS PROJECT
1. Clone this repository on your system

2. Open Terminal or Command Prompt on root directory of this project and type: npm init

3. npm install express

4. npm install three@0.127.0

5. Now open package.json file under "scripts": type "start": "node server.js" NOTE: If it's not already there

6. And finally open your Terminal or Command Prompt on root directroy and type: npm start

7. It will open your default browser and you will able to see the output if you click on the Visit http://127.0.0.1:3000


## BIBLIOGRAPHY
* https://threejs.org
* https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction
* https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
* https://threejs.org/docs/#api/en/renderers/WebGLRenderer
* https://threejs.org/docs/#examples/en/controls/OrbitControls
* https://threejs.org/docs/#api/en/geometries/SphereGeometry
* https://threejs.org/docs/#api/en/materials/MeshPhongMaterial
* https://threejs.org/docs/#api/en/objects/Mesh
* https://threejs.org/docs/#api/en/lights/AmbientLight
* https://www.youtube.com/watch?v=lkIVNrMhCwU
* https://threejs.org/docs/#api/en/lights/PointLight
* https://threejs.org/docs/#api/en/helpers/PointLightHelper
* https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
* https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame
* https://threejs.org/docs/#api/en/core/Object3D.rotation

## CREDITS
All the images were taken from the page https://www.pinterest.es 
