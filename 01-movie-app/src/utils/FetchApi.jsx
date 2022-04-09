let requestOptions = {
  method: "GET",
};

const headers = {
  "Content-Type": "application/json",
};

const params = {
  api_key: process.env.REACT_APP_API_KEY,
};

const makeRequest = async (url) => {
  const res = await fetch(
    (url += "?" + new URLSearchParams(params).toString()),
    requestOptions,
    headers
  );
  const data = res.json();
  return data;
};

export default makeRequest;
