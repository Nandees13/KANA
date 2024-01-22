import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./frontpage.css";
import EventRecordsTable from './Table';

const FrontPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onFacultyStaffClick = useCallback(() => {
    // Please sync "faculty_list" to the project
  }, []);
  const onFrameContainer1Click = useCallback(() => {
    navigate("/attended");
  }, [navigate]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onOptionClick = (option) => {
    // Handle the option click as needed
    console.log(`Option clicked: ${option}`);
  };

  // const onTextClick = useCallback(() => {
  //   navigate("/front-page1");
  // }, [navigate]);

  return (
    <div className="front-page">
      {/* <ModalComponent/> */}
      <div className="divsidenav-container-container">
        <div className="divsidenav-container3">
          <img
            className="image-1-icon2"
            loading="eager"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="divsidenavcontainer-wrapper">
            <nav className="divsidenavcontainer">
              <div className="divsidenavcontainer-child" />
              <div className="faculty-staff1">
                <div
                  className="faculty-staff2"
                  onClick={onFacultyStaffClick}
                >{`Faculty & Staff`}</div>
              </div>
              <div className="paper-publication-conferences">
                <div className="journal1">
                  <div className="paper-publication1">Paper Publication</div>
                  <div className="conferences1">Conferences</div>
                </div>
              </div>
              <div className="projects1">
                <div className="journal2">{`Journal `}</div>
                <div className="vector">
                  <div className="faculty-activities-parent">
                    <div className="faculty-activities1">
                      <div className="faculty-activities2">
                        Faculty Activities
                      </div>
                    </div>
                    <div className="wrapper">
                      <div className="div1" onClick={toggleDropdown} >{`>`}</div>
                      {isDropdownOpen && (
                <div className="options">
                <div onClick={() => {onOptionClick('attended');onFrameContainer1Click();}}>Attended</div>
                  <div onClick={() => onOptionClick('organized')}>Organized</div>
                  <div onClick={() => onOptionClick('received')}>Received</div>
                  <div onClick={() => onOptionClick('delivered')}>Delivered</div>
                </div>
              )}
                    </div>
                  </div>
                  <div className="projects2">Projects</div>
                </div>
              </div>
            </nav>
            
          </div>
        </div>
      </div>
      <main className="front-page-inner">
        <section className="frame-container">
          <div className="button-userjpg-group">
            <img
              className="button-userjpg1"
              loading="eager"
              alt=""
              src="/button--userjpg@2x.png"
            />
            <div className="about-the-department-wrapper">
              <img
                className="about-the-department"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        <EventRecordsTable/> 
        </section>
      </main>
    </div>
  );
};

export default FrontPage;
