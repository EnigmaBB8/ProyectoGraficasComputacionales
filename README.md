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

## CODE

### GLOBAL VARIABLES 
In order to have our 3D scene we must have 3 basic elements and they are the camera, the scene and the render. The following lines initialize these elements
```
let scene;
let camera;
let renderer;
```

### CAMERA SETUP 
For camera setup we use PerspectiveCamera. This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used to render a 3D scene. Constructor
```
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
```
* **fov** — Camera frustum vertical field of view.
* **aspect** — Camera frustum aspect ratio.
* **near** — Camera frustum near plane.
* **far** — Camera frustum far plane.

### RENDERER SETUP 
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
### ORBITCONTROL
Orbit controls allow the camera to orbit around a target. Constructor
```
OrbitControls( object : Camera, domElement : HTMLDOMElement )
```
* **object** - (required) The camera to be controlled. The camera must not be a child of another object, unless that object is the scene itself.
* **domElement** The HTML element used for event listeners.

### EARTH AND PLANETS
To simulate a planet, different resources were used:
**Geometry** SphereGeometry: A class for generating sphere geometries. Constructor
```
SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
```
Code example
```
const earthGeometry = new THREE.SphereGeometry(0.3, 32, 32);
```


## BIBLIOGRAPHY
* https://threejs.org
* https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction
* https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
* https://threejs.org/docs/#api/en/renderers/WebGLRenderer
* https://threejs.org/docs/#examples/en/controls/OrbitControls
