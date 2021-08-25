import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchData } from "./utils/fetchUtils";

import { Offer, Marker } from "./types/offer";

import OffersList from "./components/OffersList/OffersList";
import OffersMap from "./components/OffersMap/OffersMap";
import OfferDetails from "./components/OfferDetails/OfferDetails";

import "./App.css";

/*
  1. Style na szybko i sa w css przez co sporo div'ow,  czasem style sie powtarzaja, ale skoro w tresci zadania 
    nie byly najwazniejsze;) to pozwolilem sobie nie skupiac sie na nich za bardzo, standardowo uzywam STYLED-COMPONENT 
    lub SCSS, z checia bym skorzystal i zglebil wiedze z XSTYLES;
  2. Wszelkie Stringi uzylbym np. z REACT-INTL;
  3. Wyswietlane np. Chipsy zrobilbym reuzywalnym komponentem jak rowniez inne powtarzalne elementy;
  4. Do Route'ow ponizej przekazalbym po jednym komponencie oczywiscie (to co zawiera div bylo bym tym komponentem);
  5. Dodalbym jeszcze loadery;
  6. Lista pobranych ofert w OfferList - uzylbym react-window virtualized, ale juz nie zdazylem;)

  Ogolnie apka powstala w krotki czasie przez co te uwagi powyzej:)
*/

function App() {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [offersMarkers, setOffersMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    if (!offersList.length) {
      fetchData({ url: "https://test.justjoin.it/offers", method: "GET" }).then((res) => {
        const markers = res.map((offer: Offer) => ({
          id: offer.id,
          lat: offer.latitude,
          lng: offer.longitude,
          title: offer.marker_icon === "javascript" ? "JS" : offer.marker_icon,
        }));
        setOffersList(res);
        setOffersMarkers(markers);
      });
    }
  }, [offersList]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="AppWrapper">
            <OffersList offersList={offersList} />
            <OffersMap offersMarkers={offersMarkers} />
          </div>
        </Route>
        <Route
          path="/offer/:id"
          render={({ match }: any) => {
            const offer = offersList.find((p: Offer) => p.id === match.params.id);
            return (
              <div className="AppWrapper">
                <OfferDetails offer={offer} />
                <OffersMap offersMarkers={offersMarkers} offer={offer} />
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
