//declaracion de variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const dni = document.querySelector('#dni');
const sexo = document.querySelector('#sexo');
const fechanac = document.querySelector('#fechanac');
const edad = document.querySelector('#edad');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const movil = document.querySelector('#movil');
const calle = document.querySelector('#calle');
const numero = document.querySelector('#numero');
const piso = document.querySelector('#piso');
const codigopostal = document.querySelector('#codigopostal');
const ciudad = document.querySelector('#ciudad');
const provincia = document.querySelector('#provincia');

//funciones
const generarUsuario = async() => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results [0];

    console.log(datos);
    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    dni.textContent = datos.id.value;
    //En la siguiente linea invoco a una funcion que traduce el genero al
    //español  
    sexo.textContent = traducir(datos.gender);
    fechanac.textContent = CambiaFtofecha(datos.dob.date); 
    edad.textContent = datos.dob.age;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    movil.textContent = datos.cell;
    calle.textContent = datos.location.street.name; 
    numero.textContent = datos.location.street.number; 
    piso.textContent = datos.location.street.number;
    codigopostal.textContent = datos.location.postcode;
    ciudad.textContent = datos.location.city;
    provincia.textContent = datos.location.state+" Pais : "+datos.location.country;
}
//La funcion CambiaFtofecha cambia la fecha 
//al formato DD-MM-AA
function CambiaFtofecha(g){
    let nacer = new Date (g);
    let dia = nacer.getDate();
    let mes = nacer.getMonth();
    let anio = nacer.getFullYear();
    return ((dia).toString()+"-"+(mes).toString()+"-"+(anio).toString());
}
//Un funcion simple que traduce el genero del C.V al español
function traducir(mof){
    if (mof=="female") 
    {
        return("Femenino");  
    } else {
        return("Masculino");  
    }  
}

//1er llamada a la funcion para generar un usuario
generarUsuario;
//con esta iteraccion recargo un nuevo usuario con el "reload de pagina"
//del navegador
document.addEventListener('DOMContentLoaded',generarUsuario);

