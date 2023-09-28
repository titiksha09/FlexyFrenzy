const buttonElement = document.querySelector('button')

function addCSS(){
   const textAreaElement =  document.querySelector('textarea')
  const css = textAreaElement.value
  if (css == "justify-content: space-around;")
  {
    window.location.href = "level4.html"
    
  }
 else 
 
 {window.alert("INCORRECT INPUT , PLEASE REVIEW AND RETRY.") }

}
buttonElement.addEventListener('click',addCSS)

