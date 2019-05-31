import React from 'react';

import './SortingHat.scss';

class SortingHat extends React.Component {
  render() {
    return (
      <div className='quiz-questions'>
        <h4>{this.props.questionsFromProps.question}</h4>
        <button className='btn' value='true' name='answer'>
          Yes
        </button>
        <button className='btn' value='false' name='answer'>
          No
        </button>
      </div>
    );
  }
}

export default SortingHat;
