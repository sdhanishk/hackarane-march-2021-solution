const express = require('express');

const router = express.Router();

const personalDetails = {
  name: 'Dhanish Kumar S',
  dateOfBirth: '27-09-1997',
  college: 'College Name',
  branch: 'Branch Name',
  yearOfJoining: 2015,
  graduationYear: 2019,
  gitHubProfile: 'https://github.com/mygithubprofile',
  linkdinProfile: 'https://www.linkedin.com/in/myprofile/',
  languages: ['Languaage1', 'Language2', 'Language3'],
  programmingLanguages: ['javascript', 'python']
};

router.get('/', (req, res) => {
  res.json(personalDetails);
});

module.exports = router;
