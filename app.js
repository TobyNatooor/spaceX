
let grid = document.querySelector('#table')

async function hent() {
    let response = await fetch('https://api.spacexdata.com/v3/rockets');
    let data = await response.json();
    console.log(data);

    data.forEach(rocket => {
        console.log('rocket', rocket)
        let s = [rocket.rocket_name, rocket.height.meters, rocket.mass.kg]

        let h = '<tr>'
         s.forEach(t => {
            h += '<td>' + t + '</td>'
        }) 

        h += '</tr>'

        grid.innerHTML += h
    })
}

hent();
