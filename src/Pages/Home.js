import React, { Component } from "react";
import linkedinPage from "./LinkedinPage.png";
import projects from "./projects.jpg";
import writings from "./writings.jpg";
import IG from "./Logo/IG.png";
import github from "./Logo/Github.png";
import twitter from "./Logo/Twitter_Logo_Blue.png";
import LinkedinLogo from "./Logo/LI-In-Bug.png";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
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
    if (this.state.screenWidth > 1400) {
      return (
        <div>
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
              zIndex: 999,
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
              to="/blog"
              style={{ width: "25%", textDecoration: "none", color: "black" }}
            >
              📝Blog
            </NavLink>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F5F5F5",
              paddingTop: 70,
              paddingBottom: 200,
            }}
          >
            <img src={"/Images/cyriOpenBCI.png"} width={"50%"} />
            <div
              style={{
                backgroundColor: "white",
                position: "absolute",
                zIndex: 3,
                top: "25%",
                right: "10%",
                width: "50%",
                font: "Montserrat",
                fontSize: 20,
                padding: 20,
                paddingBottom: 50,
                textAlign: "justify",
                filter: "drop-shadow(0px 4px 78px rgba(0, 0, 0, 0.25))",
              }}
            >
              <p style={{ fontSize: 30 }}>Hi, there! 🖖</p>
              <p>
                I am an electronics & software engineer and I am passionate with
                new Technologies. I worked on Neurosciences and developed
                neurofeedback algorithms for sleep, using EEG headsets.{" "}
                <br></br>
                <br></br>
                {
                  "I am working in a men world and I am not afraid to show that women can also do the job."
                }
                <br></br>
                <br></br>
                {
                  "I was more of a Python fan few months ago, working on Data sciences & signal processing but I’ve recently been attracted by web & app development and started developing in Javascript with ReactJS, NodeJS & React Native."
                }
                <br></br>
                <br></br>
                Don't forget to check out my{" "}
                <NavLink to="/Projects">projects</NavLink> and my{" "}
                <NavLink to="/blog">blog</NavLink>!
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', textAlign: 'center', padding: 20, font: 'Montserrat', fontSize: 30 }}> You asked for it on Instagram, here is the video of how I (we) fixed the screen.😊
            <ReactPlayer url="https://www.youtube.com/watch?v=r2q_NygHt4o" style={{ width: '50%', marginLeft: '25%', marginTop: 20, marginBottom: 20, }} />
          </div>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              flexDirection: "row",
              display: "flex",
              paddingBottom: 50,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.instagram.com/al_rielle/"
                style={{ width: "5%", padding: 15 }}
              >
                <img src={IG} style={{ width: "50%" }} />
              </a>
              <a
                href="https://twitter.com/Cyri_official"
                style={{ width: "5%", padding: 15 }}
              >
                <img src={twitter} style={{ width: "50%" }} />
              </a>
              <a
                href="https://github.com/CyrielleAlbert"
                style={{ width: "5%", padding: 15 }}
              >
                <img src={github} style={{ width: "50%" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/cyriellealbert/"
                style={{ width: "5%", padding: 15 }}
              >
                <img src={LinkedinLogo} style={{ width: "50%" }} />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "grey",
              paddingBottom: 50,
              backgroundColor: "#F5F5F5",
            }}
          >
            {" "}
            © Cyrielle Albert 2020 All rights reserved{" "}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: "#F5F5F5", display: "flex", flexDirection: 'column' }}>
          <div
            style={{
              padding: 10,
              font: "Montserrat",
              fontSize: 30,
              color: "black",
              width: "100%",
              minHeight: "6vh",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              letterSpacing: 5,
              position: "fixed",
              zIndex: 999,
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
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F5F5F5",
              paddingTop: 70,
              paddingBottom: 50,
            }}
          >
            <img src={"/Images/cyriOpenBCI.png"} width={"100%"} />
            <div
              style={{
                margin: 0,
                backgroundColor: "white",
                width: "90%",
                font: "Montserrat",
                fontSize: 20,
                padding: 20,
                paddingBottom: 20,
                textAlign: "justify",
                filter: "drop-shadow(0px 4px 78px rgba(0, 0, 0, 0.25))",
              }}
            >
              <p style={{ fontSize: 30 }}>Hi, there! 🖖</p>
              <p>
                I am an electronics & software engineer and I am passionate with
                new Technologies. I worked on Neurosciences and developed
                neurofeedback algorithms for sleep, using EEG headsets.{" "}
                <br></br>
                <br></br>
                {
                  "I am working in a men world and I am not afraid to show that women can also do the job."
                }
                <br></br>
                <br></br>
                {
                  "I was more of a Python fan few months ago, working on Data sciences & signal processing but I’ve recently been attracted by web & app development and started developing in Javascript with ReactJS, NodeJS & React Native."
                }
                <br></br>
                <br></br>
                Don't forget to check out my{" "}
                <NavLink to="/Projects">projects</NavLink> and my{" "}
                <NavLink to="/Blog">blog</NavLink>!
              </p>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              marginLeft: "30%",
              backgroundColor: "white",
              textAlign: "center",
              padding: 10,
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              borderRadius: 12.5,
              fontSize: 20
            }}
          >
            <NavLink
              to="/Projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              🧠See the projects
            </NavLink>
          </div>
          <div style={{
            width: "40%",
            backgroundColor: "white",
            textAlign: "center",
            margin: 20,
            marginLeft: "30%",
            padding: 10,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: 12.5,
            fontSize: 20
          }}>
            <NavLink
              to="/Blog"
              style={{ textDecoration: "none", color: "black" }}
            >
              📝See the blog
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "grey",
              paddingBottom: 50,
              backgroundColor: "#F5F5F5",
            }}
          >
            {" "}
            © Cyrielle Albert 2020 All rights reserved{" "}
          </div>
        </div>
      );
    }
  }
}

export default Home;
