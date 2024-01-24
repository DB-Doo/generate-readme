// Function to return the license badge link
function renderLicenseBadge(license) {
  // Check if the license is not provided or the user chose 'None' return an empty string
  if (!license || license === 'None') return '';
  // Object mapping each license to its corresponding badge image URL
  const badgeLinks = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
  };
  // Returns a string for the license badge image.
  // which is then selected based on the license chosen by the user
  return `![License: ${license}](${badgeLinks[license]})`;
}

// Function to return the license link
function renderLicenseLink(license) {
  // Check if the license is not provided or the user chose 'None' return an empty string
  if (!license || license === 'None') return '';
  // Object mapping each license to its corresponding official URL for more details
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  // returns a string links to the official license page.
  // enabling users to read more about their selected license
  return `View more about ${license} license [here](${licenseLinks[license]})`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License
  
This project is licensed under the ${license} License - see the [LICENSE.md](LICENSE.md) file for details`;
}

// TODO: Create a function to generate markdown for README
// takes the users input data and generates the markdown text for the README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}
