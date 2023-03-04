import React, { useRef } from "react";
import Controls from "../controls/Controls";
import Meaning from "../meaning/Meaning";

const Result = ({ data }) => {
  const audioRef = useRef();
  const meanings = data.meanings.map((meaning) => {
    return {
      type: meaning["partOfSpeech"],
      definitions: meaning["definitions"].map((def) => def.definition),
      synonyms: meaning["synonyms"],
      antonyms: meaning["antonyms"],
    };
  });
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-4 gap-y-2 overflow-y-auto">
        <div className="flex justify-between w-4/5 my-2">
          <div className="shrink flex flex-col gap-4">
            <h4 className="text-white text-3xl md:text-4xl font-playfair">
              {data.word}
            </h4>
            {data.phonetic && (
              <h6 className="text-purple-400">{data.phonetic}</h6>
            )}
          </div>
          {data.phonetics.length > 0 && data.phonetics[0].audio && (
            <>
              <audio src={data.phonetics[0].audio} ref={audioRef}></audio>
              <Controls audioRef={audioRef} />
            </>
          )}
        </div>
        <div className="flex flex-col justify-between w-4/5 my-2">
          {meanings.map((meaning, index) => (
            <Meaning
              type={meaning.type}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
              antonyms={meaning.antonyms}
              key={index}
            />
          ))}
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 opacity-70" />
    </>
  );
};

export default Result;
