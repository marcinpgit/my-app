import React, { FC } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { formatSalaryRange } from "../../utils/formatSalaryRange";

import { Offer, Skill } from "../../types/offer";

import Card from "../Card/Card";

import "./OffersList.css";

// type Style = {
//   height: string;
//   width: string;
// };

interface Props {
  offersList: Offer[];
}

const OffersList: FC<Props> = ({ offersList }) => {
  const mapSkills = (skills: Skill[]) => skills.map((skill: Skill) => skill.name);

  // const renderCard = ({ index, style }: { index: number; style: any }) => {
  // };

  return (
    <div className="OffersWrapper">
      {offersList ? (
        offersList.map((offer: Offer) => (
          <Card
            key={offer.id}
            id={offer.id}
            title={offer.title}
            salaryRange={formatSalaryRange(offer.salary_from, offer.salary_to, offer.salary_currency)}
            city={offer.city}
            companyName={offer.company_name}
            companyLogo={offer.company_logo_url}
            skills={mapSkills(offer.skills)}
            isRemote={offer.remote}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
      {/* <div style={{ height: "90vh", width: "100%" }}>
        <AutoSizer>
          {({ height, width }: Style) => (
            <FixedSizeList height={height} width={width} itemCount={offersList?.length} itemSize={1}>
              {renderCard}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div> */}
    </div>
  );
};

export default OffersList;
