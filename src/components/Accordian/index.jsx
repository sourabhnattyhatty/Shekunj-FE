import React from "react";
import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio, RadioGroup } from "@mui/material";

import { setFilterValue } from "../../store/career";
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

export default function AccordionComponent({
  type,
  states,
  ownership,
  educationBoard,
  stream,
  courseLength,
  categories,
}) {
  const dispatch = useDispatch();

  const hasMoreCount = (rows = [], count = 0) => {
    return (rows.length || 0) - rows.slice(0, count)?.length || 0;
  };

  const onChangeFilter = (id, { target: { checked } }, type, subType) => {
    dispatch(setFilterValue(id, checked, type, subType));
  };

  return (
    <div className='accordion_box_all'>
      {type === "colleges" && (
        <>
          <Accordion>
            <AccordionSummary aria-controls='panel1d-content' id={stream?.name}>
              <Typography>{stream?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <FormGroup>
                  {stream?.rows?.slice(0, 3)?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={s?.isChecked}
                            onChange={(e) => onChangeFilter(s?.id, e, "stream")}
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </FormGroup>
              </ul>
              {hasMoreCount(stream?.rows, 3) > 0 && (
                <div className='has-more'>
                  {hasMoreCount(stream?.rows, 3)} More
                </div>
              )}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls='panel1d-content'
              id={ownership?.name}
            >
              <Typography>{ownership?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <FormGroup>
                  {ownership?.rows?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={s?.isChecked}
                            onChange={(e) =>
                              onChangeFilter(s?.id, e, "courseSector")
                            }
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </FormGroup>
              </ul>
            </AccordionDetails>
          </Accordion>
        </>
      )}
      {type === "schools" && (
        <>
          <Accordion>
            <AccordionSummary aria-controls='panel1d-content' id={states?.name}>
              <Typography>{states?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <RadioGroup name='radio-buttons-group'>
                  {states?.rows?.slice(0, 3)?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        value={s?.name}
                        control={
                          <Radio
                            checked={s?.isChecked}
                            onChange={(e) =>
                              onChangeFilter(s?.id, e, "topSchools", "states")
                            }
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </RadioGroup>
              </ul>
              {hasMoreCount(states?.rows, 3) > 0 && (
                <div className='has-more'>
                  {hasMoreCount(states?.rows, 3)} More
                </div>
              )}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls='panel1d-content'
              id={ownership?.name}
            >
              <Typography>{ownership?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <FormGroup>
                  {ownership?.rows?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={s?.isChecked}
                            onChange={(e) =>
                              onChangeFilter(
                                s?.id,
                                e,
                                "topSchools",
                                "ownership",
                              )
                            }
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </FormGroup>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls='panel1d-content'
              id={educationBoard?.name}
            >
              <Typography>{educationBoard?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <FormGroup>
                  {educationBoard?.rows?.slice(0, 6)?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={s?.isChecked}
                            onChange={(e) =>
                              onChangeFilter(
                                s?.id,
                                e,
                                "topSchools",
                                "educationBoard",
                              )
                            }
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </FormGroup>
              </ul>
              {hasMoreCount(educationBoard?.rows, 6) > 0 && (
                <div className='has-more'>
                  {hasMoreCount(educationBoard?.rows, 6)} More
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        </>
      )}
      {type === "governmentExams" && (
        <>
          <Accordion>
            <AccordionSummary
              aria-controls='panel1d-content'
              id={categories?.name}
            >
              <Typography>{categories?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className='pl-0'>
                <FormGroup>
                  {categories?.rows?.slice(0, 6)?.map((s) => (
                    <li key={s?.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={s?.isChecked}
                            onChange={(e) =>
                              onChangeFilter(s?.id, e, "governmentExam")
                            }
                          />
                        }
                        label={s?.name}
                      />
                    </li>
                  ))}
                </FormGroup>
              </ul>
              {hasMoreCount(categories?.rows, 6) > 0 && (
                <div className='has-more'>
                  {hasMoreCount(categories?.rows, 6)} More
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </div>
  );
}
