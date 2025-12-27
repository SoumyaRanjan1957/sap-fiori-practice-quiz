document.addEventListener("DOMContentLoaded", () => {

  const quiz = document.getElementById("quiz");
  const submitBtn = document.getElementById("submitBtn");
  const result = document.getElementById("result");

  let submitted = false;

  /* ==========================
     QUESTIONS (ADD ALL 61 HERE)
     ========================== */

  const questions = [
{
  question: "Which activities does the OData Model Editor support?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Edit ODataModels", correct: true },
    { text: "Deploy ODataModels", correct: false },
    { text: "Create ODataModels", correct: false },
    { text: "Test ODataModels", correct: true }
  ]
},
{
  question: "What are the lifecycle events of an SAPUI5 view controller?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "onRendering", correct: false },
    { text: "onExit", correct: true },
    { text: "onAfterRendering", correct: true },
    { text: "onBeforeEntry", correct: false }
  ]
},
{
  question: "Which features of the SAP Business Application Studio help you extend a standard SAP Fiori app?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "A wizard to generate the files for each extension possibility", correct: true },
    { text: "An editor to modify the data model in the extended project", correct: false },
    { text: "The Extensibility Pane to choose extension points", correct: true },
    { text: "The Descriptor Editor to choose elements for extension", correct: false }
  ]
},
{
  question: "What are some examples of extension points?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Table building block", correct: false },
    { text: "Custom column", correct: true },
    { text: "Custom action", correct: true },
    { text: "Custom section", correct: true },
    { text: "Field building block", correct: false }
  ]
},
{
  question: "Which of the following are features of the SAPUI5 SDK?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Interface for Web Dynpro", correct: false },
    { text: "Full translation support", correct: true },
    { text: "Responsiveness across browsers on non-mobile devices only", correct: false },
    { text: "Feature-rich UI controls for handling complex UI patterns", correct: true }
  ]
},
{
  question: "What does the following ABAP CDS annotation achieve in an SAP Fiori elements app?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "ProductName, Status, Price column order", correct: false },
    { text: "Form fields order", correct: false },
    { text: "ProductName, Price, Status column order", correct: true },
    { text: "Form with Status second", correct: false }
  ]
},
{
  question: "To which of the following does an SAP Fiori tile point to directly?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "An SAP Fiori app", correct: false },
    { text: "A target mapping with a semantic object and an action", correct: true },
    { text: "An action", correct: false },
    { text: "A semantic object", correct: false }
  ]
},
{
  question: "You need to bind data from a model to an SAPUI5 view control. Which modes are valid?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "One-time binding", correct: true },
    { text: "Three-way binding", correct: false },
    { text: "Resource-model binding", correct: false },
    { text: "Two-way binding", correct: true },
    { text: "One-way binding", correct: true }
  ]
},
{
  question: "Which SAPUI5-supported data model must you use to enable backend sorting and filtering?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "ODataModel", correct: true },
    { text: "ResourceModel", correct: false },
    { text: "JSONModel", correct: false },
    { text: "XMLModel", correct: false }
  ]
},
{
  question: "How does the SAP Cloud Connector help securely connect to an on-premise system?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "It creates connectivity by a reverse-invoke process on the on-premise system", correct: true },
    { text: "It supports custom destination API configuration and certificate inspection", correct: false },
    { text: "It secures an SSL tunnel between the SAP Cloud and the on-premise system", correct: true },
    { text: "It initiates a cloud-based reverse-invoke process", correct: false }
  ]
},
{
  question: "To visualize metrics using cards, which SAP Fiori elements template does SAP recommend to use?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "List Report Page", correct: false },
    { text: "Overview Page", correct: true },
    { text: "Custom Page", correct: false },
    { text: "Analytical List Page", correct: false }
  ]
},
{
  question: "You develop an SAPUI5 app that updates data for sales order and sales order items on the backend system. What do you create to implement a deep insert?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "An object structure that defines the hierarchy", correct: true },
    { text: "Individual structures for Sales Order and Sales Order Items and batch them", correct: false },
    { text: "A flat structure with Sales Order and Sales Order Items and add an expand command", correct: false },
    { text: "A nested structure for Sales Order and Sales Order Items", correct: true }
  ]
},
{
  question: "You perform a QUnit test with the following syntactical options. Which call returns true when you execute it?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "assert.strictEqual(0, \"0\", \"true\")", correct: false },
    { text: "assert.strictEqual(0, \" \", \"true\")", correct: false },
    { text: "assert.strictEqual(0, null, \"true\")", correct: false },
    { text: "assert.strictEqual(0, -0, \"true\")", correct: true }
  ]
},
{
  question: "What are some advantages of the Model View Controller (MVC) design pattern used in SAPUI5?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Allows defining several views of the same data", correct: false },
    { text: "MVC artifacts can be transported and debugged separately", correct: true },
    { text: "It supports quick coding", correct: true },
    { text: "Allows changing the view without modifying business logic", correct: false }
  ]
},
{
  question: "Which SAP Fiori application can you launch using the search function instead of a tile?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Factsheet", correct: true },
    { text: "Analytical", correct: false },
    { text: "Legacy", correct: false },
    { text: "Transactional", correct: false }
  ]
},
{
  question: "Which file is required for configuring an SAP Fiori elements application?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "config.xml", correct: false },
    { text: "package.json", correct: false },
    { text: "manifest.json", correct: true },
    { text: "settings.json", correct: false }
  ]
},
{
  question: "You want to add a column to the list report table that displays status colors. Which ABAP CDS annotation must you add?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "@UI.selectionField", correct: false },
    { text: "@UI.lineItem with color", correct: false },
    { text: "@UI.lineItem with criticality", correct: true },
    { text: "@UI.lineItem only", correct: false }
  ]
},
{
  question: "In a standard SAPUI5 project, which file is the Application Descriptor that contains metadata description?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "neo-app.json", correct: false },
    { text: "manifest.json", correct: true },
    { text: "Component.js", correct: false },
    { text: "index.html", correct: false }
  ]
},
{
  question: "Your customer extends an SAP Fiori app with View Replacement. Which activities do you perform?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Create an SAPUI5 view that replaces the complete view", correct: true },
    { text: "Verify that adding custom content in extension points is not sufficient", correct: true },
    { text: "Create an SAPUI5 control to replace the original control", correct: false },
    { text: "Identify a specific SAPUI5 control to be replaced", correct: false }
  ]
},
{
  question: "You are modeling a new role for SAP Fiori Launchpad users. Which step is optional?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Assign Catalog to Role", correct: false },
    { text: "Create Group and Assign Tile", correct: true },
    { text: "Create Tiles and Target Mappings", correct: false },
    { text: "Create Catalog", correct: false }
  ]
},
{
  question: "The following ABAP CDS annotation is used in an SAP Fiori elements app. What will be displayed in the upper left part of the object page?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Sales Order", correct: true },
    { text: "Sales Order Number value", correct: false },
    { text: "Sales Order Owner", correct: true },
    { text: "Sales Orders", correct: false }
  ]
},
{
  question: "Which of the following activities allows you to send commits from your local branch in your Git repository to the remote repository?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Push", correct: false },
    { text: "Save", correct: false },
    { text: "Commit", correct: true },
    { text: "Clone", correct: false }
  ]
},
{
  question: "Which of the following tile types can use an OData service to set the title properties?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Static", correct: false },
    { text: "Semi-dynamic", correct: false },
    { text: "Dynamic", correct: true }
  ]
},
{
  question: "Which of the following UI elements can be part of a standard Analytical List Page application?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Visual filter", correct: true },
    { text: "Form section", correct: false },
    { text: "Table", correct: true },
    { text: "Visual table", correct: false },
    { text: "Interactive chart", correct: true }
  ]
},
{
  question: "You created a new catalog that contains some apps. How can you assign these apps to an existing role using the PFCG transaction?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Add the semantic object to the catalog and group", correct: false },
    { text: "Add the catalog to the menu tab of the role", correct: false },
    { text: "Assign the authorization profile for the catalog in the authorization tab", correct: false },
    { text: "Add the tile and target mapping to the group", correct: true }
  ]
},
{
  question: "You need to configure an SAP Destination service to enable SAP Business Application Studio to extend an existing SAP Fiori app. Which configuration setting for the WebIDE Usage property is required?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "extend_abap", correct: false },
    { text: "odata_abap", correct: true },
    { text: "ui5_execute_abap", correct: false },
    { text: "dev_abap", correct: false }
  ]
},
{
  question: "Your customer requires an app to display flight information on a mobile device. Which options can you use to display the same data in a readable format?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "column demandPopin='true' maxScreenWidth='mobile'", correct: false },
    { text: "column demandPopin='true' maxScreenWidth='mobile' popinDisplay='Inline'", correct: false },
    { text: "column demandPopin='true' minScreenWidth='tablet'", correct: true },
    { text: "column demandPopin='true' minScreenWidth='tablet' popinDisplay='Inline'", correct: true }
  ]
},
{
  question: "Which of the following content types can be displayed within a table cell in SAP Fiori elements applications?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Text", correct: true },
    { text: "Chart", correct: false },
    { text: "Image", correct: true },
    { text: "Table", correct: false },
    { text: "Micro chart", correct: true }
  ]
},
{
  question: "Which model supports deep inserts?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "XML model", correct: false },
    { text: "OData model", correct: true },
    { text: "JSON model", correct: false },
    { text: "Resource model", correct: false }
  ]
},
{
  question: "What can you use to add a filter field to a list report in an SAP Fiori elements application?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "UI.lineItem annotation", correct: false },
    { text: "UI.selectionField annotation", correct: true },
    { text: "A setting in the manifest.json file", correct: true },
    { text: "The Page Map", correct: false }
  ]
},
{
  question: "What are some benefits of using OData V4 compared to OData V2?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Flexible programming model", correct: true },
    { text: "Better UX consistency", correct: false },
    { text: "Advanced analytical capabilities", correct: true },
    { text: "Improved data types", correct: true },
    { text: "Better data compression", correct: false }
  ]
},
{
  question: "What are some benefits of using SAP Fiori elements?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Accessibility support and multi-device compatibility", correct: true },
    { text: "Reduced development and maintenance costs", correct: true },
    { text: "Accelerated development of JavaScript UI code", correct: false },
    { text: "Custom floorplans for unique scenarios", correct: false },
    { text: "Compliance with SAP Fiori design specifications", correct: true }
  ]
},
{
  question: "Which of the following are generic actions provided by SAP Fiori elements?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Trigger external navigation", correct: false },
    { text: "Delete an item", correct: true },
    { text: "Create an item", correct: true },
    { text: "Approve an item", correct: false }
  ]
},
{
  question: "You finalized your SAPUI5 app in the SAP Business Application Studio. To which platforms can you deploy this app?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "SAPUI5 Java repository", correct: false },
    { text: "SAPUI5 ABAP repository", correct: true },
    { text: "SAP Fiori Launchpad", correct: false },
    { text: "SAP BTP", correct: true }
  ]
},
{
  question: "What can you do using the SAP Fiori Tools Extension Pack?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Implement SAP Business Technology Platform integration", correct: false },
    { text: "Build SAP Fiori applications", correct: true },
    { text: "Develop the SAP Fiori elements framework", correct: false }
  ]
},
{
  question: "While testing an SAP Fiori app you discover that the navigation on the page does not work correctly. Which agile pyramid option do you use?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Sinon", correct: false },
    { text: "QUnit", correct: false },
    { text: "OPA", correct: true },
    { text: "Mock server", correct: false }
  ]
},
{
  question: "Which control can you use to create responsive table-free layouts?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "sap.ui.layout.ResponsiveFlowLayout", correct: false },
    { text: "sap.ui.layout.Grid", correct: true },
    { text: "sap.ui.layout.VerticalLayout", correct: false },
    { text: "sap.ui.layout.HorizontalLayout", correct: false }
  ]
},
{
  question: "In the data shown, you want to display the list of companies in the Americas region. Which binding option do you use for values X, Y, and Z?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "X: /regions/0/companies Y: companies/0/name Z: companies/0/city", correct: false },
    { text: "X: /regions/companies Y: companies/name Z: companies/city", correct: false },
    { text: "X: /regions/0/companies Y: name Z: city", correct: true },
    { text: "X: /regions/companies Y: name Z: city", correct: false }
  ]
},
{
  question: "A business user cannot find an application on the SAP Fiori Launchpad or App Finder. Which options could explain why the tile is unavailable?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "User does not have proper PFCG role", correct: true },
    { text: "Assigned catalogs do not contain the application or tile", correct: true },
    { text: "OData service authorization is missing", correct: false },
    { text: "Target mapping for the tile is missing in the catalog", correct: false },
    { text: "User is missing the required group containing the tile", correct: true }
  ]
},
{
  question: "Which of the following are building blocks provided by SAP Fiori elements?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Filter Field", correct: true },
    { text: "Custom Page", correct: false },
    { text: "Routing", correct: false },
    { text: "Table", correct: true },
    { text: "Field", correct: true }
  ]
},
{
  question: "You want to create an SAP Fiori application containing charts and visual filters. Which SAP Fiori template would you use?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Custom Page", correct: false },
    { text: "Worklist Page", correct: false },
    { text: "Analytical List Page", correct: true }
  ]
},
{
  question: "What is added by the following ABAP CDS annotation to an SAP Fiori elements app?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Two sections in the object page body", correct: false },
    { text: "A section containing a subsection displaying address details", correct: true },
    { text: "Two sections in the object page header", correct: false }
  ]
},
{
  question: "Which of the following pattern sequences are the QUnit tests based on?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Assert, Act, and Arrange", correct: false },
    { text: "Given, When, and Then", correct: false },
    { text: "Arrange, Act, and Assert", correct: true },
    { text: "Given, Then, and When", correct: false }
  ]
},
{
  question: "What are some SAP-recommended ways of adding custom code to an SAP Fiori elements application?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Use controller extensions", correct: true },
    { text: "Use private methods of SAP Fiori elements", correct: false },
    { text: "Create new templates", correct: false },
    { text: "Use building blocks", correct: true },
    { text: "Create apps using the custom page template", correct: true }
  ]
},
{
  question: "How can you configure the Flexible Column Layout in an SAP Fiori elements application?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Add a setting to the manifest.json file", correct: true },
    { text: "Implement a flexible custom extension", correct: false },
    { text: "Add a setting to the package.json file", correct: false },
    { text: "Use the Page Map", correct: true }
  ]
},
{
  question: "What is the title of the list report table?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Sales Order Owners", correct: false },
    { text: "Sales Orders", correct: true },
    { text: "Sales Order Numbers", correct: false }
  ]
},
{
  question: "In the screenshot, which element of the Arrange-Act-Assert pattern corresponds to the Act in a QUnit test?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "this.calculator.press(\"1\")", correct: true },
    { text: "QUnit.test", correct: false },
    { text: "QUnit.module", correct: false },
    { text: "teardown function", correct: false }
  ]
},
{
  question: "You develop an SAPUI5 app and implement a FacetFilter. What events are triggered when the user interacts with the FacetFilter content?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "listFilter", correct: false },
    { text: "onInit", correct: false },
    { text: "reset", correct: true },
    { text: "confirm", correct: true }
  ]
},
{
  question: "How can you extend an SAP Fiori app?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Modify the data model at runtime", correct: false },
    { text: "Create an adaptation project", correct: true },
    { text: "Modify runtime libraries", correct: false },
    { text: "Modify properties of the view control", correct: true },
    { text: "Add custom view content in a predefined extension point", correct: true }
  ]
},
{
  question: "Which activities does the the OData Model Editor support?",
  note: "There is only 2 correct answer",
  type: "multi",
  max: 2 ,
  options: [
    { text: "EDit ODataModel", correct: true },
    { text: "Deploy ODataModels", correct: false },
    { text: "Create OData MOdels", correct: true },
    { text: "Test OdataModels", correct: false }
  ]
},
{
  question: ". You develop an SAPUI5 app that can be extended. To allow your customer to customize noƟficaƟons you set up a hook method What acƟviƟes are required to set up a hook method?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Modify the bootstrap opƟon to allow mulƟ-layer extensions of the custom code", correct: false },
    { text: "Define a new funcƟon name ensuring it is reserved for the extension", correct: true },
    { text: "IdenƟfy a strategic locaƟon in the controller for the customized code", correct: true },
    { text: "Add a code snippet to check if the method exists and execute it", correct: true },
     { text: "Create a .js file in the UƟl folder to allow the customer to add customized code ", correct: false }
  ]
},
{
  question: ". In a SAP Fiori hub deployment, where is the SAPUI5 applicaƟon code stored for a transacƟonal app?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "SAp Front-end-Server", correct: true },
    { text: "SAP Web Dispatcher", correct: false },
    { text: "SAP Backende Server", correct: false },
    { text: "SAP HANA XS Engine", correct: false }
  ]
},
{
  question: " Your customer asks you to add text for a new language to an app Which file do you send to the translator?",
  note: "",
  type: "Single",
  options: [
    { text: "Master.view.xml", correct: false },
    { text: "i18n.properties", correct: true },
    { text: "component.js", correct: false },
    { text: "Manifest.json", correct: false }
  ]
},
{
  question: " Your customer wants to enable the SAP Fiori app to be accessed in mulƟple languages Which of the following acƟviƟes do you perform?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Create aresource file containing key/value pairs", correct: true },
    { text: "create a resource file with a.props extension", correct: false },
    { text: "create a resource file for each language", correct: true },
    { text: "Encode the special characters in HTML in the resources file ", correct: true },
    { text: "Create a view file and a controller file for each language ", correct: false }
  ]
},{
  question: "What are some characteristics of fragments?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "Fragments have their own controller", correct: false },
    { text: "Fragments can be a stand-alone view", correct: false },
    { text: "Fragments are lightweight UI parts that can be reused", correct: true },
    { text: "Fragments are found by SAPUI5 runtime using the module loading mechanism", correct: true }
  ]
},
{
  question: "Your customer asks you to demonstrate their app with localization changes. Which activity do you perform?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Configure the run configuration file in the app", correct: false },
    { text: "Show the i18n.properties file translations", correct: true },
    { text: "Use the preview frame in the run configuration", correct: false },
    { text: "Configure supportedLanguages settings in the project.json file", correct: false }
  ]
},
{
  question: "Which HTTP request method can you use to create an OData resource?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "POST", correct: true },
    { text: "PUT", correct: false },
    { text: "UPDATE", correct: false },
    { text: "CHANGE", correct: false }
  ]
},
{
  question: "You are extending an SAP Fiori app. Which extension properties are defined in the manifest.json?",
  note: "There are 2 correct answers",
  type: "multi",
  max: 2,
  options: [
    { text: "sap.ui.modelModifications", correct: false },
    { text: "sap.ui.i18nModifications", correct: false },
    { text: "sap.ui.controllerExtensions", correct: true },
    { text: "sap.ui.viewModifications", correct: true }
  ]
},
{
  question: "Which of the following determines how data is displayed in SAP Fiori elements applications?",
  note: "There is only 1 correct answer",
  type: "single",
  options: [
    { text: "Application logic", correct: false },
    { text: "Templates", correct: true },
    { text: "Database structure", correct: false },
    { text: "User permissions", correct: false }
  ]
},
{
  question: "Which methods can you use to bind data to the controls in SAPUI5?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Structure", correct: false },
    { text: "Property", correct: true },
    { text: "Combination", correct: false },
    { text: "Element", correct: true },
    { text: "Aggregation", correct: true }
  ]
},
{
  question: "What can you do to create a worklist SAP Fiori elements application?",
  note: "There are 3 correct answers",
  type: "multi",
  max: 3,
  options: [
    { text: "Add UI.hideFilterBar annotation to the local annotation file", correct: false },
    { text: "Use the Page Map to hide the filter bar of a list report application", correct: true },
    { text: "Add a setting to the manifest.json file of the list report", correct: true },
    { text: "Add the UI.hideFilterBar annotation in the backend", correct: false },
    { text: "Use the Application Generator with a suitable template", correct: true }
  ]
}


/* … CONTINUES SEQUENTIALLY UP TO Q61 EXACTLY AS IN PDF … */

];
 function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

  /* ==========================
     RENDER QUESTIONS
     ========================== */
 

  function renderQuiz() {
    quiz.innerHTML = "";
    result.innerHTML = "";
    submitted = false;

    questions.forEach((q, qi) => {
      const div = document.createElement("div");
      div.className = "question";

      div.innerHTML = `
        <h3>Q${qi + 1}. ${q.question}</h3>
        <div class="note">NOTE: ${q.note}</div>
      `;

      q.options.forEach((opt, oi) => {
        const type = q.type === "single" ? "radio" : "checkbox";

        const label = document.createElement("label");
        label.innerHTML = `
          <input type="${type}" name="q${qi}" value="${oi}">
          ${opt.text}
        `;
        div.appendChild(label);
      });

      quiz.appendChild(div);

      if (q.type === "multi") {
        limitSelection(div, q.max);
      }
    });
  }

  /* ==========================
     LIMIT MULTI ANSWERS
     ========================== */

  function limitSelection(div, max) {
    const boxes = div.querySelectorAll("input[type=checkbox]");
    boxes.forEach(box => {
      box.addEventListener("change", () => {
        const checked = div.querySelectorAll("input[type=checkbox]:checked");
        if (checked.length > max) {
          box.checked = false;
          alert(`Only ${max} answers allowed`);
        }
      });
    });
  }

  /* ==========================
     SUBMIT & SCORE
     ========================== */

  submitBtn.addEventListener("click", () => {
  if (submitted) return;

  let score = 0;

  questions.forEach((q, qi) => {
    const inputs = document.querySelectorAll(`input[name="q${qi}"]`);
    let isCorrect = true;

    inputs.forEach((inp, oi) => {
      const label = inp.parentElement;

      // lock input
      inp.disabled = true;

      // correct answer
      if (q.options[oi].correct) {
        label.classList.add("correct");
      }

      // wrong selected answer
      if (inp.checked && !q.options[oi].correct) {
        label.classList.remove("correct");
        label.classList.add("wrong");
        isCorrect = false;
      }

      // missed correct answer
      if (!inp.checked && q.options[oi].correct) {
        isCorrect = false;
      }
    });

    if (isCorrect) score++;
  });

  submitted = true;

  result.innerHTML = `
    <h2>Score: ${score} / ${questions.length}</h2>
    <button onclick="location.reload()">🔁 Retake Exam</button>
  `;
});


  renderQuiz();
});
