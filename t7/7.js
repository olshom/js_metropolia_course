const trigger = document.getElementById('trigger');
const img = document.getElementById('target');
trigger.addEventListener('mouseover', (event) => img.src = "img/picB.jpg");
trigger.addEventListener('mouseleave', (event) => img.src="img/picA.jpg");

