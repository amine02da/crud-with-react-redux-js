import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postsSlice";

export default function Posts()
{
    const [title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Color, setColor] = useState("")

    const Dispatch = useDispatch()

    const posts = useSelector((state) => state.posts.posts)

    const Handleadd = () => {
        Dispatch(addPost({ id: posts.length + 1, title, Description, Color }))
        setTitle("")
        setDescription("")
        setColor("")
    } 
    return (
        <>
            <h1 className="text-center text-primary">Posts</h1>
            <div className="container d-flex flex-wrap justify-content-around m-5">
                {posts.length > 0 ? posts.map(post => 
                    <div className={`card text-bg-${post.Color ? post.Color : "primary"} mb-3`} style={{ maxWidth: "18rem"}}>
                    <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <h5 className="card-title">{post.id}</h5>
                        <p className="card-text">{post.Description}</p>
                    </div>
                    <div className="card-header text-center">
                        <button className="btn btn-info m-1">Edit</button>
                        <button className="btn btn-danger m-1">Delete</button>
                    </div>
                </div> ): "there is no posts "}
                <div className="add">
                    <div className="mb-3">
                        <label for="Title" className="form-label">Title</label>
                        <input type="Title" 
                            className="form-control" 
                            id="Title" placeholder="Title..." 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="color" className="form-label">Choose a color</label>
                        <select class="form-select" 
                            aria-label="Default select example"
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="primary">primary</option>
                            <option value="secondary">secondary</option>
                            <option value="success">success</option>
                            <option value="danger">danger</option>
                            <option value="warning">warning</option>
                            <option value="info">info</option>
                            <option value="dark">dark</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <textarea className="form-control" 
                            value={Description}
                            id="description" 
                            rows="3"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button 
                        className="btn btn-success"
                        onClick={() => Handleadd()}
                    >
                    Add
                    </button>
                </div>
            </div>
        </>
    )
}