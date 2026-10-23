module.exports = {
  default: {
    paths: ["src/feature/**/*.feature"],
    require: [
      "src/stepDefinitions/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ]
  }
};