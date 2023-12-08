const boton = document.querySelector(".log-in");

boton.addEventListener("click", (e)=>{
    if(e.target){
        let modal = document.getElementById("modal");
        const cajaInputs = document.createElement("div");
        const LabelInputUser = document.createElement("label");
        const InputUser = document.createElement("input");
        const LabelInputPass = document.createElement("label");
        const InputPass = document.createElement("Input");
        const salir = document.createElement("i");


        cajaInputs.setAttribute("class", "cajaInput")
        LabelInputUser.setAttribute("for", "usuario");
        InputUser.setAttribute("id", "usuario");
        LabelInputPass.setAttribute("for", "Pass");
        InputPass.setAttribute("id", "Pass")
        InputUser.setAttribute("type", "email");
        InputPass.setAttribute("type", "password")
        salir.setAttribute("class", "exit");
        salir.textContent = "X";
        
        LabelInputUser.textContent = "Usuario o Email";
        LabelInputPass.textContent = "Contraseña";
        
        modal.showModal();
        
        
        cajaInputs.appendChild(LabelInputUser);
        cajaInputs.appendChild(InputUser);
        cajaInputs.appendChild(LabelInputPass);
        cajaInputs.appendChild(InputPass);
        modal.appendChild(salir);
        modal.appendChild(cajaInputs);
      

        salir.addEventListener("click", (e)=>{
            if(e.target){
               modal.close();
               modal.innerHTML = "";
               
            }
            
         })
        
    
    }
})