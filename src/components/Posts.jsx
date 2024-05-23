import React from 'react'
import { postApi } from '../store/services/postApi'

function Posts() {
  const {data: posts, isLoading, isError, refetch} = postApi.useGetPostsQuery('',{
    pollingInterval: 5000
  })
const [updatePost, {}] = postApi.useUpdatePostMutation()

const updateTitle = async (post) => {
    const title = prompt('Введите новый заголовок')
    await updatePost({id: post.id, data: {...post, title}})
}

  return (
    <div>
        <button onClick={refetch}>refetch</button>
    {posts?.map(post => {
      return (
        <div key={post.id}>
          <p>{post.title}</p>
          <button onClick={()=> updateTitle(post)}>Изменить</button>
        </div>
      );
    })}
  </div>
  
  )
}

export default Posts
