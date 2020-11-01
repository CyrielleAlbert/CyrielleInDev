import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ProjectsInfo from "./Projects/ProjectsInfo.json";

class Projects extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFFDFA" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              color: "#FFFDFA",
              fontFamily: "Times new Roman",
              color: "black",
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
        <div style={{ paddingBottom: 300 }}>
          {Object.keys(ProjectsInfo).map((id) => {
            console.log(id)
            return (
              <NavLink
                to={{
                  pathname: "/Projects/" +  id ,
                }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginRight: "20%",
                    marginLeft: "20%",
                    marginTop: 100,
                    boxShadow: "0px 0px 10px #C4C2C0",
                    marginBottom: 100,
                  }}
                >
                  <div style={{ width: "60%", height: "auto" }}>
                    <img src={ProjectsInfo[id].imagePath} width={"100%"} />
                  </div>
                  <div
                    style={{
                      width: "40%",
                      height: "auto",
                      color: "black",
                      fontSize: 40,
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textAlign: "center",
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor:'white'
                    }}
                  >
                    {ProjectsInfo[id].title}
                  </div>
                </div>
              </NavLink>
            );
          })}
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
