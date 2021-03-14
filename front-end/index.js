const getPersonalInfo = async () => {

  const response = await fetch('http://localhost:5000/info');
  const info = await response.json();

  return info;

};

const getProjects = async () => {

  const response = await fetch('http://localhost:5000/projects');
  const projects = await response.json();

  return projects;

};

const getData = async () => {

  const personalInfo = await getPersonalInfo();
  const projects = await getProjects();

  console.log(personalInfo);
  console.log(projects);

};

getData();
// Once fetched data can be displayed as required..