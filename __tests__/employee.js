const Employee = require("../lib/Employee");

//
// jest.mock("../lib/Employee");
console.log(new Employee());
test("Creates a new Employee Object", () => {
  const employee = new Employee();
  console.log(employee);

  expect(employee.name).toBe("George");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getRole()).toEqual("Employee");
});
