const jokeEle = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

generateJoke()
btn.addEventListener('click' , generateJoke)

//*******/ using Async/Await ********//
async function generateJoke(){
    const headerConf = {
        headers:{
            Accept:'application/json'
        },
    }
    const response = await fetch('https://icanhazdadjoke.com' , headerConf)
const data = await response.json()
jokeEle.innerHTML=data.joke
}
// *******Using Promises .then() approach*******
// function generateJoke (){
//     const headerConf = {
//         headers:{
//             Accept:'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com' , headerConf)
//         // return's a promise from the https request made through fetch
//         .then((response)=> response.json())
//         .then((data) => jokeEle.innerHTML=data.joke)
// }


