const Meaning = ({ type, definitions, synonyms, antonyms }) => {
  return (
    <div className="text-white my-2">
      <div className="flex items-center gap-2 my-4">
        <h5 className="font-playfair italic font-semibold tracking-widest shrink text-xl  opacity-90">
          {type}
        </h5>

        <hr className="w-full h-1 opacity-25 bg-gray-200 border-0 rounded-br-lg rounded-tl-lg mt-1  dark:bg-neutral-700" />
      </div>
      <ul className="list-disc font-light opacity-70 text-base marker:text-purple-400 ml-4">
        {definitions.map((definition, index) => {
          return (
            <li key={index} className="py-2">
              {definition}
            </li>
          );
        })}
      </ul>
      <div className="my-4 ">
        {synonyms.length > 0 && (
          <div>
            <span className="text-purple-500">Synonyms: </span>
            <span className="opacity-90">{synonyms.join(", ")}</span>
          </div>
        )}
        {antonyms.length > 0 && (
          <div>
            <span className="text-purple-500">Antonyms: </span>
            <span className="opacity-90">{antonyms.join(", ")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meaning;
