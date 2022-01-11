import React, { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";

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

export default function SimpleAccordion(props) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const {
    selectedFilter: currentFilter,
    categoryList,
    allCourses,
  } = useSelector((state) => state.coursesReducer);
  const {lan} = useSelector(state => state.languageReducer);

  const dispatch = useDispatch();

  const [pageLimit] = useState(10);

  const [subSelected, setSubSelected] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(setFilter(null));
    dispatch(getCategoryList());
  }, [dispatch, lan]);
  const handleCategoryChange = (_, obj) => {
    dispatch(fetchAllCourses(`?category_id=${obj.id}&limit=${pageLimit}`));
    dispatch(setFilter([obj]));
    setSelectedFilter(obj.id);
    setSubSelected(0);
    props.categoryId(obj.id);
  };

  const handleSubCategoryChange = (e, obj) => {
    dispatch(fetchAllCourses(`?id=${obj.id}&category_id=${selectedFilter}`));
    props.categoryId(selectedFilter);
    setSubSelected(obj?.id);
  };

  useEffect(() => {
    if (currentFilter === null) {
      setSelectedFilter(null);
    }
    if (props.isResetPressed) {
      setSubSelected(0);
      props.changeResetAgain(false);
    }
    if (subSelected > 0) {
      props.isSubSelected(true);
    } else {
      props.isSubSelected(false);
    }
  }, [currentFilter, subSelected, props, lan]);

  return (
    <div className='accordion_box_all'>
      <Accordion>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>{t("coursesPage.accordion.1.heading")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categoryList?.map((obj, idx) => {
            return (
              obj?.name && (
                <ul className='pl-0' key={obj?.id}>
                  <FormControl component='fieldset'>
                    <RadioGroup
                      key={obj?.id + idx}
                      value={selectedFilter}
                      onChange={(e) => handleCategoryChange(e, obj)}
                    >
                      <FormControlLabel
                        id={obj?.id}
                        value={obj?.id}
                        control={<Radio />}
                        label={obj?.name ? obj?.name : "N/A"}
                      />
                    </RadioGroup>
                  </FormControl>
                </ul>
              )
            );
          })}
        </AccordionDetails>
      </Accordion>
      {currentFilter && allCourses?.results?.length > 0 ? (
        <Accordion>
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography>{t("coursesPage.accordion.1.subHeading")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {currentFilter?.map((obj) => {
              return (
                <ul className='pl-0' key={obj?.id}>
                  <FormControl component='fieldset'>
                    {obj?.course_set?.map((item, idx) => {
                      return (
                        item.name && (
                          <RadioGroup
                            key={obj?.id + idx}
                            onChange={(e) => handleSubCategoryChange(e, item)}
                            value={subSelected}
                          >
                            <FormControlLabel
                              id={item.id}
                              value={item.id}
                              control={<Radio />}
                              label={item.name ? item?.name : "N/A"}
                            />
                          </RadioGroup>
                        )
                      );
                    })}
                  </FormControl>
                </ul>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ) : null}
    </div>
  );
}
