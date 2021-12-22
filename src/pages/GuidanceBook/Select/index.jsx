import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import User2 from "../../../assets/icons/user2.png";
import Gender from "../../../assets/icons/gender.png";
import Qualifications from "../../../assets/icons/Qualifications.png";
import Course from "../../../assets/icons/Course.png";
import Education from "../../../assets/images/MyProfile/education.png";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const highEducation = ["10th", "12th", "Graduation", "Post Graduation"];

function GuidanceSelect(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <>
                  {props.icon && <img src={Education} alt='...' />}
                  {props.icon && props.title === "User" && (
                    <img src={User2} alt='...' />
                  )}
                  {props.icon && props.title === "Gender" && (
                    <img src={Gender} alt='...' />
                  )}
                  {props.icon && props.title === "Qualifications" && (
                    <img src={Qualifications} alt='...' />
                  )}
                  {props.icon && props.title === "Course Looking For" && (
                    <img src={Course} alt='...' />
                  )}
                  <em>{props.title}</em>
                </>
              );
            }

            return selected.join(", ");
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          {props.select === "education"
            ? highEducation.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))
            : names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default GuidanceSelect;
