// let searchForm = document.querySelector('#search');

// searchForm.addEventListener('submit', function(event){
    // event.preventDefault();
    // let searchTerm = document.querySelector('#searchTerm').value;
    // let queryString = `${requestUrl}?api_key=${api_key}&q=${searchTerm}&limit=50`;
    /*axios.get(queryString).then(resp=>{
        let data = resp.data.data;
        renderGifs(data);
        })*/
        renderGifs(42)

// });

function renderGifs(gifs){

   //You can do this with an array of objects as well
    let arr =[{img:'image1.jpg',caption:'Handbook of Japanese Mythology by Michael Ashkenazi'},{img:'image2.jpg',caption:'The Book of Yokai: Mysterious Creatures of Japanese Folklore by Michael Foster'},{img:'image3.jpg',caption:'The Tale of the Princess Kaguya (2013)'},{img:'image4.jpg',caption:'Pom Poko (1994)'},{img:'image5.jpg',caption:'Uncanny Japan'},{img:'image6.jpg',caption:'Kowabana: True Japanese scary stories from around the internet​'},{img:'image7.jpg',caption:'Rapa Nui: Tradition and Survival on Easter Island by Grant McCall'},{img:'image8.jpg',caption:'Easter Island - Its People, Legends, and Customs by Various'},{img:'image9.jpg',caption:'Rapa Nui (1994)'},{img:'image10.jpg',caption:'The Lost Gods of Easter Island (2000)'},{img:'image11.jpg',caption:'Easter Island: the Truth Revealed (2018)'},{img:'image12.jpg',caption:'The Mystery of Easter Island'},{img:'image13.jpg',caption:'Ajantala and other Yoruba Folktales by Rotimi Ogunjobi'},{img:'image14.jpg',caption:'The Handbook of Yoruba Religious Concepts by Baba Ifa Karade'},{img:'image15.jpg',caption:'The Satchel (2020)'},{img:'image16.jpg',caption:'The Water Will Carry Us Home (2018)'},{img:'image17.jpg',caption:'Colored Folklore'},{img:'image18.jpg',caption:'Drunk Mythology'},{img:'image19.jpg',caption:'Handbook of Egyptian Mythology by Geraldine Pinch'},{img:'image20.jpg',caption:'The Kane Chronicles by Rick Riordan'},{img:'image21.jpg',caption:'Gods of Egypt (2016)'},{img:'image22.jpg',caption:'Stargate (1994)'},{img:'image23.jpg',caption:'Mythology'},{img:'image24.jpg',caption:'The Myths and Legends'},{img:'image25.jpg',caption:'The Library of Greek Mythology by Apollodorus'},{img:'image26.jpg',caption:'Percy Jackson and the Olympians by Rick Riordan'},{img:'image27.jpg',caption:'Clash of the Titans (2010)'},{img:'image28.jpg',caption:'Troy (2004)'},{img:'image29.jpg',caption:'Lets Talk About Myths, Baby! A Greek & Roman Mythology Podcast'},{img:'image30.jpg',caption:'Mythunderstood'},{img:'image31.jpg',caption:'Inca Mythology: Captivating Inca Myths of Gods, Goddesses, and Legendary Creatures by Matt Clayton'},{img:'image32.jpg',caption:'Handbook of Inca Mythology by Paul Steele'},{img:'image33.jpg',caption:'Incan Mythology and Other Myths of the Andes by Greg Roza'},{img:'image34.jpg',caption:'The Precursors of the Inca (2004)'},{img:'image35.jpg',caption:'A History of the Inca'},{img:'image36.jpg',caption:'The Latin American History Podcast'},{img:'image37.jpg',caption:'Norse Myths: A Guide to the Gods and Heroes by Carolyne Larrington'},{img:'image38.jpg',caption:'Magnus Chase and the Gods of Asgard by Rick Riordan'},{img:'image39.jpg',caption:'Thor (2011)'},{img:'image40.jpg',caption:'Mortal (2020)'},{img:'image41.jpg',caption:'Valhalla Rising (2009)'},{img:'image42.jpg',caption:'Nordic Mythology Podcast'}]
    let gallery = document.querySelector('.gallery');
    let template='';

    for(let i = 0; i < arr.length; i++){
        let imageName =`image${i}.jpg`;
        console.log(imageName);
        //How to form the template with generating image names using the loop
        // template += `<div class="image-data"><img src="${imageName}" alt="image"><p>This is image${i}</p></div>`;
        //How to form the template with an array of objects
        template += `<div class="image-data"><img src="${arr[i].img}" alt="image"><p>${arr[i].caption}</p></div>`;
    }

    console.log(template);
    gallery.innerHTML= template;

}
