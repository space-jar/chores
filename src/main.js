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