import { useSelector } from "react-redux";
import Item from "../Item";
import { useEffect } from "react";

const WishList = () => {
  const wishes = useSelector((state) => state.wishes.wishes);
  useEffect(() => {
    console.log(wishes);
  }, [wishes]);
  return wishes?.map((wish) => <Item key={wish.id} {...wish} />);
};

export default WishList;
