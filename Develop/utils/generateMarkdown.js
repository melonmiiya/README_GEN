
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return '![Github license]()';
    }
    return "";
}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'none') {
      return `\n* [License](#license)\n`;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'none') {
      return ` ## License
      
      Licensed under the ${license} license`;
    }
    return "";
  }
  
  // TODO: Create a function to generate markdown for README
  
  function generateMarkdown(data) {
    return `# ${data.title}
  by ${data.name}

    ## Table of Contents
    -[Description](#description)
    -[How to](#how-to)
    -[License](#license)
    -[Installation](#installation)
    -[Usage](#Usage)
    -[Credit](#Credit)
    -[Contact](#contact)

    ## Description
    - ${data.motivation}
    - ${data.build}
    - ${data.problem}
    - ${data.learn}
    ## How to
    - ${data.test}
    ## License
    - ${renderLicenseBadge(data.license)}
    - ${renderLicenseLink(data.license)}
    - ${renderLicenseSection(data.license)}
    ## Installation
    - ${data.install}
    ## Usage
  - ${data.usage}
    ## Credit
    - ${data.contribution}
    ## Contacts
    - Name:${data.name}
    - GitHub Username: ${data.Github}
    - Email: ${data.email}
  `;
  }
  
  export default generateMarkdown;
  