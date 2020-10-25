import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NewsMaster from "./3.png";
import MasterChef from "./4.png";

class TelegramBot extends Component {
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
        <div
          style={{
            paddingTop:50,
            fontSize: 30,
            fontFamily: "Montserrat",
            paddingRight: 5,
            paddingLeft: 5,
            marginTop: 50,
            paddingBottom:100,

          }}
        >
          About the project:
          <div style={{fontSize:20,paddingTop:20}}>
            <div>
              The telegram bots are part of a project that I called "One weekend
              - One project".
            </div>
            <div>
              I started this project during the Corona lockdown as I needed to
              find something to do during the weekend.
            </div>
            <div>
              The goal was to work every weekend on a new project and create
              kind of a MVP in two days.
            </div>
            <div>
              I had in mind to do it for one month... but I actually did it only
              for two weeks.
            </div>
            <div>For this project, I used Python and the Telegram library.</div>
            <div>
              (You can find the Github project{" "}
              <a
                href={
                  "https://github.com/CyrielleAlbert/one_weekend_one_project"
                }
              >
                here
              </a>
              .)
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#C1564C",
            height: 350,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div style={{ width: "25%" }}>
            <img src={NewsMaster} style={{ height: "100%" }} />
          </div>
          <div
            style={{
              color: "#FFFDFA",
              width: "75%",
              fontFamily: "Montserrat",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            <div style={{ fontSize: 35, paddingBottom: 10 }}>
              MasterChef Bot
            </div>
            <div style={{ fontSize: 20, textAlign: "left" }}>
              <div>What is it?</div>
              <div style={{ fontSize: 15, paddingBottom: 20 }}>
                It's a bot that can give you the 10 last articles for a special
                country or keyword.
              </div>
              <div>Why this project?</div>
              <div style={{ fontSize: 15, paddingBottom: 20 }}>
                I was living in Norway and I usually used Google News to check
                the news in France. So I wanted to be able to choose which
                country.
              </div>
              <div>What I learned:</div>
              <ul style={{ fontSize: 15, paddingBottom: 20 }}>
                <li>Requests</li>
                <li>How to build a telegram bot</li>
                <li>How to use the News API</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#4F6B71",
            height: 350,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div style={{ width: "25%" }}>
            <img src={MasterChef} style={{ height: "100%" }} />
          </div>
          <div
            style={{
              color: "#FFFDFA",
              width: "75%",
              fontFamily: "Montserrat",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            <div style={{ fontSize: 35, paddingBottom: 10 }}>
              News Master Bot
            </div>
            <div style={{ fontSize: 20, textAlign: "left" }}>
              <div>What is it?</div>
              <div style={{ fontSize: 15, paddingBottom: 20 }}>
                It's a bot that gives you the 5 random recipes. You can also
                search for a special dish.
              </div>
              <div>Why this project?</div>
              <div style={{ fontSize: 15, paddingBottom: 20 }}>
                I used to do a weekly meal planning and I really need diversity
                in my dished. So I decided to create that bot to give me ideas.
              </div>
              <div>What I learned:</div>
              <ul style={{ fontSize: 15, paddingBottom: 20 }}>
                <li>Telegram Bot</li>
                <li>Food API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TelegramBot;
