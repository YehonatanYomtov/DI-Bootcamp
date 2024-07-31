import { Component } from "react";
import { v4 as uniqueId } from "uuid";
import data from "../data2.json";

// Did class component just because it asked in the exercise,
// but I will use only functional components starting from tomorrow :)
class Example3 extends Component {
  constructor() {
    super();

    this.state = {
      experiences: data.Experiences,
    };
  }

  render() {
    return (
      <div>
        {this.state.experiences.map((exp) => (
          <div key={uniqueId()}>
            <img src={exp.logo} alt={exp.companyName} />
            <br />
            <a href={exp.url}>{exp.companyName}</a>

            {exp.roles.map((role) => (
              <div key={uniqueId()}>
                <h6>{role.title}</h6>
                <p>
                  {role.startDate} {role.location}
                </p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
