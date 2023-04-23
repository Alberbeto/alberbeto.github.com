//console.log("hola mundo")
//dow
//nos devuelve un eleemto que tenga la clase ID container
//document.querySelector(
//let tabla = document.querySelector(".tabla");

//console.log(tabla);

//nos devuelve mas dde un  elemento document.querySelectorAll
/*
let link = document.querySelectorAll("a");

//arreglos
link.forEach(function(link){
    console.log(link);

})*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    //todos los nodos para java scrpit
    //recibe deos argumentos
    td.addEventListener('click',function(){
        //devulve lo q hace click this
        console.log(this)
    })
})*/

//obetenr los elemtos de la clase
let links = document.querySelectorAll(".close");
//rrecorridos
links.forEach(function(link){
    //agrear un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        //bloquea el comportaminto y se ejecute
        ev.preventDefault();
        let content = document.querySelector(".content")
        //quitar las lista de animacion q ya tiene 
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");




        //agregar clases para annimar la salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //setTimeout despues de un solo timepo
        //setInterval depies de varios timepos
        /*setTimeout(function(){
            location.href="/"
        },1000);*/

        setInterval(function(){
            location.href="/"
        },600);

        //mover en docmuentos en java scroip
        //location.href="/";

        return false;
    })

    })


   /* let iconos = document.querySelectorAll("i");
    
    iconos.forEach(function(ic){
        //aquiatr lista de las estralllas
        ic.classList.remove("fa-star-o");
        //agregar lista de las estrellas
        ic.classList.add("fa-star");

    })*/
