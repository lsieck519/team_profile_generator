const Employee = require("../lib/employee")


describe("Employee", () => {
    describe("Initialization", () => {

        it("should set a name when created", () => {
            const obj = new Employee();
            expect("emName" in obj).toEqual(true)
        });

        it("should set an id when created", () => {
            const obj = new Employee();
            expect("id" in obj).toEqual(true)
        });

        it("should set an email when created", () => {
            const obj = new Employee();
            expect("email" in obj).toEqual(true)
        });
        
    })
})