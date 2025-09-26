"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationPicker({ setLatitude, setLongitude, setAlamat }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLatitude(e.latlng.lat);
      setLongitude(e.latlng.lng);

      // reverse geocode → ambil alamat dari lat/lon
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAlamat(data?.display_name || `${e.latlng.lat}, ${e.latlng.lng}`);
        })
        .catch(() => {
          setAlamat(`${e.latlng.lat}, ${e.latlng.lng}`);
        });
    },
  });

  return position === null ? null : <Marker position={position} />;
}

export default function MapSelect({ setLatitude, setLongitude, setAlamat }) {
  return (
    <MapContainer
      center={[-6.2, 106.8]} // default Jakarta
      zoom={13}
      style={{ height: "250px", width: "100%", borderRadius: "0.5rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <LocationPicker
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setAlamat={setAlamat}
      />
    </MapContainer>
  );
}
