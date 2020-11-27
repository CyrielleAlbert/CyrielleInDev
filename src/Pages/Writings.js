import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ArticlesInfo from "./Articles/ArticlesInfo.json";

class Writings extends Component {
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
            boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.25)",
          }}
        >
          <NavLink
            to="/"
            style={{
              width: "50%",
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            👩🏻‍💻Cyrielle Albert
          </NavLink>
          <NavLink
            to="/Projects"
            style={{ width: "25%", textDecoration: "none", color: "black" }}
          >
            🧠Projects
          </NavLink>
          <NavLink
            to="/Blog"
            style={{ width: "25%", textDecoration: "none", color: "black" }}
          >
            📝Blog
          </NavLink>
        </div>
        <div
          style={{
            font: "Montserrat",
            fontSize: 30,
            paddingTop: 100,
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          {"Welcome on my blog! 🤓"}{" "}
        </div>
        <div
          style={{
            font: "Montserrat",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {'As we say: Sharing is caring!'}{" "}
        </div>
        <div style={{ paddingBottom: 300, paddingTop: 20 }}>
          {Object.keys(ArticlesInfo).map((id) => {
            if (Date.now() > new Date(ArticlesInfo[id].createdAt)) {
              return (
                <NavLink
                  to={{
                    pathname: "/Blog/" + { id },
                  }}
                  style={{ textDecoration: "none" }}
                >
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
                      <img src={ArticlesInfo[id].imagePath} width={"100%"} />
                    </div>
                    <div
                      style={{
                        width: "40%",
                        height: "auto",
                        fontFamily: "Times New Roman",
                        fontSize: 30,
                        paddingRight: 15,
                        paddingLeft: 15,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "justify",
                        backgroundColor: "#FFFDFA",
                        marginTop: 20,
                      }}
                    >
                      {ArticlesInfo[id].title}
                      <div
                        style={{
                          color: "grey",
                          fontSize: 15,
                          fontFamily: "Montserrat",
                          textAlign: "center",
                          marginTop: 20,
                        }}
                      >
                        by {ArticlesInfo[id].author}{" "}
                        <div style={{ fontSize: 10 }}>
                          {ArticlesInfo[id].createdAt}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            } else {
              return (
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
                    <img src={ArticlesInfo[id].imagePath} width={"100%"} />
                  </div>
                  <div
                    style={{
                      width: "40%",
                      height: "auto",
                      fontFamily: "Times New Roman",
                      fontSize: 30,
                      paddingRight: 15,
                      paddingLeft: 15,
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "justify",
                      backgroundColor: "#F5F5F5",
                      marginTop: 20,
                    }}
                  >
                    {"New article coming on " + ArticlesInfo[id].createdAt}
                  </div>
                </div>
              );
            }
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

export default Writings;
