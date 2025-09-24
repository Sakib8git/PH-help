import { Suspense } from "react";
import "./App.css";
import BigCard from "./Components/BigCard";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import ToggleBtn from "./Components/ToggleBtn";
import MainBody from "./Components/MainBody";

const promisePost = fetch("./data.json").then((res) => res.json());
// console.log(promisePost);

function App() {
  return (
    <>
      <Container>
        <Nav></Nav>
      </Container>

      <Suspense fallback={<p>Loading....</p>}>
        <MainBody promisePost={promisePost}></MainBody>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
