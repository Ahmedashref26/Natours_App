/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWhtZWQyMTIiLCJhIjoiY2wxanh2YmtqMGUwYjNrazF3eDc4eGozYyJ9.lAn4L7HzCGDgAPiiDIjaBg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ahmed212/cl1lbwnpz000j14piuxjb0eah',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.map((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({ focusAfterOpen: false, offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
