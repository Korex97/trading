const show = (id, className, removeid) => {
    document.getElementById(removeid).classList.remove(className)
    const element = document.getElementById(id);
    element.classList.add(className);
}

const btnStyle = (classes, className, contentId) => {
    const elements  = document.getElementsByClassName(classes);
    const contentStyle = document.getElementById(contentId).style.display
    for (var i = 0; i < elements.length; i++){
        if (elements[i].classList.contains(className) === false || 
            contentStyle === "block"
        ){
            elements[i].classList.add(className)
        }
        // }else{
        //     elements[i].classList.remove(className)
        // }
    }
}


module.exports = {show, btnStyle};