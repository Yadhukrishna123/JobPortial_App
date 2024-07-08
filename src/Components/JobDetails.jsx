import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function JobDetails() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/jobs", {
      credentials: 'include', // This includes cookies with the request
    })
    .then(res => res.json())
    .then(response => {
      console.log("Fetched Data:", response);
      if (response.successs && Array.isArray(response.jobs)) { // Note the typo: "successs" instead of "success"
        setData(response.jobs);
        setFilter(response.jobs);
      } else {
        console.error("Unexpected data format:", response);
        setData([]);
        setFilter([]);
      }
    })
    .catch(err => console.log(err));
  }, []);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = filter.filter(item => 
      item.name && item.name.toLowerCase().includes(searchTerm)
    );
    setData(filteredData);
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleFilter}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div>
        {Array.isArray(data) && data.map((job, index) => (
          <div key={index}>
            {job.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobDetails;
  