const buttonElement = document.querySelector('button')

function addCSS(){
   const textAreaElement =  document.querySelector('textarea')
  const css = textAreaElement.value
  if (css == "align-items:flex-start;")
  {
    window.location.href = "level2.html"
    
  }
  else 
 
  {window.alert("INCORRECT INPUT , PLEASE REVIEW AND RETRY.") }
  
  }


buttonElement.addEventListener('click',addCSS)

