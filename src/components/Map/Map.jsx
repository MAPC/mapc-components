import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Spinner from "react-bootstrap/Spinner";

import { MapContainer, TileLayer, ZoomControl, GeoJSON, Circle } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { mapboxAttribution, stateMapProps, regionMapProps } from "../../constants";
import { createTileURL, authenticateEsriFromEnv, queryFeatureService, queryAirtableBase } from "../../util";

// Importing "for side effects", i.e., to extend leaflet with smooth scrolling
import "./SmoothScroll";

const LoadingOverlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0.5);
  z-index: 798;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  right: calc(50% - 32.5px);
  height: 75px;
  width: 75px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;

const LoadingIndicator = styled(Spinner)``;

const Wrapper = styled.div`
  div.leaflet-container {
    height: ${(props) => props.height};
  }
`;

export const MAPCMap = ({ wrapperHeight = "100vh", mapFocus = "region", polygons={}, points={} }) => {
  let focusProps = regionMapProps; // Default: MAPC regional map
  if (mapFocus === "state") {
    focusProps = stateMapProps;
  }

  let layers = [];
  // TODO: provide options for indicating "blocking" vs "non-blocking" layers
  if (polygons.length == 0 && points.length == 0) {
    layers = [(
      <LoadingOverlay>
        <LoadingContainer>
          <LoadingIndicator
            animation="border"
            role="status"
          >
            <span style={{ display: "none" }}>Loading...</span>
          </LoadingIndicator>
        </LoadingContainer>
      </LoadingOverlay>
    )];
  }

  if (polygons.length > 0) {
    for (let polyConfig of polygons) {
      // TODO: Set up default polygon colors in constants
      layers.push(
        <GeoJSON
          id={polyConfig.id}
          key={polyConfig.id}
          data={polyConfig.data}
          style={polyConfig.styleFunction}
        />
      )
    }
  }

  if (points.length > 0) {
    for (let pointConfig of points) {
      for (let point of pointConfig.data) {
        // TODO: Set up default point colors in constants
        layers.push(
          <Circle
            key={point.properties[pointConfig.keyField]}
            pathOptions={pointConfig.pathOptions }
            radius={pointConfig.radius}
            center={[
              point.properties[pointConfig.latitudeField],
              point.properties[pointConfig.longitudeField]
            ]}
          />
        );
      }
    }
  }

  return (
    <Wrapper height={wrapperHeight}>
      <MapContainer
        {...focusProps}
        zoomControl={false}
        preferCanvas={false}
        scrollWheelZoom={false} // disable original zoom function
        smoothWheelZoom={true} // enable smooth zoom
        smoothSensitivity={2.5} // zoom speed. default is 1
      >
        <TileLayer
          url={createTileURL("light-v10")}
          attribution={mapboxAttribution}
          tileSize={512}
          zoomOffset={-1}
        />
        { layers }
        <ZoomControl position="bottomright" />
      </MapContainer>
    </Wrapper>
  );
};

export default MAPCMap;
