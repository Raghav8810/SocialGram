import React, {Suspense} from "react";
//import PostCard from "@/components/shared/PostCard";
const PostCard = React.lazy(() =>import("@/components/shared/PostCard"))
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Loader } from "lucide-react";


const Home = () => {
  const Postmemo = React.memo(PostCard);
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
    
  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="home-container">
          <div className="home-posts">
              <h2 className="h3-bold md:h2-bold text-left w-full" >Home Feed</h2>
              {isPostLoading && !posts ? (
                <Loader/>
              ): (
                <ul className="flex flex-col flex-1 gap-9 w-full ">
                {posts?.documents.map((post: Models.Document) => (
                  <li key={post.$id} className="flex justify-center w-full">
                    <Suspense fallback={<>Loading app...</>}> 
                       <Postmemo post={post} />  
                    </Suspense>
                   
                  </li>
                ))}
              </ul>
              )}
          </div>
      </div>
    </div>
  )
}

export default Home
