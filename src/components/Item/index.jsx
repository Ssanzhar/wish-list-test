import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeWish, deleteWish } from "../../store/wishesSlice";

const Item = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        width: 250,
        alignSelf: "center",
      }}
    >
      <div>
        <Checkbox
          checked={completed}
          onChange={() => dispatch(completeWish({ id }))}
        />
        <span>{text}</span>
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch(deleteWish({ id }))}
      >
        DELETE
      </Button>
    </div>
  );
};

export default Item;
