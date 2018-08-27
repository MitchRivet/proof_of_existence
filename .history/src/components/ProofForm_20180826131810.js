import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';

const ExampleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <Text field="title" placeholder='Title' />
      <Image field="title" placeholder='Title' />
      <TextArea field="description" placeholder='Description' />
      <button type="submit">Submit</button>
    </form>
  )} />
)