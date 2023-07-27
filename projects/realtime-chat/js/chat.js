let currentUser = sessionStorage.getItem("currentUser")

if(currentUser == null){
    location.href = "login-form.php"
}

const chat_field = document.querySelector(".chat-field")
const sendBtn = document.querySelector(".btnSend")
const msgBox = document.querySelector(".msgBox")
sendBtn.style.display = "none";
msgBox.oninput = (e=>{
    let val = e.target.value;
    if(val.length > 0){
        sendBtn.style.display = "block";
    }else{
        sendBtn.style.display = "none";
    }
})

// let getMessages = async () => {

//     let self = sessionStorage.getItem("currentUser")
//     let outgoing = sessionStorage.getItem("outgoing")
//     let data = new FormData();
//     data.append("incoming", self);
//     data.append("outgoing", outgoing);
//         await fetch("php/getReceivedMessage.php", {
//             method: 'post',
//             body: data
//         })
//         .then( response => response.json())
//         .then( response => console.log(response))

        
//         // .then( response => appendMessage(response, "", 1))
//         .catch((error)=>{
//             console.error(error);
//           })

// }



   

async function fetchData(data) {
    try {
        let self = sessionStorage.getItem("currentUser")
        let outgoing = sessionStorage.getItem("outgoing")
        let data = new FormData();
        data.append("incoming", self);
        data.append("outgoing", outgoing);
      const response = await fetch('php/getReceivedMessage.php',{
        method: 'post',
        body: data
      })
      .then(response => response.json())
      .then(response => appendMessage(response, "", 1))
      
    } catch (error) {
      console.error('Error:', error);
    }
    

    setTimeout(fetchData, 10);
  }

  fetchData();
  


  






sendBtn.onclick = e =>{
    let self = sessionStorage.getItem("currentUser")
let outgoing = sessionStorage.getItem("outgoing")



let msg = msgBox.value
sendApi(msg, self, outgoing);
appendMessage(msg, 1, 0)

msgBox.value = "";




}


let appendMessage = (msg, type, local) =>{
if(local == 0){

let messages = document.createElement("div")
messages.classList.add("field")
messages.classList.add("msg")
messages.classList.add("right")
messages.innerHTML = 
`
 <img class="chat-img" src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="">
 <div class="chats">
     ${msg}
  </div>
`
chat_field.appendChild(messages); 

}else{
    if(chat_field.childElementCount > 0){
        chat_field.innerHTML = "";
    }
    
    for (const key in msg) {
        let data = msg[key].msg_content;
        let messages = document.createElement("div")
        messages.classList.add("field")
        messages.classList.add("msg")
    let cu = sessionStorage.getItem("currentUser");
    
    if(cu == msg[key].incoming_id){
        messages.classList.add("right")
    }else{
        messages.classList.add("left")
    }
    
    messages.innerHTML = 
    `
     <img class="chat-img" src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="">
     <div class="chats">
         ${data}
      </div>
    `
    chat_field.appendChild(messages); 
    chat_field.scrollTo(0, chat_field.scrollHeight);
    
     }


}




}



async function sendApi(msg, self, outgoing){
   let data = new FormData();
   data.append("msg", msg)
   data.append("incoming", self)
   data.append("outgoing", outgoing)

  const send = await fetch("php/chat.php", {
        method: 'post',
        body: data
    })
    .then( response => response.json())
    .then( response => console.log(response))
    

}
