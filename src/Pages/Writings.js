import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Bots from "./Projects/Bots.png";
import Robot from "./Projects/Robot.png";
import Useby from "./Projects/useby.png";
import Startuplife from "./../Image idées/StartupLife.jpg";
class Writings extends Component {
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
        <NavLink to="/Blog/StartupLife" style={{textDecoration:'none'}}>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginRight: "20%",
              marginLeft: "20%",
              marginTop: 200,
              boxShadow: "0px 0px 10px #C4C2C0",
              marginBottom: 200,
            }}
          >
            <div style={{ width: "60%", height: "auto" }}>
              <img src={Startuplife} width={"100%"} />
            </div>
            <div
              style={{
                width: "40%",
                height: "auto",
                fontFamily: "Times New Roman",
                fontSize: 30,
                color: "#004C52",
                fontWeight: "bold",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFDFA",
                marginTop: 20,
              }}
            >
              How working in a young Startup made me gain the equivalent of 5
              years of experience.
              <div
                style={{
                  color: "grey",
                  fontSize: 15,
                  fontFamily: "Montserrat",
                  textAlign: "right",
                  marginTop: 20,
                }}
              >
                by Cyrielle Albert,{" "}
                <div style={{ fontSize: 10 }}>September 20th, 2020</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Writings;
