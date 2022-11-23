import React, { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Gender from "../../../assets/icons/gender.png";
import User2 from "../../../assets/icons/user2.png";
import Qualifications from "../../../assets/icons/Qualifications.png";
import Course from "../../../assets/icons/Course.png";
import Education from "../../../assets/images/MyProfile/education.png";
import Stream from "../../../assets/images/MyProfile/Stream.png";
// import City from "../../../assets/icons/city.png";
import Edit from "../../../assets/icons/edit.png";
import Guide from "../../../assets/icons/guide.png";
import Calendar from "../../../assets/icons/calendar.png";

const names = ["Engineering", "Medical", "Arts", "Science", "Pharmacy","Commerce"];

function GuidanceSelect(props) {
  const [defaultValue, setDefaultValue] = React.useState(props.defaultValue);

  useEffect(() => {
    setDefaultValue(props.defaultValue);
  }, [props.defaultValue]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // if (props?.flag) {
    props?.updateValues(value);
    // }
    setDefaultValue(typeof value === "string" ? value.split(",") : value);
    // props?.setValue(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          displayEmpty
          value={defaultValue}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <>
                  {props.icon && props.title === "User" && (
                    <img src={User2}  alt='...' />
                  )}
                  {props.icon && props.title === "Qualifications" && (
                    <img src={Qualifications} style={{height:"30px",width:"30px"}} alt='...' />
                  )}
                  {props.icon && props.title === "Course Looking For" && (
                    <img src={Course} alt='...' />
                  )}
                  {props.icon && props.title === "Highest Education" && (
                    <img src={Education} alt='...' />
                  )}
                  {props.icon && props.title === "Stream" && (
                    <img src={Stream} alt='...' />
                  )}
                  {props.icon && props.title === "Gender" && (
                    <img src={Gender} alt='...' />
                  )}
                  {/* {props.icon && props.title === "date_of_birth" && (
                    <img src={Calendar} alt='...' />
                  )} */}
                  {/* {props.icon && props.title === "message" && (
                    <img src={Edit} alt='...' />
                  )}
                  {props.icon && props.title === "City" && (
                    <img src={City} alt='...' />
                  )} */}
                  {props.icon && props.title === "Guidance Purpose" && (
                    <img src={Guide} alt='...' />
                  )}
                  <em>{props?.title}</em>
                </>
              );
            }

            return selected;
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          {props.listItem?.map((item) => {
            return (
              <MenuItem
                key={item.name ? item.name : item}
                value={item.name ? item.name : item}
              >
                {item.name ? item.name : item}
              </MenuItem>
            );
          }) ||
            names.map((name) => (
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
