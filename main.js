import * as THREE from 'three';

// Create a scene

const scene = THREE.scene = new THREE.scene();
scene.background = new THREE.Color('F0F0F0');

// Add the camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create and add a cube object

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Add lighting

const light = new THREE.DirectionalLight();

// Set up the renderer

// Animate the scene