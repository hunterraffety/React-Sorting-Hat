import React from 'react';

class SortingHat extends React.Component {
  render() {
    return (
      <div className='quizQuestions'>
        <div className='house-list'>
          <h4>{this.props.questionsFromProps.question}</h4>
          <button className='btn' value='true' name='answer'>
            Yes
          </button>
          <button className='btn' value='false' name='answer'>
            No
          </button>
        </div>
      </div>
    );
  }
}

export default SortingHat;
