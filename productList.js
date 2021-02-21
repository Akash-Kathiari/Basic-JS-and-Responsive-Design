//list item
const list = document.querySelector('.list');
//buttons
const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_meta_btn = document.querySelector('.sort-options .sort-meta');
const sort_age_btn = document.querySelector('.sort-options .sort-age');

let list_items =[
    {
        name:'Transparent Speaker',
        image: "./images/sterio.jpg",
        meta:'Technology',
        age:550,
    },
    {
        name:'Aroma Diffuser',
        image: "./images/diffuser.jpg",
        meta:'Technology',
        age:33,
    },
    {
        name:'Meural Digital Frame',
        image: "./images/frame.jpg",
        meta:'Technology',
        age:595,
    },
    {
        name:'Braun Watch',
        image: "./images/watch.jpg",
        meta:'Fashion',
        age:120,
    },
    {
        name:'Duo Totepack',
        image: "./images/backpack.jpg",
        meta:'Travel',
        age:289,
    },
    {
        name:'Weekender Bag',
        image: "./images/bag.jpeg",
        meta:'Travel',
        age:98,
    },
    {
        name:'TV Stand',
        image: "./images/stand.jpeg",
        meta:'Furniture',
        age:360,
    },
    {
        name:'Brittany Sofa',
        image: "./images/sofa.jpg",
        meta:'Furniture',
        age:260,
    },
    {
        name:'Seal Chair',
        image: "./images/chair.jpg",
        meta:'Furniture',
        age:6396,
    },
];
//event listeners
let desc = false;
sort_name_btn.addEventListener('click',()=>{
    let array = sort_array_by(list_items, 'name', desc);
    displayList(array);

    desc =!desc;
});
sort_meta_btn.addEventListener('click',()=>{
    let array = sort_array_by(list_items, 'meta', desc);
    displayList(array);

    desc =!desc;
});
sort_age_btn.addEventListener('click',()=>{
    let array = sort_array_by(list_items, 'age', desc);
    displayList(array);

    desc =!desc;
});


//flip flop switch
function sort_array_by(array, sort, desc){
    array.sort(function (a,b){
        if (a[sort] < b[sort]) return   -1;
        if (a[sort] > b[sort]) return   1;
        return 0;
    });
    if (desc)array.reverse();
    return array;
}
//event listener for item_element

//function to displaylist
function displayList (array= []) {
    //clear html of list above for looping purpose
    list.innerHTML="";

    //loop to get items to circulate
    for(let i=0; i< array.length; i++){
        let item = array[i];

        //construct each element
        let item_element=document.createElement('div');
        item_element.addEventListener("click",productPage);
        item_element.classList.add('list-item');

        // create title div. add a class. set inner html to name. append title to item element
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText=item.name;

        item_element.appendChild(title);

        // create image . add a class. set inner html to image. append image to item element
        let image = document.createElement('img');
        image.classList.add('item-image');
        image.src=item.image;

        item_element.appendChild(image);

        // create meta div. add a class. set inner html to meta. append meta to item element
        let meta = document.createElement('div');
        meta.classList.add('item-meta');
        meta.innerText=item.meta;

        item_element.appendChild(meta);

        // create age div. add a class. set inner html to age. append age to item element
        let age = document.createElement('div');
        age.classList.add('item-age');
        age.innerText="$" + item.age;

        item_element.appendChild(age);

        list.appendChild(item_element);
    }
    //event listener for item_element
    function productPage() {
        alert("PRODUCT DETAILS (ONLY REQUIRED FOR 3-PERSON TEAMS)! LETS GOOOOOOO I WAS GOING TO SPEND HOURS TRYING TO FIGURE THIS OUT HAHAHAHAHAHAHHAHAHAHAHAHA FREEEEEEDOOOOM");
    }
}

displayList(list_items);