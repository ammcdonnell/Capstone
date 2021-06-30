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
    let arr =[{img:'Images/image1.jpg',caption:'Handbook of Japanese Mythology by Michael Ashkenazi'},{img:'Images/image2.jpg',caption:'The Book of Yokai: Mysterious Creatures of Japanese Folklore by Michael Foster'},{img:'Images/image3.jpg',caption:'The Tale of the Princess Kaguya (2013)'},{img:'Images/image4.jpg',caption:'Pom Poko (1994)'},{img:'Images/image5.jpg',caption:'Uncanny Japan'},{img:'Images/image6.jpg',caption:'Kowabana: True Japanese scary stories from around the internet​'},{img:'Images/image7.jpg',caption:'Rapa Nui: Tradition and Survival on Easter Island by Grant McCall'},{img:'Images/image8.jpg',caption:'Easter Island - Its People, Legends, and Customs by Various'},{img:'Images/image9.jpg',caption:'Rapa Nui (1994)'},{img:'Images/image10.jpg',caption:'The Lost Gods of Easter Island (2000)'},{img:'Images/image11.jpg',caption:'Easter Island: the Truth Revealed (2018)'},{img:'Images/image12.jpg',caption:'The Mystery of Easter Island'},{img:'Images/image13.jpg',caption:'Ajantala and other Yoruba Folktales by Rotimi Ogunjobi'},{img:'Images/image14.jpg',caption:'The Handbook of Yoruba Religious Concepts by Baba Ifa Karade'},{img:'Images/image15.jpg',caption:'The Satchel (2020)'},{img:'Images/image16.jpg',caption:'The Water Will Carry Us Home (2018)'},{img:'Images/image17.jpg',caption:'Colored Folklore'},{img:'Images/image18.jpg',caption:'Drunk Mythology'},{img:'Images/image19.jpg',caption:'Handbook of Egyptian Mythology by Geraldine Pinch'},{img:'Images/image20.jpg',caption:'The Kane Chronicles by Rick Riordan'},{img:'Images/image21.jpg',caption:'Gods of Egypt (2016)'},{img:'Images/image22.jpg',caption:'Stargate (1994)'},{img:'Images/image23.jpg',caption:'Mythology'},{img:'Images/image24.jpg',caption:'The Myths and Legends'},{img:'Images/image25.jpg',caption:'The Library of Greek Mythology by Apollodorus'},{img:'Images/image26.jpg',caption:'Percy Jackson and the Olympians by Rick Riordan'},{img:'Images/image27.jpg',caption:'Clash of the Titans (2010)'},{img:'Images/image28.jpg',caption:'Troy (2004)'},{img:'Images/image29.jpg',caption:'Lets Talk About Myths, Baby! A Greek & Roman Mythology Podcast'},{img:'Images/image30.jpg',caption:'Mythunderstood'},{img:'Images/image31.jpg',caption:'Inca Mythology: Captivating Inca Myths of Gods, Goddesses, and Legendary Creatures by Matt Clayton'},{img:'Images/image32.jpg',caption:'Handbook of Inca Mythology by Paul Steele'},{img:'Images/image33.jpg',caption:'Incan Mythology and Other Myths of the Andes by Greg Roza'},{img:'Images/image34.jpg',caption:'The Precursors of the Inca (2004)'},{img:'Images/image35.jpg',caption:'A History of the Inca'},{img:'Images/image36.jpg',caption:'The Latin American History Podcast'},{img:'Images/image37.jpg',caption:'Norse Myths: A Guide to the Gods and Heroes by Carolyne Larrington'},{img:'Images/image38.jpg',caption:'Magnus Chase and the Gods of Asgard by Rick Riordan'},{img:'Images/image39.jpg',caption:'Thor (2011)'},{img:'Images/image40.jpg',caption:'Mortal (2020)'},{img:'Images/image41.jpg',caption:'Valhalla Rising (2009)'},{img:'Images/image42.jpg',caption:'Nordic Mythology Podcast'}]
    let gallery = document.querySelector('.gallery');
    let template='';

    for(let i = 0; i < arr.length; i++){
        let imageName =`image${i}.jpg`;
        console.log(imageName);
        //How to form the template with generating image names using the loop
        // template += `<div class="image-data"><img src="${imageName}" alt="image"><p>This is image${i}</p></div>`;
        //How to form the template with an array of objects
        template += `<div class="image-data"><img src="${arr[i].img}" alt="image"><p class="caption">${arr[i].caption}</p></div>`;
    }

    console.log(template);
    gallery.innerHTML= template;

}
