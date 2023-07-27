console.log("Script Executed...")


        let head = document.getElementsByTagName("HEAD")[0];
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "https://mokardder.000webhostapp.com/library/style.css";


        let fa = document.createElement("link");
        fa.rel = "stylesheet";
        fa.type = "text/css";
        fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        head.appendChild(link);
        head.appendChild(fa);


        let body = document.getElementsByTagName("BODY")[0]
        let toastContainer = document.createElement("div");
        toastContainer.classList.add("toast-container-mokardder");
        toastContainer.innerHTML =
            `
        <div class="toast-js-mokardder"></div>
        `
        body.appendChild(toastContainer);

        let toastJs = toastContainer.querySelector(".toast-js-mokardder");


// Function Name
        let mokardderAlert = (msg = "Set Message", type = "scss", time = 5) => {
            let ico;

            let pop = document.createElement("div")
            pop.classList.add("toast-wrapper-mokardder")


            if (type == "err") {
                ico = "fa-sharp fa-solid fa-xmark m-icons";
            } else if (type == "alrt") {
                ico = "fa-solid fa-circle-exclamation m-icons"
            } else {
                ico = "fa-solid fa-circle-check m-icons"
            }



            pop.innerHTML =

                `
   <div class="border-bottom" ></div>
   <i class="${ico}"></i>
   <p style="color: white">${msg}</p>
   `

            if (type == "err") {

                pop.classList.add("err")
                pop.querySelector(".border-bottom").classList.add("err-border")

            } else if (type == "alrt") {

                pop.classList.add("alert")
                pop.querySelector(".border-bottom").classList.add("alert-border")


            } else {
                pop.classList.add("success")
                pop.querySelector(".border-bottom").classList.add("success-border")

            }
            let bordertime = pop.querySelector(".border-bottom");
            bordertime.style.animationDuration = time + "s";

            toastJs.appendChild(pop);

            setTimeout(() => {
                pop.classList.add("toast-removed")

            }, time * 1000 - 150)

            pop.addEventListener("transitionend", () => {
                pop.remove();
            })

        }