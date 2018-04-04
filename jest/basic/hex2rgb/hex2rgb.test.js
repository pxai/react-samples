const hexStringToRGB = require('./hex2rgb');

test('Should generate rgb from hex', () => {
  expect(hexStringToRGB('#FFFFFF')).toEqual({r:255, g:255, b:255});
});

test('Should generate rgb from hex', () => {
  expect(hexStringToRGB('#FF9933')).toEqual({r:255, g:153, b:51});
});
