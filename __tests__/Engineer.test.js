const Engineer = require("../lib/engineer")


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set a github username", () => {
            const obj = new Engineer();
            expect("github" in obj).toEqual(true)
        })
    })
})



