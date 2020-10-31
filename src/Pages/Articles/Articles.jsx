import React, { Component } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ArticlesInfo from "./ArticlesInfo.json";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      createdAt: "",
      terms: "",
    };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    this.setState({
      title: ArticlesInfo[id].title,
      author: ArticlesInfo[id].author,
      createdAt: ArticlesInfo[id].createdAt,
      imagePath: ArticlesInfo[id].imagePath
    });
    fetch(ArticlesInfo[id].pathMd)
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
        <div style={{borderColor:"grey",marginLeft:'20%',marginRight:'20%',marginTop:50}}>
          <img src={this.state.imagePath} width={"100%"} />
          <ReactMarkdown source={this.state.terms} />
        </div>
      </div>
    );
  }
}

export default Articles;
