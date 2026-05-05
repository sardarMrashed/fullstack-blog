import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API = 'https://fullstack-blog-068r.onrender.com/api/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

  useEffect(() => {
    axios.get(API).then(res => setPosts(res.data))
  }, [])

  const createPost = async () => {
    if (!title || !content) return
    const res = await axios.post(API, { title, content })
    setPosts([...posts, res.data])
    setTitle('')
    setContent('')
  }

  const deletePost = async (id) => {
    await axios.delete(`${API}/${id}`)
    setPosts(posts.filter(post => post._id !== id))
  }

  const startEdit = (post) => {
    setEditId(post._id)
    setEditTitle(post.title)
    setEditContent(post.content)
  }

  const saveEdit = async (id) => {
    const res = await axios.put(`${API}/${id}`, {
      title: editTitle,
      content: editContent
    })
    setPosts(posts.map(post => post._id === id ? res.data : post))
    setEditId(null)
  }

  return (
    <div className="app">
      <h1>My Blog</h1>

      <div className="form">
        <input
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your post..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={createPost}>Publish Post</button>
      </div>

      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post._id}>
            {editId === post._id ? (
              <>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                />
                <div className="post-buttons">
                  <button className="save-btn" onClick={() => saveEdit(post._id)}>Save</button>
                  <button className="cancel-btn" onClick={() => setEditId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="post-buttons">
                  <button className="edit-btn" onClick={() => startEdit(post)}>Edit</button>
                  <button className="delete-btn" onClick={() => deletePost(post._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App