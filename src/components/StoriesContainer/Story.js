import React, { useEffect, useState } from "react";
import { getStory } from "./HackerNewsApi";
import styled from "@emotion/styled";
import { mapTime } from "../mappers/mapTime";
const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getStory(storyId).then((data) => data && data.url && setStory(data));
    }
    return () => (mounted = false);
  }, [storyId]);
  const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #cccccc;
    &:first-of-type {
      border-top: 0;
    }
    &last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  `;
  const StoryTitle = styled.h1`
    margin-bottom: 5px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 500px;
    a {
      color: #2f2f2f;
      background-color: #f9f7f1;
      text-transform: uppercase;
      font-family: "Playfair Display", serif;
      text-decoration: none;
      border-bottom: 2px solid #2f2f2f;
      border-top: 2px solid #2f2f2f;
      padding: 12px;
    }
  `;
  const StoryMeta = styled.div`
    font-style: italic;
    display: flex;
    > span {
      margin-right: 10px;
    }
    > span:not(:first-of-type):before {
      content: " • ";
      margin-right: 2px 7px;
    }
    .story__meta-bold {
      font-weight: bold;
    }
    .story__by {
      display: flex;
    }
    .story__time {
      display: flex;
    }
  `;
  const StoryMetaElement = styled.span`
    display: flex;
    font-weight: bold;
    color: ${(props) => props.color || "white"};
  `;
  return story && story.url ? (
    <StoryWrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data_testid="story-by">
          <StoryMetaElement>By: </StoryMetaElement>
          <p>{story.by}</p>
        </span>
        <span className="story__time" data_testid="story-time">
          <StoryMetaElement>Posted:</StoryMetaElement>
          {` `}
          <p>{mapTime(story.time)}</p>
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
export default Story;
