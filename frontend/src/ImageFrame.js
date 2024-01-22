import { useCallback } from "react";
import "./ImageFrame.css";

const ImageFrame = () => {
  const onReceivedTextClick = useCallback(() => {
    // Please sync "received" to the project
  }, []);

  return (
    <nav className="image-frame">
      <div className="image-frame-child" />
      <div className="faculty-staff-frame2">
        <div className="faculty-staff3">{`Faculty & Staff`}</div>
      </div>
      <div className="frame-separators">
        <div className="paper-publication2">Paper Publication</div>
      </div>
      <div className="faculty-staff-frame3">
        <div className="conferences2">Conferences</div>
      </div>
      <div className="text-frame-journal">
        <div className="journal3">{`Journal `}</div>
        <div className="text-frame-attended">
          <div className="text-frame-delivered">
            <div className="faculty-activities3">Faculty Activities</div>
            <div className="content-frame">{`>`}</div>
          </div>
          <div className="placeholder-label-instance">
            <div className="primary-button-component">
              <div className="filter-frame1">
                <div className="slider-instance" />
                <div className="attended2">Attended</div>
              </div>
            </div>
            <div className="download-from-cloud-rectangle">
              <div className="delivered2">Delivered</div>
              <div className="table-item-cell-item">
                <div className="received1" onClick={onReceivedTextClick}>
                  Received
                </div>
                <div className="organised1">Organised</div>
                <div className="projects3">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ImageFrame;
