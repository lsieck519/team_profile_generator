const Intern = require("../lib/intern")


describe("Intern", () => {
    describe("Initialization", () => {
        it("should set a school", () => {
            const obj = new Intern();
            expect("school" in obj).toEqual(true)
        })
    })
})