import React, { useEffect } from "react";
import { Outlet } from "react-router";
const MY_SECRET_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJiZWt6YXQiLCJlbWFpbCI6Im1hbWF0ZW1pbm92YmVremF0NzkzQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzQyODkyOTgxLCJleHAiOjE3NDI5NzkzODF9.DGH4UxGsMGLde2AcPO2zJ5qu3EZNAoTP7IwXCtDQjdc";

const URL =
  "http://ec2-3-124-12-219.eu-central-1.compute.amazonaws.com/api/tests/user/enabled";
function MovieLayout() {
  const getEabledArr = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Beare ${MY_SECRET_TOKEN}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEabledArr();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MovieLayout;
