import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./404.css";

class NotFound extends Component {
  componentDidMount = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/404.js";
    script.async = true;
    this.instance.appendChild(script);
    document.body.appendChild(script);
  };
  render() {
    return (
      <div ref={nf => (this.instance = nf)} className="notfound">
        this is a 404
      </div>
    );
  }
}

export default NotFound;
