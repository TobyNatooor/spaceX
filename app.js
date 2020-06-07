
let grid = document.querySelector('#table')

async function hent() {
    let response = await fetch('https://api.spacexdata.com/v3/rockets');
    let data = await response.json();
    console.log(data);

    data.forEach(rocket => {
        console.log('rocket', rocket)
        let s = [rocket.rocket_name, rocket.height.meters, rocket.mass.kg]
        grid.innerHTML += '<tr> 0 </tr>'
/*         s.forEach(t => {
            grid.innerHTML += '<td>' + t + '</td>'
        }) */
        //grid.innerHTML += '</tr>'
    })
}

hent();
