import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Dodecahedron Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

// Box Object
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// Add objects to scene
scene.add(dodecahedron);
scene.add(box);

// Lights
const spotlight = new THREE.SpotLight(0x006769, 1);
spotlight.position.set(1, 1, 1);
scene.add(spotlight);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05; // Corrected typo from 'dapingFactor'
controls.enableZoom = true;
controls.enablePan = true;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01; // Fixed typo: rotate.y -> rotation.y

  box.rotation.x += 0.05; // Fixed typo: rotate.x -> rotation.x
  box.rotation.y += 0.05;

  controls.update();
  renderer.render(scene, camera);
}
animate();
