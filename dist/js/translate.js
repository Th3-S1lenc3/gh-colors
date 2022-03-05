function translate(name, prefix = true) {
  name = name.toLowerCase();

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

  if (prefix == true) {
    return `gh-color-${name}`;
  }

  return name;
}

module.exports = translate;
