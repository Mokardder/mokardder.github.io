const btn = document.querySelectorAll(".actionBtn")


const fcm = 



btn.forEach(a =>{
    a.onclick = async (e) =>{
        const data = e.target.getAttribute("data")
        const type = e.target.getAttribute("type")
    
        const fcm = localStorage.getItem("fcm")
        console.log(`FCM:${fcm} Data: ${data} Type: ${+type}`)
        
        const payload = {
                "data": {
                    "action": data,
                    "type" : type
                },
                "to": fcm 
        }
    
        const res = await SendAction(payload)
    
        
        console.log(res.success);
        if(res.success == 1 ){
            mokardderAlert(data, "scss", 3)
        }
    }

})



let SendAction = async (payload) =>{


    const BASE_URL = "https://fcm.googleapis.com/fcm/send"
    const AUTH_KEY = "key=AAAAsmIcLSk:APA91bHmIcvDVGzhwD-W7TX--WOMizEvuz8YFovifpO6jIIdBEMcFd6KGKynJ2X8pTCAeFyY4Dm86hn1bUNj0YS7aquX-2hgC9Uyd8aTJCgCmplJ4s8dGocZ-UxMBMDWokVm9Plpq0Vf"

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : AUTH_KEY
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  });

  return response.json(); // parses JSON response into native JavaScript objects
}