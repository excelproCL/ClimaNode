// Paso 1
//const ciudad = "Concepción";
const estado= "Escasa nubosidad"
const https = require("https");
https.get("https://api.gael.cloud/general/public/clima", (resp) => {
		let resultado = "";

    // Paso 2
		resp.on("data", (data) => {
			resultado += data;
		});
		resp.on("end", () => {
			// Paso 3
			let climas = JSON.parse(resultado);
     // console.log(climas)
			// Paso 4
			//let miClima = climas.find((c) => c.Estacion == ciudad);
      let miClima = climas.find((c) => c.Estado == estado);
      let 
			console.log(miClima);
		});
	})
	.on("error", (err) => {
		console.log("Error: " + err.message);
	});
