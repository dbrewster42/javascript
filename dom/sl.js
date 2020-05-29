  const ul = document.getElementById("ul")
  const but = document.getElementById("but")
  const item = document.getElementById("item")

  console.log(but)
  but.onclick = function() {        
    console.log(item.value)
    let inputValue = item.value

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button2 = document.createElement('button');
    li.appendChild(span)
    li.appendChild(button2)
    
    ul.appendChild(li)
    span.textContent = inputValue;
    button2.textContent = "Delete"              
    
    item.value = ""  
    alert("You Did it!")
    button2.onclick = function(e){
      ul.removeChild(li)
      alert("You KILLED it!")
    }

    item.focus();
  }