# Computer Graphics Project
_Jose Manuel Cruz Gil A01747740_

## Idea
The idea of the following project is about showing the Earth in a 3D scene, and other planets that I invented. These planets can be seen while you move the cursor backwards, you can also see the planets and move them on their axis of rotation. The planets have their own rotation. The following resources were used in the development of this project

## Resources

## WEBGL
WebGL (Web Graphics Library) is a standard specification that defines an API implemented in JavaScript for rendering 3D graphics within any web browser. To include it in the project the following line of code was made in the index.html file.
```
<canvas class="webgl"></canvas>
```
And in the client.js file
```
const canvas = document.querySelector('.webgl');
```

## THREE.JS
Three.js is a lightweight library written in JavaScript for creating and displaying animated 3D computer graphics in a Web browser and can be used in conjunction with the HTML5, SVG, or WebGL canvas element. To include it in the project it was necessary to import it with the following line of code in the client.js file
```
import * as THREE from '/build/three.module.js';
```

## EXPRESS
Express is the most popular Node web framework, and is the underlying library for a large number of other popular Node web frameworks. To import it into the project the following line was written in the server.js file
```
const express = require('express');
const app = express();
const path = require('path');
```

## Bibliography
* https://threejs.org
* https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction
