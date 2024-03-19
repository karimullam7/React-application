import React from "react";
import { useEffect ,useState } from "react";
import axios from "axios";

function Books(){

    var [ books, setBooks]=useState([])
    var [newbook, setNewBook] = useState({title:"", views:""})
var [editFlag, setEditFlag]=useState(false)
var [selectedBook, setSelectedBook]= useState(null)

     useEffect(function(){
      getBooks()
     },[])
function getBooks(){
    axios.get("http://localhost:4000/books").then((res)=>{
        setBooks([...res.data])

    }).catch(()=>{})
}

     function addBook(){
        axios.post("http://localhost:4000/books", newbook).then((res)=>{
            getBooks()

        })
     }

     function deleteBook(id){
        axios.delete("http://localhost:4000/books/"+id).then(()=>{
            getBooks()

        })
     }

     function editBook(book){
        setSelectedBook({...book})
        setEditFlag(true)
     }

     function updateBook(){
        axios.put("http://localhost:4000/books/"+selectedBook.id, selectedBook).then(()=>{
            // alert("upadted")
            getBooks();
        })
     }

     return (
        <div className="main">
        <h1>Books</h1>
             <div className="inp">
             {
                 ! editFlag && (
                 <div>
                    <input className="rounded p-2 m-2" type="text" placeholder="enter title" onChange={(event)=>{setNewBook({...newbook,title:event.target.value})}}/>
                    <br/> 
                    <input className="rounded p-2 m-2" type="text" placeholder="enter views" onChange={(event)=>{setNewBook({...newbook,views:event.target.value})}}/>
                    <br/>
                    <button  type="button" class="btn btn-primary" onClick={()=>{addBook()}}>Add Book</button>
                 </div>
                 )
             }
             {
                  editFlag && (
                 <div>
                    <input type="text" placeholder="enter title" value={selectedBook.title} onChange={(event)=>{setSelectedBook({...selectedBook,title:event.target.value})}}/>
                    <br/> 
                    <input type="text" placeholder="enter views" value={selectedBook.views} onChange={(event)=>{setSelectedBook({...selectedBook,views:event.target.value})}}/>
                    <br/>
                    <button onClick={()=>{updateBook()}}>Upadate Book</button>
                 </div>
                 )
             }
               

             </div>


       <ul className="books">
       {
            books.length>0 && books.map((book,ind)=>{
                return <li className="ll">
                            <h4> {book.title}</h4>
                            <h5>{book.views}</h5>
                            <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
                            <button onClick={()=>{editBook(book)}}>Edit</button>
                    </li>
            })
        }
       </ul>
        </div>
     )
}
export default Books;