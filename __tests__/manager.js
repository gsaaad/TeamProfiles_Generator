const Manager = require("../lib/Manager");

// Enter team manager's name, employee ID, email address and office number
jest.mock("../lib/Manager.js");

test("Creates a new intern Object", () => {
  const manager = new Manager();
  console.log(manager);

  expect(manager.name).toBe("George MANAGER");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.gitHub).toEqual(expect.any(String));
});
