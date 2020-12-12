// import React from 'react'
import Axios from "axios";

export default function Api() {
  function getApi() {
    Axios.get(
      "https://api.edamam.com/search?q=chicken&app_id=4201534d&app_key=ac730a8b8a048ad137d8d0e0fc6fbb98"
    ).then(function (response) {
      // handle success
      console.log(response.data);
    });
  }
  return (
    <>
      <button onClick={getApi}>AxiosGET</button>
    </>
  );
}
