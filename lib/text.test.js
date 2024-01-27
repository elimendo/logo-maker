const Text = require("./Text")


    describe("Tests for the Text Class", ()=>{

        const testTextInstance = new Text("ABC", "purple");

        test("this.char property is set",()=>{
            const expectedChar = "ABC"
            expect(testTextInstance.char).toBe(expectedChar)
        })

        test("this.txtColor property is set", ()=>{
            const expectedColor = "purple"
            expect(testTextInstance.txtColor).toBe(expectedColor)
        }) 
        test("print method returns expected value", ()=>{
            const expectedOutput = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">ABC</text>`
            expect(testTextInstance.print()).toBe(expectedOutput)
        })
    })




