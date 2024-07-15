
document.addEventListener('DOMContentLoaded', (e)=>{


    let opt = "";

    let res = 0

    let inputext = ""

    let displayScreen = document.querySelector('.inputt')

    const calcu = document.querySelector('.calc')



    calcu.addEventListener('click', (e)=>{

        if(e.target.classList.contains('calculate')){
            const num = (e.target).innerHTML

            inputext+=num

            displayScreen.value = inputext

            console.log(num)
        }


        if(e.target.classList.contains('opt')){
            opt = (e.target).textContent;


            inputext +=  " " + opt + " "

            displayScreen.value = inputext
        }

        if(e.target.classList.contains('del')){

            inputext = inputext.slice(0,-1)
            displayScreen.value = inputext
        }

     


        if(e.target.classList.contains('clr')){

            inputext = ""
            displayScreen.value = inputext
        }


        if(e.target.classList.contains('percent')){

            inputext = parseInt(inputext)/100

            let num = ""
            inputext+=num
            displayScreen.value = inputext
        }

        if(e.target.classList.contains('invert')){
            inputext = parseFloat(inputext) * -1

            displayScreen.value = inputext
        }


        if(e.target.classList.contains('equal')){

          res = eval(inputext)
          displayScreen.value =res
        }

    })
})
