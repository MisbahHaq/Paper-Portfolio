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
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: 0x468585 });
const dodecahedron = new THREE.Mesh(geometry, material);

// Box Object
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#B4B4B3', emissive: 0xB4B4B3 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// Add objects to scene
scene.add(dodecahedron);
scene.add(box);

// Lights
const spotlight = new THREE.SpotLight(0x006769, 1);
spotlight.position.set(1, 1, 1);
scene.add(spotlight);

// Optional: Add ambient light to soften shadows
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.x += 0.05;
  box.rotation.y += 0.05;

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Optional: Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
