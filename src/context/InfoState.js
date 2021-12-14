import { useState } from "react";
import InfoContext from "./InfoContext";

function InfoState(props) {
  const [isactive, setisactive] = useState(false);
  const [name, setName] = useState("");
  const fetchDoctors = async () => {
    const response = await fetch(
      "http://localhost:8000/api/doctor/fetchdoctorsinfo",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json[0].isActive);
    setisactive(json[0].isActive);
    setName(json[0].name);
  };

  const appoint = async (Name, date, number, tokenNumber, problem) => {
    const response = await fetch(
      "http://localhost:8000/api/doctor/appointment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: Name, date, number, tokenNumber, problem }),
      }
    );
  };
  return (
    <InfoContext.Provider value={{ isactive, fetchDoctors, name, appoint }}>
      {props.children}
    </InfoContext.Provider>
  );
}

export default InfoState;
