import React, { Component } from 'react';
import './App.scss';
import SortingHat from './components/SortingHat';

const questions = [
  {
    question: 'Do you hate animals',
    answerValue: 1,
    yesOrNo: true
  },
  {
    question: 'Do you like to play Quidditch?',
    answerValue: 1,
    yesOrNo: true
  },
  {
    question: 'Do you hate animals',
    answerValue: 1,
    yesOrNo: true
  },
  {
    question: 'Do you like to play Quidditch?',
    answerValue: 1,
    yesOrNo: true
  },
  {
    question: 'Do you hate animals',
    answerValue: 1,
    yesOrNo: true
  },
  {
    question: 'Do you like to play Quidditch?',
    answerValue: 1,
    yesOrNo: true
  }
];

const answers = [];
const houses = [
  {
    houseName: 'Gryffindor',
    history: 'Blahashlashlaslhas',
    range: 5
  },
  {
    houseName: 'Hufflepuff',
    history: 'Balslasdalsdkasdlkjjkfsa sfasafasfasf asf kjlasgf kasgkj asg',
    range: 4
  },
  {
    houseName: 'Ravenclaw',
    history: 'asdkjasdkjasdkjdaskjf asfasfsaasf saf sf a afsfa s asf',
    range: 3
  },
  {
    houseName: 'Slytherin',
    history: 'asddasasd asfkj hfaskj afsdkj fasdkj afdskj afdskj dafkj dagfkj',
    range: 2
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions,
      answers,
      houses
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Welcome to Hogwarts -- the school of Witchcraft and Wizardry</h1>
        </div>
        <div class='begin'>
          <p class='begin-text'>
            To begin your journey of learning, please approach the great Sorting
            Hat, to learn the House in which you will belong!
            <p class='btn-container'>
              {this.state.questions.map(question => (
                <SortingHat questionsFromProps={question} />
              ))}
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
