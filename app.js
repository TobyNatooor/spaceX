
let grid = document.querySelector('#table')
let loading = document.querySelector('#loading')

async function hent() {
    let response = await fetch('https://api.spacexdata.com/v3/rockets');
    let data = await response.json();
    console.log(data);

    data.forEach(rocket => {
        console.log('rocket', rocket)
        let s = [rocket.rocket_name, rocket.height.meters, rocket.mass.kg, '<a href=' + rocket.wikipedia + '>wikipedia</a>']

        let h = '<tr>'
        s.forEach(t => {
            h += '<td>' + t + '</td>'
        })

        h += '</tr>'

        grid.innerHTML += h
    })

    response = await fetch('https://api.spacexdata.com/v3/launches/next');
    data = await response.json();
    console.log(data);

    updateTimer(data)
    setInterval(() => {
        updateTimer(data)
    }, 1000);

    document.querySelector('#missionName').innerHTML = data.mission_name;
    document.querySelector('#rocketName').innerHTML = 'Rocket type: ' + data.rocket.rocket_name;
    document.querySelector('#details').innerHTML = data.details;
    document.querySelector('#image').src = data.links.mission_patch_small;

    loading.style.display = "none";
    grid.style.visibility = "visible";
}

function updateTimer(data) {
    let d = new Date();
    let c = new Date(data.launch_date_utc);
    let miliSec = c - d;
    let day = Math.floor(miliSec / (1000 * 60 * 60 * 24));
    let tim = Math.floor(miliSec / (1000 * 60 * 60));
    let min = Math.floor(miliSec / (1000 * 60));
    let sec = Math.floor(miliSec / 1000);

    document.querySelector('#timer').innerHTML =
        day + ':' +
        (tim - (day * 24)) + ':' +
        (min - (tim * 60)) + ':' +
        (sec - (min * 60));
}

hent();
