let employeeParagraph = document.getElementById("employees");
employeeParagraph.innerHTML = getListOfEmployees();

function getListOfEmployees() {
  return "Ada Lovelace, Grace Hopper, Sophie Germain, Nicole El Karoui";
}

function expandOurGreatProductsParagraph() {
  document.getElementById("expandOurGreatProductsParagraph").innerHTML = `My Great company makes great products for great people!
    <br>
    Here is our Great Products list:
    <br>
    &nbsp;&nbsp;- myGreatSocks
    <br>
    &nbsp;&nbsp;- myGreatHat
    <br>
    &nbsp;&nbsp;- myGreatCap`;
}