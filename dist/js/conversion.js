// Source: https://github.com/carlos-dubon/gh-colors/blob/main/src/conversions/Conversions.ts

const hexToRgb = hex => {
  return (
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      ?.map((x) => parseInt(x, 16)) || [0, 0, 0]
  );
};

module.exports = {
  hexToRgb,
}
