import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderImput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderImput} />
        <Field name="description" component={this.renderImput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
