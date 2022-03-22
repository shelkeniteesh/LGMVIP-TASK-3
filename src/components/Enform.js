import React from "react";
export default class Enform extends React.Component {
  state = { name: null, email: null, website: null, imageURL: null, gender: null, skills: [false, false, false] }
  onFormSubmit = (e) => {
    e.preventDefault();
    const user = this.state;
    console.log(e);
    const { addStudent } = this.props;
    addStudent(user);
  }
  onCheckBoxChange = (index) => {
    const skills = this.state.skills;
    skills[index] = !skills[index];
    this.setState({ skills: skills });
  }
  render() {
    return (
      <div className="card" style={{ width: "50%", alignSelf: "center" }}>
        <h4 style={{ textAlign: "center" }}>Student Registration Form</h4>
        <form action="post" className="" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input type="text" className="form-control" name="name" onChange={(e) => {
              this.setState({ name: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" className="form-control" name="email" onChange={(e) => {
              this.setState({ email: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website :</label>
            <input type="url" className="form-control" name="website" onChange={(e) => {
              this.setState({ website: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label htmlFor="imageURL">Image URL :</label>
            <input type="url" className="form-control" name="imageURL" onChange={(e) => {
              this.setState({ imageURL: e.target.value })
            }} />
          </div>
          <div className="form-group form-check">
            <label htmlFor="">Gender : </label>
            <select name="gender" className="form-check">
              <option value="male" >Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group form-check">
            Skills :
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="java"
                id="java"
                on="false"
                checked={this.state.skills[0]}
                onChange={() => { this.onCheckBoxChange(0) }}
              />
              <label htmlFor="java">JAVA</label>
            </div>
            <div index={1}>
              <input
                type="checkbox"
                className="form-check-input"
                value="css"
                id="css"
                on="false"
                checked={this.state.skills[1]}
                onChange={() => { this.onCheckBoxChange(1) }}
              />
              <label htmlFor="css">CSS</label>
            </div>
            <div index={2}>
              <input
                type="checkbox"
                className="form-check-input"
                value="html"
                id="html"
                on="false"
                checked={this.state.skills[2]}
                onChange={() => { this.onCheckBoxChange(2) }}
              />
              <label htmlFor="html">HTML</label>
            </div>
          </div>
          <button type="submit">Enroll Student</button>
          <button type="reset">Clear</button>
        </form >
      </div >
    );
  }
}
