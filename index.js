const weatherApi = () => {
    const key = '4d59a213650edb3bccb1ef7cf2f7c6dd';
    
    fetch('api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)
    .then((resp) => {return resp.json()})
    .then((data) => {console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });  
}

/*const sbtn = document.querySelector('#sbtn');
sbtn.addEventListener('click', weatherApi);

const sbtn = document.querySelector('#sbtn');


const weatherApi = () => {
    const key = '4d59a213650edb3bccb1ef7cf2f7c6dd';
    const cityName = document.querySelector('#search');
    const city = ''; 
    city.appendChild(cityName);

    fetch('api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)
    .then((resp) => {return resp.json()})
    .then((data) => {console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });  
}

window.addEventListener('click', weatherApi);*/
