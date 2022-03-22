import React from "react";
import "./Enlist.css"
export default class Enlist extends React.Component {
  render() {
    const { students } = this.props;
    const toRender = students.map((student, idx) => {
      const { name, email, website, imageURL, gender, skills } = student;
      const skillName = ['java', 'css', 'html'];
      const skillset = skills.map((bool, index) => {
        return bool === true ? <li key={index}>{skillName[index]}</li> : '';
      })
      return (
        <div className="card mb-3" style={{ maxWidth: "540px" }} key={idx}>
          <h4 style={{ textAlign: "center" }}>Registered Students</h4>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={imageURL} className="card-img" alt="student" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p>
                  {gender} <br />
                  {email} <br />
                  <a href={website}>{website}</a>
                </p>
                <ul>{skillset}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{toRender}</div>;
  }
}
