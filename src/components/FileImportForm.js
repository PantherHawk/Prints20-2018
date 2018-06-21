import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'image' ]

class FileInputForm extends Component {
  onSubmit() {
    console.log('submitting');
  }
  render() {
    const {
      fields: { image },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <form onSubmit={handleSubmit(() => this.onSubmit())}>
        <div>
          <label>Avatar</label>
          <div>
            <input type="file" {...image} value={ null } />
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
        </div>
      </form>
    )
  }
}

FileInputForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'file',
  fields
})(FileInputForm);
