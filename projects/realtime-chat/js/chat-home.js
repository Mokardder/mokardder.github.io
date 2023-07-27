let users = document.querySelector(".users")


async function getUser() {
      
    const response = await fetch("php/users.php");
    
    return  await response.json();
}

async function syncUser() {
    // console.log(users.childElementCount)
    let data = await getUser()
    console.log(data)
    createChat(data)
    
}

syncUser();





let createChat = (data) =>{

    let chats;
    for(let i = 0; i < data.length; i++){
        let unique_id = data[i].unique_id
        chats = document.createElement("div")
        chats.classList.add("chats")
        chats.innerHTML = 
        `
          <div class="field">
              <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="" srcset="">
          </div>
          <div class="field">
              <p>${data[i].fname} ${data[i].lname}</p>
              <p class="status">Start Conversation</p>
          </div>
          <div class="field">
               <div class="status-icon"></div>
          </div>
        
        `;
        users.appendChild(chats);
        chats.onclick = ((e) =>{
            sessionStorage.setItem("outgoing", unique_id)
            console.log(unique_id)
            location.href = "chat.php"
        })
        

    }
   

    
}
