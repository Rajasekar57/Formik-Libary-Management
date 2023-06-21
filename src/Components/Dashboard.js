import React from 'react'
import Table from 'react-bootstrap/Table';

function Dashboard() {
  return (
    <div style={{ backgroundColor: "#d891ef" }}>
      <p><h3 style={{ textAlign: "center", color: "#2E2E2E" }}>"Top sold Programming books of the month"</h3></p>
      <Table bordered>
        <thead>
          <tr>
            <th><h3>Book Name</h3></th>
            <th><h3>Author Name</h3></th>
            <th><h3>Published year</h3></th>
            <th><h3>Rating</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h5>"The Pragmatic Programmer"</h5></td>
            <td><h6>Andrew Hunt</h6></td>
            <td><h6>1999</h6></td>
            <td><h6>[9.7/10]</h6></td>
          </tr>
          <tr>
            <td><h5>"The Mythical Man-Month"</h5></td>
            <td><h6>Frederick P. Brooks Jr.</h6></td>
            <td><h6>1975</h6></td>
            <td><h6>[9.6/10]</h6></td>
          </tr>
          <tr>
            <td><h5>"JavaScript: The Good Parts"</h5></td>
            <td><h6>Douglas Crockford</h6></td>
            <td><h6>2008</h6></td>
            <td><h6>[9.8/10]</h6></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Dashboard