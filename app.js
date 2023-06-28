

//slider
const sizeValue = document.querySelector("#sizeRange")
const rangeValueText = document.querySelector(".rangeValue")
rangeValueText.textContent = "16x16"
sizeValue.addEventListener("change", ()=>{
    clearGrid()
    gridlayout=sizeValue.value
    gridInString = gridlayout.toString()
    rangeValueText.textContent = gridInString + "x" + gridInString
    createGrid(gridlayout)
})



//grid with boxes
function createGrid(currentVal){
const grid = document.querySelector("#grid") 
    //box size
    let gridlayout=currentVal
    let BoxWH=600/gridlayout
    let rowsAndColumns = BoxWH.toString()
    let AmountOfSquares=gridlayout*gridlayout

    //create boxes
    for (i=0;i<AmountOfSquares;i++){
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.minWidth = rowsAndColumns + "px"
        box.style.maxHeight = rowsAndColumns + "px"
        grid.appendChild(box)

    }
    
}

createGrid(sizeValue.value)


//Removes the boxes in grid
const grid = document.getElementById("grid") 
function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    
}

//Clears ALL color from boxes
function resetGrid(){
    const boxes = document.querySelectorAll(".box")
        boxes.forEach((box)=>{
            box.style.backgroundColor = "white"
        })
}

//eraser
const Eraser = document.querySelector("#eraser")
Eraser.addEventListener("click", erase())
function erase(){
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box)=>{
        box.addEventListener("mouseover",()=>{   
        box.style.backgroundColor = "white"
        })
    })
}


//Chooses Random Colors
function generateRandomColors(){
    num1 = Math.floor(Math.random()*255).toString()
    num2 = Math.floor(Math.random()*255).toString()
    num3 = Math.floor(Math.random()*255).toString()
}
function rainbowMode(){
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box)=>{
        box.addEventListener("mouseover",()=>{  
        generateRandomColors()
        box.style.backgroundColor = "rgb("+num1+","+num2+","+num3+")"
        })
    })
}



//Hover to change color
const colorChoice = document.querySelectorAll(".colorChoice")
colorChoice.forEach((colorButton)=>{
    colorButton.addEventListener("click", color())
})
function color(boxColor){
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((box)=>{
        box.addEventListener("mouseover",()=>{   
        box.style.backgroundColor = boxColor
        })
    })
}




