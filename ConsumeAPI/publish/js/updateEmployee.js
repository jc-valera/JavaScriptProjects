export class UpdateEmployee {
//   constructor() {
//     location.replace("http://127.0.0.1:5500/publish/updateEmployee.html");
//   }

  async updateEmployee(id) {

    // window.location.replace("http://127.0.0.1:5500/publish/updateEmployee.html");

    $("#btnUpdateEmployeeId").on("click", (e) => this.saveUpdateEmployee(e));

    await this.loadEditData(id);
  }

  async loadEditData(id) {
    let url = `https://localhost:44347/api/Employee/getEmployee/${id}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (response.status == 200) {
        const data = await response.json();
        console.log(data);

        window.location.replace("http://127.0.0.1:5500/publish/updateEmployee.html");

        const elements = document.getElementById("employeeUpdateFormId").elements;
        const employeeInfo = {};
        for (var i = 0; i < elements.length; i++) {
          var item = elements.item(i);
          if (item.name != "" && item.value != "")
            employeeInfo[item.name] = item.value;
        }
        data.forEach((element) => {
          Object.values(element).forEach((value) => {
            cell.innerText = value;
          });
        });
    }
  }

  async saveUpdateEmployee(e) {
    e.preventDefault();

    var elements = document.getElementById("employeeUpdateFormId").elements;
    var employeeInfo = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      if (item.name != "" && item.value != "")
        employeeInfo[item.name] = item.value;
    }

    //console.log(JSON.stringify(employeeInfo));
    let urlApi = `https://localhost:44347/api/employee/updateEmployee/${employeeInfo.id}`;

    var response = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(employeeInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      alert("El usuario se creo con exito!!");
      location.replace("http://127.0.0.1:5500/publish/index.html");
    } else {
      alert("Ocurrio un problema durante la creacino de este nuevo empleado.");
      location.replace("http://127.0.0.1:5500/publish/index.html");
    }
  }
}
