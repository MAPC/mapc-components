export const mapboxBaseURL = "https://api.mapbox.com/";
export const mapboxAttribution = `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`;

export const zoomLevels = {
  country: 4,
  state: 8.5,
  region: 10,
  municipality: 11,
  censusTract: 15,
  parcel: 18,
};

export const stateMapProps = {
  center: [42.030590752172635, -71.82353838842278],
  zoom: zoomLevels.state,
  zoomDelta: 0.25,
  maxZoom: zoomLevels.parcel,
  minZoom: zoomLevels.country,
  zoomSnap: 0.25,
};

export const regionMapProps = {
  center: [42.3457, -71.17852],
  zoom: zoomLevels.region,
  zoomDelta: 0.25,
  maxZoom: zoomLevels.parcel,
  minZoom: zoomLevels.country,
  zoomSnap: 0.25,
};

// TOOD: Define max/min zoom levels in terms of geographies, e.g. state, county, municipality, census tract, parcel

export const lightStyle = "light-v10";

export const AGOL_ORG_HASH = "c5WwApDsDjRhIVkH"
export const MAP_DB = "MapCache";
export const GEOMETRY_STORE = "geometries";
export const MUNI_POLYGONS = "simplified_muni_polygons_2";
