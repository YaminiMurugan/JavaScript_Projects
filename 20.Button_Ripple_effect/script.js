const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
            // defining a function defenition instead of arrow func becuase of "this" operator
            button.addEventListener('click', function (e) {

                // getting the viewport axis 
                const x = e.clientX
                const y = e.clientY

                //getting the axis of the button 
                const buttonTop = e.target.offsetTop
                const buttonLeft = e.target.offsetLeft

                // to get the axix points when the button is clicked on different points

                const xInside = x - e.buttonLeft
                const yInside = x - e.buttonTop

                const circle = document.createElement('span')
                circle.classList.add('circle')
                // set the top and left axis to cause ripples
                
                circle.style.top = yInside + 'px'
                circle.style.left = xInside + 'px'
// adding the span to the button
                this.appendChild(circle)
                // for every ripple the circle class keeps on adding on the dom , they need to be removed 

        
                setTimeout(() => circle.remove(), 500)
            })
        })