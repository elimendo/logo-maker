class Svg {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }

  print() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.print()}${this.text.print()}</svg>`;
  }
}

module.exports = Svg