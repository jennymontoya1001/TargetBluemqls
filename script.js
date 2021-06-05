//capturamos el botón
let boton = document.getElementById('submit');

//Evento clic del botón
boton.addEventListener('click',captureData);


//cancela eventos
function eventSubmit(e){
  e.preventDefault();
} 

//Función captura de datos de las cajas de texto

function captureData(){
    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msm = document.getElementById('msm').value; 
    saveLocalStorage(inputName,email,gender,msm);
    getLocalStorage();
}


/*asignación(guardar) de información en el local storage*/
function saveLocalStorage(inputName,email,gender,msn){
   /*
     set es igual a asignar
     setItem('es la key o clave', 'el dato almacenado en la variable')
    */
  localStorage.setItem('Name',inputName);
  localStorage.setItem('Email',email);
  localStorage.setItem('Gender',gender);
  localStorage.setItem('Mensaje',msn);
}


/*obtener, extraer información del local storage*/
function getLocalStorage(){
    /*get es igual a obtener o extraer
    dentro del getItem vas a indicar el nombre de la Key que
    se encuentra en el local storage*/
    let saveName = localStorage.getItem('Name');
    let saveEmail = localStorage.getItem('Email');
    let saveGender = localStorage.getItem('Gender');
    let saveMessage = localStorage.getItem('Mensaje');
    alert(`The information in the local storage is:
    Name: ${saveName}
    Email: ${saveEmail}
    Gender: ${saveGender}
    Message: ${saveMessage}`);
}
