import { Form, Text, Scope } from '../../../src';

const ProofForm = () => (
  <div>
    <Form id="basic-form">
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <label htmlFor="basic-name">First name:</label>
            <Text field="name" id="basic-name" />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px' }}>
            <label>Values:</label>
            <Code language="language-js">
              {JSON.stringify(formState.values, null, 2)}
            </Code>
            <label>Touched:</label>
            <Code language="language-js">
              {JSON.stringify(formState.touched, null, 2)}
            </Code>
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default ProofForm;