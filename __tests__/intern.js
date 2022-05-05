const Intern = require("../lib/Intern");

//
// jest.mock("../lib/Intern");
console.log(new Intern());
test("Creates a new Intern Object", () => {
  const intern = new Intern();
  console.log(intern);

  expect(intern.name).toBe("George");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.getName()).toEqual(expect.any(String));
  expect(intern.getEmail()).toEqual(expect.any(String));
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getRole()).toEqual("Intern");
});
