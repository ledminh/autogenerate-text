import { combineReducers } from 'redux'

const header  = (state = null, action) => {
    switch(action.type) {
        case 'ADD_HEADER':
            return action.header;
        default:
            return state;
    }
}


const paragraphs = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PARAGRAPH':
        return [
          ...state,
          action.paragraph
        ];

      default:
        return state
    }
}

const numSentences = (state = 5, action) => {
    switch (action.type) {
        case 'CHANGE_NUM_SENTENCES':
            return action.numSentences;
        default:
            return state;    
    }
}
  
const maxSentenceLength = (state = 10, action)  => {
    switch(action.type) {
        case 'CHANGE_MAX_SENTENCE_LENGTH':
            return action.maxSentenceLength;
        default:
            return state;
    }
}

const maxWordLength = (state = 6, action)  => {
    switch(action.type) {
        case 'CHANGE_MAX_WORD_LENGTH':
            return action.maxWordLength;
        default:
            return state;
    }
}


export default combineReducers({
  header,
  paragraphs,
  numSentences,
  maxSentenceLength,
  maxWordLength
});
