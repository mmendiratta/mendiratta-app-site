import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Grid, CardMedia, CardActions, Button } from "@mui/material";
import resumeData from "../resumeData.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Portfolio() {
  const classes = useStyles();
  const makeCards = () => {
    if (resumeData) {
      return (
        <Grid container spacing={2}>
          {resumeData.portfolio.projects.map(projects => {
            return (
              <Grid item>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={"images/portfolio/" + projects.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {projects.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {projects.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href={projects.url}
                      target="__blank"
                    >
                      Check it Out
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={projects.repo}
                      target="__blank"
                    >
                      Repo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      );
    }
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {makeCards()}
          </div>
        </div>
      </div>
    </section>
  );
}
