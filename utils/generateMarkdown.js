
// Array for the
const badgeLink = [
  {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      DOC: 'https://opensource.org/licenses/MIT,'
  },
  {
      Apache: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      DOC: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
      GPL: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      DOC: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
      BSD: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
      DOC: 'https://opensource.org/licenses/BSD-3-Clause',
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license)
  var keys = '';
  var values = '';
    if(license !='NONE' || license != null){
      for(i in badgeLink) {
        let [key, value] = Object.entries(badgeLink[i]);
  
        if(license === key[0]){
          console.log("it matches and the license is "+ key[1]);
          console.log('it matches as the values is ' + value[1]);
  
          keys =  key[1];
          values = value[1];
        }
      }
    }
    return keys;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // console.log(license)
  var keys = '';
  var values = '';
    if(license !='NONE' || license != null){
      for(i in badgeLink) {
        let [key, value] = Object.entries(badgeLink[i]);
  
        if(license === key[0]){
          console.log("it matches and the license is "+ key[1]);
          console.log('it matches as the values is ' + value[1]);
  
          keys =  key[1];
          values = value[1];
        }
      }
    }
    return values;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
}
