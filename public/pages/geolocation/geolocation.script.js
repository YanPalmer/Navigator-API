// Verifica se o recurso "geolocation" existe no navigator
if ("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // Apresenta na tela
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;

        // Define o mapa
        var map = L.map('map').setView([lat, lon], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Marcador azul
        var marker = L.marker([lat, lon]).addTo(map).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

        // Circulo vermelho
        var circle = L.circle([lat, lon], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map).bindPopup("I am a circle.");

        // Polígono com as intersecções das linhas
        var polygon = L.polygon([
            [-8.264549, -36.007862],
            [-8.251468, -35.936623],
            [-8.300901, -35.911217],
            [-8.317208, -35.96117],
            [-8.30328, -36.027431]
        ]).addTo(map)
            .bindPopup("I am a polygon.");

        const popup = L.popup()
            .setLatLng([lat, lon])
            .setContent("I am a standalone popup.")
            .openOn(map);

        function onMapClick(e) {
            // console.log(e.latlng);
            popup
                .setLatLng(e.latlng)
                .setContent(`You clicked the map at ${e.latlng.toString()}`)
                .openOn(map);
        }
        map.on('click', onMapClick);

        // Botão que ao ser clicado executa a função "enviarDados"
        let button_Create = document.getElementById('salvarLatLon');
        button_Create.addEventListener('click', enviarLatLon);
        // console.log(button);
        let button_Update = document.getElementById('listar');
        button_Update.addEventListener('click', listarUsuarios);


        // Envia Nome, Latitude e Longitude
        async function enviarLatLon() {
            const name = document.getElementById("name").value;
            // Armazena os dados para serem enviados ao "servidor" e em seguida ao "banco de dados"
            const data = { name, lat, lon };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Converte JS para JSON
                body: JSON.stringify(data)
            }

            // Envia os dados com o método POST para o servidor
            const response = await fetch('/salvarDados', options);

            // Converte o "response" em JSON
            const resposta = await response.json();
            console.log(resposta.message);
            // const json = await response.json();
            // console.log("O meu json", json);

        }

        // Lista os usuários dentro do elemento "ul"
        async function listarUsuarios() {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application-json'
                }
            }
            const response = await fetch('/listarUsuarios', options);
            const resposta = await response.json();
            console.log(resposta.message);
            
            const lista = document.querySelector("ul");
            lista.textContent = "";
            
            resposta.users.forEach(element => {
                const li = document.createElement("li");
                li.textContent = [element.id, element.name, element.lat, element.lon];
                lista.appendChild(li);
            });
        }


    });
} else {
    console.log("geolocation IS NOT available");
    console.log("Refresh the page");
};








/*
function enviarDados() {
    let wordInput = document.getElementById("word").value;
    let scoreInput = document.getElementById("score").value;
    // let data = {
    //     word: wordInput,
    //     score: scoreInput
    // };
    console.log(wordInput);
    console.log(scoreInput);

    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        // Faça algo com a resposta do servidor, se necessário
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
}
*/