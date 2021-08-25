import React, { FC } from "react";

import { formatSalaryRange } from "../../utils/formatSalaryRange";

import { Offer, Skill } from "../../types/offer";

import Rating from "../Rating/Rating";

import "./OfferDetails.css";

interface Props {
  offer?: Offer;
}

interface SubHeader {
  id: number;
  title: string;
  content?: string;
}

const OfferDetails: FC<Props> = ({ offer }) => {
  const {
    title,
    street,
    city,
    remote,
    salary_from,
    salary_to,
    salary_currency,
    company_name,
    company_size,
    experience_level,
    skills,
    employment_type,
    company_logo_url,
  } = { ...offer };
  const subHeader: SubHeader[] = [
    { id: 1, title: "Company name", content: company_name },
    { id: 2, title: "Company size", content: company_size },
    { id: 3, title: "EXP. lvl", content: experience_level },
    { id: 4, title: "Contract type", content: employment_type },
  ];

  return (
    <div className="DetailsWrapper">
      <div className="Header">
        <div className="HeaderLogo">
          <img src={company_logo_url} alt="log" style={{ maxWidth: "70px", maxHeight: "45px" }} />
        </div>
        <div className="OfferTitle">{title}</div>
        <div className="Location">{`${street}, ${city}`}</div>
        <div className="Remote">{remote ? "Remote" : "Office"}</div>
        <div className="SalaryRange">{formatSalaryRange(salary_from, salary_to, salary_currency)}</div>
      </div>
      <div className="SubHeader">
        {subHeader.map(({ id, title, content }: SubHeader) => (
          <div key={`${title}`} className="SubHeaderItem">
            <div className={`SubHeaderContent ${id === 1 ? "CompanyHighlight" : ""}`}>{content}</div>
            <div className="SubHeaderTitle">{title}</div>
          </div>
        ))}
      </div>
      <div className="Skills">
        <div className="SkillsTitle">Skills</div>
        <div className="SkillsRate">
          {skills?.map((skill: Skill) => (
            <div key={skill.name}>
              <div className="SkillName">{skill.name}</div>
              <Rating level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
