const display = document.getElementById('comment');
const input = document.getElementById('input')
let array = []

function inputComment() {
  const value = input.value
  if (value == '') { alert('Enter a comment') }
  else {
  array.push(value) 
  console.log(array)
  input.value=''
  const template = array.map(templeteinter).join('')
  display.innerHTML = template
  increasecomment()}
  
}

function viewmore() {
  const template = array.map(templeteinter).join('')
  display.innerHTML = template
}



// function fetchData() {
//   fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => {
//       const template = json.map(templeteinter); 
//       display.innerHTML = template;
//     });
// }

function templeteinter(e) {
  const template = `
    <div class="comment3">
          <div class="comment-img">
            <img src="image/mehedi_hasan_shis.jpg" alt="" />
          </div>

          <div class="comment-div">
            <h1>Mehedi Hasan</h1>
            <p>
              ${e}
            </p>
          </div>
        </div>`;
  return template;
}


function hideComment() {
  display.innerHTML = ''
  
}


// function clearcomment() {
//   const comment3 = document.getElementsByClassName('comment3')
//   console.log(comment3)
//   comment3.remove();
  
// }


function clearcomment() {
  const comment3List = document.getElementsByClassName('comment3');

  // Convert the collection to an array for easier manipulation
  const comment3Array = Array.from(comment3List);

  comment3Array.forEach(comment => {
    comment.remove();
  });



  // Optionally, if you want to clear an array, you can do it here
  array = [];
  let likeElement = document.getElementById('commentincrease');
  likeElement.innerText = 0;

}


// function increaselike() {
//   let howlike = document.getElementById('likeincrease')
//   let howlike1 = parseInt(howlike.innerText) 
//   let howlike2 = howlike1 + 1
//   console.log(howlike1)
//   howlike.innerText = howlike1

//   // document.getElementById('likeincrease').innerText = document.getElementById('likeincrease').innerText + 1
// }

function increaselike() {
  let likeElement = document.getElementById('likeincrease');
  let howlike = parseInt(likeElement.innerText);
  let howlike1 = howlike + 1;
  console.log(howlike1);
  likeElement.innerText = howlike1;
}

function increasecomment() {
  let likeElement = document.getElementById('commentincrease');
  let howlike = parseInt(likeElement.innerText);
  let howlike1 = howlike + 1;
  console.log(howlike1);
  likeElement.innerText = howlike1;
}
