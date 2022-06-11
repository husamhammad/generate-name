/*      TODO: Define variables to indicate (select) nodes from HTML   */
const section = document.querySelector('#section')
const inputField=document.querySelector('.inputField')
const form = document.querySelector('.form')
const submit=document.querySelector('#add')
const clearAllTags=document.querySelector('#remove')

/*    TODO: create div in calss container and append it in section html   */
const Container=document.createElement("div")
Container.classList.add("container")
section.append(Container)
clearAllTags.addEventListener("click",()=>Container.innerHTML="")


/*    TODO: add EventListener to (Generate Name Tag) button "create tag"    */ 
submit.addEventListener("click", generateName);



/*    TODO: Create a function generateName to take the name from input   */ 
function generateName(){    
    createTag(inputField.value)
}



/*    TODO :: function that gets a name as an argument  and append tag method  */
const createTag=(name)=>{
    let tag=document.createElement("div")
    tag.setAttribute("name",name)
    tag.classList.add("tag")

    let hello=document.createElement("h3")
    hello.classList.add("title")
    hello.innerHTML="HELLO"
    tag.append(hello)

    let MynameIs=document.createElement("p")
    MynameIs.classList.add("subtitle")
    MynameIs.innerHTML="my name is"
    tag.append(MynameIs)

    let nametag=document.createElement("h2")
    nametag.classList.add("name")
    nametag.innerHTML=name
    tag.append(nametag)
    
    let IconClose=document.createElement("span")
    IconClose.classList.add("icon-close")
    IconClose.innerHTML="X"
    tag.append(IconClose)




/*     TODO: add EventListener to (icon close ) event "delete tag"     */ 
    IconClose.addEventListener("click",()=>deleteTag(name))


    /* TODO: Random color for every tags */
    let RandomColor = Math.floor(Math.random()*14578515).toString(16);
    tag.style.setProperty("background-color",`#${RandomColor}`) //
    inputField.value=""
    Container.append(tag)
}


    /*    TODO: add EventListener to (Delete All) button event "delete all tag"    */
let deleteTag=(name)=>{
let listTags=Array.from(document.getElementsByClassName("tag"))
for(let tag of listTags){
    let tagName=tag.getAttribute("name")
    if(tagName==name)
        tag.remove()   
}
}
