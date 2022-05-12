module.exports = function (dataArray) {
  let countManager = 0;
  let countEng = 0;
  let countIntern = 0;
  let htmlHolder;
  let managerHTML;
  let engineerHTML;
  let internHTML;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].constructor.name === "Manager") {
      console.log("Found a manager");

      countManager++;

      managerHTML = `
      <div
      class="bg-gray-200 w-96 h-3/4 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
    >
      <div
        class="bg-green-300 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
      >
        <h1>${dataArray[i].name}</h1>
        <span>${dataArray[i].getRole()}</span>
      </div>

      <div>
        <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
          <li class="my-8 p-2 border-b-4 border-gray-600">ID:${
            dataArray[i].id
          }</li>
          <li class="my-8 p-2 border-b-2 border-gray-400">Email: ${
            dataArray[i].email
          }</li>
          <li class="my-8 p-2">Office Number: ${dataArray[i].officeNumber}</li>
          <li class="my-8 p-2">GITHUB: ${dataArray[i].gitHub}</li>
        </ol>
      </div>
    </div>`;
      htmlHolder += managerHTML;
    }
    if (dataArray[i].constructor.name === "Engineer") {
      console.log("Found an engineer");
      countEng++;
      engineerHTML = `
      <div
      class="bg-gray-200 w-96 h-3/4 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
    >
      <div
        class="bg-green-300 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
      >
        <h1>${dataArray[i].engName}</h1>
        <span>${dataArray[i].getRole()}</span>
      </div>

      <div>
        <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
          <li class="my-8 p-2 border-b-4 border-gray-600">ID:${
            dataArray[i].engId
          }</li>
          <li class="my-8 p-2 border-b-2 border-gray-400">Email: ${
            dataArray[i].engEmail
          }</li>
          <li class="my-8 p-2">Github: ${dataArray[i].engGithub}</li>
        </ol>
      </div>
    </div>`;
      htmlHolder += engineerHTML;
    }
    if (dataArray[i].constructor.name === "Intern") {
      console.log("Found an Intern");
      countIntern++;
      internHTML = `
      <div
      class="bg-gray-200 w-96 h-3/4 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
    >
      <div
        class="bg-green-300 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
      >
        <h1>${dataArray[i].internName}</h1>
        <span>${dataArray[i].getRole()}</span>
      </div>

      <div>
        <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
          <li class="my-8 p-2 border-b-4 border-gray-600">ID:${
            dataArray[i].internId
          }</li>
          <li class="my-8 p-2 border-b-2 border-gray-400">Email: ${
            dataArray[i].internEmail
          }</li>
          <li class="my-8 p-2 border-b-2 border-gray-400">School: ${
            dataArray[i].internSchool
          }
          </li>
          <li class="my-8 p-2">Github: ${dataArray[i].internGithub}</li>
        </ol>
      </div>
    </div>`;
      htmlHolder += internHTML;
    }
  }
  console.log(htmlHolder);
  console.log("Manager count: " + countManager);
  console.log("Enginner count: " + countEng);
  console.log("Intern count: " + countIntern);
};
