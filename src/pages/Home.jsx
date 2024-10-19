import React, { useEffect, useState } from "react";
import appwriteService from "../appWrite/config.js";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [post, setPost] = useState([]);
  const userStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (userStatus) {
      appwriteService.getPosts().then((post) => {
        if (post) {
          setPost(post.documents);
        }
      });
    }
  }, []);

  return userStatus ? (
    <div className="w-full py-8">
      <Container>
        <div className=" grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {post?.map((post) => (
            
              <PostCard {...post} key={post.$id}/>
            
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl text-orange-500 font-bold hover:text-zinc-700">
              {" "}
              Login To read posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
