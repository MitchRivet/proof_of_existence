import React from "react";
import { Form, Text, TextArea, asField } from "informed";
import ipfs from "../ipfs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

const IpfsFileUpload = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  console.log(fieldState, fieldApi);
  return (
    <div>
      <input
        type="file"
        onChange={e => {
          e.preventDefault();
          let file = e.target.files[0];
          let reader = new window.FileReader();
          reader.readAsArrayBuffer(file);
          reader.onloadend = () => {
            ipfs.files.add(Buffer(reader.result), (err, result) => {
              if (err) {
                console.error(err);
                return;
              }
              setValue(result[0].hash);
            });
          };
        }}
        onBlur={e => {
          setTouched();
          if (onBlur) {
            onBlur(e);
          }
        }}
      />
      {value ? (
        <FontAwesomeIcon icon={faCheck} color={"green"} />
      ) : (
        <span>
          {fieldState.touched ? (
            <div>
              <FontAwesomeIcon icon={faSpinner} spin/>
              <p>
                A green check will appear when your file has finished uploading
                to ipfs
              </p>
            </div>
          ) : null}
        </span>
      )}
    </div>
  );
});

const validate = value => {
  return !value;
};

const ProofForm = props => (
  <Form
    render={({ formApi }) => (
      <div className={"formCard"}>
        <Text field="title" placeholder="Title" />
        <TextArea field="description" placeholder="Description" />
        <IpfsFileUpload field="image" id="custom-file" />
        <button
          onClick={() => {
            props.handleSubmit(formApi.getState());
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    )}
  />
);

export default ProofForm;
