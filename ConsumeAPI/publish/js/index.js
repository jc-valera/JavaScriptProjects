const loadInformation = async () => {
  try {
    // let url = "https://rickandmortyapi.com/api/character/53";
    // const response = await fetch(url);

    // const data = await response.json();

    // var pictureMortis = document.getElementById("imageId");
    // pictureMortis.src = data.image;
    // let url = "https://localhost:44347/api/Employee/getAllEmployees";

    // const response = await fetch(url);
    // console.log(response);

    // const data = await response.json();
    // console.log(data);

    // await renderDataInTable(data);

    var mb = document.getElementById("btnNewEmployee"); 
    mb.addEventListener("click", newEmployee);

  } catch (error) {
    console.log(error);
  }

  function renderDataInTable(data) {
    data.forEach((element) => {
      let newRow = document.createElement("tr");

      Object.values(element).forEach((value) => {
        let cell = document.createElement("td");
        cell.innerText = value;
        newRow.appendChild(cell);
      });

      let deleteRowButton = document.createElement("button");
      let deleteTextButton = document.createTextNode("Delete");
      deleteRowButton.appendChild(deleteTextButton);
      newRow.appendChild(deleteRowButton);

      let updateRowButton = document.createElement("button");
      let updateTextButton = document.createTextNode("Update");
      updateRowButton.appendChild(updateTextButton);
      newRow.appendChild(updateRowButton);

      document.getElementById("bodyEmployeeId").appendChild(newRow);
    });
  }

  function newEmployee(get) {
    alert("kudos!!")
  }
};

loadInformation();
