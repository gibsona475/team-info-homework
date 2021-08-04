const Employee = require("../lib/Employee");

 describe("Employee", () => {
    describe("Initializaion", () => {
        it("should return object", () => {
            const test = new Employee("Alice", 10, "test@test.com");

            expect(typeof(test)).toBe("object");
        });
    });
    describe("Functions", () => {
        it("should return name when i call getName()", () => {
            const test = new Employee("Alice", 10, "test@test.com");

            expect(test.getName()).toBe("Alice");
        });
        // it("should return id when i call getID()", () => {
        //     const test = new Employee("Bob", 10, "bob@test.com");

        //     expect(test.getId()).toBe(20);
        // });
        it("should return id when i call getID()", () => {
            const test = new Employee("Bob", 10, "bob@test.com");

            expect(test.getId()).toBe(10);
        });
    });
 });