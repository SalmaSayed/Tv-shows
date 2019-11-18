import React from "react";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { useStyles } from "../styles/components/_card.js";

const Cards = props => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  console.log(props.showsList);
  const placeholder = "./images/clapper.png";
  return (
    <Grid
      container={true}
      justify="space-around"
      alignItems="flex-start"
      spacing={0}
    >
      {props.showsList.map(show => (
        <Grid item xs={3} key={show.id}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <Box width={1 / 4} minWidth={200} minHeight={350}>
              <CardMedia
                classes={mediaStyles}
                image={show.image ? show.image.medium : placeholder}
              />
              <CardActionArea>
                <CardContent className={styles.content} />
              </CardActionArea>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
