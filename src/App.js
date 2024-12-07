import React, { useEffect, useState } from "react";
import styles from "./App.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { collegesData } from "./dummyData";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(collegesData);
   
    
  }, []);

  console.log(data, "dta");
  return (
    <>
      <div className="mainBox">
        <h1>ASSignment</h1>
        <div className="tableContainer">
          <div>filter</div>
          <div className="tableParentBox">
            <table>
              <tr>
                <th>CD Rank</th>
                <th>Colleges</th>
                <th>Course Fees</th>
                <th>Placement</th>
                <th>User reviews</th>
                <th>Rankings</th>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="clgInfoBox">
                    <div className="clgInfo">
                      <a className="clgLogo">
                        <img
                          src="https://image-static.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=43&w=43&mode=stretch"
                          alt="clg-logo"
                        />
                      </a>
                      <div className="clgAddress">
                        <a>
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </a>
                        <div className="subInfo">
                          <span>Chennai, Tamil Nadu </span>
                          <span>| AICTE Approved</span>
                        </div>
                        <div className="clgCourse">
                          <button>
                            <div className="courseName">
                              B.Tech Artificial Intelligence<span>d</span>
                            </div>
                            <div className="cutOff">
                              JEE-Advanced 2024 Cutoff : 419
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="clgCta">
                      <button className="applyBtn">
                        <span>
                          <FaArrowRightLong />
                        </span>
                        <span>Apply Now</span>
                      </button>
                      <button className="dwnldBtn">
                        <span>
                          <FiDownload />
                        </span>
                        <span>Download Brochure</span>
                      </button>
                      <button>
                        <span>
                          <MdCheckBoxOutlineBlank />
                        </span>
                        <span>Add To Compare</span>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="courseFeeBlock">
                    <p className="fees">₹ 2,42,000</p>
                    <p className="year">
                      BE/B.Tech
                      <br />- 1st Year Fees
                    </p>
                    <button>
                      <span>
                        <MdCompareArrows />
                      </span>
                      <span>Compare Fees</span>
                    </button>
                  </div>
                </td>
                <td>
                  <div className="placementBlock">
                    <p className="fees">₹ 2,42,000</p>
                    <p className="package">Average Package</p>
                    <p className="fees">₹ 2,42,000</p>
                    <p className="package">Highest Package</p>
                    <button>
                      <span>
                        <MdCompareArrows />
                      </span>
                      <span>Compare Fees</span>
                    </button>
                  </div>
                </td>
                <td>
                  <div className="reviewsBlock">
                    <div className="rateBox">
                      <div className="circle"></div>
                      <div className="rating">3.2/5</div>
                    </div>
                    <p className="reviewsText">Based on 382 user Reviews</p>
                    <div className="socialBox">
                      <span>
                        <FaCheck />
                      </span>
                      Best in Social Life{" "}
                      <span>
                        <FaChevronDown />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="rankingsBlock">
                    <div className="rankDiv">
                      #3<sup>th</sup>/<span>745</span> in India
                    </div>
                    <div className="yearDiv">
                      <span>
                        <img src="https://image-static.collegedunia.com/public/college_data/images/agencyLogo/collegedunia_2025_ranking1733467060.png" />
                        2025
                      </span>
                    </div>
                    <div className="moreDiv">
                      <div className="circleBox">
                        <div>
                          <img src="https://image-static.collegedunia.com/public/college_data/images/agencyLogo/qs_world_university_ranking_1569844025.png?h=20&w=20&mode=stretch" />
                        </div>
                        <div>
                          <img src="https://image-static.collegedunia.com/public/college_data/images/agencyLogo/collegedunia_2025_ranking1733467060.png?h=20&w=20&mode=stretch" />
                        </div>
                        <div>
                          <img src="https://image-static.collegedunia.com/public/college_data/images/agencyLogo/qs_world_university_ranking_1569844025.png?h=20&w=20&mode=stretch" />
                        </div>
                      </div>
                      <span>+ 9 more</span>
                      <span>
                        {" "}
                        <FaChevronDown />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>#1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>#1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
