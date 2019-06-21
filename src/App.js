import React, {Component} from 'react';
import './App.scss';



const newQuiz = [{
  name:"Food Quiz",
  author:"Keith",
  questions: [
    {
    questionName: "What do you like most?",
    answers: [{
        text: "Bananas"
      }]
    },
    {
    questionName: "What city do you like most?",
    answers: [{
        text: "Cincinnati"
      }]
    },
    {
    questionName: "What app do you like most?",
    answers: [{
        text: "Google"
      }]
      }
    ]
  }
]


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizzes: newQuiz
    }
  }
  // componentDidMount(){
  //   fetch('http://localhost:8080/get-all-quizzes')
  //   .then(response =>{
  //     return response.json();
  //   })
  //   .then(myJson =>{
  //     this.setState({quizzes: myJson})
  //     console.log(this.state.quizzes);
  //   });
  // }

  handleAddQuiz = (e) =>{
    e.preventDefault();
    console.log(e);
    fetch('http://localhost:8080/add-quiz', {
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    method:'Post',
    body:JSON.stringify(newQuiz),
  })
  .then(res=>{
    if(res.status === 200){
      console.log("quiz added")
    } else{
      console.log("quiz not added")
    }
  })
    .then(function(response){
      console.log(response);
    })
    .then(function(myJson){
      console.log(myJson);
    });
  }

  render(){
    return (
      <div className="App">
      <nav className="navbar navbar-light">
        <span class="navbar-brand mb-0 h1">Open Quiz</span>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <button onClick={e=>this.handleAddQuiz(e)}> Add Quiz </button>
      </nav>
        {this.state.quizzes.map((quiz,index) =>{
          return(
            <div>
                    <div class="card">
                      <div class="card-body">
                        <p>Quiz Name: {quiz.name}</p>
                        <p>Quiz Author: {quiz.author}</p>
                        
                      </div>
                    </div>
            </div>
        )
        })}
      </div>
    )
  }
}
export default App;