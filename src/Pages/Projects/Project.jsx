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
      terms: "",
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    console.log(id)
    this.setState({
      id: id,
      title: ProjectsInfo[id].title,
      imagePath: ProjectsInfo[id].imagePath,
    });
    fetch(ProjectsInfo[id].pathMd)
      .then((response) => response.text())
      .then((text) => {
        console.log("data fetched");
        this.setState({ terms: text });
      });
  }
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
            padding: 10,
            backgroundColor: "white",
            boxShadow: " 10px 10px 10px 5px #C4C2C0",
            marginLeft: "20%",
            marginRight: "20%",
            marginTop: 50,
            textAlign:'justify'
          }}
        >
          <img src={this.state.imagePath} width={"100%"} />
          <ReactMarkdown source={this.state.terms} />
        </div>
        <div style={{fontSize: 20, fontFamily:'Montserrat',marginTop:50,marginLeft:'20%', fontWeight:'bold'}}>
          You want to support me? Just share my project.  😊  
        </div>
        <div
          style={{
            marginTop:25,
            display: "flex",
            flexDirection: "row",
            height: 100,
            paddingBottom:100
          }}
        >
          <div style={{ width: "12%", marginLeft: "20%", justifyContent:'center', display:'flex' }}>
            <FacebookShareButton
              url={"Cyriellealbert.fr/Projects/" + this.state.id}
              quote={"Cyrielle posted a new project."}
              hashtag="#WomenInTech"
            >
              <FacebookIcon round></FacebookIcon>
            </FacebookShareButton>
          </div>
          <div style={{ width: "12%", justifyContent:'center', display:'flex' }}>
            <LinkedinShareButton
              url={"Cyriellealbert.fr/Projects/" + this.state.id}
              title={"Cyrielle Albert: " + this.state.title}
              summary={"Cyrielle posted a new project."}
              source="Cyriellealbert.fr"
            >
              <LinkedinIcon round></LinkedinIcon>
            </LinkedinShareButton>
          </div>
          <div style={{ width: "12%", justifyContent:'center', display:'flex' }}>
            <RedditShareButton
              url={"Cyriellealbert.fr/Projects/" + this.state.id}
              title={"Cyrielle Albert: " + this.state.title}
            >
              <RedditIcon round></RedditIcon>
            </RedditShareButton>
          </div>
          <div style={{ width: "12%", justifyContent:'center', display:'flex' }}>
            <TelegramShareButton
              url={"Cyriellealbert.fr/Projects/" + this.state.id}
              title={"Cyrielle Albert: " + this.state.title}
            >
              <TelegramIcon round></TelegramIcon>
            </TelegramShareButton>
          </div>
          <div style={{ width: "12%", marginRight: "20%", justifyContent:'center', display:'flex' }}>
            <TwitterShareButton
              url={"Cyriellealbert.fr/Projects/" + this.state.id}
              title={"Cyrielle Albert: " + this.state.title}
              hashtags={["#WomenInTech"]}
              related={["@Cyri_official"]}
            >
              <TwitterIcon round></TwitterIcon>
            </TwitterShareButton>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:'center', color:'grey',paddingBottom:50}}> © Cyrielle Albert 2020 All rights reserved </div>
      </div>
    );
  }
}

export default Project;
