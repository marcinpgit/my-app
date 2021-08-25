import React, { FC } from "react";

import "./LocationMarker.css";

interface Props {
  title: string;
  isActiveMarker: boolean;
  lat: number;
  lng: number;
}

const LocationMarker: FC<Props> = ({ title, isActiveMarker }) => (
  <div className={`Marker ${isActiveMarker ? "ActiveOffer" : ""}`}>
    <p className="MarkerTitle">{title}</p>
  </div>
);

export default LocationMarker;
