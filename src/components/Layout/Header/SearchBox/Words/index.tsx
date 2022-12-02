import React, { memo } from "react";

import WordsStyle from "./style";

interface IProps {
  title: string;
  words?: string[];
  onWordClick: (word: string) => void;
}

const Words: React.FC<IProps> = memo((props: any) => {
  const { title, words, onWordClick } = props;
  return (
    <WordsStyle>
      <div className="title">{title}</div>
      <div className="words">
        {words?.map((word: any, index: number) => (
          <div key={word} className="word" onClick={() => onWordClick(word)}>
            <span className="index">{index + 1}</span>
            <span className="main">{word}</span>
          </div>
        ))}
      </div>
    </WordsStyle>
  );
});

export default Words;
