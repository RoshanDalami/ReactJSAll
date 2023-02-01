import { initializeApp } from 'firebase/app'
import {
    getFirestore,collection,onSnapshot,
    addDoc,deleteDoc,doc,
    query , where ,
    orderBy
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDWsn-FHti-nm6s4JSl4VvHajIoI_wb9rw",
    authDomain: "fir-9-learning-6d556.firebaseapp.com",
    projectId: "fir-9-learning-6d556",
    storageBucket: "fir-9-learning-6d556.appspot.com",
    messagingSenderId: "705354772447",
    appId: "1:705354772447:web:9d0aaead18b9c16cdd5e6a"
  };

//init firebase app
initializeApp(firebaseConfig)

//init services

const db = getFirestore()

//collection ref
const colRef = collection(db,'books')

// queires 
const q = query(colRef, where("author" ,  "==" , "roshan dalami") ,orderBy('title','desc'))

//get collection data
        // getDocs(colRef)
        // .then((snapshot)=>{
        //     let books = []
        //     snapshot.docs.forEach((doc)=>{
        //         books.push({...doc.data() , id: doc.id})
        //     })
        //     console.log(books)
        // }).catch(err =>{
        //     console.log(err.message)
        // })
//Real-time collection data
onSnapshot(q,(snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc)=>{
        books.push({...doc.data() , id: doc.id})
    })
    console.log(books)
})


//adding documents
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef,{
    title : addBookForm.title.value ,
    author : addBookForm.author.value,
  }).then(
    ()=>{
        addBookForm.reset()
    }
  )
  
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db,'books',deleteBookForm.id.value)

  deleteDoc(docRef).then(
    ()=>{
        deleteBookForm.reset()
    }
  )

})