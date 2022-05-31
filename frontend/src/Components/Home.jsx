import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const items = ["Income", "Expense"];

  const [TransationAmount, setTransationAmount] = useState("");
  const [TransationTitle, setTransationTitle] = useState("");
  const [TransationSelect, setTransationSelect] = useState("");
  const [success, setSuccess] = useState(true);
  const [UserId, setUserId] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/v2/user").then((res) => {
      setUserId(res.data.user._id);
    });
     axios.get("/api/v2/transections").then((res) => {
      setData(res.data.userData);
    });
  }, []);

  const paymentSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v2/userdata", {
        TransationAmount,
        TransationTitle,
        TransationSelect,
        UserId,
      })
      .then((res) => {
        setSuccess(false);
      });
  };

  return (
    <div className="container-md HomepageBody">
      <h1 className="text-center mt-3">
        <u>
          <b>User's data</b>
        </u>
      </h1>
      <h4 className="text-center mt-5">
        <span>Your Balance: 60</span>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Transation
        </button>
      </h4>

      {/* <!-- Modal --> */}
      {success ? (
        <>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Transation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={paymentSubmit}>
                    <div className="mb-2">
                      <label for="TransationAmount" className="form-label">
                        Transation Amount
                      </label>
                      <input
                        type="number"
                        placeholder="100"
                        className="form-control"
                        required
                        id="TransationAmount"
                        name="TransationAmount"
                        value={TransationAmount}
                        onChange={(e) => setTransationAmount(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="TransationTitle" className="form-label">
                        Transation Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="My Salary"
                        required
                        id="TransationTitle"
                        name="TransationTitle"
                        autocomplete="off"
                        value={TransationTitle}
                        onChange={(e) => setTransationTitle(e.target.value)}
                      />
                    </div>
                    <label for="TransationSelect" className="form-label">
                      Transation Select
                    </label>
                    <select
                      className="form-select mb-3"
                      id="TransationSelect"
                      name="TransationSelect"
                      required
                      aria-label="Default select example"
                      onChange={(e) => setTransationSelect(e.target.value)}
                    >
                      <option value="Select">Select Value</option>
                      {items.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/*  old Transation  */}
      <h3 className="mt-5">
        <u>Transation History:-</u>
      </h3>
      <table className="table table-dark text-center mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Total Income</th>
            <th scope="col">Total Expenses</th>
            <th scope="col">WAllet Balance</th>
          </tr>
        </thead>
        {
          data.map((item, index) => (
            <tbody>
          <tr key={index}>
            <th scope="row">1</th>
            <td>{item.TransationAmount}</td>
            <td>420</td>
            <td>80</td>
          </tr>
        </tbody>
          ))
        }
      </table>
    </div>
  );
};

export default Home;
