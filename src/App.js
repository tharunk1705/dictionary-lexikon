import { useState } from "react";
import Container from "./components/container/Container";
import FormInput from "./components/formInput/FormInput";
import Navbar from "./components/navbar/Navbar";
import Result from "./components/result/Result";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(undefined);

  const fetchResult = async (keyword) => {
    let responseData = {};
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );
    if (response.status === 200) {
      responseData["status"] = "success";
    } else {
      responseData["status"] = "failure";
    }
    responseData["data"] = await response.json();
    return responseData;
  };

  const handleSearch = async () => {
    if (error.length > 0) {
      return;
    }
    if (keyword.length < 2) {
      setError("Word should atleast be of 2 characters");
      setData(undefined);
    } else {
      let res = await fetchResult(keyword);
      if (res.status === "success") {
        setData(res.data);
      } else {
        setError(res.data.title);
        setData(undefined);
      }
    }
  };

  const handleKeywordChange = (key) => {
    key = key.trim();
    if (key.includes(" ")) {
      setError("Word cannot contain Space");
      return;
    } else {
      setKeyword(key);
      setError("");
    }
  };

  return (
    <div className="font-poppins w-screen min-h-screen overflow-hidden bg-neutral-900">
      <Container>
        <Navbar />
        <FormInput
          error={error}
          handleKeywordChange={handleKeywordChange}
          handleSearch={handleSearch}
        />
        {data &&
          data.length > 0 &&
          data.map((d, index) => <Result data={d} key={index} />)}
      </Container>
    </div>
  );
};

export default App;
