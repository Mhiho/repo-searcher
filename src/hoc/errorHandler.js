import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import "../style/error-handler.scss";

const checkRequests = (Wrapped) => {
    function CheckRequests(props) {
      const [error, setError] = useState("");
      useEffect(() => {
        axios.interceptors.response.use(
          function (response) {
            return response;
          },
          function (error) {
            if (error.response.status === 404) {
              return setError("Nie ma takiego usera!");
            } else {
                console.log(error)
              return setError(error.response.data.message);
            }
          }
        );
      });
  
      return (
        <>
          <Wrapped {...props} />
          <div className="error-handler-container">
            <h3 className="error-handler-error">{error}</h3>
          </div>
        </>
      );
    }
    return CheckRequests;
  };
  
  export default checkRequests;
