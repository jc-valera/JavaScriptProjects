class NewEmmployee {
  async init() {
    $("#btnSaveEmployeeId").on("click", (e) => this.saveEmployee(e));
  }

  async saveEmployee(e) {
    e.preventDefault();

    var newEmployeeInfo = {
        name: document.getElementById("nameId").value,
        firstSurname: document.getElementById("firstSurnameId").value,
        secondSurname: document.getElementById("secondSurnameId").value,
        area: document.getElementById("areaId").value,
        birthDate: document.getElementById("birthDateId").value,
        salary: document.getElementById("salaryId").value
    }

    var elements = document.getElementById("newEmployeeFormId").elements;
    var employeeInfo ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if (item.name != '' && item.value != '')
            employeeInfo[item.name] = item.value;
    }

    //console.log(JSON.stringify(employeeInfo));
    let urlApi = 'https://localhost:44347/api/employee/saveEmployee';
    
    var response = await fetch(urlApi,{
        method: "POST",
        body: JSON.stringify(employeeInfo),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200){
        alert("El usuario se creo con exito!!");
        location.replace("http://127.0.0.1:5500/publish/index.html")
    }
    else{
        alert("Ocurrio un problema durante la creacino de este nuevo empleado.");
        location.replace("http://127.0.0.1:5500/publish/index.html")
    }
  }
}

new NewEmmployee().init();
