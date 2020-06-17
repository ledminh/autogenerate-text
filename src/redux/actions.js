export const addParagraph = paragraph => ({
  type: 'ADD_PARAGRAPH',
  paragraph: paragraph  
});


export const changeNumSentences = num => ({
    type: 'CHANGE_NUM_SENTENCES',
    numSentences: num
});

export const changeMaxSentenceLength = num => ({
    type: 'CHANGE_MAX_SENTENCE_LENGTH',
    maxSentenceLength: num
});

export const changeMaxWordLength = num => ({
    type: 'CHANGE_MAX_WORD_LENGTH',
    maxWordLength: num
});

export const addHeader = h => ({
    type: 'ADD_HEADER',
    header: h
}); 