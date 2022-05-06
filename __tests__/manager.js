const Manager = require("../lib/Manager");

// Enter team manager's name, employee ID, email address and office number

console.log(new Manager());

test("Creates a new intern Object", () => {
  const manager = new Manager();
  console.log(manager);

  expect(manager.name).toBe("George MANAGER");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.getName()).toEqual(expect.any(String));
  expect(manager.getEmail()).toEqual(expect.any(String));
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");

  expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});
