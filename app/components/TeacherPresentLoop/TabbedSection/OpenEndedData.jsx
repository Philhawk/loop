import React from 'react';

export default ({openEndedAnswers}) => (
  <div>
    {
      openEndedAnswers.map((answer, index) => (
        <p key={index}>{answer}</p>
      )
    )
  }
  </div>
)
