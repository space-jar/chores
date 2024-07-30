import { Chart } from './classes/Chart';
import { Chore } from './classes/Chore';

// Create some Chore instances
const chore1 = new Chore('Make your bed', 5, 'Morning', ['Monday', 'Tuesday', 'Wednesday'], { 'Monday': 2 });
const chore2 = new Chore('Brush your teeth', 5, 'Night', ['Monday', 'Friday'], { 'Friday': 3 });

// Create a Chart instance and add chores to it
const chart = new Chart();
chart.addChore(chore1);
chart.addChore(chore2);

// Render the chart and add it to the page
document.getElementById('chart-container').innerHTML = chart.render();