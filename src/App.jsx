import { useEffect, useState } from "react";
import WishList from "./components/WishList";
import NewWish from "./components/NewWish";
import { useDispatch } from "react-redux";
import { addWish } from "./store/wishesSlice";

function App() {
  const [text, setText] = useState("");
  // const [wishes, setWishes] = useState([]);
  const dispatch = useDispatch();

  const addWishApp = () => {
    if (text.trim().length) {
      dispatch(addWish({ text }));
    }
    // if (text.trim().length !== 0) {
    //   setWishes((prev) => [
    //     ...prev,
    //     {
    //       id: new Date().toISOString(),
    //       text,
    //       completed: false,
    //     },
    //   ]);
    // }
    setText("");
  };

  // const deleteWish = (id) => {
  //   setWishes((prevList) => prevList.filter((item) => item.id !== id));
  // };

  return (
    <div>
      <NewWish value={text} addWish={addWishApp} setText={setText} />
      <WishList />
    </div>
  );
}

export default App;
