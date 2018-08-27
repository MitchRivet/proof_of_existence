import React from "react";
import { Form, Text, asField } from "informed";
import ipfs from '../ipfs'

const IpfsFileUpload = asField(({ fieldState, fieldApi, ...props }) => {
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    e.preventDefault()
                    let file = e.target.files[0];
                    let reader = new window.FileReader();
                    reader.readAsArrayBuffer(file); 
                    reader.onloadend = () => {
                        ipfs.files.add(Buffer(reader.result), (err, result) => {
                            if(err) {
                                console.error(err);
                                return 
                            } 
                            setValue(result[0].hash)
                        })
                    }
                }}
            />
            {value ? (
                <p>uploaded to ipfs</p>
            ): (
                <p>you will be notified when your image is uploaded to ipfs</p>
            )}
      </div>
    );
  });

const validate = value => {
return !value || value.length < 5 ? 'Field must be at least five characters' : null;
}
  

const ProofForm = (props) => (
  <Form
    render={({ formApi }) => (
        <div className={"formCard"}>
        <Text field="title" placeholder="Title" /> 
        <Text field="description" placeholder="Description" />
        <IpfsFileUpload field="image" id="custom-file"  />
        <button onClick={() => { props.handleSubmit(formApi.getState()) }} type="submit">Submit</button>
        </div>
    )}
  />
);

export default ProofForm;
