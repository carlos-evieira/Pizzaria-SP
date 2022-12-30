const searchBar = document.querySelector('.search-bar');
const input = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

searchBar.addEventListener('mouseover', addClass);

searchBar.addEventListener('mouseout', removeClass);

document.addEventListener('click', (event) => {
 
  //when input is active, the mouseover effect is disabled
  if(event.target.classList[0] == 'search-bar__input'){
    searchBar.removeEventListener('mouseout', removeClass);
  }else{
    if(searchBar.classList.contains('search-bar--active')){
      removeClass();
    }
    searchBar.addEventListener('mouseout', removeClass);
    input.value = "";
  }
})


function addClass(){
  searchBar.classList.add('search-bar--active');
  input.classList.add('search-bar__input--active');
  btn.classList.add('search-bar__btn--active');
}

function removeClass(){
  searchBar.classList.remove('search-bar--active');
  input.classList.remove('search-bar__input--active');
  btn.classList.remove('search-bar__btn--active');  
}