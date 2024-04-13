const loadInformation = async () => {
  try {
    
    // let url = "https://rickandmortyapi.com/api/character/53";
    let url = "http://localhost/TestSol/api/employee/getAllEmployees";

    const response = await fetch(url);

    console.log(response);

    if (response.status === 200) {
        
      const data = await response.json();
      console.log(data);

    //   var pictureMortis = document.getElementById("imageId");
    //   pictureMortis.src = data.image;

    }
    else{
        console.log("Ocurrio un error durante la peticion.")
    }

  } catch (error) {
    console.log(error);
  }
};

loadInformation();
