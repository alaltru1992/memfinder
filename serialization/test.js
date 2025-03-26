import {
    encode
} from "../index";

test('1encode', () => {
    expect(encode([12,23,23,23,23,54,234,23])).toBe("B2C3*4F4X4C3");
});
// test('1decode', () => {
//     expect(decode("B2C3*4F4X4C3")).toBe([12,23,23,23,23,54,234,23]);
// });