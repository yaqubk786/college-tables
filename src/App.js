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
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("");
  console.log(data, "data");

  useEffect(() => {
    setData(collegesData);
  }, []);

  const sortingData = (field, order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      let firstValue = a[field];
      let secondValue = b[field];
      console.log(firstValue, secondValue, "-----------");

      if (field === "course_fees") {
        firstValue = parseInt(firstValue.replace(/[^\d]/g, ""));
        secondValue = parseInt(secondValue.replace(/[^\d]/g, ""));
        console.log(
          firstValue,
          secondValue,
          "ppppppppppppppppppppppppppppppppppp"
        );
      }
      if (field === "user_reviews") {
        firstValue = parseFloat(a.user_reviews.rating);
        secondValue = parseFloat(b.user_reviews.rating);
      }
      if (field === "rank") {
        firstValue = a.rank;
        secondValue = b.rank;
      }
      if (order === "ascending") {
        return firstValue - secondValue;
      } else {
        return secondValue - firstValue;
      }
    });
    setData(sortedData);
  };

  useEffect(() => {
    sortingData(sortField, order);
  }, [sortField, order]);

  console.log(sortField, "sortField");
  return (
    <>
      <div className="mainBox">
        <h1>ASSignment</h1>
        <div className="tableContainer">
          <div className="filterContainer">
            <div>searches</div>
            <div>
              <span>Sort By:</span>
              <label>
                <input
                  type="radio"
                  name="sortField"
                  value="course_fees"
                  checked={sortField === "course_fees"}
                  onChange={(e) => setSortField(e.target.value)}
                />
                Fees
              </label>
              <label>
                <input
                  type="radio"
                  name="sortField"
                  value="user_reviews"
                  checked={sortField === "user_reviews"}
                  onChange={(e) => setSortField(e.target.value)}
                />
                User Reviews
              </label>
              <label>
                <input
                  type="radio"
                  name="sortField"
                  value="rank"
                  checked={sortField === "rank"}
                  onChange={(e) => setSortField(e.target.value)}
                />
                Cd rank
              </label>
            </div>
            <div>
              <span>Sort by order:</span>
              <label>
                <input
                  type="radio"
                  name="order"
                  value="ascending"
                  checked={order === "ascending"}
                  onChange={(e) => setOrder(e.target.value)}
                />
                Ascending
              </label>
              <label>
                <input
                  type="radio"
                  name="order"
                  value="descending"
                  checked={order === "descending"}
                  onChange={(e) => setOrder(e.target.value)}
                />
                Descending
              </label>
            </div>
          </div>
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
              {data.map((college, index) => (
                <tr key={index}>
                  <td>#{college.rank}</td>
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
                          <a>{college.college}</a>
                          <div className="subInfo">
                            <span>{college.location} </span>
                            <span>| {college.approval}</span>
                          </div>
                          <div className="clgCourse">
                            <button>
                              <div className="courseName">
                                {college.course}
                                <span>
                                  <FaChevronDown />
                                </span>
                              </div>
                              <div className="cutOff">
                                {college.exam_cutoff}
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
                      <p className="fees">{college.course_fees}</p>
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
                      <p className="fees">
                        {college.placement.average_package}
                      </p>
                      <p className="package">Average Package</p>
                      <p className="fees">
                        {college.placement.highest_package}
                      </p>
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
                        <div className="rating">{`${college.user_reviews.rating}/5`}</div>
                      </div>
                      <p className="reviewsText">
                        {college.user_reviews.based_on}
                      </p>
                      {college?.user_reviews?.highlight && (
                        <div className="socialBox">
                          <span>
                            <FaCheck />
                          </span>
                          {college?.user_reviews?.highlight}{" "}
                          <span>
                            <FaChevronDown />
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="rankingsBlock">
                      <div className="rankDiv">
                        {college.ranking.slice(0, 3)}
                        <sup>th</sup>/<span>745</span> in India
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
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
