function addNewBook() { 
    const bookInput = document.getElementById("book-name");
    const booklist = document.getElementById("book-list");
    const bookname = bookInput.value.trim();
    if (bookname === "") {
        alert("Please enter a book name");
    }
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = bookname;
    // create a simple href derived from the book name (encode to be safe)
    link.href = "#" + encodeURIComponent(bookname) + ".pdf";
    link.style.color = "blue";

    // create edit button for this list item
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.onclick = function() {
        let newname = prompt("Edit book name:", bookname);
        if (newname && newname !== bookname) {
            link.textContent = newname;
            link.href = "#" + encodeURIComponent(newname) + ".pdf";
        }
    };

    // create delete button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.onclick = function() {
        li.remove();
    };

    li.appendChild(link);
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    booklist.appendChild(li);
    bookInput.value = "";
}
 