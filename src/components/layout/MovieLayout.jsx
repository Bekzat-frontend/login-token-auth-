import React, { useEffect } from "react";
import { Outlet } from "react-router";

function MovieLayout() {
  const getEabledArr = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Beare ${URL}`,
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
