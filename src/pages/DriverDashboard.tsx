import React from 'react';
import ViewSponsorsTable from '../ui/Driver/ViewSponsorsTable';
import PointHistoryTable from '../ui/Driver/PointHistoryTable';

const DriverDashboard: React.FC = () => {
  return (
    <div>
      <h1>Driver Dashboard</h1>
      <ViewSponsorsTable/>
      <div className="tableContainer">
        <PointHistoryTable/>
      </div>
    </div>
  );
};

export default DriverDashboard;