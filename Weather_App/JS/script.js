window,addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(postion =>{
            long = postion.coords.longitude;
            lat = postion.coords.latitude;

        const api = `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${long}&limit=5&appid=
                    {b59e289542c5f2c5ec45c9c71ebfc9ef}`;
        
        fetch(api)
            .then(response =>{
            return response.json()
            })
            .then(data => {
                console.log(data);
                });
            
        });
    }

});

