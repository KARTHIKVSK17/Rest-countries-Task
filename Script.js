var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <h4 class="card-title" style="text-align:center">${data1[i].name}</h4>
        <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
        <div class="card-body text-primary">
              <p class="card-text"> Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">Latlng:${data1[i].latlng}</p>
          <p class="card-text">CallingCodes:${data1[i].callingCodes}</p>   
           <a href="#" class="btn btn-primary" style=" align-content: center">Click for Weather</a>


        </div>
      </div>
      </div>`
        }
        document.body.append(container);
      }