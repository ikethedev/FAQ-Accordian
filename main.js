// accordian functionality 
// the img src changes on active and non active plus to minus
// only one faq can be open at a time 
// add a unhide unanimationn

const accordianContainer = document.querySelector(".accordion_container")

const showFAQ = (e) => {
    changeIMGSrc(e)
   
    if(e.target.tagName === "H2" || e.target.tagName === "IMG"){
        e.target.parentElement.nextElementSibling.classList.toggle("hidden")
    }
}

const changeIMGSrc = (e) => {
   if(e.target.tagName === "IMG" || e.target.nextElementSibling.tagName === "IMG"){
    e.target.parentElement.lastElementChild.src = "./assets/images/icon-plus.svg"
   }

   if(e.target.parentElement.nextElementSibling.classList.contains("hidden")){
    e.target.parentElement.lastElementChild.src = "./assets/images/icon-minus.svg"
   }
}


accordianContainer.addEventListener("click", showFAQ)