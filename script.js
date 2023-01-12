let sideNav = document.getElementById('side-nav')
let openBtn = document.getElementById('open-nav')
let closeBtn = document.getElementById('close-nav')
let contentDisplay = document.getElementById('content-display')
let content1 = document.getElementById('content1')

openBtn.addEventListener('click' , ()=>{
    sideNav.style.width = '190px'
})
closeBtn.addEventListener('click' , ()=>{
    sideNav.style.width = '0px'
})


const exchangeContent = (v1)=>{
    v1.addEventListener('click' , ()=>{
        let temp = contentDisplay.innerHTML
        contentDisplay.innerHTML = v1.innerHTML
        v1.innerHTML = temp;
    })
}

exchangeContent(content1)
exchangeContent(content2)
exchangeContent(content3)
exchangeContent(content4)