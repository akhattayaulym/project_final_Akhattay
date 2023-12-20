
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YoutubeSearch.css';

const YoutubeSearch = () => {
  const [query, setQuery] = useState('агентство домов казахстан');
  const [results, setResults] = useState([]);

  const API_KEY = 'AIzaSyCSl3AaDd12ZRFYWx9kEQz_eb5bayVZ23E';

  useEffect(() => {
    handleSearch();
  }, []); // Выполнится только при монтировании компонента

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: query,
          part: 'snippet',
          type: 'video',
          key: API_KEY,
        },
      });

      setResults(response.data.items);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="youtube-search-container" onWheel={(e) => e.preventDefault()}>
      <div className="search-input-container">
      </div>
      <div className="video-results">
        {results.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
