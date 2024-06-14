import React from 'react';

import '../css/display.css';
import { useNavigate } from 'react-router-dom';

const Display = () => {
  // Dummy function for logout, replace with actual logout logic
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }

  return (
    <div>
      <div className="logout-container">
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <h2 className="text-center">Products List</h2>
      <div className="row"></div>
      <br />
      <div className="row table-container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Discount</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laptop 1</td>
              <td>2236</td>
              <td>4.7</td>
              <td>63</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>Laptop 10</td>
              <td>7145</td>
              <td>2.74</td>
              <td>15</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>Laptop 14</td>
              <td>9254</td>
              <td>3</td>
              <td>56</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>Laptop 13</td>
              <td>1244</td>
              <td>4.5</td>
              <td>45</td>
              <td>out-of-stock</td>
            </tr>
            <tr>
              <td>Laptop 3</td>
              <td>9102</td>
              <td>4.44</td>
              <td>98</td>
              <td>out-of-stock</td>
            </tr>
            <tr>
              <td>Laptop 11</td>
              <td>2652</td>
              <td>4.12</td>
              <td>70</td>
              <td>yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
