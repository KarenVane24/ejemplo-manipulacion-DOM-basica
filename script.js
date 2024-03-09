const h1= document.querySelector('h1'); //
//const p= document.querySelector('p');
//const parrafito= document.querySelector('.parrafito'); //Si es clase se llama con el . y nombre de la clase
//const pid= document.querySelector('#pid'); //Si es con ID se llama con # y el nombre de la clase
//const input= document.querySelector('input');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2= document.querySelector("#calculo2");
const btn=document.querySelector('#btnCalcular');
const pResultado=document.querySelector('#result');


//SI VAMOS A TRABAJAR CON FORMULARIO
//form.addEventListener('submit',sumarImputvalues)

//SI VAMOS A TTRABJAR CON BOTONES 

btn.addEventListener('click',btnOnclick) //lo primero es el nombre del evento y en lo segundo la funcion que tenemos que ejecutar sin parentesis 


function sumarImputvalues(event){

    // evitar que se recargue la pagina
    event.preventDefault();
    const resultado=Number(input1.value)+Number(input2.value);
    pResultado.innerText="La suma es "+ " "+ resultado;
    console.log(Number(input1.value)+Number(input2.value));

    //console.log("Hola karen")
}

function btnOnclick(){

    //en la propiedad de boton hay que poner onclick="btnOnclick()"

    const resultado=Number(input1.value)+Number(input2.value);
    pResultado.innerText="La suma es "+ " "+ resultado;
    console.log(Number(input1.value)+Number(input2.value));

    //console.log("Hola karen")
}




























//console.log(input.value);
//console.log({   h1,   p,   parrafito,   pid,   input,})

//h1.innerHTML="Patito <br> Feo"; //Lee como codigo html y pone un saltop de linea
//h1.innerText="Patito <br> Feo"; //lee como texto imprime tal cual esta
//h1.getAttribute('class'); // trae el nombre de la clase en este caso
//h1.setAttribute('class','rojo'); //añade un atributo a la clase quitando el anterior
//h1.classList.add('rojo'); // añade el atributo a la clase sin quitar el anterior
//h1.classList.remove('verde'); //elimina el nombre de la clase verde
//h1.classList.toggle();
//h1.classList.contains();//devuelve tru o false si tiene un atributo


//input.value="456"; //MODIFICAR EL VALOR POR DEFECTO DEL INPUT

//FUNCION ESPECIAL PARA CREAR UN ELEMENTO DESDE 0Ç
//const img=document.createElement('img');
//img.setAttribute('src','https://www.istockphoto.com/es/foto/plaza-de-san-francisco-en-quito-antiguo-de-la-ciudad-gm975466144-265341053')
//console.log(img);
//pid.innerHTML="";  //Eliminar contenido del parrafo para agregar la imagen 
//pid.append(img);