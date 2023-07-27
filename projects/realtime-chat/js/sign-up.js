const form = document.querySelector(".form-signup form")
const continueBtn = document.querySelector(".continueBtn")
let infoTxt = document.querySelector(".infotxt")


form.onsubmit = (e=>{
    e.preventDefault();
})

continueBtn.onclick = (e=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE ){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "Success"){
                  location.href = "chat-home.php"
                }else{
                    console.log()
                    infoTxt.style.display = "flex";
                    infoTxt.textContent = data;

                }
            }
        }

    }
    let formData = new FormData(form)
    xhr.send(formData)
})