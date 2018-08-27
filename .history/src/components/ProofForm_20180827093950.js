import React from "react";
import { Form, Text, asField } from "informed";

const FileUpload = asField(({ fieldState, fieldApi, ...props }) => {
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
    return (
      <input
        type="file"
        onChange={(e) => {
            e.preventDefault()
            let file = e.target.files[0];
            let reader = new window.FileReader();
            reader.readAsArrayBuffer(file); 
            reader.onloadend = () => {
                debugger; 
                setValue(Buffer(reader.result));
            }
        }}
      />
    );
  });


const ProofForm = (props) => (
  <Form
    render={({ formApi }) => (
        <div>
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <Text field="image" placeholder="Image" />
        <FileUpload field="file" id="custom-file"  />
        <button onClick={() => { props.handleSubmit(formApi.getState()) }} type="submit">Submit</button>
        </div>
    )}
  />
);

export default ProofForm;
