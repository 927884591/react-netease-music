import React, { memo } from "react";

import WordsStyle from "./style";

interface IProps {
  title: string;
  words?: string[];
  remove?: any;
  onWordClick: (word: string) => void;
}

const Words: React.FC<IProps> = memo((props: any) => {
  const { title, words, onWordClick } = props;
  return (
    <WordsStyle>
      <div className="title">{title}</div>
      <div className="words">
        {title === "热门搜索" ? (
          words?.map((word: any, index: number) => (
            <div key={word} className="word" onClick={() => onWordClick(word)}>
              <span className="index">{index + 1}</span>
              <span className="main">{word}</span>
            </div>
          ))
        ) : (
          <div className="history">
            {words?.map((word: any, index: number) => {
              return (
                <div
                  key={word}
                  className="word"
                  onClick={() => onWordClick(word)}
                >
                  {word}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </WordsStyle>
  );
});

export default Words;
