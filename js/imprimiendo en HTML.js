// imprimiendo HTML

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
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    );

function imprimirHTML(usuarios){
    let HTML =  '';
    usuarios.forEach(usuario => {
        HTML += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Foto: 
                    <img src = "${usuario.picture.medium}">
            </li>
        ` 
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = HTML;
}

