export class Range {

    public lower: number = 0;
    public upper: number = 0;

    constructor(lower: number, upper: number) {
        this.lower = lower;
        this.upper = upper;
    }

    public includes(target: number | Range): boolean | Range;

    public includes(target: number | Range) {
        if (typeof target === 'number') {
            return this.lower <= target && target <= this.upper;
        } else if (target instanceof Range) {
            return this.lower <= target.lower && target.upper < this.upper;
        } else {
            /* 数字とrange以外のオブジェクトは無効 */
            return false;
        }
    }

    public equals(r: Range) {
        return this.lower === r.lower && this.upper === r.upper;
    }

    public toString() {
        return '[' + this.lower + ', ' +  this.upper + ']';
    }
}
