import { Chart } from './classes/Chart';
import { Chore } from './classes/Chore';

function dayStringToArray(dayString) {
    let days = [];
    if (dayString.includes('m'))
        days.push('Monday');
    if (dayString.includes('t') && dayString[dayString.indexOf('t') + 1] !== 'h')
        days.push('Tuesday');
    if (dayString.includes('w'))
        days.push('Wednesday');
    if (dayString.includes('th'))
        days.push('Thursday');
    if (dayString.includes('f'))
        days.push('Friday');
    if (dayString.includes('s') && dayString[dayString.indexOf('s') + 1] !== 'u')
        days.push('Saturday');
    if (dayString.includes('su'))
        days.push('Sunday');

    return days;
}

// Create some Chore instances
let chores = [];

chores.push(
    new Chore('Make your bed', 5, 'Morning', 'all'),
    new Chore('Brush your teeth', 5, 'Morning', 'all'),
    new Chore('Get Dressed', 5, 'Morning', 'all', 'all'),

    new Chore('Put away your clothes', 5, 'Afternoon', 'all', {'Saturday': 2}),
    new Chore('Pick up toys in the house', 5, 'Afternoon', dayStringToArray('mwfs'), {'Saturday': 2}),
    new Chore('Clean your room', 20, 'Afternoon', ['Saturday']),
    new Chore('Vacuum couch & chairs', 10, 'Afternoon', ['Saturday']),
    new Chore('Water the plants', 5, 'Afternoon', dayStringToArray('thsu'), {'Sunday': 2}),

    new Chore('Read a book for 10 minutes', 5, 'Night', 'all'),
    new Chore('Take a bath or shower', 5, 'Night', 'all'),
    new Chore('Brush your teeth', 5, 'Night', 'all')
);

// Create a Chart instance and add chores to it
const chart = new Chart();
chart.heading = 'Teddy\'s Good Habits Chart';
chart.addChores(chores);

// Render the chart and add it to the page
document.getElementById('chart-container').innerHTML = chart.render();

/* not working. too many properties to keep straight
import { ThreeDee } from './classes/3dViewer';
const threeDee = new ThreeDee();
threeDee.addCube();
threeDee.createScene();
*/

/* working
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

}
*/

import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

// Variables to handle dragging
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// Mouse down event
document.addEventListener('mousedown', (event) => {
    isDragging = true;
});

// Mouse move event
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = {
            x: event.offsetX - previousMousePosition.x,
            y: event.offsetY - previousMousePosition.y
        };

        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));

        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);

        previousMousePosition = {
            x: event.offsetX,
            y: event.offsetY
        };
    }
});

// Mouse up event
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Helper function to convert degrees to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();