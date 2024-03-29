class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  print() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  print() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  print() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = {
  Shape,
  Circle,
  Square,
  Triangle,
};
