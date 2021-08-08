const Intern = require("../lib/Intern");

 describe("Intern", () => {
    describe("Initializaion", () => {
        it("should return object", () => {
            const test = new Intern("Tom", 10, "test@test.com");

            expect(typeof(test)).toBe("object");
        });
    });
    describe("Functions", () => {
        it("should return name when i call getName()", () => {
            const test = new Intern("Tom", 10, "test@test.com");

            expect(test.getName()).toBe("Tom");
        });

     
       it("Should return Intern info", () => {
           const temp = new Intern("Name", 5, "test@gmail.com", "github");
           console.log(temp.getRole());
           expect(temp.getRole()).toBe("Intern");;
       });
    
    });
 });