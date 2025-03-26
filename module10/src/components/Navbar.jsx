import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Student Management</h1>
        <div>
          <Link className="mr-4" to="/">
            Students
          </Link>
          <Link className="bg-white text-blue-600 px-3 py-1 rounded" to="/add">
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
}
