const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
console.log(textEl , speedEl)


let index=1
let speed = 3000/speedEl.value
let text = 'I love Programmimg'

writeText()

function writeText() {

    textEl.innerText= text.slice(0,index)
    index++

    if(index > text.length){
        index = 1;
    }

    setTimeout(writeText,speed)

}

speedEl.addEventListener('input', (e) =>
    speed = 3000/e.target.value
)