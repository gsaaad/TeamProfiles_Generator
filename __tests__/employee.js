const Employee = require("../lib/Employee");

//
jest.mock("../lib/Employee");

test("Creates a new Employee Object", () => {
  const employee = new Employee();

  expect(employee.name).toBe("George Employee");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  // expect(employee.getRole()).toEqual("Employee");
});
