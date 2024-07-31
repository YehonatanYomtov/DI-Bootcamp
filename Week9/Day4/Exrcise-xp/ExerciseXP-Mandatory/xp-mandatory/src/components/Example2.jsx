import { Component } from "react";
import { v4 as uniqueId } from "uuid";
import data from "../data2.json";

class Example2 extends Component {
  constructor() {
    super();

    this.state = {
      skills: data.Skills,
    };
  }

  render() {
    return (
      <div>
        {this.state.skills.map((skill) => (
          <div key={uniqueId()}>
            <h3>{skill.Area}</h3>
            {skill.SkillSet.map((set) => (
              <p key={uniqueId()}>{set.Name}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
