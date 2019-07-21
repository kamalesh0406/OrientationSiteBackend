import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "./Calendar.css";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import React, { Component } from "react";
// import events from "./events";
import Card from "react-bootstrap/Card";
import { FadeIn } from "animate-components";
import axios from "axios";
import API from "../../API";
moment.locale("en-GB");

BigCalendar.momentLocalizer(moment);

const calendarBody = {
  padding: "2%",
  paddingBottom: "2%",
  backgroundColor: "#FFFFFF",
  fontFamily: "Open Sans, Calibri, Arial, sans-serif",

  borderRadius: "5px",
  webkitBorderradius: "5px"
};
const now = new Date();

class Calendars extends Component {
  constructor() {
    super();
    this.state = {
      cal_events: []
    };
  }
  componentDidMount() {
    var thisVar = this;

    API.get("events/details").then(function(response) {
      thisVar.setState({
        cal_events: response.data
      });
    });
  }
  render() {
    return (
      <FadeIn duration="0.3s" timingFunction="ease-in" as="div">
        <div className="header">
          <p className="heading">CALENDAR</p>
        </div>
        <div className="container-calendar">
          <Card>
            <Card.Body style={calendarBody}>
              <div style={{ height: "500pt" }}>
                <BigCalendar
                  popup
                  events={this.state.cal_events}
                  defaultDate={now}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </FadeIn>
    );
  }
}
export default Calendars;
