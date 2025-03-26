import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Pagination, Button } from "react-bootstrap";
import DeleteConfirmation from "../components/DeleteConfirmation";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const studentsPerPage = 5;

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      setStudents(res.data);
    });
  }, []);

  const handleDeleteClick = (studentId) => {
    setStudentToDelete(studentId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    axios
      .delete(`http://localhost:5000/students/${studentToDelete}`)
      .then(() => {
        setStudents(
          students.filter((student) => student.id !== studentToDelete)
        );
        setShowDeleteModal(false);
        setStudentToDelete(null);
      });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setStudentToDelete(null);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search by name or course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-primary btn-sm mr-2"
                >
                  Edit
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteClick(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

      <DeleteConfirmation
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default StudentList;
