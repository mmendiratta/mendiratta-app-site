import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, CardContent, IconButton, Typography, Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  section: {
    padding: "12px",
   flexFlow: "wrap",
   display: "flex",
   justifyContent: "center",
   gap: "80px",
  }
  
}));

export default function Blog() {
  const classes = useStyles();
  const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = () => {
    fetch(
      "https://v1.nocodeapi.com/mannimendiratta/medium/nCllCJLUwVDzNsof"
    )
      .then(res => res.json())
      .then(data => {
      
        setAllStories(data);
      });
  };

  const divToText = node => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  const shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  };

  const createCardComponents = () => {

    return allStories.map(story => {
       var imgSrc = story.content.substring(
        story.content.indexOf("src=\"") + 5, 
        story.content.lastIndexOf("\" />")
    );
      return (
        <Card className={classes.root} key={story.title}>
          <CardHeader
            action={
              <IconButton aria-label="launch" href={story.link} target="_blank">
                <LaunchIcon />
              </IconButton>
            }
            title={story.title}
            subheader={new Date(story.created).toDateString()}
          />
          <img src={imgSrc} alt={"storyImg"}></img>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortenText(divToText(story.content), 0, 300) + "..."}
            </Typography>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <section id="blog" className={classes.section}>
      
      <div  className={classes.section}>
        <Grid container spacing={2} gap="20px">{createCardComponents()} </Grid>
      </div>
      
    </section>
  );
}
