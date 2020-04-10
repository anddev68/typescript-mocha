import { Range } from '../src/sample';

import * as assert from 'assert';

// 機能1
//  - 状況
//  - 状況２
// 逆でも良い

describe('Rangeクラス', () => {
    // 閉区間3, 8の場合って書いても良い
    describe('閉区間 [3, 8]の正常系', () => {
        let range: Range;

        beforeEach(() => {
            range = new Range(3, 8);
        });

        describe('下端点を持つこと', () => {
            // 記述が減らせる
            it ('3が下端であること', () => {
                assert(range.lower === 3);
            });
        });

        describe('上端点を持つこと', () => {
            it ('8が上端であること', () => {
                assert(range.upper === 8);
            });
        });

        describe('文字列表現を返せること', () => {
            it ('文字列"[3, 8]"が返せること', () => {
                assert(range.toString() === '[3, 8]');
            });
        });

        /* コピペですすめない */
        describe('整数の閉区間は指定した整数を含むかどうかを判定できる', () => {
            it ('2が指定された時、"false"と表示できること', () => {
                assert (range.includes(2) === false);
            });
            it ('3が指定された時、"true"と表示できること', () => {
                assert (range.includes(3) === true);
            });
            it ('8が指定された時、"true"と表示できること', () => {
                assert (range.includes(8) === true);
            });
            it ('9が指定された時、"false"と表示できること', () => {
                assert (range.includes(9) === false);
            });
            it  ('3.5が指定された時、少数を閉区間に含むことはできませんが表示されること', () => {
                assert.throws(() => {
                    range.includes(3.5);
                }, 'RangeTypeError');
            });
        });

        describe('別の閉区間と等価かどうかを判断できる', () => {
            it ('[3, 8]が指定された時、"true"と表示できること', () => {
                const target = new Range(3, 8);
                assert (range.equals(target) === true);
            });
            it ('[2, 8]が指定された時、"false"と表示できること', () => {
                const target = new Range(2, 8);
                assert (range.equals(target) === false);
            });
            it ('[3, 9]が指定された時、"false"と表示できること', () => {
                const target = new Range(3, 9);
                assert (range.equals(target) === false);
            });
        });

        describe('別区間が完全に含まれるかどうかが判断できる', () => {
            it ('[3, 8]が指定された時、"true"と表示できること', () => {
                const target = new Range(3, 8);
                assert (range.equals(target) === true);
            });
            it ('[3, 7]が指定された時、"false"と表示できること', () => {
                const target = new Range(3, 7);
                assert (range.equals(target) === false);
            });
            it ('[2, 8]が指定された時、"false"と表示できること', () => {
                const target = new Range(2, 8);
                assert (range.equals(target) === false);
            });
        });
    });

    describe('閉区間 [3.5, 8]の非正常系', () => {
        describe('整数閉区間を示すクラスであること', () => {
            it('少数を閉区間に含むことはできませんが表示されること', () => {
                assert.throws(() => {
                    const _ = new Range(3.5, 8);
                }, 'RangeTypeError');
            });
        });
    });

    describe('閉区間 [8, 3]の非正常系', () => {
        describe('上端点より下端点が大きい閉区間を作ることはできない', () => {
            it('上端点より下端点が大きい閉区間を作ることはできませんが表示されること', () => {
                assert.throws(() => {
                    const _ = new Range(8, 3);
                }, 'RangeReversedError');
            });
        });
    });
});
