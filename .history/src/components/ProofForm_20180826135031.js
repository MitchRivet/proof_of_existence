import React from "react";
import { Form, Text } from "informed";

const ProofForm = () => (
  <Form
    render={({ submitForm }) => (
      <form onSubmit={submitForm}>
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    )}
  />
);

export default ProofForm;
