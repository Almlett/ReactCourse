// Ajax Promises

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
   //pasar la cantidad a la api

   const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

   //llamado ajax
   const xhr = new XMLHttpRequest();

   //abrir conexion
   xhr.open('GET',api, true);

   // on load
    xhr.onload = () => {
        if (xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    // opcional
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send()

});


descargarUsuarios(10)
    .then(
        miembros => console.log(miembros),
        error => console.log(
            new Error('Hubo un error' + error)
        )
    )