const dataset = require("../json/dataset.min.json");
const translate = require('./translate.js');
const { hexToRgb } = require('./conversion.js');

function get(language, mode="hex") {
  let result;

  mode = mode.toLowerCase()

  switch (mode) {
    case "hex":
      result = getHex(language);
      break;
    case "rgb":
      result = getRGB(language);
      break;
    default:
      throw new Error(`Invalid Mode: ${mode}`);
      return;
  }

  if (typeof result === "undefined") {
    throw new Error(`Unknown Language: ${language}`);
    return;
  }

  return result;
}

function getHex(language) {
  return dataset[translate(language, false)];
}

function getRGB(language) {
  const result = dataset[translate(language, false)];

  if (typeof result === "undefined") {
    throw new Error(`Unknown Language: ${language}`);
    return;
  }

  return hexToRgb(result);
}

module.exports = get;
