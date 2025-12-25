const questions = [
  { question: "Which activities does the OData Model Editor support?", options: ["Edit OData Models", "Deploy OData Models", "Create OData Models", "Test OData Models"], correct: [0,3] },
  { question: "What are the lifecycle events of an SAPUI5 view controller?", options: ["onRendering", "onExit", "onAfterRendering", "onBeforeEntry"], correct: [1,2] },
  { question: "Which features of SAP Business Application Studio help extend a standard Fiori app?", options: ["Wizard for extensions", "Modify data model", "Extensibility Pane", "Descriptor Editor"], correct: [0,2] },
  { question: "What are examples of extension points?", options: ["Table building block", "Custom column", "Custom action", "Custom section", "Field building block"], correct: [1,2,3] },
  { question: "Which are features of SAPUI5 SDK?", options: ["Web Dynpro interface", "Full translation support", "Non-mobile only", "Feature-rich UI controls"], correct: [1,3] },
  { question: "What does the ABAP CDS UI.lineItem annotation define?", options: ["Column order Product, Status, Price", "Form layout", "Column order Product, Price, Status", "Form layout different"], correct: [2] },
  { question: "To which does an SAP Fiori tile point directly?", options: ["App", "Target mapping", "Action", "Semantic object"], correct: [1] },
  { question: "Which SAPUI5 binding modes are valid?", options: ["One-time", "Three-way", "Resource-model", "Two-way", "One-way"], correct: [0,3,4] },
  { question: "Which model supports backend sorting & filtering?", options: ["ODataModel", "ResourceModel", "JSONModel", "XMLModel"], correct: [0] },
  { question: "How does SAP Cloud Connector work?", options: ["Reverse invoke on-premise", "Custom destination API", "Secure SSL tunnel", "Cloud-based invoke"], correct: [0,2] },
  { question: "Which Fiori template is used for metric cards?", options: ["List Report", "Overview Page", "Custom Page", "Analytical List Page"], correct: [1] },
  { question: "What is required for deep insert?", options: ["Object hierarchy", "Batch structures", "Flat structure", "Nested structure"], correct: [0,3] },
  { question: "Which QUnit assertion returns true?", options: ["0 === '0'", "0 === ' '", "0 === null", "0 === -0"], correct: [3] },
  { question: "Advantages of MVC in SAPUI5?", options: ["Multiple views", "Separate transport/debug", "Quick coding", "Change view without logic"], correct: [1,2] },
  { question: "Which app can be launched via search instead of tile?", options: ["Factsheet", "Analytical", "Legacy", "Transactional"], correct: [0] },
  { question: "Which file configures Fiori elements app?", options: ["config.xml", "package.json", "manifest.json", "settings.json"], correct: [2] },
  { question: "Which CDS annotation adds traffic light status?", options: ["selectionField", "color", "criticality", "lineItem"], correct: [2] },
  { question: "Which file is the application descriptor?", options: ["neo-app.json", "manifest.json", "Component.js", "index.html"], correct: [1] },
  { question: "Which actions for View Replacement?", options: ["Create replacement view", "Extension not sufficient", "Replace control", "Identify control"], correct: [0,1] },
  { question: "Optional step in role creation?", options: ["Assign catalog", "Create group", "Create tiles", "Create catalog"], correct: [1] },
  { question: "Object page header shows?", options: ["Sales Order", "Order Number", "Order Owner", "Sales Orders"], correct: [0,2] },
  { question: "Which Git action sends commits to remote?", options: ["Push", "Save", "Commit", "Clone"], correct: [0] },
  { question: "Which tile type uses OData for title?", options: ["Static", "Semi-dynamic", "Dynamic"], correct: [2] },
  { question: "Which elements in Analytical List Page?", options: ["Visual filter", "Form", "Table", "Visual table", "Interactive chart"], correct: [0,2,4] },
  { question: "How assign apps to role via PFCG?", options: ["Semantic object", "Catalog menu", "Authorization profile", "Group tile"], correct: [3] },
  { question: "Which WebIDE Usage setting required?", options: ["extend_abap", "odata_abap", "ui5_execute_abap", "dev_abap"], correct: [1] },
  { question: "Mobile table readability options?", options: ["max mobile", "inline mobile", "tablet popin", "tablet inline"], correct: [2,3] },
  { question: "Which content allowed in table cell?", options: ["Text", "Chart", "Image", "Table", "Micro chart"], correct: [0,2,4] },
  { question: "Which model supports deep insert?", options: ["XML", "OData", "JSON", "Resource"], correct: [1] },
  { question: "Add filter field using?", options: ["LineItem", "SelectionField", "manifest.json", "Page Map"], correct: [1,2] },
  { question: "Benefits of OData V4?", options: ["Flexible model", "Better UX", "Analytics", "Data types", "Compression"], correct: [0,2,3] },
  { question: "Benefits of Fiori elements?", options: ["Accessibility", "Low cost", "Fast JS coding", "Custom floorplans", "Design compliance"], correct: [0,1,4] },
  { question: "Generic actions in Fiori elements?", options: ["Navigate", "Delete", "Create", "Approve"], correct: [1,2] },
  { question: "Where can SAPUI5 app be deployed?", options: ["Java repo", "ABAP repo", "Launchpad", "SAP BTP"], correct: [1,3] },
  { question: "What does Fiori Tools Extension Pack do?", options: ["BTP integration", "Build apps", "Develop framework"], correct: [1] },
  { question: "Which test checks navigation?", options: ["Sinon", "QUnit", "OPA", "Mock server"], correct: [2] },
  { question: "Which layout supports responsive grids?", options: ["FlowLayout", "Grid", "VerticalLayout", "HorizontalLayout"], correct: [1] },
  { question: "Which binding displays Americas companies?", options: ["regions/0/companies → name, city", "regions/companies", "regions/0/companies → name, city", "regions/companies → name"], correct: [2] },
  { question: "Why tile not visible?", options: ["No role", "Catalog missing", "No OData auth", "No target mapping", "No group"], correct: [0,1,4] },
  { question: "Which are Fiori building blocks?", options: ["Filter Field", "Custom Page", "Routing", "Table", "Field"], correct: [0,3,4] },
  { question: "Template for charts & filters?", options: ["Custom", "Worklist", "Analytical List Page"], correct: [2] },
  { question: "What does UI.facet add?", options: ["Two sections", "Section with subsection", "Header sections"], correct: [1] },
  { question: "QUnit pattern?", options: ["Assert-Act-Arrange", "Given-When-Then", "Arrange-Act-Assert", "Given-Then-When"], correct: [2] },
  { question: "Recommended custom code options?", options: ["Controller extensions", "Private methods", "New templates", "Building blocks", "Custom page"], correct: [0,3,4] },
  { question: "Configure Flexible Column Layout?", options: ["manifest.json", "Custom extension", "package.json", "Page Map"], correct: [0,3] },
  { question: "Title of list report table?", options: ["Owners", "Sales Orders", "Numbers"], correct: [1] },
  { question: "Act in AAA pattern?", options: ["press()", "QUnit.test", "QUnit.module", "teardown"], correct: [0] },
  { question: "FacetFilter events?", options: ["listFilter", "onInit", "reset", "confirm"], correct: [2,3] },
  { question: "How extend Fiori app?", options: ["Modify model", "Adaptation project", "Runtime libs", "Modify view", "Extension point"], correct: [1,3,4] },
  { question: "OData editor supports?", options: ["Edit", "Deploy", "Create", "Test"], correct: [0,2] },
  { question: "Hook method setup requires?", options: ["Bootstrap change", "Reserve function", "Strategic location", "Check & execute", "Util JS"], correct: [1,2,3] },
  { question: "Where is SAPUI5 code stored in hub deployment?", options: ["FES", "Web Dispatcher", "BES", "HANA XS"], correct: [0] },
  { question: "Which file sent to translator?", options: ["View", "i18n.properties", "Component.js", "manifest.json"], correct: [1] },
  { question: "Enable multi-language?", options: ["Resource file", ".props file", "Per language file", "Encode HTML", "Separate views"], correct: [0,2,3] },
  { question: "Fragment characteristics?", options: ["Own controller", "Standalone view", "Reusable UI parts", "Runtime loading"], correct: [2,3] },
  { question: "HTTP method to create OData resource?", options: ["POST", "PUT", "UPDATE", "CHANGE"], correct: [0] },
  { question: "Extension properties in manifest?", options: ["modelMods", "i18nMods", "controllerExtensions", "viewMods"], correct: [2,3] },
  { question: "What controls data display?", options: ["Logic", "Templates", "Database", "Permissions"], correct: [1] },
  { question: "Valid SAPUI5 bindings?", options: ["Structure", "Property", "Combination", "Element", "Aggregation"], correct: [1,3,4] },
  { question: "Create Worklist app?", options: ["hideFilterBar local", "Page Map", "manifest setting", "backend annotation", "Generator"], correct: [1,2,4] }
];
const quizDiv = document.getElementById("quiz");
questions.forEach((q, i) => {
  const correctCount = q.correct.length;
  const inputType = correctCount > 1 ? "checkbox" : "radio";

  const noteText =
    correctCount === 1
      ? "There is only 1 correct answer."
      : `There are ${correctCount} correct answers to this question.`;

  let html = `
    <div class="question" id="q${i}" data-limit="${correctCount}">
      <h3>Q${i + 1}. ${q.question}</h3>
      <p class="note"><strong>Note:</strong> ${noteText}</p>
      <div class="options">
  `;

  q.options.forEach((opt, j) => {
    html += `
      <label class="option">
        <input type="${inputType}" name="q${i}" value="${j}">
        ${opt}
      </label>
    `;
  });

  html += `
      </div>
      <p class="warning" style="display:none;color:red;font-size:13px;">
        You can select only ${correctCount} option(s).
      </p>
    </div>
  `;

  quizDiv.innerHTML += html;
});

/* =========================
   LIMIT CHECKBOX SELECTION (NO ALERT)
========================= */
document.addEventListener("change", function (e) {
  if (e.target.type !== "checkbox") return;

  const questionDiv = e.target.closest(".question");
  const limit = parseInt(questionDiv.dataset.limit, 10);
  const warning = questionDiv.querySelector(".warning");

  const checked = questionDiv.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (checked.length > limit) {
    e.target.checked = false;
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});

/* =========================
   SUBMIT QUIZ
========================= */
function submitQuiz() {
  let score = 0;

  questions.forEach((q, i) => {
    const inputs = document.querySelectorAll(`input[name="q${i}"]`);
    const selected = [];

    inputs.forEach(input => {
      if (input.checked) selected.push(parseInt(input.value));
      input.disabled = true; // lock answers
    });

    if (
      JSON.stringify(selected.sort()) ===
      JSON.stringify(q.correct.sort())
    ) {
      score++;
    }

    inputs.forEach((input, index) => {
      if (q.correct.includes(index)) {
        input.parentElement.classList.add("correct");
      } else if (input.checked) {
        input.parentElement.classList.add("wrong");
      }
    });
  });

  document.querySelector("button").disabled = true;

  document.getElementById("result").innerText =
    `You answered ${score} correct out of ${questions.length} questions`;
}