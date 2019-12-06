class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = sides.length
    }

    get countSides() {return this.count}

    get perimeter() {return this.sides.reduce(function(memo, s){
      return  memo + s
    })
    }
}

class Triangle extends Polygon {
    get isValid() { 
        return (this.sides[0] + this.sides[1] > this.sides[2] &&
        this.sides[1] + this.sides[2] > this.sides[0] &&
        this.sides[0] + this.sides[2] > this.sides[1])
    }
}

class Square extends Polygon {
    get isValid() {
      return  (this.sides[0] === this.sides[1] && 
        this.sides[0] === this.sides[2] && 
        this.sides[0] === this.sides[3] )
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] **2
        }
    }
}