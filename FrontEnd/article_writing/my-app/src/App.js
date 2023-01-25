import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles', {
      'method' : 'GET',
      headers : {
        'Content-Type':'application/json',
        'Authorization':'Token b4cca18e9a866d36d79f015313a679764aa08b42'
      }
    })
    .then(resp => resp.json())
    .then(resp=> setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (article) =>{
    setEditArticle(article)

  }
  return (
    <div className="App">
      
       <h1>Article Writing</h1>
       <br>
       </br>
       <ArticleList  articles={articles} editBtn ={editBtn}/>
       {editArticle ? <Form article={editArticle}/> : null}
       

    </div>
  );
}

export default App;
