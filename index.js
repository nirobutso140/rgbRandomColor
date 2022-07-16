// /**
// //  * Project Requirements:
// //  * - Change the background color by generating random rbg color by clicking a button


// Step 1 - create onload handler

window.onload = () =>{


    main()
}

const main = () =>  {

   const root = document.querySelector('#root')
   const btn = document.querySelector('#change-btn')

   btn.addEventListener('click', function(){
       const rgbColor = rgbColorGenerator()
       root.style.backgroundColor = rgbColor
   })
    
}

// step 2 - random color generator function

const rgbColorGenerator = () =>{
    const red = Math.floor(Math.random() * 255)
    const green  = Math.floor(Math.random() * 255)
    const blue  = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}



// step 3 - collect all necessary references


// step 4 - handle the click event