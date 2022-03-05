const axios = require('axios');
const fs = require('fs');
const path = require('path');

const translate = name => {
  const specialChars = new Map([
    ["#", "-sharp-"],
    ["+", "-plus-"],
    ["*", "-star-"],
    ["\'", ""],
    ["(", ""],
    [")", ""],
    ["--", "-"],
  ]);

  Array.from(specialChars.keys()).forEach(char => {
    if (name.includes(char) === true) {
      name = name.replaceAll(char, specialChars.get(char));
    }
  });

  name = name.split("");

  if (name[name.length - 1] === "-") {
    name.pop();
  }

  name = name.join("");

  return name;
}

const downloadFormatJSON = async () => {
  console.log("Downloading JSON...");

  const response = await axios.get(`
    https://raw.githubusercontent.com/ozh/github-colors/master/colors.json
  `);

  console.log("Download Complete...");
  console.log("Formatting...");

  let data = Object.entries(response.data);

  let colors = {};

  data.forEach(el => {
    let name = el[0].replaceAll(" ", "-").toLowerCase();
    let color = el[1].color;

    name = translate(name);

    colors[name] = color ?? "#fff";
  });

  console.log("Formatting Complete...");
  console.log("Writing to File...");

  const jsonContent = JSON.stringify(colors);

  try {
    fs.writeFileSync(path.join(__dirname, "../dist/json/dataset.min.json"), jsonContent);
    console.log("File written successfully...");
  } catch(err) {
    console.error(err);
  }

}

if (fs.existsSync(path.join(__dirname, "../dist")) === false) {
  fs.mkdirSync(path.join(__dirname, "../dist"))
}

if (fs.existsSync(path.join(__dirname, "../dist/json")) === false) {
  fs.mkdirSync(path.join(__dirname, "../dist/json"))
}

downloadFormatJSON();
