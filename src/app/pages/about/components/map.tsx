'use client'

import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: "/about/location.png",
  iconSize: [30, 30], // Adjust icon size as needed
});

const Map = () => {
  return (
    <MapContainer  center={[7.068593, 125.61187]} zoom={20} style={{ height: '400px', width: '600px', borderRadius: '10px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[7.068593, 125.61187]} icon={customIcon}>
        <Popup>
          LAP IT SOLUTIONS INC.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
