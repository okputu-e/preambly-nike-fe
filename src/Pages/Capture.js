import { useState, useRef } from "react";

export default function Capture() {
  const [err, setErr] = useState("");
  const [page, setPage] = useState(true);
  const [result, setResult] = useState([
    {
      file: "",
      plate: "",
      notify: "",
      report: "",
    },
  ]);

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
      setPage(false);
      setResult((prev) => ({
        ...prev,
        file: file,
        plate: plate,
        notify: notify,
        report: report,
      }));
    }

    event.preventDefault();
  }
  return (
    <>
      <div className="capture">
        <h1>{page ? "Capture Event" : "Result"}</h1>

        {page ? (
          <form onSubmit={handleSubmit}>
            <span style={{ color: "red" }}>{err}</span>
            <div className="form-input">
              <label htmlFor="file">Capture Plate number</label>
              <br />
              <input type="file" name="file" id="file" ref={fileRef} />
            </div>
            <br />
            <div className="form-input">
              <label htmlFor="plate-number">Plate Number</label>
              <br />
              <input
                type="text"
                name="plate-number"
                id="plate-number"
                ref={plateRef}
              />
            </div>

            <div className="form-input">
              <label htmlFor="notify-source">Notify Authorities</label>
              <select id="notify-source" ref={notifyRef}>
                <option value="police">Police</option>
                <option value="fire service">Fire Services</option>
                <option value="road saftey">Road Safety</option>
                <option value="theft">Fire Services</option>
                <option value="Ambulance">Ambulance</option>
              </select>
            </div>

            <div className="form-input">
              <label htmlFor="report-type">Report type</label>
              <select id="report-type" ref={reportRef}>
                <option value="accident">Accident</option>
                <option value="theft">Theft</option>
              </select>
            </div>
            <br />

            <button>Proceed</button>
          </form>
        ) : (
          <div className="result">
            <h1>
              The {result.notify} has been notify of this {result.report}{" "}
              incident
            </h1>
            <h2>the details of the report include</h2>
            <ul>
              <li>Image:{result.file}</li>
              <li>Plate Number:{result.plate}</li>
              <li>Report sent to: {result.notify}</li>
              <li>Report Reason: {result.report}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
