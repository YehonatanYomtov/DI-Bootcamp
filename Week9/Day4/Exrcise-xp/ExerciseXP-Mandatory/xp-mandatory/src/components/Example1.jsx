import { Component } from "react";
import { v4 as uniqueId } from "uuid";
import data from "../data2.json";

class Example1 extends Component {
  constructor() {
    super();

    this.state = {
      socialMedias: data.SocialMedias,
    };
  }

  render() {
    return (
      <ul>
        {this.state.socialMedias.map((link) => (
          <li key={uniqueId()}>
            <a href={link} target="_blank">
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Example1;
