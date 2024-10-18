import React from 'react'
import appwriteService from "../appWrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className=' h-[180px] w-[90px]   sm:w-full sm:h-[250px] bg-gray-200 rounded-xl overflow-hidden p-2 sm:p-3'>
            <div className=' w-full justify-center sm:mb-4 mb-2'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-[100px] sm:h-[120px] w-full md:h-[170px]'/>
            </div>
            <h2 className=' text-sm sm:text-md sm:pt-2 font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard