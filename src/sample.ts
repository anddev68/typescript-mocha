/* エラー */
const RangeReversedError = new Error('上端点より下端点が大きい閉区間を作ることはできません');
const RangeTypeError = new Error('少数を閉区間に含むことはできません');

export class Range {

    public lower: number = 0;
    public upper: number = 0;

    constructor(lower: number, upper: number) {
        if (!Number.isInteger(lower)) {
            throw RangeTypeError;
        }
        if (!Number.isInteger(upper)) {
            throw RangeTypeError;
        }
        if (lower > upper) {
            throw RangeReversedError;
        }
        this.lower = lower;
        this.upper = upper;
    }

    public includes(target: number | Range): boolean | Range;

    public includes(target: number | Range) {
        if (typeof target === 'number') {
            if (Number.isInteger(target)) {
                return this.lower <= target && target <= this.upper;
            } else {
                throw RangeTypeError;
            }
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
