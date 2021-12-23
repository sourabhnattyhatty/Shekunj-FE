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





function GuidanceSelect(props) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value,
    );
    props.setValue(String(value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <>
                  {props.icon && props.select === "education" && (
                    <img src={Education} alt='...' />
                  )}
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

            return selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          {props.array ? (
            props.array.map((obj) => (
              <MenuItem key={obj} value={obj}>
                {obj}
              </MenuItem>
            ))
          ) : (
            <MenuItem>No Data Found!</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}

export default GuidanceSelect;
