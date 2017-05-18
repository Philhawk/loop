import axios from 'axios';


// actions
const ADD_QUESTION = 'ADD_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';
const SET_QUESTIONS = 'SET_QUESTIONS';
const ADD_INITIAL_STATE = 'ADD_INITIAL_STATE';
const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';

export const addQuestion = question => ({
  type: ADD_QUESTION, question,
});

export const removeQuestion = () => ({
  type: REMOVE_QUESTION,
});

export const setQuestions = questions => ({
  type: SET_QUESTIONS, questions,
});

export const addInitialState = () => ({
  type: ADD_INITIAL_STATE,
});

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS,
});

export const callRemoveQuestion = () => (dispatch) => {
  dispatch(removeQuestion());
};

export const callAddInitialState = () => (dispatch) => {
  dispatch(addInitialState());
};

export const callClearQuestions = () => (dispatch) => {
  dispatch(clearQuestions());
};


export const createQuestion = ({ content, correctAnswer, questionType, choices, lecture_id }) => (dispatch) => {
  axios.post('/api/questions', { content, correctAnswer, questionType, choices, lecture_id })
  .then(question => dispatch(addQuestion(question.data)));
};

export const fetchQuestionsBySessionString = ({ sessionString }) => (dispatch) => {
  return axios.get(`/api/questions/session/${sessionString}`)
  .then((questions) => {
    dispatch(setQuestions(questions.data));
  });
};

export const fetchAllQuestionsByLectureId = ({ lecture_id }) => (dispatch) => {
  axios.get(`/api/questions/lecture/${lecture_id}`)
  .then((questionsList) => {
    dispatch(addQuestion(questionsList.data));
  });
};

const initialState = [{
  content: 'Your questions will appear here! Click start lecture below to begin.',
  default: true,
  correctAnswer: null,
  questionType: '',
  choices: [],
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return state.concat(action.question);
    case REMOVE_QUESTION:
      return state.slice(1);
    case SET_QUESTIONS:
      return action.questions;
    case ADD_INITIAL_STATE:
      return initialState.concat(state);
    case CLEAR_QUESTIONS:
      return initialState;
    default: return state;
  }
};

export default reducer;
