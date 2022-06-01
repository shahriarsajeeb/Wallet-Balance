import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/v2/admin/user").then((res) => {
      setData(res.data.user);
    });
  }, []);
  return (
    <div className="AdminBody container-md">
      <h1 className="text-center mt-3">
        <u>
          <b>User Details</b>
        </u>
      </h1>
      <table className="table table-light mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Total Income</th>
            <th scope="col">Total Expense</th>
            <th scope="col">Wallet Balance</th>
          </tr>
        </thead>
        <tbody>
        {data.map((i, index) => (
            <tr key={index}>
              <th>{i._id}</th>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>5000</td>
              <td>4200</td>
              <td>800</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
