const buttonElement = document.querySelector('button')

function addCSS(){
   const textAreaElement =  document.querySelector('textarea')
  const css = textAreaElement.value
  if (css == "align-items: flex-end;")
  //this is the gateway to the lst page
  {
    window.alert("Congratulations on conquering FlexFrenzy! You've now gained access to a sleek Flexbox getter command, your gateway to mastering CSS layout. If you're ready to begin this exciting journey, just click OK to collect your well-deserved reward and de into the world of beautiful web design.") 
    if (true){
      window.location.href = "congratulation.html"
    }
    //till here
  }
 else 
 
{window.alert("INCORRECT INPUT , PLEASE REVIEW AND RETRY.") }

}
buttonElement.addEventListener('click',addCSS)

