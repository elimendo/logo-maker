const Svg = require("./Svg")
const Text = require("./Text")
const {Triangle} = require("./Shape")

    describe("Tests for svg ", ()=>{
        const testText = new Text("qrs", "violet")
        const testTriangle = new Triangle("brown")
        const testSvg = new Svg(testText, testTriangle)
        test("testing text", ()=>{
            expect(testSvg.text).toBe(testText)
        })

        test("testing shape", ()=>{
            expect(testSvg.shape).toBe(testTriangle)
        })

        test("testing print", ()=>{
            expect(testSvg.print()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${testTriangle.print()}${testText.print()}</svg>`)
        })
    })
