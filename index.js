let key = "O84iEhavxYTvHSvGKKocYL6hUWdAWMZr"

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    let content = document.querySelector(".content")
    let select = document.querySelector("select")
    let input = document.querySelector("#userInput")
    let submit = document.querySelector("#submit")
    let h1 = document.createElement("h1")
    let arrData = 0
   
    
const showGif = async (gifArr) => {
    gifArr.forEach(gif => {
        let img = document.createElement("img")
        img.src = gif.images.downsized.url
        content.appendChild(img)
    })
}
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        arrData = gifSearch(input.value, select.value)
        console.log(arrData)
    })
    select.addEventListener("change", () => {
        console.log(select.value)
        
        // debugger
    }) 
    
    const gifSearch = async (userInput, userLimit) => {
        try {
            content.innerHTML = ""
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            console.log(res)
            showGif()

        }catch(err){
            console.log("ERROR")
        }
    }
    
    const populateSelect = () => {
        for(let i = 1;i < 26; i++){
            let option = document.createElement("option")
            option.innerText = i
            select.appendChild(option)
        }
    }
    populateSelect()
    // debugger
})