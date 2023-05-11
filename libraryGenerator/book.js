console.log("javascript file is connected...")

let myLibrary = [];

let keys = ["Title", "Author", "Pages", "Read"]
let bk;



const subbtn = document.querySelector("#btn");
subbtn.addEventListener("click", bookGen);


function bookGen() {
    let b = document.getElementById("boxbtn").value;
    bk = b.split(',');

    //array = [title, author, pages, read]
    addBookToLibrary.apply(this, bk)
}

function addBookToLibrary() {

    let title = bk[0];
    let author = bk[1];
    let pages = bk[2];
    let read = bk[3];
    console.log(title + ' by ' + author + pages + ' pages ' + read + ' they read the book.');
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
    tr+='<tr><table><th>Title</th><th>Author</th><th>Number of Pages</th><th>Book read?</th></tr>';
       
    for(let i = 0; i < myLibrary.length; i++) {
        tr+='<tr>';
        tr+='<td>'+myLibrary[i].Title+'</td>'+'<td>'+myLibrary[i].Author+'</td>'+'<td>'+myLibrary[i].Pages+'</td>'+'<td>'+myLibrary[i].Read+'</td>';
       };
    tr+='</tr>';
    table.innerHTML+=tr;
    console.log(myLibrary.length)
    console.log(myLibrary[0].Title)
  }

//const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'yes')
//book1.info
//    The Hobbit, J.R.R Tolkien, 295, yes
//    cats, dogs, 85, no

