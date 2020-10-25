import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import StartupLifeArticle from "./StartupLifeArticle.md"

class StartupLife extends Component {
  constructor(props) {
    super(props);
    this.setState({
      title: props.title,
      author: props.author,
      createdAt: props.createdAt,
      terms: "",
    });
  }
  componentDidMount() {
    fetch(StartupLifeArticle)
      .then((response) => response.text())
      .then((text) => {
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
        <div>{this.state.title}</div>
        <div>
          <ReactMarkdown source={this.state.terms} />
        </div>
      </div>
    );
  }
}

export default StartupLife;
