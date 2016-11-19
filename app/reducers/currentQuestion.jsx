
// Constants
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";

// Sync Action Creators
const setCurrentQuestion = question => { type: SET_CURRENT_QUESTION, question }

// Async Action Creators

// Initial State
const initialState = {
  content: 'Which rhetorical strategy does the author adopt in lines 44-63 ("The character ... influences us")?',
  correctAnswer: '',
  questionType: 'multipleChoice',
  choices: ['She goes on the offensive, berating opponents of Carlyle for their absence of wisdom, judgement and foresight',
'She acknowledges but discrdits other arguments, accusing Carlyle\'s critics of misunderstanding the originality of Carlyle\'s ideas',
'She claims that most people do not recognize Carlyle\'s genius, suggesting that only discerning few are capable of doing so.',
'She gives examples of Carlyle\'s far-reaching influence, noting that even criticism of Carlyle implies praise.'],
  lecture_id: 0
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_QUESTION:
      return action.question;
    default:
      return state;
  }
}

export default reducer;
