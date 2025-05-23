import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import openApi from "../utils/openAi";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const seachClickHandle = async () => {
  try {
    const stream = await openApi.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: 'user', content: searchText.current.value }],
    });
    console.log(stream.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI Error:", error);
    if (error.status === 429) {
      alert("You're being rate limited. Please wait and try again later.");
    } else {
      alert("Something went wrong. Try again.");
    }
  }
};

  const userPreferedLanguage = useSelector(
    (state) => state.userLanguageConfig.userPrefredLanguage
  );
  return (
    <div className="pt-[15%]  flex justify-center">
      <form className="bg-black grid grid-cols-12 w-[70%] p-2" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          placeholder={lang[userPreferedLanguage].gptSearchPlaceholder}
          type="text"
          className="px-3 py-3 p-2  col-span-9 rounded-sm"
        />
        <button
          onClick={seachClickHandle}
          className="bg-violet-500 px-3 py-3 col-span-3 text-white font-bold rounded-xl ml-3"
        >
          {lang[userPreferedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
