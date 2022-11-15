import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./capture.scss";

export default function Capture() {
  const [err, setErr] = useState("");

  const [fileName, setFileName] = useState("");

  function handleChange(event) {
    setFileName((prev) => event.target.value);
  }

  const navigate = useNavigate();

  const fileRef = useRef(null);
  const plateRef = useRef(null);
  const notifyRef = useRef(null);
  const reportRef = useRef(null);

  function handleSubmit(event) {
    const file = fileRef.current.value;
    const plate = plateRef.current.value;
    const notify = notifyRef.current.value;
    const report = reportRef.current.value;

    if (file === "" || plate === "" || notify === "" || report === "") {
      setErr("All inputs fields are compulsory");
      console.log(err);
    } else {
      navigate("/result");
    }

    event.preventDefault();
  }
  return (
    <div className="capture">
      <h1>Capture Event</h1>

      <form onSubmit={handleSubmit}>
        <span style={{ color: "red" }}>{err}</span>
        <div className="form-input file-container">
          <label htmlFor="file" className="file-label">
            <p aria-hidden="true" className="center">
              {fileName === "" ? "Drop file or Upload" : fileName}
            </p>
            <input
              type="file"
              name="file"
              id="file"
              ref={fileRef}
              value={fileName}
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>
        <p className="center">Or</p>
        <div className="form-input plate">
          <input
            type="text"
            name="plate-number"
            id="plate-number"
            ref={plateRef}
            placeholder="Type Plate Number"
            className="plate-number"
          />
        </div>

        <div className="options">
          <div className="input-options">
            <label htmlFor="notify-source" className="label">
              Notify Authorities
            </label>
            <select id="notify-source" ref={notifyRef}>
              <option value="">Select</option>
              <option value="police">Police</option>
              <option value="fire service">Fire Services</option>
              <option value="road saftey">Road Safety</option>
              <option value="theft">Fire Services</option>
              <option value="Ambulance">Ambulance</option>
            </select>
          </div>

          <div className="input-options">
            <label htmlFor="report-type" className="label">
              Report type
            </label>
            <select id="report-type" ref={reportRef}>
              <option value="">Select</option>
              <option value="accident">Accident</option>
              <option value="theft">Theft</option>
            </select>
          </div>
        </div>

        <div className="btn">
          <button className="capture-btn">Proceed</button>
        </div>
      </form>
    </div>
  );
}
