import React, { Component } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ProjectsInfo from "./ProjectsInfo.json";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      author: "",
      createdAt: "",
      terms: "",
      screenWidth: window.innerWidth
    };
  }
  updateScreenSize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.setState({
      id: id,
      title: ProjectsInfo[id].title,
      imagePath: ProjectsInfo[id].imagePath,
    });
    fetch(ProjectsInfo[id].pathMd)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
    
    window.addEventListener("resize", this.updateScreenSize);
  }

  
  render() {
    if (this.state.screenWidth > 800) {
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
              top: 0,
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
              to="/projects"
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
          <div style={{ backgroundColor: "#F5F5F5", padding: 100 }}>
            <div className="Project"
              style={{
                marginTop: 100,
                padding: 10,
                backgroundColor: "white",
                boxShadow: " 10px 10px 10px 5px #C4C2C0",
                marginLeft: "20%",
                marginRight: "20%",
                textAlign: "justify",
              }}
            >
              <img src={this.state.imagePath} width={"100%"} />
              <ReactMarkdown source={this.state.terms} />
            </div>
            <div
              style={{
                fontSize: 20,
                fontFamily: "Montserrat",
                marginTop: 50,
                marginLeft: "20%",
                fontWeight: "bold",
              }}
            > 
              You want to support me? Just share my project. 😊
            </div>
            <div
              style={{
                marginTop: 25,
                display: "flex",
                flexDirection: "row",
                height: 100,
                paddingBottom: 100,
              }}
            >
              <div
                style={{
                  width: "12%",
                  marginLeft: "20%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <FacebookShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  quote={"Cyrielle just shared a new project."}
                  hashtag="#WomenInTech"
                >
                  <FacebookIcon round></FacebookIcon>
                </FacebookShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <LinkedinShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                  summary={"Cyrielle just shared a new project."}
                  source="Cyriellealbert.fr"
                >
                  <LinkedinIcon round></LinkedinIcon>
                </LinkedinShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <RedditShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                >
                  <RedditIcon round></RedditIcon>
                </RedditShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TelegramShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                >
                  <TelegramIcon round></TelegramIcon>
                </TelegramShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  marginRight: "20%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TwitterShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"@Cyri_official: " + this.state.title}
                  hashtags={["WomenInTech"]}
                  related={["@Cyri_official"]}
                >
                  <TwitterIcon round></TwitterIcon>
                </TwitterShareButton>
              </div>
            </div>
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
    }else{
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
              top: 0,
              boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              👩🏻‍💻Cyrielle Albert
            </NavLink>
          </div>
          <div style={{ backgroundColor: "#F5F5F5", paddingTop: 100, paddingBottom:100,display:'grid' }}>
            <div className="Project"
              style={{
                marginTop: 100,
                width:'100%',
                padding:10,
                backgroundColor: "white",
                textAlign: "justify",
                position: "relative",
              }}
            >
              <img src={this.state.imagePath} width={"100%"} />
              <ReactMarkdown source={this.state.terms} skipHtml={'false'}/>
            </div>
            <div
              style={{
                fontSize: 20,
                fontFamily: "Montserrat",
                marginTop: 50,
                fontWeight: "bold",
              }}
            >
              You want to support me? Just share my project. 😊
            </div>
            <div
              style={{
                marginTop: 25,
                display: "flex",
                flexDirection: "row",
                height: 100,
                paddingBottom: 100,
              }}
            >
              <div
                style={{
                  width: "12%",
                  marginLeft: "20%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <FacebookShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  quote={"Cyrielle posted a new project."}
                  hashtag="#WomenInTech"
                >
                  <FacebookIcon round></FacebookIcon>
                </FacebookShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <LinkedinShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                  summary={"Cyrielle posted a new project."}
                  source="Cyriellealbert.fr"
                >
                  <LinkedinIcon round style={{width:'100%'}}></LinkedinIcon>
                </LinkedinShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <RedditShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                >
                  <RedditIcon round></RedditIcon>
                </RedditShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TelegramShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                >
                  <TelegramIcon round></TelegramIcon>
                </TelegramShareButton>
              </div>
              <div
                style={{
                  width: "12%",
                  marginRight: "20%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TwitterShareButton
                  url={"Cyriellealbert.fr/projects/" + this.state.id}
                  title={"Cyrielle Albert: " + this.state.title}
                  hashtags={["#WomenInTech"]}
                  related={["@Cyri_official"]}
                >
                  <TwitterIcon round></TwitterIcon>
                </TwitterShareButton>
              </div>
            </div>
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
}

export default Project;