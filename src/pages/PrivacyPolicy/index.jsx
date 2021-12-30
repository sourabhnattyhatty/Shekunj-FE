import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Header, Footer } from "../../components";
import "./index.scss";

function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div>
      <Header loginPage={false} page='home' />

      <div className='priva_policy'>
        <Container>
          <h2>{t("privacyPolicyPage.heading.1")}</h2>
        </Container>
      </div>

      <div className='priva_policy_content'>
        <Container>
          <h3>{t("privacyPolicyPage.heading.2")}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            diam non, imperdiet justo semper proin cursus morbi. Morbi amet in
            vehicula nunc a ac odio felis urna. Diam ut ullamcorper luctus urna,
            urna sollicitudin. Non nunc elementum orci.
          </p>
          <hr />
          <h3>{t("privacyPolicyPage.heading.3")}</h3>
          <p>
            <b>"{t("privacyPolicyPage.content.1.1")}"</b> -{" "}
            {t("privacyPolicyPage.content.1.2")}:
          </p>

          <ul>
            <li>{t("privacyPolicyPage.content.2")}</li>

            <li>{t("privacyPolicyPage.content.3")}</li>

            <li>{t("privacyPolicyPage.content.2")}</li>

            <li>{t("privacyPolicyPage.content.3")}</li>

            <li>{t("privacyPolicyPage.content.4")}</li>

            <li>{t("privacyPolicyPage.content.5")}</li>

            <li>{t("privacyPolicyPage.content.6")}</li>

            <li>{t("privacyPolicyPage.content.7")}</li>

            <li>{t("privacyPolicyPage.content.8")}</li>

            <li>{t("privacyPolicyPage.content.9")}</li>

            <li>{t("privacyPolicyPage.content.10")}</li>

            <li>{t("privacyPolicyPage.content.11")}</li>
          </ul>

          <h3>{t("privacyPolicyPage.heading.4")}</h3>

          <p>{t("privacyPolicyPage.content.12")}</p>

          <p>{t("privacyPolicyPage.content.13")}</p>

          <p className='para_bg'>{t("privacyPolicyPage.content.14")}</p>

          <hr />

          <h3>{t("privacyPolicyPage.heading.5")}</h3>

          <p>{t("privacyPolicyPage.content.15")}</p>

          <p>{t("privacyPolicyPage.content.16")}</p>

          <hr />

          <h3>{t("privacyPolicyPage.heading.6")}</h3>
          <p>{t("privacyPolicyPage.content.17")}</p>
          <hr />
          <h3>{t("privacyPolicyPage.heading.7")}</h3>

          <p>{t("privacyPolicyPage.content.18")}</p>

          <p>{t("privacyPolicyPage.content.19")}</p>

          <hr />

          <h3>{t("privacyPolicyPage.heading.8")}</h3>

          <p>{t("privacyPolicyPage.content.20")}</p>

          <p>{t("privacyPolicyPage.content.21")}</p>

          <p>{t("privacyPolicyPage.content.22")}</p>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default PrivacyPolicy;
