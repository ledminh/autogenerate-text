import React, {useState} from 'react';

import getSentence from './utils/get-sentence';


/*
 * REACT
 */
export default function Paragraph(props) {
    let sentenceLength = (props.maxSentenceLength < 3) 
                        ? 3 
                        : Math.floor(Math.random()*(props.maxSentenceLength - 2)) + 3;  

    const [paragraph, setParagraph]  = useParagraph(sentenceLength, 
                                                    props.numSentences,
                                                    props.maxWordLength
                                                    );
    
    const handleClick = (e) => {
      e.preventDefault();

      setParagraph([...paragraph, <Sentence
                                      key={Date.now()} 
                                      sentenceLength={sentenceLength} 
                                      maxWordLength = {props.maxWordLength}
                                   />]);
     

    }
    


    return (<p className="paragraph"
              onClick={handleClick}>
                {paragraph}
            </p>);
}

 
const Sentence = (props) => (<span> {getSentence(props.sentenceLength, props.maxWordLength)} </span>);
    



/*
 * FUNCTIONAL
 */

function useParagraph(sentenceLength, numSentences, maxWordLength){
  let pg = [];
        
    
    for (let i = 0; i < numSentences; i++) {
      pg.push(<Sentence
                  key={i} 
                  sentenceLength={sentenceLength} 
                  maxWordLength = {maxWordLength}
              />);
      
    }
    
    

    return useState(pg);
}

