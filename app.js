const reviews = [
  {
    id: 1,
    name: "Madan Mohan",
    job: "web developer",
    img:
      "me.jpeg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna johnson",
    job: "web designer",
    img:
      "x.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter jones",
    job: "intern",
    img:
      "2.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. Just living my life man",
  },
  {
    id: 4,
    name: "Bill anderson",
    job: "the boss",
    img:
      "y.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem);
});

function showPerson(person){
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job
  info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
  if(currentItem >= 3){
    currentItem = 0;
  }else{
    currentItem++;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click',function(){
  if(currentItem<=0){
    currentItem = 3;
  }else{
    currentItem--;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click',function(){
  let random = Math.floor(Math.random() * reviews.length);
  showPerson(random);
});
