
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

    let d = new Date();
    let c = new Date(data.launch_date_utc);
    console.log((c.getTime() - d.getTime())/ (1000 * 60 * 60 * 24))

    loading.style.display = "none";
    grid.style.visibility = "visible";
}

hent();
