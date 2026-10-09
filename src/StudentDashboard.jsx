import React, { Component } from 'react'
import StudentDetails from "./StudentDetails";

export default class StudentDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: "",
            selectedStudent: null,
            showDetails: false,
            elapsedSeconds: 0,
            students: [
                { id: 1, name: "Sid", course: "React", status: "Active" },
                { id: 2, name: "Nayan", course: "Node", status: "Active" },
                { id: 3, name: "Sagar", course: "Angular", status: "inActive" },
                { id: 4, name: "Abhi", course: "Javascript", status: "Active" }
            ]
        }
    }
    componentDidMount() {
        console.log("Student mounted successfully");

        this.setState({
            welcomeMessage: "Welcome to the Student Management System"
        })

        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                elapsedSeconds: prevState.elapsedSeconds + 1
            }))
        }, 1000);
    }

    selectStudent = (student) => {
        this.setState({
            selectedStudent: student
        })
    }

    changeCourse = (id) => {
        let updatedStudents = this.state.students.map((student) => {
            if (student.id === id) {
                return {
                    ...student,
                    course: student.course === "React" ? "Angular" : "React"
                }
            }
            return student
        })
        this.setState({
            students: updatedStudents
        })

    }
    componentDidUpdate(prevProps, prevState) {
        console.log("studentDashboard updated");

        console.log("Previous state:", prevState);
        console.log("Current state", this.state);

        if (prevState.students !== this.state.students) {
            console.log("Students list has changed");
        }
    }

    showStudentDetails = () => {
        this.setState({
            showDetails: true
        })
    }
    hideStudentDetails = () => {
        this.setState({
            showDetails: false
        })
    }

    componentWillUnmount() {
        console.log("StudentDashboard Will Unmount");
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="min-h-screen bg-slate-100 p-4 md:p-8 mx-auto max-w-5xl">
                <h1 className="mb-4 rounded-xl bg-blue-600 p-5 text-3xl font-bold text-white shadow">Student Management System</h1>
                <h3 className="mb-4 rounded-lg bg-white p-3 font-semibold text-gray-700 shadow-sm">Dasboard Active For: {this.state.elapsedSeconds} seconds</h3>
                {this.state.welcomeMessage && (
                    <h3 className="mb-4 rounded-lg bg-green-100 p-4 font-semibold text-green-800">{this.state.welcomeMessage}</h3>
                )}
                <h3 className="mb-4 rounded-lg bg-white p-4 text-lg font-bold text-gray-800 shadow-sm">Total Students: {this.state.students.length}</h3>
                {this.state.students.map((student) => {
                    return (
                        <div key={student.id} className="mb-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                            <h3 className="mb-4 text-lg font-semibold text-gray-800">{student.name}-{student.course}-{student.status}</h3>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => this.changeCourse(student.id)} className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Change course</button>
                                <button onClick={() => this.selectStudent(student)} className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">View Details</button>
                            </div>
                        </div>
                    )
                })}
                <div className="mt-6 flex flex-wrap gap-3">
                    <button onClick={this.showStudentDetails} className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700">Show Student Details</button>
                    <button onClick={this.hideStudentDetails} className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700">Hide Student Details</button>
                </div>
                {this.state.showDetails && (
                    <StudentDetails student={this.state.selectedStudent} />

                )}
            </div>
        )
    }
}
