import { Button, TextField } from "@mui/material";

function NewWish({ value, setText, addWish }) {
  return (
    <label
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
      }}
    >
      <TextField
        id="standard-basic"
        label="Write your wish here..."
        variant="standard"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={() => addWish()}>
        ADD
      </Button>
    </label>
  );
}

export default NewWish;
