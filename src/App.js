import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Parallax from "parallax-js";

class App extends Component {
  componentDidMount() {
    this.parallaxInstance = new Parallax(this.scene);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        data-relative-input="true"
        id="scene"
        ref={r => {
          if (r) {
            this.scene = r;
          }
        }}
      >
        <div data-depth="0.3" pointer-events="all">
          <img
            src={"/logo.svg"}
            alt="logo"
            style={{ height: 120, maxWidth: 360 }}
          />
          <div style={{ height: 100 }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <img
              src={"/me.jpg"}
              alt="logo"
              style={{ height: 120, borderRadius: "50%" }}
            />
            <h2>Mag. Tarik Huber</h2>

            <div style={{ padding: 5, pointerEvents: "all" }}>
              <SocialIcon
                network="twitter"
                target="_blank"
                style={{ margin: 5 }}
                url={"https://twitter.com/TarikHuber"}
              />
              <SocialIcon
                network="github"
                target="_blank"
                style={{ margin: 5 }}
                url={"https://github.com/TarikHuber"}
              />
              <SocialIcon
                network="facebook"
                target="_blank"
                style={{ margin: 5 }}
                url={"https://www.facebook.com/TarikHuber"}
              />
              <SocialIcon
                network="linkedin"
                target="_blank"
                style={{ margin: 5 }}
                url={"https://www.linkedin.com/in/tarik-huber-342127128/"}
              />
              <SocialIcon
                network="medium"
                target="_blank"
                style={{ margin: 5 }}
                url={"https://medium.com/@tarikhuber"}
              />
            </div>

            <SocialIcon
              target="_blank"
              network="email"
              style={{ margin: 5 }}
              url={"mailto:huber.tarik@ecronix.com"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*


        <div data-depth="0.3">
          <img
            src={"/me.jpg"}
            alt="logo"
            style={{ height: 120, borderRadius: "50%" }}
          />
          <h2>Mag. Tarik Huber</h2>
          <br />
          <div style={{ padding: 5 }}>
            <SocialIcon
              network="twitter"
              style={{ margin: 5 }}
              url={"https://twitter.com/TarikHuber"}
            />
            <SocialIcon
              network="github"
              style={{ margin: 5 }}
              url={"https://github.com/TarikHuber"}
            />
            <SocialIcon
              network="facebook"
              style={{ margin: 5 }}
              url={"https://www.facebook.com/TarikHuber"}
            />
            <SocialIcon
              network="linkedin"
              style={{ margin: 5 }}
              url={"https://www.linkedin.com/in/tarik-huber-342127128/"}
            />
            <SocialIcon
              network="medium"
              style={{ margin: 5 }}
              url={"https://medium.com/@tarikhuber"}
            />
          </div>

          <SocialIcon
            network="email"
            style={{ margin: 5 }}
            url={"mailto:huber.tarik@ecronix.com"}
          />
        </div>

*/
