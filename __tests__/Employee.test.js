const Employee = require("../lib/employee")


describe("Employee", () => {
    describe("Initialization", () => {
        it("should..", () => {
            const obj = new Employee();
            expect("name" in obj).toEqual(true)
        })
    })
})