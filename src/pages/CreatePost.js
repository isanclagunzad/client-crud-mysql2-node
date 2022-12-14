import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../App.css';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a title'),
    postText: Yup.string().required('Post content required'),
    username: Yup.string().min(3).max(15).required(),
  });
  const onSubmit = (data) => {
    axios.post('http://localhost:8001/posts', data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="Title"
            className="formField"
          ></Field>
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="Post"
            className="formField"
          ></Field>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Username"
            className="formField"
          ></Field>
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
