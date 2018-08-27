import React from 'react'
import { Form, Text } from 'react-form';

const ProofForm = () => (
    <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <Text field="firstName" placeholder='First Name' />
      <Text field="lastName" placeholder='Last Name' />
      <RadioGroup field="gender">
        <Radio value="male" />
        <Radio value="female" />
      </RadioGroup>
      <TextArea field="bio" />
      <Checkbox field="agreesToTerms" />
      <button type="submit">Submit</button>
    </form>
  )} />
);

export default ProofForm;