function translate(name, prefix = "color") {
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

  if (prefix === "color") {
    return `gh-color-${name}`;
  }

  if (prefix === "bg" | prefix === "background" || prefix === "bg-color") {
    return `gh-bg-color-${name}`;
  }

  if (prefix != "") {
    console.warn(`Could not understand prefix ${prefix}. Returning without prefix.`);
  }
  
  return name;
}

module.exports = translate;
