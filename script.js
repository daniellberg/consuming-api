const URL = 'https://65385cb0a543859d1bb16799.mockapi.io/users'

async function searchUser(){
    const response =  await fetch(URL)
    const data = await response.json()

    generateDom(data)

    data.forEach(user => {
        console.log(user.id+" - "+user.name)
    });

}

function generateDom(data){
    let dom = document.querySelector('#users-container')

    dom.innerHTML=''

    data.forEach(user => {
        const userElement = document.createElement("div")
        userElement.className = 'user'
        userElement.innerHTML = `<strong>${user.name}</strong> - <strong>${user.id}</strong>`
        dom.appendChild(userElement)
    });
}


searchUser()
