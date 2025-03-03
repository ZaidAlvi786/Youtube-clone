import { useEffect, useState } from "react";

interface VideoReport {
  id: string;
  title: string;
  reportedBy: string;
  reason: string;
}

export default function AdminDashboard() {
  const [reports, setReports] = useState<VideoReport[]>([]);

  useEffect(() => {
    fetch("/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <h2 className="text-xl mt-4">Reported Videos</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id} className="border p-2 mt-2">
            <p><strong>Video:</strong> {report.title}</p>
            <p><strong>Reported By:</strong> {report.reportedBy}</p>
            <p><strong>Reason:</strong> {report.reason}</p>
            <button className="bg-red-500 text-white px-2 py-1 mt-2">Remove Video</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
