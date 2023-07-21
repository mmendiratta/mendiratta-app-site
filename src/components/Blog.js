import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mannimendiratta"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        setAllStories(data.items);
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
      return (
        <Card className={classes.root} key={story.title}>
          <CardHeader
            action={
              <IconButton aria-label="launch" href={story.link}>
                <LaunchIcon />
              </IconButton>
            }
            title={story.title}
            subheader={new Date(story.pubDate).toDateString()}
          />
          <img src={story.thumbnail} alt={"storyImg"}></img>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortenText(divToText(story.content), 0, 300) + "..."}
            </Typography>
          </CardContent>
        </Card>
      );
    });
  };

  return <section id="blog">{createCardComponents()}</section>;
}
