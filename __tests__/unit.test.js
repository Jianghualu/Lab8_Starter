// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone Number：
test('Phone test true 1', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Phone test true 2', () => {
    expect(functions.isPhoneNumber('(000)-000-0000')).toBe(true);
});

test('Phone test false 1', () => {
    expect(functions.isPhoneNumber('0000000000')).toBe(false);
});

test('Phone test false 2', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});

// Email：

test('Email test true 1', () => {
    expect(functions.isEmail('aaa@aaa.com')).toBe(true);
});

test('Email test true 2', () => {

    expect(functions.isEmail('bbbb@bbbb.com')).toBe(true);
});

test('Email test false 1', () => {
    expect(functions.isEmail('aaa')).toBe(false);

    expect(functions.isEmail('bbb@bbb.com')).toBe(true);
});

test('Email test false 1', () => {
    expect(functions.isEmail('aaaa')).toBe(false);
});

test('Email test false 2', () => {
    expect(functions.isEmail('bbbb')).toBe(false);
});

// Strong Password：

test('Strong password test true 1', () => {

    expect(functions.isStrongPassword('aaaaaaa')).toBe(true);
});

test('Strong password test true 2', () => {
    expect(functions.isStrongPassword('bbbbbbbb')).toBe(true);

    expect(functions.isStrongPassword('AAAAAA')).toBe(true);
});

test('Strong password test true 2', () => {
    expect(functions.isStrongPassword('aaaaaa')).toBe(true);
});

test('Strong password test false 1', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test('Strong password test false 2', () => {

    expect(functions.isStrongPassword('111111aaaaaaa')).toBe(false);

    expect(functions.isStrongPassword('111111111111111111111111111111111111111')).toBe(false);

});

// Date：

test('Date test true 1', () => {
    expect(functions.isDate('04/07/1999')).toBe(true);
});

test('Date test true 2', () => {

    expect(functions.isDate('12/24/2021')).toBe(true);
});

test('Date test false 1', () => {
    expect(functions.isDate('00/111/2222')).toBe(false);

    expect(functions.isDate('11/21/2022')).toBe(true);
});

test('Date test false 1', () => {
    expect(functions.isDate('11/111/1111')).toBe(false);
});

test('Date test false 2', () => {
    expect(functions.isDate('2/222/2222')).toBe(false);
});

// Color：

test('Hex test true 1', () => {
    expect(functions.isHexColor('#ABC')).toBe(true);
});

test('Hex test true 2', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Hex test false 1', () => {

    expect(functions.isHexColor('A****')).toBe(false);
});

test('Hex test false 2', () => {
    expect(functions.isHexColor('F**\*')).toBe(false);

    expect(functions.isHexColor('a****')).toBe(false);
});

test('Hex test false 2', () => {
    expect(functions.isHexColor('f\\\\')).toBe(false);
});