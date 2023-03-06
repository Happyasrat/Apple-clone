import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [YoutubeVideos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      // `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`

      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => {
        const YoutubeVideosData = data.items;
        setVideos(YoutubeVideosData);
      });
  }, []);
  console.log(YoutubeVideos);
  return (
    <div>
      <div className="center">
        <h1>Apple Videos</h1>
      </div>
      {YoutubeVideos?.map((singleVideo) => {
          const vidId = singleVideo.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

          const videoWrapper = (
            <div className="latestVideo container-fluid">
              
                <div key={vidId} className="card">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>

                  <div className="publDate">
                    {singleVideo.snippet.publishedAt}
                  </div>
                </div>
             
            </div>
          );
          return videoWrapper;
        })}
    </div>
  );
}

export default YoutubeVideos;
