const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokebtn')

generateJoke()

// Creating a fetch request with promises 

// function generateJoke(){
//     const headerConf = {
//         headers : {
//             Accept:'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com' , headerConf)
//     .then(response => response.json()) //returns a promise
//     .then(data => jokeEl.innerHTML = data.joke)
// }

// Creating a fetch request with asyn / await
async function generateJoke(){
    const headerConf = {
        headers:{
            Accept:'application/json'
        },
    }

    const response = await fetch('https://icanhazdadjoke.com',headerConf)
    const data = await response.json()
    jokeEl.innerHTML = data.joke
}

btn.addEventListener('click' , generateJoke)




