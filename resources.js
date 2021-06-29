let searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    let searchTerm = document.querySelector('#searchTerm').value;
    let queryString = `${requestUrl}?api_key=${api_key}&q=${searchTerm}&limit=50`;
    /*axios.get(queryString).then(resp=>{
        let data = resp.data.data;
        renderGifs(data);
        })*/
        renderGifs()

});

function renderGifs(gifs){

   //You can do this with an array of objects as well
    // let arr =[{img:'image1.png',caption:'this is a great image'},{img:'image2.png',caption:'this is a great image too'} ]
    let gallery = document.querySelector('.gallery');
    let template='';

    for(let i =1; i <= gifs; i++){
        let imageName =`image${i}.png`;
        console.log(imageName);
        //How to form the template with generating image names using the loop
        template += `<div class="image-data"><img src="${imageName}" alt="image"><p>This is image${i}</p></div>`;
        //How to form the template with an array of objects
        //template += `<div class="image-data"><img src="${arr[i].img}" alt="image"><p>${arr[i].caption}</p></div>`;
    }

    console.log(template);
    gallery.innerHTML= template;

}
