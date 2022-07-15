import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "640034311295-4jatimd8e9a01ppqdi97upku514q8ui6.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "streamy",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
