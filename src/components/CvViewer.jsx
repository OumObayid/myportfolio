import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CvViewer = ({ fileUrl }) => {
  return (
    <div style={{ height: "90vh", border: "1px solid #ccc" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default CvViewer;
