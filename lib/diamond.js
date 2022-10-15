module.exports = character => {

  if(character.toUpperCase().charCodeAt() < 65 || character.toUpperCase().charCodeAt() > 90) {
    return 'The input is not a letter';
  }

  var a = 'A'.charCodeAt(), frameLetter,
  width = character.toUpperCase().charCodeAt() - a,
  i = 0, lines = [];

  function blanks(n) { 
    return new Array(n).join(' '); 
  }

  function makeLine() {
    return blanks(width + 1 - i) + frameLetter +
        blanks(i * 2) + frameLetter;
  }

  while (i++ < width) {
    frameLetter = String.fromCharCode(a + i);
    lines.push(makeLine());
  }

  if (lines.length) {
    lines.unshift(blanks(width + 1) + 'A');
    lines = lines.concat(lines.slice(0, lines.length - 1).reverse());
  } else {
    lines.push('A');
  }

  return lines.join('\n');
}
