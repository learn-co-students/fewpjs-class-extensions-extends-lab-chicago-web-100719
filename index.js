class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((a,b) => a+b,0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.array.length !== 3){return false}
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        return side1+side2 > side3 && side1+side3 >side2 && side2 + side3 >side1 ? true : false

    }
}

class Square extends Polygon{
    get isValid(){
        if(this.array.length !== 4){return false}
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]
        return side1===side2 && side1===side3 && side1===side4 ? true:false
    }


    get area(){
        if (this.isValid){
            let side = this.array[0]
            return side**2
        }
    }
}