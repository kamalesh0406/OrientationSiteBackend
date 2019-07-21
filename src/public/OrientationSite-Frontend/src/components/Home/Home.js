/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Typist from "react-typist";
import "./Home.css";
import $ from "jquery";
import UncontrolledAlert from "reactstrap/lib/UncontrolledAlert";
import { EventEmitter } from "../events";

var helper = require("../helper");

class Home extends Component {
  constructor(props) {
    super(props);
    if (props.location.logout_message) {
      helper.logout();
    }
    this._ismounted = true;
    this.name = "";
  }
  componentWillMount() {
    if (helper.isAuthenticated()) {
      this.name = JSON.parse(localStorage.getItem("user")).name;
      // console.log("parsed name==??? ", this.name);
    }
  }
  componentDidMount() {
    this._ismounted = true;
    // console.log("lofgeddd");
    EventEmitter.subscribe("logout", this);
    EventEmitter.subscribe("login", this);

    var rect = $("#container")[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $("#container").mousemove(function(e) {
      mouse.moved = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.TweenLite.ticker.addEventListener("tick", function() {
      if (mouse.moved) {
        parallaxIt(".slide", -20);
      }
      mouse.moved = false;
    });

    function parallaxIt(target, movement) {
      window.TweenMax.to(target, 0.3, {
        x: ((mouse.x - rect.width / 2) / rect.width) * movement,
        y: ((mouse.y - rect.height / 2) / rect.height) * movement
      });
    }
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  render() {
    return (
      <div ref={el => (this.instance = el)} className="homepage">
        {this.props.location.message ? (
          <UncontrolledAlert color="info">
            {this.props.location.message}
          </UncontrolledAlert>
        ) : (
          ""
        )}
        {/* <div className="logo"> */}
        {/* <img src="/images/White.png" alt="foreground" className="logo" width={100} /> */}
        {/* </div> */}
        <div id="container">
          {this._ismounted ? (
            <div className="BackText mx-auto">
              <Typist
                startDelay={400}
                cursor={{
                  show: true,
                  blink: true,
                  element: "*",
                  hideWhenDone: true
                }}
              >
                {this.name !== "" ? (
                  <span>
                    {" "}
                    Hello,{" "}
                    <span>
                      <b>
                        {this.name}.<br />{" "}
                      </b>
                    </span>
                  </span>
                ) : (
                  ""
                )}
                <span>
                  {" "}
                  Welcome to{" "}
                  <span>
                    <b>NITT!</b>
                  </span>
                </span>
                <Typist.Backspace count={6} delay={1000} />
                <span>
                  <b> Your Dreams!</b>
                </span>
                {/* <Typist.Backspace count={1} delay={1} /> */}
              </Typist>
            </div>
          ) : (
            ""
          )}
          <div className="slide">
            <img
              src="images/orion-f.png"
              alt="foreground"
              className="foreground-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
