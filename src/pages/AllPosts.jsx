import React,{useState,useEffect} from 'react'
import appwriteService from '../appWrite/config'
import { Container,PostCard } from '../components'
function AllPosts() {
     const [posts,setPosts] = useState([])
     useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
                console.log(posts);
                
            }
         })
        
     },[])


  return (
    <div className='w-full py-8'>

        <Container>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
            {posts?.map((post) => (
                
                    <PostCard {...post}  key={post.$id} />
                 
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts