import React from "react";
import MAPCMap from "./Map";
import { MUNI_POLYGONS } from "../../constants";
import { authenticateEsri, queryFeatureService, queryAirtableBase } from "../../util";

const meta = {
  component: MAPCMap,
  title: "Components/MAPCMap",
};
export default meta;

export const BasemapOnly = {
  name: "Basemap Only",
  args: { wrapperHeight: "95vh", mapboxToken: process.env.STORYBOOK_MAPBOX_TOKEN },
  render: (args) => <MAPCMap {...args} />,
};

// TODO: Set up separate AirTable base for Storybook and use that instead
const pointData = await queryAirtableBase({
  token: process.env.STORYBOOK_AIRTABLE_TOKEN,
  baseID: "appIU7sOcjCrwiJZU",
  tableName: "State Subsidized Public Housing",
  fields: ["FID", "DevName", "Program", "Lat", "Long"],
  sortOptions: [{ field: "FID", direction: "asc" }],
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
    data: pointData.features,
  },
];

export const AirTablePoints = {
  name: "AirTable (Points)",
  args: { wrapperHeight: "95vh", mapFocus: "state", mapboxToken: process.env.STORYBOOK_MAPBOX_TOKEN, points },
  render: (args) => <MAPCMap {...args} />,
};

const clientId = process.env.STORYBOOK_AGOL_CLIENT_ID;
const clientSecret = process.env.STORYBOOK_AGOL_CLIENT_SECRET;
const token = await authenticateEsri(clientId, clientSecret);
const serviceName = MUNI_POLYGONS;
const polygonData = await queryFeatureService({ token, serviceName });

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
    data: polygonData.features,
  },
];

export const FeatureServicePolygons = {
  name: "ESRI FeatureService (Polygons)",
  args: { wrapperHeight: "95vh", mapFocus: "state", mapboxToken: process.env.STORYBOOK_MAPBOX_TOKEN, polygons },
  render: (args) => <MAPCMap {...args} />,
};
