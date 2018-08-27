import React from "react";
import { Form, Text } from "informed";

const ProofForm = (props) => (
  <Form
    render={({ formApi, submitForm }) => (
      <form onSubmit={props.handleSubmit}>
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <Text field="image" placeholder="Image" />
        <button onClick={() => { props.handleSubmit(formApi) }} type="submit">Submit</button>
      </form>
    )}
  />
);

export default ProofForm;
