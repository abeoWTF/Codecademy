
class Media {
    constructor() {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = ratings;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    // Toggles checkout-state
    set toggleCheckOutStatus() {
        if(this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }

    // Calc average
    get getAverageRating() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var sum = this._ratings.reduce(reducer);
        return (sum / this._ratings.length);
    }

    addRating(rating) {

        this._ratings.push(rating);

    }

}