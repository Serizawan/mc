let employeeParagraph = document.getElementById("employees");
employeeParagraph.innerHTML = getListOfEmployees();

function getListOfEmployees() {
  return "Ada Lovelace, Grace Hopper, Sophie Germain";
}
