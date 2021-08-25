import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import "./Card.css";

interface Props {
  id: string;
  title: string;
  salaryRange: string;
  city: string;
  companyName: string;
  companyLogo: string;
  skills: string[];
  isRemote: boolean;
}

const Card: FC<Props> = ({ id, title, salaryRange, city, companyName, companyLogo, skills, isRemote }) => {
  const history = useHistory();

  return (
    <div className="CardWrapper" onClick={() => history.push(`/offer/${id}`)}>
      <div className="CompanyLogo">
        <img src={companyLogo} alt="logo" height={30} />
      </div>
      <div className="CardContent">
        <div className="CardHeader">
          <div className="Title">{title}</div>
          <div className="Salary">{salaryRange}</div>
        </div>
        <div className="CardSubContent">
          <div className="CardInfo">
            <div className="SubInfo">{companyName}</div>
            <div className="SubInfo">{city}</div>
            {isRemote && <div className="RemoteChips">Remote</div>}
          </div>
          <div className="CardSkills">
            {skills.map((skill: string) => (
              <div key={skill} className="SkillChips">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
