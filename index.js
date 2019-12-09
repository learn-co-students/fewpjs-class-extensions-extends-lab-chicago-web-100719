// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(((accumulator, currentValue) => accumulator + currentValue),0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let validSide = 0
        this.sides.forEach(side => {
            if (side <= this.perimeter - side) {
                validSide ++
                console.log(validSide)
            }
        })
        if (validSide === 3) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.sides.length !== 4) return;
        return this.sides[0] * this.sides[0]
    }
}
