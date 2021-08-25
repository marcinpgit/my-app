import React, { FC } from "react";
import GoogleMapReact from "google-map-react";

import { INIT_LOCATION, DEFAULT_ZOOM, OFFER_ZOOM } from "../../consts/location";

import { Offer, Marker } from "../../types/offer";

import LocationMarker from "../../components/LocationMarker/LocationMarker";

import "./OffersMap.css";

interface Props {
  offersMarkers: Marker[];
  offer?: Offer;
}

const OffersMap: FC<Props> = ({ offersMarkers, offer }) => {
  const { latitude, longitude, id } = offer || {};

  const offerLocation = { lat: latitude, lng: longitude };

  return (
    <div className="MapWrapper">
      <GoogleMapReact
        center={offer ? offerLocation : INIT_LOCATION}
        zoom={offer ? OFFER_ZOOM : DEFAULT_ZOOM}
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        }}
      >
        {offersMarkers?.map((marker: Marker, index: number) => (
          <LocationMarker
            key={`${marker.lat}-${index}`}
            isActiveMarker={id === marker.id}
            lat={marker.lat}
            lng={marker.lng}
            title={marker.title}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default OffersMap;
