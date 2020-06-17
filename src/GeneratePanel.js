import React from 'react';

import { Input, Button } from 'antd';

import { connect } from 'react-redux'
import { addParagraph, changeNumSentences,
        changeMaxSentenceLength,
        changeMaxWordLength, 
        addHeader} from './redux/actions'

import Paragraph from './Paragraph';
import getSentence from './utils/get-sentence';

function GeneratePanel({ valueNumSentences, valueMaxSentenceLength, valueMaxWordLength, 
                header, onChangeNumSentences, onChangeMaxWords, onChangeMaxLetters,
                addParagraphWithDispatch, addHeaderWithDispatch                        
                        }) {
    
    function handleClick(e) {
        e.preventDefault();
        if(!header){
            let h = getSentence(valueMaxSentenceLength, valueMaxWordLength).toUpperCase();
            
            addHeaderWithDispatch(h);

        }
        else {
            let paragraph = (<Paragraph maxSentenceLength = {valueMaxSentenceLength}
                                        numSentences = {valueNumSentences}
                                        maxWordLength = {valueMaxWordLength}
                                        key={Date.now()}
                            />);             

            addParagraphWithDispatch(paragraph);
        }
        
        
    }


    return (<div className="panel">
                <div className="inputs">
                    <Input  className="input"
                            addonBefore = "# sentences: " 
                            maxLength="2"
                            size = "small"
                            onChange={onChangeNumSentences}
                            />

                    <Input  className="input"
                            addonBefore = "Max # words/sentence: " 
                            maxLength="2"
                            size = "small"
                            onChange={onChangeMaxWords}
                            />

                    <Input  className="input"
                            addonBefore = "Max # letters/word: " 
                            maxLength="1"
                            size = "small"
                            onChange={onChangeMaxLetters}
                            />
                </div>

                <div className="buttons">
                    <Button size = "middle"
                            type = "primary"
                            onClick={handleClick}>
                                Generate
                    </Button>
                </div>
                
            </div>);
}

const mapStateToProps = (state) => ({
    valueNumSentences: state.numSentences,
    valueMaxSentenceLength: state.maxSentenceLength,
    valueMaxWordLength: state.maxWordLength,
    header : state.header
});
  
const mapDispatchToProps = (dispatch) => ({
   addHeaderWithDispatch : (h) => dispatch(addHeader(h)), 
   onChangeNumSentences: (e) => dispatch(changeNumSentences(Number(e.target.value) || 5)),
   onChangeMaxWords: (e) => dispatch(changeMaxSentenceLength(Number(e.target.value) || 10)),
   onChangeMaxLetters: (e) => dispatch(changeMaxWordLength(Number(e.target.value) || 6)),
   addParagraphWithDispatch : paragraph => dispatch(addParagraph(paragraph)) 
})
  
  

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePanel);