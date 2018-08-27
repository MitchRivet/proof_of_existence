import React from "react";
import { Form, Text } from "informed";

const ProofForm = (props) => (
  <Form
    render={({ formApi }) => (
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <Text field="image" placeholder="Image" />
        <button onClick={() => { props.handleSubmit(formApi.getState()) }} type="submit">Submit</button>

    )}
  />
);

export default ProofForm;
