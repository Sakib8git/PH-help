import React, { useState } from "react";
import BigCard from "./BigCard";
import ToggleBtn from "./ToggleBtn";
import Container from "./Container";
import Post from "./Posts";
import Posts from "./Posts";

const MainBody = ({ promisePost }) => {
  const [toggler, setToggler] = useState("All");
  return (
    <>
      <Container>
        <BigCard></BigCard>
        <ToggleBtn toggler={toggler} setToggler={setToggler}></ToggleBtn>

        <Posts promisePost={promisePost}></Posts>
      </Container>
    </>
  );
};

export default MainBody;
