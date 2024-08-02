export class Chore {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    MULTIPLIER_PREFIX = 'x';

    /**
     * Create a new Chore instance
     * @param {string} name - The name of the chore
     * @param {number} points - The number of points the chore is worth
     * @param {string} time - The time of day the chore should be done
     * @param {array|string} days - The days of the week the chore should be done. 'all' for every day
     * @param {object} [multipliers] - An object with days of the week as keys and multipliers as values.
     */
    constructor(name, points, time, days, multipliers = []) {
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
            if (this.days === 'all' || this.days.includes(day)) {
                if (this.multipliers[day]) {
                    html += `<div class="multiplier">${this.MULTIPLIER_PREFIX}${this.multipliers[day]}</div>`;
                } else {
                    html += `<div class="empty"></div>`;
                }
            } else {
                html += `<div class="filled"></div>`;
            }
        }

        return html;
    }
}