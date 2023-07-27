const form = document.querySelector(".login-container form")
const continueBtn = document.querySelector(".continueBtn")


form.onsubmit = (e=>{
    e.preventDefault();
})

continueBtn.onclick = (e=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/login.php", true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE ){
            if(xhr.status === 200){
                let data = JSON.parse(xhr.response);
                if(data[0] == "success"){
                  sessionStorage.setItem("currentUser", data[1].unique_id)
                  location.href = "chat-home.php"
                }else{
                    // console.log(data)
                }
            }
        }

    }
    let formData = new FormData(form)
    xhr.send(formData)
})