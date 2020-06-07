
fetch('https://api.spacexdata.com/v3/rockets')
    .then(response => response.json())
    .then(data => console.log(data));