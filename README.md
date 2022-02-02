# Computer Graphics Project

The project shows a scenario where the Earth will be attacked by various forces, the further you go with the cursor, the more threats you will be able to detect. Do you want to know what they are?

Throughout this file, the resources that were used will be documented to transmit to those who seek similar information.

## ARCHITECTURE

For this project, the client-server model or architecture will be used.Client-server architecture is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server over a network or internet connection. 

## WEBGL

WebGL (Web Graphics Library) is a JavaScript API for rendering **high-performance** interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML5 (canvas) elements. This conformance makes it possible for the API to take advantage of hardware graphics acceleration provided by the user's device.

## THREE.JS

Three.js is a lightweight library written in JavaScript for creating and displaying **animated 3D computer** graphics in a Web browser and can be used in conjunction with the HTML5, SVG, or WebGL canvas element.

## NODE.JS

Node.js technology was used for this project.Node.js is an open source, cross-platform runtime environment for the server layer based on the JavaScript programming language, asynchronous, with data I/O in an event-driven architecture and based on the V8 engine of Node.js. Google

## EXPRESS

Express was used for this project, which is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## ORBITCONTROLS

Orbit controls allow the camera to orbit around a target.
To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.

## GLOBAL VARIABLES

To be able to visualize a 3D scene we need a scene, a camera and a render, that is why the following global variables were declared to control not only what is going to be shown but how
 - let scene;
 - let camera;
 - let renderer;

## PERSPECTIVECAMERA
Camera that uses perspective projection. This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.

### fov : Float
Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is 50.

### near : Float
Camera frustum near plane. Default is 0.1.

### far : Float
Camera frustum far plane. Default is 2000.

### aspect : Float
Camera frustum aspect ratio, usually the canvas width / canvas height. Default is 1 (square canvas).

## EARTH

The following resources were used to model the Earth

### SphereGeometry

Constructor: SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep)

### MeshPhongMaterial

The material uses a non-physically based Blinn-Phong model for calculating reflectance. Unlike the Lambertian model used in the MeshLambertMaterial this can simulate shiny surfaces with specular highlights (such as varnished wood).
  
## CREDITS AND BIBLIOGRAPHY
  * https://threejs.org
  * https://cs.uwaterloo.ca/~m2nagapp/courses/CS446/1195/Arch_Design_Activity/ClientServer.pdf
  * https://nodejs.org/es/
  * https://threejs.org/docs/#examples/en/controls/OrbitControls
  * https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
  * https://threejs.org/docs/#api/en/geometries/SphereGeometry
  * https://threejs.org/docs/#api/en/materials/MeshPhongMaterial
