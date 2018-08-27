import React from "react";
import { Form, Text } from "informed";

const ProofForm = (props) => (
  <Form
    render={({ formApi }) => (
        <div>
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <Text field="image" placeholder="Image" />
        <button onClick={() => { props.handleSubmit(formApi.getState()) }} type="submit">Submit</button>
        </div>
    )}
  />
);

export default ProofForm;
