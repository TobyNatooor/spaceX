

async function hent() {
    let response = await fetch('https://api.spacexdata.com/v3/rockets');
    let data = await response.json();
    console.log(data);    
}

hent();




