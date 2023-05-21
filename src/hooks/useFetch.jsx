import React from "react";
import { useState, useEffect } from "react";
import { getDataApiLocal } from "../api";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataBlogs = () => {
      getDataApiLocal()
        .then((data) => {
          setData((prevArray) => data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    };

    setTimeout(() => {
      dataBlogs();
    }, 2000);
  }, []);

  return { data, loading, error };
};

export default useFetch;
