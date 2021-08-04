const Engineer = require("../lib/Engineer");

 describe("Engineer", () => {
    describe("Initializaion", () => {
        it("should return object", () => {
            const test = new Engineer("Alice", 10, "test@test.com");

            expect(typeof(test)).toBe("object");
        });
    });
    describe("Functions", () => {
        it("should return name when i call getName()", () => {
            const test = new Engineer("Alice", 10, "test@test.com");

            expect(test.getName()).toBe("Alice");
        });

     
       it("Should return Engineer info", () => {
           const temp = new Engineer("Name", 5, "test@gmail.com", "github");
           console.log(temp.getRole());
           expect(temp.getRole()).toBe("Engineer");;
       });
    
    });
 });