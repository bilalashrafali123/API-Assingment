
const div = document.querySelector('div')


axios('https://fakestoreapi.com/products')
.then((res)=>{
console.log(res.data);


res.data.map((item)=>{
       
div.innerHTML += `<div class="main-card">
                  <h5>Title : ${item.title}</h5>
                  <img width ="100" height="100" src="${item.image}"  alt="products" /> 
                  <h5>price : ${item.price}</h5>
                  <button type="button" class="btn btn-outline-danger">Danger</button>
                  <br/>
                  </div>
`

})



}).catch((err)=>{
console.log(err);
})
