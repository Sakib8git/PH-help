import React, { useState } from "react";
import BigCard from "./BigCard";
import ToggleBtn from "./ToggleBtn";
import Container from "./Container";

const MainBody = () => {
  const [toggler, setToggler] = useState("All");
  return (
    <>
      <Container>
        <BigCard></BigCard>
        <ToggleBtn toggler={toggler} setToggler={setToggler}></ToggleBtn>
      </Container>
    </>
  );
};

export default MainBody;
