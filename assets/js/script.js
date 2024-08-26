const listaDeInvitados = document.querySelector("#invitados")
 const invitadoInput = document.querySelector("#nuevoinvitado")
 const btnAgregar = document.querySelector("#agregarinvitado")
 const realizadas = document.querySelector("#tareasrealizadas")
 const tareas = document.querySelector("#tareastotal")
 const invitados = [
   { tarea: 0, id: 31, nombre: "Pasear al perro" },
   { tarea: 1, id: 84, nombre: "Cocinar" },
   { tarea: 2, id: 22, nombre: "Estudiar" },
   { tarea: 3, id: 64, nombre: "Sacar la basura" }
  ];
 





 btnAgregar.addEventListener("click", () => {
   const nuevoid= invitados[invitados.length - 1].id+10;
   const nuevatarea=invitados[invitados.length - 1].tarea+1;
  

   const  nuevoInvitado ={tarea: nuevatarea, id: nuevoid, nombre : invitadoInput.value}
    invitados.push(nuevoInvitado)
    invitadoInput.value = ""
    


    let html = ""
    for (invitado of invitados) {
    html += `<li>${invitado.id} ${invitado.nombre} <button onclick="borrar(${invitado.id})"> x
   </button> </li>`;

    }


    listaDeInvitados.innerHTML = html;
   
    render();
    
    })
  

   
function render(){


let html = "";

for (const element of invitados) {
console.log(element, "<-----element");
html += `<li>Tarea:${element.tarea} ID: ${element.id} ${element.nombre} 
<button onclick="borrar(${element.id})
">X</button>
</li>`;
}
listaDeInvitados.innerHTML = html



}



tareas.innerHTML=algo;

    function borrar(id){
      const index = invitados.findIndex((ele) => ele.id == id)
      invitados.splice(index, 1)
   
      render();
     
   }


   
  
    
   