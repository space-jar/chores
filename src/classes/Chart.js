import { Chore } from './Chore';

export class Chart {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    TIMES = [
        {
            name: 'Morning',
            img: 'img/morning.png'
        },
        {
            name: 'Afternoon',
            img: 'img/afternoon.png'
        },
        { 
            name: 'Night',
            img: 'img/night.png'
        }
    ];

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

    addChores(chores) {
        if (Array.isArray(chores)) {
            this.chores = [...this.chores, ...chores];
        } else {
            console.error('Invalid chores. Must be an array of Chore instances.');
        }
    }

    render() {
        let html = `
            <div class="chart-header">
                <h1>${this.heading}</h1>
            </div>
            <div class="chart-content">
                <div class="points-container">
                    <div class="points">Points: <span>490</span></div>
                    <div class="high-score">High Score: <span>490</span></div>
                </div>
        `;

        // Render each day of the week
        this.DAYS.forEach(day => {
            html += `<div class="day">${day}</div>`;
        });

        // Render each time of day and any chores that are scheduled for that time
        if (this.chores.length > 0) {
            this.TIMES.forEach(time => {
                var chores = this.chores.filter(chore => chore.time === time.name);

                if (chores.length) {
                    html += `<div class="${time.name.toLowerCase()} full-row">
                                <img src=${time.img}>
                                ${time.name}
                            </div>`;

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