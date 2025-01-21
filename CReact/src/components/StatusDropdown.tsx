import React from 'react';

interface StatusDropdownProps {
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ statusFilter, setStatusFilter }) => {
  return (
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded"
    >
      <option value="">All Statuses</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default StatusDropdown;
