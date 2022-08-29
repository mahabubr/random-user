const loadData = async () => {
    const url = 'https://randomuser.me/api/?results=30'
    const response = await fetch(url)
    const data = await response.json()
    displayData(data.results)
}

const displayData = user => {
    const displayContainer =  document.getElementById('display-container')
    user.forEach(data => {
        console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-100 glass">
            <figure><img src="${data.picture.large}" alt="car!"></figure>
            <div class="card-body">
                <h2 class="card-title">${data.name.title} ${data.name.first} ${data.name.last} </h2>
                <h6>${data.gender}</h6>
                <h5>${data.dob.date} - age: ${data.dob.age}</h5>
                <p>${data.email}</p>
                <p>${data.cell}</p>
                <small>${data.location.street.name} (${data.location.street.number}) - ${data.location.postcode}</small>
                <h3>${data.location.city}, ${data.location.state}, ${data.location.country}</h3>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Learn More!</button>
                </div>
            </div>
        </div>
        `
        displayContainer.appendChild(div)
    })
}

loadData()