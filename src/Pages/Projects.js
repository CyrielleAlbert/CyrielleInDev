import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Bots from "./Projects/Bots.png";
import Robot from "./Projects/Robot.png";
import Useby from "./Projects/useby.png";

class Projects extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFFDFA" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              color: "#FFFDFA",
              fontFamily: "Times new Roman",
              color: "#004C52",
              fontSize: 80,
              textAlign: "center",
            }}
          >
            Cyrielle Albert
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: 30,
                color: "#000000",
              }}
            >
              Software Engineer | Music passionate | Home projects enthusiast
            </div>
          </div>
        </NavLink>
        <div
          style={{
            fontSize: 20,
            fontFamily: "Montserrat",
            paddingLeft: "5%",
            paddingTop: 100,
          }}
        >
          <p style={{ fontSize: 40 }}>
            During my sparetime, I love...<br></br>
            <p style={{ fontSize: 30 }}>
              ...working on my personal projects.<br></br>
              ...creating things that can make my life easier.<br></br>
              ...coding and building electronics devices.
            </p>
            <p style={{ marginTop: 50, marginBottom: 50, textAlign: "center" }}>
              ↓ Today, I am sharing it with you! 👐 ↓
            </p>
          </p>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", paddingBottom: 100 }}
        >
          
            <div
              style={{
                borderRadius: 12.5,
                width: "40%",
                height: "auto",
                marginLeft: "5%",
                marginRight: "5%",
                backgroundColor: "white",
                boxShadow: " 3px 3px 3px #C4C2C0",
              }}
            ><NavLink to="/Project-TelegramBot" style={{ textDecoration: "none" }}>
              <img
                src={Bots}
                style={{
                  borderRadius: 12.5,
                  width: "100%",
                  position: "relative",
                }}
              /></NavLink>
            </div>
          
          <div
            style={{
              borderRadius: 12.5,
              width: "40%",
              height: "auto",
              marginLeft: "5%",
              marginRight: "5%",
              backgroundColor: "white",
              boxShadow: " 3px 3px 3px #C4C2C0",
            }}
          >
            <img
              src={Robot}
              style={{
                borderRadius: 12.5,
                width: "100%",
                position: "relative",
              }}
            />
          </div>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", paddingBottom: 100 }}
        >
          <div
            style={{
              borderRadius: 12.5,
              width: "40%",
              height: "auto",
              marginLeft: "5%",
              marginRight: "5%",
              backgroundColor: "white",
              boxShadow: " 3px 3px 3px #C4C2C0",
            }}
          >
            <img
              src={Useby}
              style={{
                borderRadius: 12.5,
                width: "100%",
                position: "relative",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
