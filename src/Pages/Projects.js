import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import ProjectsInfo from "./Projects/ProjectsInfo.json";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      show: {},
    };
  }
  updateScreenSize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateScreenSize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#F5F5F5" }}>
          <div
            style={{
              padding: 10,
              font: "Montserrat",
              fontSize: 30,
              color: "black",
              width: "100%",
              minHeight: "6vh",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#F5F5F5",
              transition: "all 0.7s ease-in",
              letterSpacing: 5,
              position: "fixed",
              zIndex:999,
              boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <NavLink
              to="/"
              style={{
                width: this.state.screenWidth>800? "50%":"100%",
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              👩🏻‍💻Cyrielle Albert
            </NavLink>
            {this.state.screenWidth >800 && (
            <NavLink
              to="/Projects"
              style={{ width: "25%", textDecoration: "none", color: "black" }}
            >
              🧠Projects
            </NavLink>)}
            {this.state.screenWidth >800 && (
            <NavLink
              to="/blog"
              style={{ width: "25%", textDecoration: "none", color: "black" }}
            >
              📝Blog
            </NavLink>)}
          </div>
        <div
          style={{
            fontSize: 20,
            fontFamily: "Montserrat",
            paddingLeft: "15%",
            paddingRight: "15%",
            textAlign: "justify",
            paddingTop: 100,
          }}
        >
          <p style={{ fontSize: 30 }}>
            During my sparetime, I love...<br></br>
            <p style={{ fontSize: 20 }}>
              ...working on my personal projects.<br></br>
              ...creating things that can make my life easier.<br></br>
              ...coding and building electronics devices.
            </p>
            <p style={{ marginTop: 50, marginBottom: 50, textAlign: "center" }}>
              ↓ Today, I am sharing it with you! 👐 ↓
            </p>
          </p>
        </div>
        {this.state.screenWidth > 900 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Object.keys(ProjectsInfo).map((id) => {
              return (
                <div
                  onMouseEnter={() => {
                    this.setState({ show: { [id]: true } });
                  }}
                  onMouseLeave={() => {
                    this.setState({ show: { [id]: false } });
                  }}
                  style={{
                    marginBottom: 50,
                    marginLeft: 10,
                    marginRight: 10,
                    flex: "1 1 30%",
                    textAlign: "center",
                    position: "relative",
                    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    src={ProjectsInfo[id].imagePath}
                    width={"100%"}
                    style={{
                      transition: "filter 0.3s",
                      filter: this.state.show[id] ? "blur(4px)" : "blur(0)",
                    }}
                  />
                  {this.state.show[id] && (
                    <div
                      style={{
                        width: "100%",
                        opacity: "100%",
                        position: "absolute",
                        zIndex:3,
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <NavLink
                        to={{
                          pathname: "/Projects/" + id,
                        }}
                        style={{
                          textDecoration: "none",
                          padding: 5,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            height: "60%",
                            width: "60%",
                            marginTop: "10%",
                            color: "black",
                            backgroundColor: "white",
                            marginLeft: "20%",
                            padding: 15,
                            font: "Montserrat",
                            fontSize: 30,
                            fontWeight: "bold",
                            boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
                            alignContent: "center",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {ProjectsInfo[id].title}
                        </div>
                      </NavLink>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {this.state.screenWidth <= 900 && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Object.keys(ProjectsInfo).map((id) => {
              return (
                <div
                  style={{
                    marginBottom: 50,
                    marginLeft: 10,
                    marginRight: 10,
                    width: "60%",
                    marginLeft: "20%",
                    textAlign: "center",
                    position: "relative",
                    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    src={ProjectsInfo[id].imagePath}
                    width={"100%"}
                    style={{
                      transition: "filter 0.3s",
                      filter: "blur(4px)",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      opacity: "100%",
                      position: "absolute",
                      zIndex:3,
                      top: 0,
                      right: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <NavLink
                      to={{
                        pathname: "/Projects/" + id,
                      }}
                      style={{
                        textDecoration: "none",
                        padding: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: "60%",
                          width: "60%",
                          marginTop: "10%",
                          color: "black",
                          backgroundColor: "white",
                          marginLeft: "20%",
                          padding: 15,
                          font: "Montserrat",
                          fontSize: 30,
                          fontWeight: "bold",
                          boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
                          alignContent: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {ProjectsInfo[id].title}
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div
          style={{
            color: "black",
            textAlign: "center",
            opacity: 0.1,
            fontSize: 35,
            marginBottom: 50,
          }}
        >
          More to come...
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "grey",
            paddingBottom: 50,
          }}
        >
          {" "}
          © Cyrielle Albert 2020 All rights reserved{" "}
        </div>
      </div>
    );
  }
}

export default Projects;
