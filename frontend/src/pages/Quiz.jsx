import React, { useState } from "react";
import axios from "axios";
import "../css/Quiz.css";

import { FaTools, FaBookOpen } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

import { FaIndianRupeeSign } from "react-icons/fa6";

const Quiz = ({ isDark }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    interest: "",
    workType: [],
    marks: "",
    subjects: [],
    strengths: [],
    courses: "",
    jobType: [],
    careerFields: [],
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [submitted, setSubmitted] = useState(false); // ✅ to track final submit

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }

    // Final submit
    try {
      setLoading(true);
      setApiError("");
      setSubmitted(false);

      const res = await axios.post(
        // "http://localhost:5000/api/filter"
        "https://futuride-n8ai.onrender.com/api/filter",
        {
          interest: formData.interest,
          marks: Number(formData.marks),
        }
      );

      setResults(Array.isArray(res.data) ? res.data : []);
      setSubmitted(true);

      // ✅ Reset form + step
      setFormData({
        interest: "",
        workType: [],
        marks: "",
        subjects: [],
        strengths: [],
        courses: "",
        jobType: [],
        careerFields: [],
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`quiz-page d-flex flex-column align-items-center border rounded-4 px-2 py-5 ${
        isDark ? "dark-mode" : ""
      }`}>
      <div
        className="text-center"
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-once="true">
        <h1 className="fw-bold display-4 pt-5">
          <span className="gradient-text">Futuride</span> Guide Quiz
        </h1>
        <p className="opacity-75 fs-4">
          Find your career based on your interest and academic marks.
        </p>
      </div>

      {/* Progress bar */}
      <div
        className="progress my-3 w-75 border-none rounded-3"
        style={{ maxWidth: "800px", height: "25px", backgroundColor: "#fff" }}
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-once="true">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${(step / totalSteps) * 100}%`,
            transition: "width 300ms ease",
            background:
              "linear-gradient(to right, #69a5ff, #b653e7, #ff6e82, #ff433c)",
          }}
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={totalSteps}>
          Step {step} of {totalSteps}
        </div>
      </div>

      {/* Form */}
      <form
        className="row form shadow g-3 container rounded-4 p-3 my-2"
        style={{ maxWidth: "900px" }}
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-once="true">
        {/* Step 1 */}
        {step === 1 && (
          <>
            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Choose Your Interest
              </label>
              <select
                name="interest"
                className="form-select"
                value={formData.interest}
                onChange={handleChange}
                required>
                <option value="">-- Select an option --</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Commerce / Business">Commerce / Business</option>
                <option value="Arts / Humanities">Arts / Humanities</option>
                <option value="Design / Creativity">Design / Creativity</option>
                <option value="Healthcare / Medicine">
                  Healthcare / Medicine
                </option>
                <option value="Government / Law Enforcement">
                  Government / Law Enforcement
                </option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                What type of work excites you?
              </label>
              {[
                "Building apps, coding",
                "Managing teams, business plans",
                "Designing visuals or editing videos",
                "Conducting research or experiments",
              ].map((opt, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`workType-${i}`}
                    name="workType"
                    value={opt}
                    checked={formData.workType.includes(opt)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`workType-${i}`}>
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                What was your percentage/CGPA in your last exam?
              </label>
              <input
                type="number"
                name="marks"
                className="form-control"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter marks or CGPA %"
                value={formData.marks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Which subject do you score highest in?
              </label>
              {[
                "Maths",
                "Science",
                "English",
                "Accounts / Business Studies",
                "Programming / Computer Science",
              ].map((subj, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`subject-${i}`}
                    name="subjects"
                    value={subj}
                    checked={formData.subjects.includes(subj)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`subject-${i}`}>
                    {subj}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Which of these describe you best? (Select any)
              </label>
              {[
                "Logical thinker",
                "Good with people",
                "Creative and visual",
                "Detail-oriented",
                "Quick learner",
              ].map((str, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`strength-${i}`}
                    name="strengths"
                    value={str}
                    checked={formData.strengths.includes(str)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`strength-${i}`}>
                    {str}
                  </label>
                </div>
              ))}
            </div>

            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Have you done any courses or certifications?
              </label>
              <textarea
                name="courses"
                className="form-control"
                placeholder="e.g., Python programming, Digital Marketing"
                value={formData.courses}
                onChange={handleChange}></textarea>
            </div>
          </>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <>
            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Are you looking for:
              </label>
              {[
                "Government jobs",
                "Private sector jobs",
                "Freelance / Self-employed options",
                "Abroad studies / job",
              ].map((job, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`job-${i}`}
                    name="jobType"
                    value={job}
                    checked={formData.jobType.includes(job)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`job-${i}`}>
                    {job}
                  </label>
                </div>
              ))}
            </div>

            <div className="col-12">
              <label className="form-label fs-5 fw-bold">
                Are you open to careers in:
              </label>
              {[
                "IT",
                "Design",
                "Finance",
                "Teaching",
                "Media",
                "Healthcare",
              ].map((field, i) => (
                <div className="form-check" key={i}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`career-${i}`}
                    name="careerFields"
                    value={field}
                    checked={formData.careerFields.includes(field)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`career-${i}`}>
                    {field}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="col-12 d-flex justify-content-between mt-4">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-outline-dark fw-bold shadow"
              onClick={prevStep}>
              Previous
            </button>
          )}
          {step < totalSteps && (
            <button type="submit" className="btn btn-dark fw-bold shadow">
              Next
            </button>
          )}
          {step === totalSteps && (
            <button type="submit" className="btn btn-success fw-bold shadow">
              Submit
            </button>
          )}
        </div>
      </form>

      {/* Results Section */}
      {submitted && (
        <div className="container" style={{ maxWidth: "1100px" }}>
          {loading && (
            <div className="text-center fs-3">Loading suggestions…</div>
          )}

          {!loading && results.length > 0 && (
            <>
              <h2 className="text-center fw-bold my-4 display-5 d-flex justify-content-center align-items-center">
                Career Suggestions
              </h2>

              <div className="row">
                {results.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 my-2">
                    <div
                      className={`cards border h-100 p-2 rounded-4 shadow-sm`}>
                      {/* Image */}
                      {item.image && (
                        <div
                          className="mb-2 rounded-3 img-fluid"
                          style={{
                            height: "200px",
                            width: "100%",
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}></div>
                      )}

                      {/* Title */}
                      <h3 className="my-2 fs-4 ps-1 fw-bold gradient-text">
                        {item.field}
                      </h3>

                      {/* Description */}
                      <p className="my-2 ps-1">{item.description}</p>
                      {/* Skills */}
                      {Array.isArray(item.skills) && (
                        <div className="my-2 ps-1">
                          <div className="d-flex mb-2 align-items-center fw-bold">
                            <FaTools className="me-1" /> Skills:
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            {item.skills.map((skill, index) => (
                              <span
                                key={index}
                                className={`badge rounded-4 p-2 fw-medium shadow-sm ${
                                  isDark
                                    ? "bg-dark text-light"
                                    : "bg-light text-dark"
                                }`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Salary */}
                      {item.salary && (
                        <p className="ps-1 my-2 d-flex align-items-center">
                          <FaIndianRupeeSign />
                          <strong>Salary:</strong> {item.salary}
                        </p>
                      )}

                      {/* Experience */}
                      {item.experience && (
                        <p className="ps-1 my-2">
                          <strong>Experience:</strong> {item.experience}
                        </p>
                      )}

                      {/* Courses */}
                      {Array.isArray(item.courses) && (
                        <div className="ps-1 mt-2">
                          <div className="fw-bold d-flex my-1 align-items-center">
                            <FaBookOpen className="me-1" /> Courses:
                          </div>
                          <ul className="list-unstyled ps-1">
                            {item.courses.map((course, index) => (
                              <li key={index}>• {course}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && results.length === 0 && (
            <div className="text-center fs-4 mt-3">
              No matching suggestions found for your marks and interest yet.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
