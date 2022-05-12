const Intern = require("../lib/Intern");

//
jest.mock("../lib/Intern");

test("Creates a new Intern Object", () => {
  const intern = new Intern();
  console.log(intern);

  expect(intern.name).toBe("George Intern");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.gitHub).toEqual(expect.any(String));
});
