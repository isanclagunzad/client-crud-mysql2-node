import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8001/posts/').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="Home">
      {listOfPosts.map((data, key) => {
        return (
          <div className="post" key={key}>
            <div className="title">{data.title}</div>
            <div className="body">{data.postText}</div>
            <div className="footer">{data.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
