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

const sbtn = document.querySelector('#sbtn');
sbtn.addEventListener('click', weatherApi);
