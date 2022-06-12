



 let ftch = fetch("../users.json")
   .then(function (resp) {
     return resp.json();
   })
   .then(function (data) {
     console.log(data[0]);
     console.log(data[1]);
     arr = data;
     console.log(arr[0]);
     console.log(arr[1]);
     let lista = document.querySelector("#crd");
     data.forEach((ele) => {
      arr.splice(1);
      
       // <li class="list-group-item">An item</li>

       let p = document.createElement("p");
       p.className = "card-text";
       p.innerHTML = `<div id="card" class="card card-body text-center ">  <img src=" ${arr[0].profileURL}"
         class="card-img" alt="img_logo"> ${arr[0].firstName}    ${arr[0].lastName}   <button type="button" id="bott"; onclick="mostra()"  class="btn btn-success">More</button></div>`;
        
         lista.appendChild(p);
       console.log(ftch)  
       console.log(p);
       console.log(ele);
     });
     
   });

function mostra() {
  let ftch = fetch("../users.json")
    .then(function (resp) {
      return resp.json();
    })
   
    .then(function (data) {
      console.log(data[0]);
      console.log(data[1]);
      arr = data;
       console.log(arr[0]);
       console.log(arr[1]); 
      let lista = document.querySelector("#bott");
      data.forEach((ele) =>{
        arr.splice(1);
        // <li class="list-group-item">An item</li>
        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `Sesso: ${arr[0].gender} E-mail:  <a href="">  ${arr[0].email}</a>`;
        lista.appendChild(p);
       console.log(ftch);
       console.log(p);
       console.log(ele); 
       lista.onclick = function () {
         p.style.display = "none";
         window.location.reload();
       };

      });  
    });
    
    

}

   let ftch1 = fetch("../users.json")
     .then(function (resp) {
       return resp.json();
     })
     .then(function (data) {
       console.log(data[0]);
       console.log(data[1]);
       arr = data;
       console.log(arr[0]);
       console.log(arr[1]);
       let lista = document.querySelector("#crd2");
       arr.forEach(() => {
        
        
         
        
         // <li class="list-group-item">An item</li>

         let p = document.createElement("p");
         p.className = "card-text";
         p.innerHTML = `<div id="card" class="card card-body text-center ">  <img src=" ${arr[1].profileURL}"
         class="card-img" alt="img_logo"> ${arr[1].firstName}    ${arr[1].lastName}    <button type="button" id="bott1"; onclick="mostra1()"  class="btn btn-success">More</button></div>`;
          
         lista.appendChild(p);
         console.log(ftch);
         console.log(p);
         console.log(ele);
       });
     });



function mostra1() {
  
  let ftch = fetch("../users.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data[0]);
      console.log(data[1]);     
      arr1 = data;
       console.log(arr[0]);
       console.log(arr[1]); 
      let lista = document.querySelector("#bott1");
      data.forEach((ele) => {
        
        
        arr1.splice(0)       
        
        
        // <li class="list-group-item">An item</li>
        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `Sesso: ${arr[1].gender} E-mail: <a href="">${arr[1].email}</a>`;
        lista.appendChild(p);
       console.log(ftch);
       console.log(p);
       
       console.log(ele);
        lista.onclick = function () {
         p.style.display = "none"
         window.location.reload();
        }
          
       
       
      });
    });
}
  






