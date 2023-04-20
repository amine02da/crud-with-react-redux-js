import React from "react";

export default function Posts()
{
    return (
        <>
            <h1 className="text-center text-primary">Posts</h1>
            <div className="container d-flex justify-content-around m-5">
                <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-header text-center">
                        <button className="btn btn-info m-1">Edit</button>
                        <button className="btn btn-danger m-1">Delete</button>
                    </div>
                </div>
                <div className="add">
                    <div className="mb-3">
                        <label for="Title" className="form-label">Title</label>
                        <input type="Title" className="form-control" id="Title" placeholder="Title..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="color" className="form-label">Choose a color</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">primary</option>
                            <option value="2">secondary</option>
                            <option value="3">success</option>
                            <option value="3">danger</option>
                            <option value="3">warning</option>
                            <option value="3">info</option>
                            <option value="3">dark</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}