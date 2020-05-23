import React, { useEffect, useState } from "react";
import { getStoryIds } from "./StoriesContainer/HackerNewsApi";
import Story from "./StoriesContainer/Story";
import styled from "@emotion/styled";
import { useInfiniteScroll } from "./StoriesContainer/useInfinityScroll";
const StoriesContainerEngine = (props) => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getStoryIds().then((data) => setStoryIds(data));
    }
    return () => (mounted = false);
  }, [count]);

  const StoriesContainerWrapper = styled.main`
    padding: 20px 15px;
    margin: auto;
    height: 350px;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: none !important;
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 3px !important;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  `;
  return (
    <StoriesContainerWrapper>
      {storyIds.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </StoriesContainerWrapper>
  );
};
export default StoriesContainerEngine;
