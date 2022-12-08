const colorDivs = document.querySelectorAll(".color")
const p = document.querySelector("p")

colorDivs.forEach((e)=> {
    console.log(e)

    e.addEventListener("click", ()=> {
        let color = e.getAttribute("class").split(" ")[1]
        p.style = `color: ${color}`;
    })
})

