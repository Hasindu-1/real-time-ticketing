import React, { useState } from "react";
import './Configure.css';

function Configure({ onSubmit }) {
  const [config, setConfig] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    maxCapacity: "",
    customerRetrievalRate:"",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(config);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Configuration Settings</h2>
      <div className="form-group">
        <label>Total Tickets</label>
        <input
          type="number"
          className="form-control"
          name="totalTickets"
          value={config.totalTickets}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Ticket Release Rate (ms)</label>
        <input
          type="number"
          className="form-control"
          name="ticketReleaseRate"
          value={config.ticketReleaseRate}
          onChange={handleChange}
           min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Customer Retrieval Rate (ms)</label>
        <input
          type="number"
          className="form-control"
          name="customerRetrievalRate"
          value={config.customerRetrievalRate}
          onChange={handleChange}
           min="1"
          required
        />
      </div>

      
      <div className="form-group">
        <label>Max Ticket Capacity</label>
        <input
          type="number"
          className="form-control"
          name="maxCapacity"
          value={config.maxCapacity}
          onChange={handleChange}
           min="1"
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary mt-2">
        Apply Configuration
      </button>
    </form>
  );
}

export default Configure;
