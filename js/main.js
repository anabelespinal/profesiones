window.addEventListener("load", function(){
	window.addEventListener("click", function(){
		jugarProfesiones();
	})
	function jugarProfesiones(){
        var contennina = document.getElementById("contennina");
		var ninaJuego = document.getElementById("ninaJuego");
		var fondoDoctor = document.getElementById("fondoDoctor");
		var fondoPintor = document.getElementById("fondoPintor");
		var fondoCantante = document.getElementById("fondoCantante");
		var fondoChef = document.getElementById("fondoChef");
		var fondoAstronauta = document.getElementById("fondoAstronauta");
		fondoDoctor.addEventListener("click", function(){
			ninaJuego.style.backgroundImage = "url('../imgs/doctor.jpg')";
		});
		fondoPintor.addEventListener("click", function(){
			ninaJuego.style.backgroundImage = "url('../imgs/pintor.jpg')";
		});
		fondoCantante.addEventListener("click", function(){
			ninaJuego.style.backgroundImage = "url('../imgs/escenario.jpg')";
		});
		fondoChef.addEventListener("click", function(){
			ninaJuego.style.backgroundImage = "url('../imgs/cocina.jpg')";
		});
		fondoAstronauta.addEventListener("click", function(){
			ninaJuego.style.backgroundImage = "url('../imgs/space.jpg')";
		});
	};
});
function dragStart(event){
        event.dataTransfer.setData("Text", event.target.id)
    }
function dragging(event){
    document.getElementById("demo").innerText = "The p element is being dragged";
}
function allowDrop(event){
    event.preventDefault();
}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerText = "the p element was dropped";
}
/*
function dragStart(event){
        event.dataTransfer.setData("Text", event.target.id)
    }
function dragging(event){
    document.getElementById("demo").innerText = "The p element is being dragged";
}
function allowDrop(event){
    event.preventDefault();
}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerText = "the p element was dropped";
}*/