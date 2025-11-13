import { useEffect, useRef, useState } from "react";
import Heading1 from "../Heading/Heading1";
import api from "../../api";
import { useLoaderData } from "react-router";
import { ContentWrapper, ContentWrapperNoBorder } from "../Utilities/Utilities";
import Post from "./Post";
import Avatar from "../Avatar";
import { Button } from "../Button";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

function PostList() {
  const [posts, setPosts] = useState([]);
  const dataLoader = useLoaderData();
  const previewPhotos = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const myPosts = await api.getPostsByUsername(dataLoader.username);
      setPosts(myPosts);
    }

    fetchData();
  }, []);

  function handleFiles(files) {
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        continue;
      }

      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      previewPhotos.current.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function handlePost(formData) {
  
  }

  return (
    <>
      <Heading1 text="My Posts" />
      <p className="mt-3">Create and manage your posts</p>

      {/* Post content */}
      <ContentWrapper>
        <form action={handlePost}>
          <div className="flex gap-x-5">
            <Avatar user={dataLoader} type={"chatFrame"} />
            <textarea
              name="content"
              className="flex-1 min-h-32 resize-none p-3 border border-purple-200 focus:border-purple-400 rounded-lg bg-purple-50/30"
              placeholder={"What's on your mind?"}
            ></textarea>
          </div>
          <div
            ref={previewPhotos}
            className="grid grid-cols-1 lg:grid-cols-5"
          ></div>
          <div className="flex justify-between mt-10">
            <label
              type="button"
              className="flex gap-x-2 items-center border border-purple-200 rounded-lg py-1 px-3 hover:bg-purple-50 hover:cursor-pointer"
              htmlFor="photos"
            >
              <AddPhotoAlternateOutlinedIcon />
              Add Image
            </label>
            <input
              type="file"
              name="photos"
              id="photos"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <Button text="Post" callback={handlePost} type={"submit"}></Button>
          </div>
        </form>
      </ContentWrapper>

      {posts.length > 0 && (
        <>
          <p className="mt-10">Your posts ({posts.length})</p>
          {posts.map((post) => (
            <ContentWrapperNoBorder key={post.id}>
              <Post author={post.author} post={post} />
            </ContentWrapperNoBorder>
          ))}
        </>
      )}
    </>
  );
}

export default PostList;
