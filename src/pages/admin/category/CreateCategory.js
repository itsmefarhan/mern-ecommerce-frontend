import React, { useState } from "react";
import { isAuthenticated } from "../../../api/auth";
import { createCategory } from "../../../api/category";

const CreateCategory = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { token } = isAuthenticated();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(token, { title }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setTitle("");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {success ? (
        <div className="alert alert-success">
          Category {title} successfully created
        </div>
      ) : null}
      {error !== "" ? <div className="alert alert-danger">{error}</div> : null}
      <h3 className="text-muted text-center">Create Category</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-outline-secondary"
          value="Create"
        />
      </div>
    </form>
  );
};

export default CreateCategory;
