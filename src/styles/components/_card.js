import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 30,
    padding: 30,
    borderRadius: 10,
    position: "relative"
  },
  content: {
    padding: 24,
    color: "#fff"
  }
}));
