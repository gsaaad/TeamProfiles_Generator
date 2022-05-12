const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

test("Creates a new Engineer Object", () => {
  const engineer = new Engineer();
  console.log(engineer);

  expect(engineer.name).toBe("George Engineer");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.gitHub).toEqual(expect.any(String));
});
