// import { UpdateEmployee } from './updateEmployee.js';

class Welcome {

  async init() {
    
    $("#btnNewEmployee").on("click", (e) => this.createEmployee(e));
    
    await this.loadGrid();
  }

  async loadGrid() {
    let url = "https://localhost:44347/api/Employee/getAllEmployees";

    const response = await fetch(url);

    const data = await response.json();

    data.forEach((element) => {
      let newRow = document.createElement("tr");

      Object.values(element).forEach((value) => {
        let cell = document.createElement("td");
        cell.innerText = value;
        newRow.appendChild(cell);
      });

      let cellTdDelete = document.createElement("td");
      
      var btnDelete = document.createElement('input');
      btnDelete.type = "button";
      btnDelete.className = "btn btn-danger";
      btnDelete.value = "Delete";
      btnDelete.name = "Delete";
      // btnDelete.addEventListener('click', function (e) {
      //     var employeeId = element.id;
      //     console.log(employeeId);
      // });
      btnDelete.addEventListener("click", () => this.deleteEmployee(element), false);
      cellTdDelete.appendChild(btnDelete);
      newRow.appendChild(cellTdDelete);

      let cellTdUpdate = document.createElement("td");
      var btnUpdate = document.createElement('input');
      btnUpdate.type = "button";
      btnUpdate.className = "btn btn-warning";
      btnUpdate.value = "Update";
      btnUpdate.name = "Update"
      // btnUpdate.addEventListener('click', function (e) {
      //   var employeeId = element.id;
      //   console.log(employeeId);
      // });
      btnUpdate.addEventListener("click", () => this.updateEmployee(element.id), false);
      cellTdUpdate.appendChild(btnUpdate);
      newRow.appendChild(cellTdUpdate);


      document.getElementById("bodyEmployeeId").appendChild(newRow);
    });
  }

  async createEmployee(e) {
    location.replace("http://127.0.0.1:5500/publish/newEmployee.html")
  }

  async deleteEmployee(element){
    // alert(`El empleado ${element.name} se ha eliminado correctamente.`);
    
    let urlApi = `https://localhost:44347/api/Employee/deleteEmployee/${element.id}`;
    
    var response = await fetch(urlApi,{
      method: "DELETE"
    });

    if (response.status === 200){
      alert("El empleado se elimino correctamente.");
      location.replace("http://127.0.0.1:5500/publish/index.html")
    }
    else{
        alert("Ocurrio un problema al eliminar este empleado.");
        location.replace("http://127.0.0.1:5500/publish/index.html")
    }
  }
  
  async updateEmployee(id){

    // await new UpdateEmployee().updateEmployee(id);
    location.replace("http://127.0.0.1:5500/publish/updateEmployee.html")

  }
  
}

new Welcome().init();
