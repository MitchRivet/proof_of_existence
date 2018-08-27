import { Form, Text, TextArea} from 'react-form';

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