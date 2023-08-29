import Post from "./components/Post";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <div className="App">
      <MainHeader onCreatePost={showModalHandler} />
      <main>
      <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </div>
  );
}

export default App;
