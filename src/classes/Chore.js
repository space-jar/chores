export class Chore {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    MULTIPLIER_PREFIX = 'x';

    constructor(name, points, time, days, multipliers) {
        this.name = name;
        this.points = points;
        this.time = time;          // example: 'Morning'
        this.days = days;               // example: ['Monday', 'Tuesday', 'Wednesday', 'Saturday']
        this.multipliers = multipliers; // example: { 'Monday': 2, 'Saturday': 3 }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get points() {
        return this._points;
    }

    set points(points) {
        this._points = points;
    }

    get days() {
        return this._days;
    }

    set days(days) {
        this._days = days;
    }

    get multipliers() {
        return this._multipliers;
    }

    set multipliers(multipliers) {
        this._multipliers = multipliers;
    }

    render() {
        let html = `<div class="chore">${this.name} <span class="points">${this.points}</span></div>`;

        // Create a grid for each day of the week
        for (let i = 0; i < this.DAYS.length; i++) {
            const day = this.DAYS[i];
            if (this.days.includes(day)) {
                if (this.multipliers[day]) {
                    html += `<div class="multiplier">${this.MULTIPLIER_PREFIX}${this.multipliers[day]}</div>`;
                } else {
                    html += `<div class="filled"></div>`;
                }
            } else {
                html += `<div class="empty"></div>`;
            }
        }

        return html;
    }
}