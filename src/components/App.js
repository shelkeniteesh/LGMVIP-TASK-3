import React from "react";
import Enform from "./Enform";
import Enlist from "./Enlist";
import './App.css';
export default class App extends React.Component {
    state = { students: [] }
    addStudent = (student) => {
        const students = this.state.students;
        students.push(student);
        this.setState({ students: students });
        console.log(this.state.students);
    }
    render() {
        return <div class="flex-container">
            <Enform addStudent={this.addStudent} />
            <Enlist students={this.state.students} />
        </div>
    }
}