import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

import {
  allCourses as fetchAllCourses,
  getCategoryList,
  setFilter,
} from "../../../store/courses/action";

import "./index.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(270deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(1);
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  const { selectedFilter: currentFilter, categoryList } = useSelector(
    (state) => state.coursesReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(null));
    dispatch(getCategoryList());
  }, []);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (!newExpanded) {
      dispatch(fetchAllCourses(null));
      dispatch(setFilter(null));

      dispatch({ type: "SELECTED_FILTER", payload: null });
    }
    setSelectedFilter(null);
  };

  const handleCheckboxChange = (_, obj) => {
    dispatch(fetchAllCourses(`?id=${obj.id}`));
    dispatch(setFilter([obj]));
    setSelectedFilter(obj.id);
  };

  useEffect(() => {
    if (currentFilter === null) {
      setSelectedFilter(null);
    }
  }, [currentFilter]);

  return (
    <div className='accordion_box_all'>
      {categoryList?.map((obj) => (
        <Accordion
          expanded={expanded === obj?.id}
          onChange={handleChange(obj?.id)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography>{obj?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className='pl-0'>
              <FormControl component='fieldset'>
                {obj?.course_set?.map((r) => (
                  <RadioGroup
                    value={selectedFilter}
                    onChange={(e) => handleCheckboxChange(e, r)}
                  >
                    <FormControlLabel
                      id={r.id}
                      value={r.id}
                      control={<Radio />}
                      label={r?.name}
                    />
                  </RadioGroup>
                ))}
              </FormControl>
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
