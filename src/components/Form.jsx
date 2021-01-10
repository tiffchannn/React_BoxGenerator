import React, {useState} from 'react';

const styling = {
  background: "red"
}

const Form = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(input) // when submitting form, use the onNewColor function prop to pass input up to App
    setInput("")
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group row">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Color: </label>
          <input type="text" className="form-control form-control-sm" id="colFormLabelSm"  name="color" onChange= { handleChange } value={ input }/>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;