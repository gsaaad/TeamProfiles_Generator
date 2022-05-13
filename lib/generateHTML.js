const fs = require("fs");
const path = require("path");

const htmlFile = "index.html";
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function generateHTML(dataArray) {
  let countManager = 0;
  let countEng = 0;
  let countIntern = 0;
  let htmlHolder = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
      <title>TeamProfile Generator</title>
    </head>
    <header
      class="bg-red-600 h-28 flex justify-center border-b-8 border-cyan-400"
    >
      <h1
        class="flex text-5xl font-semibold pr-8 border-r-4 border-cyan-400 text-white my-4"
      >
        My Team
      </h1>
    </header>
    <body>
      <div class="list-container mx-auto bg-cyan-700 h-screen">
        <div class="flex flex-rows">`;
  let managerHTML;
  let engineerHTML;
  let internHTML;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].constructor.name === "Manager") {
      console.log("Found a manager");
      let data = dataArray[i];

      countManager++;

      managerHTML = `<div
      class="grid grid-rows-7 grid-flow-col flex flex-wrap gap-2 mx-auto h-1/2"
    >
      <div
        class="bg-gray-200 w-96 h-3/2 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
      >
        <div
          class="bg-green-700 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
        >
          <h1>${data.name}</h1>
          <span><i class="fa-solid fa-mug-hot"></i> ${data.getRole()}</span>
        </div>

        <div>
          <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
            <li class="my-8 p-2 border-b-4 border-gray-600">ID:${data.id}</li>
            <li class="my-8 p-2 border-b-2 border-gray-400">
            <a
                    class="border-b-4 border-blue-300"
                    href="mailto:${data.email}"
                    >Email:${data.email}</a
                  >
            
            </li>
            <li class="my-8 p-2">GitHub account: 
            <a class="border-b-4 border-blue-300" href="https://github.com/${
              data.gitHub
            }">${data.gitHub}</a>
            </li>
            <li class="my-8 p-2">Office Number: ${data.officeNumber}</li>
            <!-- if manager office Number, if engineer github, if intern school -->
          </ol>
        </div>
      </div>
    </div>`;
      htmlHolder += managerHTML;
    }
    if (dataArray[i].constructor.name === "Engineer") {
      console.log("Found an engineer");
      let data = dataArray[i];
      countEng++;
      engineerHTML = `<div
      class="grid grid-rows-7 grid-flow-col flex flex-wrap gap-2 mx-auto h-1/2"
    >
      <div
        class="bg-gray-200 w-96 h-3/2 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
      >
        <div
          class="bg-green-500 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
        >
          <h1>${data.name}</h1>
          <span><i class="fa-solid fa-glasses"></i> ${data.getRole()}</span>
        </div>

        <div>
          <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
            <li class="my-8 p-2 border-b-4 border-gray-600">ID:${data.id}</li>
            <li class="my-8 p-2 border-b-2 border-gray-400">Email:
            <a
                    class="border-b-4 border-blue-300"
                    href="mailto:${data.email}"
                    >Email:${data.email}</a
                  >
            
            </li>
            <li class="my-8 p-2">GitHub account: 
            <a class="border-b-4 border-blue-300" href="https://github.com/${
              data.gitHub
            }">${data.gitHub}</a>
            </li>
            <!-- if manager office Number, if engineer github, if intern school -->
          </ol>
        </div>
      </div>
    </div>`;
      htmlHolder += engineerHTML;
    }
    if (dataArray[i].constructor.name === "Intern") {
      console.log("Found an Intern");
      countIntern++;
      let data = dataArray[i];
      internHTML = `<div
      class="grid grid-rows-7 grid-flow-col flex flex-wrap gap-2 mx-auto h-1/2"
    >
      <div
        class="bg-gray-200 w-96 h-3/2 rounded-lg my-auto mx-4 drop-shadow-2xl origin-center hover:origin-top"
      >
        <div
          class="bg-green-300 rounded-lg h-1/4 flex flex-col text-4xl text-white p-4 border-b-4 border-cyan-300"
        >
          <h1>${data.name}</h1>
          <span><i class="fa-solid fa-user-graduate"></i> ${data.getRole()}</span>
        </div>

        <div>
          <ol class="text-2xl mx-8 my-16 border-2 border-gray-700">
            <li class="my-8 p-2 border-b-4 border-gray-600">ID:${data.id}</li>
            <li class="my-8 p-2 border-b-2 border-gray-400">Email:
            <a
                    class="border-b-4 border-blue-300"
                    href="mailto:${data.email}"
                    >Email:${data.email}</a
                  >
            
            </li>
            <li class="my-8 p-2">GitHub account: 
            <a class="border-b-4 border-blue-300" href="https://github.com/${
              data.gitHub
            }">${data.gitHub}</a>
            </li>
            <!-- if manager office Number, if engineer github, if intern school -->
          </ol>
        </div>
      </div>
    </div>`;
      htmlHolder += internHTML;
    }
  }
  htmlHolder += `</div>

  <div class="bg-green-700 mx-32 w-3'5 text-center rounded-xl text-white text-5xl h-fit p-8"
  >
    Meet our Web Development team, we work tirelessly to ensure our products
    work as effectively as possible by running tests and have regular
    standups to meetup, until we arrive at our client's goals.
  </div>
</div>
</body>
<script src="https://cdn.tailwindcss.com"></script>
</html>
`;
  console.log(htmlHolder);

  console.log("Manager count: " + countManager);
  console.log("Enginner count: " + countEng);
  console.log("Intern count: " + countIntern);
  writeToFile(htmlFile, htmlHolder);
}

module.exports = generateHTML;
