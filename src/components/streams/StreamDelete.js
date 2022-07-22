import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDismiss = () => {
    history.push("/");
  };

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button onClick={this.onDismiss} className="ui button">
          Cancel
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
