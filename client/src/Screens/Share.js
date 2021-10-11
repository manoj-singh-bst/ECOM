import React, { Component } from "react";

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

export default class Share extends Component {
  render() {
    const shareUrl = "https://www.facebook.com";
    return (
      <div
        style={{
          background: "#0000",
          height: "10vh",
          width: "100%",
        }}
      >
        <h1></h1>

        <FacebookShareButton
          url={shareUrl}
          quote={"Title:"}
          hashtag={"#portfolio..."}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          style={{ marginLeft: "1%" }}
          url={shareUrl}
          quote={"Title: "}
          hashtag={"#portfolio..."}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <TwitterShareButton
          style={{ marginLeft: "1%" }}
          url={shareUrl}
          quote={"Title: "}
          hashtag={"#portfolio..."}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <TelegramShareButton
          style={{ marginLeft: "1%" }}
          url={shareUrl}
          quote={"Title: "}
          hashtag={"#portfolio..."}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    );
  }
}
