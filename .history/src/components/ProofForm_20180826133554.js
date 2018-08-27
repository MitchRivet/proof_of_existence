import React from 'react'
import { Form, Text } from 'informed';

const ProofForm = () => (
  <div>
      test
    <Form id="basic-form">
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <label htmlFor="basic-title">Title:</label>
            <Text field="title" id="basic-title" />
            <label htmlFor="basic-description">Title:</label>
            <Text field="description" id="basic-description" />
            <button type="submit">Submit</button>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default ProofForm;