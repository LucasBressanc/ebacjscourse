let grocery = document.getElementById("grocery");
        grocery.addEventListener("submit", addItem);
        function addItem(e){
            e.preventDefault();
            let data = this.elements.writelist.value;
            let list = document.getElementById("list");
            let item = document.createElement("li");
            let text = document.createElement("p");

            text.textContent = data;
            this.elements.writelist.value = "";
            item.append(text);
            list.append(item);

            let removebutton = document.createElement("span");
            removebutton.classList.add("remove");
            item.append(removebutton);
            removebutton.addEventListener("click", deleteItem);
            item.addEventListener("click", doneItem);
        }
        function deleteItem(e){
            this.parentElement.remove();
        }

        function doneItem(e){
            this.classList.toggle("done");
        }