import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ArticlesInfo from "./Articles/ArticlesInfo.json";

class Writings extends Component {
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
        <div style={{ paddingBottom: 300 }}>
          {Object.keys(ArticlesInfo).map((id) => {
            if (Date.now() > new Date(ArticlesInfo[id].createdAt)) {
              return (
                <NavLink
                  to={{
                    pathname: "/Blog/"+{id},
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
                      backgroundColor: "#FFFDFA",
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
