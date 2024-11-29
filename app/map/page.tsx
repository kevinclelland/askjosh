"use client";

import { Metadata } from "next";
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2V2aW5jbGVsbGFuZCIsImEiOiJjbTQxcjB6djIwcW45MmpzZ2djdnhldmUwIn0.TjZKokcok2NElk1PzbeREg';

// Example campus locations
const locations = [
  {
    id: 1,
    name: "Hudsons",
    latitude: -33.93967760370606,
    longitude: 18.856739245845148,
    type: "cafe"
  },
  {
    id: 2,
    name: "Student Success Center",
    latitude: 40.7138,
    longitude: -74.0070,
    type: "study"
  },
  {
    id: 3,
    name: "University Library",
    latitude: 40.7118,
    longitude: -74.0050,
    type: "library"
  }
];

export default function MapPage() {
  const [viewState, setViewState] = useState({ 
    latitude: -33.92672184302234,
    longitude: 18.866121126737447,
    zoom: 14
  });

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Campus Map</h1>
        <p className="text-muted-foreground">
          Discover student hotspots and services around campus
        </p>
      </div>

      <div className="h-[70vh] w-full rounded-lg overflow-hidden border">
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <NavigationControl position="top-right" />
          
          {locations.map(location => (
            <Marker
              key={location.id}
              latitude={location.latitude}
              longitude={location.longitude}
            >
              <div className="text-primary cursor-pointer">
                <MapPin className="h-6 w-6" />
              </div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}