let input = document.querySelector(".textInput");
let button = document.querySelector(".addButton");
let list = document.querySelector(".list");

        
        button.addEventListener("click", function() {

          
            if (input.value.trim() !== "") {

               
                let listItem = document.createElement("li");

                
                listItem.innerHTML = input.value;

                
                list.appendChild(listItem);

                
                input.value = "";
            }
        });

        