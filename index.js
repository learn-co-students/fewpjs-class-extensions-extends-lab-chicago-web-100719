class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a,b) => a + b)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if(this.sides.length === 3){
      if(this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]){
        return true
      }
      return false
    }
    return false
  }
}

class Square extends Polygon {

  get isValid() {
    if(this.sides.length === 4){
      if(this.sides.every(side => side === this.sides[0])){
        return true
      }
      return false
    }
    return false
  }

  get area() {
    return this.sides[0] ** 2
  }
}
