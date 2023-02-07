const Manager = require("../lib/manager")


describe("Manager", () => {
    describe("Initialization", () => {
        it("should set an office number", () => {
            const obj = new Manager();
            expect("officeNumber" in obj).toEqual(true)
        })
    })
})