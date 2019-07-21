import React, { Component } from "react";
import "./TShirt.css";
import { FadeIn } from "animate-components";
import API from "../../API";
import { Alert } from "reactstrap";

let user = {};

const registerStates = {
  NOT_REGISTERED: "not_registered",
  IN_PROCESS: "in_process",
  REGISTERED: "registered"
};

class TShirt extends Component {
  constructor(props) {
    super();
    this.state = {
      isRegistered: false,
      alert: {
        color: props.location.message ? "info" : "danger",
        message: props.location.message || "",
        visibility: props.location.message ? true : false
      },
      register_state: registerStates.NOT_REGISTERED,
      formControls: {
        size: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 1
          }
        }
      }
    };
  }
  componentDidMount() {
    user = JSON.parse(localStorage.getItem("user"));
    if (user.t_shirt != null) {
      this.setState({
        isRegistered: true,
        register_state: registerStates.REGISTERED
      });
    } else
      this.setState({
        isRegistered: false,
        register_state: registerStates.NOT_REGISTERED
      });
  }
  changeHandler = event => {
    const name = event.target.name;
    const val = event.target.value;
    console.log(name, val);
    let formControls = Object.assign({}, this.state.formControls);
    formControls[name].value = val;
    formControls[name].valid = true;
    this.setState(
      {
        formControls
      },
      console.log(this.state)
    );
  };

  register = async () => {
    let data = {
      size: this.state.formControls.size.value
    };
    let alert = Object.assign({}, this.state.alert);
    // console.log(data);

    let register_state = registerStates.IN_PROCESS;
    API.post("tshirt/register", data)
      .then(res => {
        console.log(res);
        this.setState({ isRegistered: true });
        user.t_shirt = res.size;
        localStorage.setItem(JSON.stringify("user"));
        console.log("success");
        alert.color = "success";
        alert.message = "Successfully registered";
        register_state = registerStates.REGISTERED;
        this.setState({ register_state });
      })
      .catch(err => {
        alert.color = "danger";

        if (!err.response) alert.message = "Server unreachable";
        else alert.message = err.response.data;
        register_state = registerStates.NOT_REGISTERED;
        this.setState({ register_state });
      });

    this.setState({ alert });
  };

  submitHandler = async e => {
    e.preventDefault();

    if (this.state.formControls.size.valid) {
      // console.log(this.isRegistered)
      if (!this.state.isRegistered) {
        this.setState({ register_state: registerStates.IN_PROCESS });
        await this.register();
      }
    }
  };
  toggleHandler = () => {
    let alert = Object.assign({}, this.state.alert);
    alert.visibility = false;
    alert.message = "";
    // console.log("toggled");
    this.setState({
      alert
    });
  };

  render() {
    return (
      <div>
        <Alert
          className="alert"
          color={this.state.alert.color}
          isOpen={this.state.alert.visibility}
          toggle={this.toggleHandler.bind(this)}
          fade={false}
        >
          {this.state.alert.message}
        </Alert>

        <FadeIn duration="0.3s" timingFunction="ease-in" as="div">
          <div className="container">
            <div className="form">
              <img
                src="https://image.flaticon.com/icons/png/512/106/106020.png"
                alt="tshirt-placeholder"
              />
              <div className="message"> T-Shirts </div>
              <form id="form">
                <select onChange={this.changeHandler} name="size">
                  <option value=""> Select you size </option>
                  <option value="S"> Small </option>
                  <option value="M"> Medium </option>
                  <option value="L"> Large </option>
                </select>
                <button
                  style={{
                    backgroundColor: this.state.isRegistered ? "green" : ""
                  }}
                  onClick={this.submitHandler}
                >
                  {this.state.register_state === registerStates.IN_PROCESS ? (
                    <div className="spinner-border" role="status" />
                  ) : (
                    ""
                  )}{" "}
                  {this.state.isRegistered ? "Registered!!" : "Register"}
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default TShirt;
