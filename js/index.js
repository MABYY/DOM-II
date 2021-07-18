// Your code goes here

const imgSelect = document.querySelector('.container-home .intro img')
imgSelect.addEventListener('mouseenter',()=>{
    imgSelect.style.transform = "scale(1.2)";
    imgSelect.style.transition = "all 0.2s"
});

imgSelect.addEventListener('mouseleave',()=>{
    imgSelect.style.transform = "scale(0.6)";   
});


window.addEventListener('resize', () => {
    imgSelect.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  });

const imgSelect2 = document.querySelector('.content-section .img-content img')
  imgSelect2.addEventListener('dblclick',()=>{
      imgSelect2.src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
  });
  
const cardTitles = document.querySelectorAll('.destination h4')
cardTitles.forEach(title => {
   title.addEventListener('click', (event) => {
    event.target.style.color = 'blue'
    event.stopPropagation()
  })
})

const stopLink = document.querySelectorAll(".nav a")
stopLink.forEach(title => {
    title.addEventListener('focus', (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    event.target.style.color = 'green';
   })
})

const imgSelect4 = document.querySelector('.content-destination img')
window.addEventListener('scroll', () => {
    if (window.scrollY < 50) {
        imgSelect4.style.transform = "scale(0.6)";
    }
  })


const navBar = document.querySelector(".container-home .intro p")
navBar.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "hotpink";
  
})
const mainNav = document.querySelector(".container-home .intro")
mainNav.addEventListener('click', (event) => {
  event.target.style.backgroundColor = "red"
})



const imgSelect5 = document.querySelector('.content-section .text-content')
window.addEventListener('keydown',()=>{
    imgSelect5.style.backgroundColor = "rebeccapurple"
});


