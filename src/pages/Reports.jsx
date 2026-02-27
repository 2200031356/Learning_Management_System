const Reports = () => {
  const generateReport = () => {
    alert("Report Generated Successfully!");
  };

  return (
    <div className="page-container">
      <h1>Reports</h1>

      <div className="form-card">
        <select>
          <option>Monthly Report</option>
          <option>User Activity Report</option>
          <option>Course Performance Report</option>
        </select>

        <button onClick={generateReport}>
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Reports;