import {
    encode,
    decode,
    calculateCompressionRatio
} from "./index";

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 301);
        array.push(randomNumber);
    }
    return array;
}

function generateSpecificNumbers() {
    const result = [];

    while (result.length < 300) {
        const num = Math.floor(Math.random() * 10);
        result.push(num);
    }

    while (result.length < 600) {
        const num = Math.floor(Math.random() * 90) + 10;
        result.push(num);
    }

    while (result.length < 900) {
        const num = Math.floor(Math.random() * 201) + 100;
        result.push(num);
    }

    return result;
}

test('1calculateCompression', () => {
    expect(calculateCompressionRatio([12,23,23,23,23,54,234,23],encode([12,23,23,23,23,54,234,23]))).toBeGreaterThanOrEqual(50);
});

test('1calculateCheck', () => {
    expect(decode(encode([12,23,23,23,23,54,234,23]))).toEqual([12,23,23,23,23,54,234,23]);
});



test('2calculateCompression', () => {
    expect(calculateCompressionRatio([1,34,2],encode([1,34,2]))).toBeGreaterThanOrEqual(50);
});
test('2calculateCheck', () => {
    expect(decode(encode([1,34,2]))).toEqual([1,34,2]);
});



test('3calculateCompression', () => {
    const arr = [274, 223, 145, 289, 176, 25, 298, 134, 87, 201, 112,
        243, 36, 271, 194, 48, 300, 162, 235, 99, 183, 21, 267, 158, 82, 293, 125,
        24, 281, 179, 33, 256, 142, 228, 95, 187, 23, 279, 165,
        89, 213, 138, 29, 261, 197, 44, 30, 249, 153, 225, 91, 184, 27, 285, 172, 38,
        259, 147, 231, 85, 192, 22, 276, 168, 94, 211, 135, 28, 264, 199, 41, 295, 156,
        229, 97, 181, 24, 283, 174, 35, 253, 149, 233, 88, 195, 21, 278, 166, 92, 215, 139,
        25, 275, 169, 93, 212, 136, 27, 265, 200]
    expect(calculateCompressionRatio(arr,encode(arr))).toBeGreaterThanOrEqual(54);
});
test('3calculateCheck', () => {
    const arr = [274, 223, 145, 289, 176, 25, 298, 134, 87, 201, 112,
        243, 36, 271, 194, 48, 300, 162, 235, 99, 183, 21, 267, 158, 82, 293, 125,
        24, 281, 179, 33, 256, 142, 228, 95, 187, 23, 279, 165,
        89, 213, 138, 29, 261, 197, 44, 30, 249, 153, 225, 91, 184, 27, 285, 172, 38,
        259, 147, 231, 85, 192, 22, 276, 168, 94, 211, 135, 28, 264, 199, 41, 295, 156,
        229, 97, 181, 24, 283, 174, 35, 253, 149, 233, 88, 195, 21, 278, 166, 92, 215, 139,
        25, 275, 169, 93, 212, 136, 27, 265, 200]
    expect(decode(encode(arr))).toEqual(arr);
});


test('4calculateCompression', () => {
    const arr = generateRandomArray(500)
    expect(calculateCompressionRatio(arr,encode(arr))).toBeGreaterThanOrEqual(50);
});
test('4calculateCheck', () => {
    const arr = generateRandomArray(500)
    expect(decode(encode(arr))).toEqual(arr);
});

test('5calculateCompression', () => {
    const arr = generateRandomArray(1000)
    expect(calculateCompressionRatio(arr,encode(arr))).toBeGreaterThanOrEqual(50);
});
test('5calculateCheck', () => {
    const arr = generateRandomArray(1000)
    expect(decode(encode(arr))).toEqual(arr);
});

test('6calculateCompression', () => {
    const arr = generateSpecificNumbers()
    expect(calculateCompressionRatio(arr,encode(arr))).toBeGreaterThanOrEqual(50);
});
test('6calculateCheck', () => {
    const arr = generateSpecificNumbers()
    expect(decode(encode(arr))).toEqual(arr);
});



