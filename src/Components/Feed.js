import React, { useEffect, useState } from "react";
import "../CssOfComponents/Feed.css";
import db from "../firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  console.log("This is >>>", posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* <Post
        image="https://www.pandasecurity.com/en/mediacenter/src/uploads/2016/03/pandasecurity-Who-are-the-most-famous-hackers-in-history.jpg"
        profilePic="https://lh3.googleusercontent.com/a-/AOh14Ggx4C2y4vVSrxNBr-Att1-XtOqtzebFmh4D2fSt2g=s96-c"
        message="Hello LOL"
      /> */}

      {/* {
                posts.forEach(post => {
                    console.log("For each post >>>",post);
                   
            
                })
            } */}
      {posts.map((post) => {
        console.log(">>>>>>>>>>>", post);
        return (
          <Post
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
