console.log("javascript file is connected...")

let myLibrary = [];

let keys = ["Title", "Author", "Pages", "Read"]
let bk;

function addListenerToAddButton() {
  const showPopUp = document.querySelector(".addBtn");
  console.log("did it work")
  return showPopUpForm(showPopUp);
}



const showPopUpForm = event => {
  event.addEventListener('click', () => {
    toggleShowModal();
  });
};

function toggleShowModal() {
  const modalElement = document.querySelector('.bookModal');
  if (modalElement.classList.contains('hide')) {
    modalElement.classList.remove('hide');
    modalElement.classList.add('show');
  } else {
    modalElement.classList.remove('show');
    modalElement.classList.add('hide')
  }
}

function createSubmitButton() {
  const subButton = document.getElementById('submitBtn');
  console.log("Clickkkkk!!!!")
  return submitButton(subButton);
}

const submitButton = event => {
  event.addEventListener('click', () => {
    libraryDatabaseBuilder();
    toggleShowModal();

  });
};

function libraryDatabaseBuilder() {

  let title = document.querySelector('#titleValue').value;
  let author = document.querySelector('#authorValue').value;
  let pages = document.querySelector('#numberValue').value;
  let boolean = document.querySelector('#booleanValue').value;
  let form = document.getElementById('bookForm')

  addBookToLibrary(title, author, pages, boolean)
  form.reset();
};

function addBookToLibrary(title, author, pages, boolean) {
    let bk = [title, author, pages, boolean];
    console.log(title + ' by ' + author + pages + ' pages ' + boolean + ' they read the book.');
    let tempLibrary = [];
    for (let i = 0; i < keys.length; i++) {
      tempLibrary[keys[i]] = bk[i];
    }
    console.log(tempLibrary);

    myLibrary.push(tempLibrary);
    console.log(myLibrary);

    var table = document.getElementById("addedBooks");
    table.innerHTML="";
    var tr="";
    tr+=`<tr><table><th>Title</th><th>Author</th><th>Number of Pages</th><th>Book read?</th><th>Finished Reading?</th></tr>`;
       
    for(let i = 0; i < myLibrary.length; i++) {
        tr+='<tr>';
        tr+='<td>'+myLibrary[i].Title+'</td>'+'<td>'+myLibrary[i].Author+'</td>'+'<td>'+myLibrary[i].Pages+'</td>'+'<td>'+myLibrary[i].Read+'</td><td><input type=checkbox id="checkbox"></td>';
       };
    tr+='</tr>';
    table.innerHTML+=tr;
    console.log(myLibrary.length)
    console.log(myLibrary[0].Title)
}

window.addEventListener('load', () => {
  createSubmitButton(); 
  addListenerToAddButton();
});


//const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'yes')
//book1.info
//    The Hobbit, J.R.R Tolkien, 295, yes
//    cats, dogs, 85, no

