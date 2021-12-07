import React from "react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
  const [expanded, setExpanded] = React.useState("panel1");
  const {t} = useTranslation();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className='accordion_box_all'>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>{t('coursesPage.accordion.1.heading')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='pl-0'>
            <FormGroup>
              <li>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={t('coursesPage.accordion.1.1')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.1.2')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={t('coursesPage.accordion.1.3')}
                />
              </li>
            </FormGroup>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>{t('coursesPage.accordion.2.heading')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
     
          <ul className='pl-0'>
            <FormGroup>
              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.2.1')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.2.2')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.2.3')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.2.4')}
                />
              </li>
            </FormGroup>
          </ul>
       
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>{t('coursesPage.accordion.3.heading')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pl-0'>
            <FormGroup>
              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.3.1')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.3.2')}
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('coursesPage.accordion.3.3')}
                />
              </li>

             
            </FormGroup>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>{t('coursesPage.accordion.4.heading')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pl-0'>
            <FormGroup>
              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label='1'
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label='2'
                />
              </li>

              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label='3'
                />
              </li>

             
            </FormGroup>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
