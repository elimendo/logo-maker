const {Shape, Circle, Square, Triangle} = require("./Shape")


describe("Shape classes", ()=>{
    test("this.shapeColor is good", ()=>{
        const testShape = new Shape("red")
        expect(testShape.shapeColor).toBe("red")
    })
    
    test("Circle Print", ()=>{
        const testCircle = new Circle("magenta")
        expect(testCircle.print()).toBe(`<circle cx="150" cy="100" r="80" fill="magenta" />`)
    })

    test("Square Print", ()=>{
        const testSquare = new Square("green")
        expect(testSquare.print()).toBe(`<rect x="90" y="40" width="120" height="120" fill="green" />`)
    })

    test("Triangle Print", ()=>{
        const testTriangle = new Triangle("yellow")
        expect(testTriangle.print()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`)
    })
})