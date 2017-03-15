button = document.querySelector('button');

button.addEventListener('click', function(e) {
  console.log(e.target.innerText);
  console.log(e.target.innerHTML);
})
