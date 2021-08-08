const Manager = require("../lib/Manager");

 describe("Manager", () => {
    describe("Initializaion", () => {
        it("should return object", () => {
            const test = new Manager("Alice", 10, "test@test.com");

            expect(typeof(test)).toBe("object");
        });
    });
    describe("Functions", () => {
        it("should return name when i call getName()", () => {
            const test = new Manager("Tom", 10, "test@test.com");

            expect(test.getName()).toBe("Tom");
        });

     
       it("Should return Manager info", () => {
           const temp = new Manager("Name", 5, "test@gmail.com", "github");
           console.log(temp.getRole());
           expect(temp.getRole()).toBe("Manager");;
       });
    
    });
 });