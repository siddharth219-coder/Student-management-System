import React, { Component } from 'react'

export default class StudentDetails extends Component {

    constructor(props){
        super(props)
        console.log("Students constructor called");
    }

    componentDidMount(){
        console.log("Student details mounted");
    }

    componentDidUpdate(prevProps){
        console.log("StudentDetails updated");
        console.log("Previous student: ", prevProps.student);
        console.log("Current student:", this.props.student);
    }

    componentWillUnmount(){
        console.log("Student will unmount");
    }

  render() {
    let student=this.props.student
    if (!student) {
        return <h3 className="mt-5 rounded-lg border border-yellow-300 bg-yellow-100 p-4 font-semibold text-yellow-800">Please select a student to view details.</h3>
    }
    return (
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-5 border-b pb-3 text-2xl font-bold text-indigo-700">Student Details</h2>
        <p className="mb-3 rounded-lg bg-gray-50 p-3 text-gray-700">ID: {student.id}, Name: {student.name}, Course: {student.course}, Status: {student.status}</p>
        {/* <p className="mb-3 rounded-lg bg-gray-50 p-3 text-gray-700"></p>
        <p className="mb-3 rounded-lg bg-gray-50 p-3 text-gray-700"></p>
        <p className="rounded-lg bg-gray-50 p-3 text-gray-700"></p> */}
      </div>
    )
  }
}
