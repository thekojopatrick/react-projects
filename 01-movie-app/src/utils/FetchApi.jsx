let requestOptions = {
  method: "GET",
};

const headers = {
  "Content-Type": "application/json",
};

let query =""
const params = {
  api_key: process.env.REACT_APP_API_KEY,
  query:query
};

const makeRequest = async (url,query) => {
  const res = await fetch(
    (url += "?" + new URLSearchParams(params).toString() + query),
    requestOptions,
    headers
  );
  const data = res.json();
  return data;
};

export default makeRequest;
