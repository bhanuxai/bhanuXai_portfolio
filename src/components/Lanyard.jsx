import React from 'react';
import Experience from '../idCard/components/Experience';

export default function Lanyard() {
  const student = {
    firstName: "Bhanu",
    lastName: "Sesha Sai",
    userId: "092019",
    batch: "AI & ML",
    batchId: "LPU",
    date: "06/30/2026",
    profilePicture: "/images/mypic.jpg"
  };

  return (
    <div className="lanyard-wrapper w-full h-full">
      <Experience {...student} />
    </div>
  );
}
