import React from "react";
import MAPCMap from "./Map";
import { MUNI_POLYGONS } from "../../constants";
import { authenticateEsri, queryFeatureService, queryAirtableBase } from "../../util";

const meta = {
  component: MAPCMap,
  title: "MAPC/MAPCMap",
};
export default meta;

export const RegionalMapOnly = (args) => <MAPCMap {...args} />;
RegionalMapOnly.args = { wrapperHeight: "95vh" };

export const StateMapOnly = (args) => <MAPCMap {...args} />;
StateMapOnly.args = { wrapperHeight: "95vh", mapFocus: "state" };

// TODO: Set up separate AirTable base for Storybook and use that instead
const pointData = await queryAirtableBase({
  baseID: "appIU7sOcjCrwiJZU",
  tableName: "State Subsidized Public Housing",
  fields: ["FID", "DevName", "Program", "Lat", "Long"],
  sortOptions: [{field: "FID", direction: "asc"}],
  latitudeField: "Lat",
  longitudeField: "Long",
});

const points = [
  {
    id: "public-housing-points",
    pathOptions: {},
    keyField: "FID",
    latitudeField: "Lat",
    longitudeField: "Long",
    radius: 200,
    data: pointData.features
  }
];

export const AirTablePoints = (args) => <MAPCMap {...args} />;
AirTablePoints.args = { wrapperHeight: "95vh", mapFocus: "state", points };

const clientId = process.env.STORYBOOK_AGOL_CLIENT_ID;
const clientSecret = process.env.STORYBOOK_AGOL_CLIENT_SECRET;
const token = await authenticateEsri(clientId, clientSecret);
const serviceName = MUNI_POLYGONS;
const polygonData = await queryFeatureService({token, serviceName});

const polygons = [
  {
    id: "muni-polygons",
    styleFunction: () => {
      return {
        fillColor: "#69bbf6",
        color: "#219af1",
        weight: 0.8,
        fillOpacity: 0.5,
        opacity: 0.5,
      };
    },
    data: polygonData.features
  }
];

export const FeatureServicePolygons = (args) => <MAPCMap {...args} />;
FeatureServicePolygons.args = { wrapperHeight: "95vh", mapFocus: "state", polygons };
