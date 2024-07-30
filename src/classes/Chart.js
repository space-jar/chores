import { Chore } from './Chore';

export class Chart {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    TIMES = ['Morning', 'Afternoon', 'Night'];

    constructor() {
        this.heading;
        this.chores = []; // Array to hold Chore instances
    }

    get heading() {
        return this._heading;
    }

    set heading(heading) {
        this._heading = heading;
    }

    addChore(chore) {
        if (chore instanceof Chore) {
            this.chores.push(chore);
        } else {
            console.error('Invalid chore. Must be an instance of Chore.');
        }
    }

    render() {
        let html = `
            <div class="chart-header">
                <h1>${this.heading}</h1>
            </div>
            <div class="chart-content">
                <div class="points-container">
                    <div class="points">Points: </div>
                    <div class="high-score">High Score: </div>
                </div>
        `;

        // Render each day of the week
        this.DAYS.forEach(day => {
            html += `<div class="day">${day}</div>`;
        });

        // Render each time of day and any chores that are scheduled for that time
        if (this.chores.length > 0) {
            this.TIMES.forEach(time => {
                var chores = this.chores.filter(chore => chore.time === time);

                if (chores.length) {
                    html += `<div class="${time.toLowerCase()} full-row">${time}</div>`;

                    chores.forEach(chore => {
                        html += chore.render(); // Render the chore and add to HTML
                    });
                }
            });
        }

        // Add the rest of the chart
        html += `
            </div>
        </div>`;

        return html;
    }
}