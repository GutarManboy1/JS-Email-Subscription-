
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyq3copCdD27iIH_aiV0eGQrGZ1mhsHEfb4coQyV0ibRZa4sO4FONHDSHQ02iNXBEWM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
