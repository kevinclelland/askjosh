"use client";

import Map, { Marker, NavigationControl } from 'react-map-gl';
import { useState } from 'react';
import { Coffee, BookOpen, Library } from 'lucide-react';
import { cn } from '@/lib/utils';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2V2aW5jbGVsbGFuZCIsImEiOiJjbTQxcjB6djIwcW45MmpzZ2djdnhldmUwIn0.TjZKokcok2NElk1PzbeREg';

const getMarkerIcon = (type: string) => {
  switch (type) {
    case 'cafe':
      return Coffee;
    case 'study':
      return BookOpen;
    case 'library':
      return Library;
    default:
      return Coffee;
  }
};

// Example campus locations
const locations = [
  {
    id: 1,
    name: "Ya Ya Cafe",
    latitude: -33.94010023927723,
    longitude: 18.850142164542124,
    type: "cafe"
  },
  {
    id: 2,
    name: "Aandklas",
    latitude: -33.93390763546058,
    longitude: 18.859208885771405,
    type: "study"
  },
  {
    id: 3,
    name: "KwikSpar",
    latitude: -33.933586330849025,
    longitude: 18.884959799095796,
    type: "library"
  }
];

export default function MapPage() {
  const [viewState, setViewState] = useState({
    latitude: -33.93248588295578,
    longitude: 18.86445841414804,
    zoom: 14
  });
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);

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
              anchor="bottom"
            >
              <div
                className="relative"
                onMouseEnter={() => setActiveMarkerId(location.id)}
                onMouseLeave={() => setActiveMarkerId(null)}
              >
                {activeMarkerId === location.id && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-lg shadow-lg border whitespace-nowrap">
                    {location.name}
                  </div>
                )}
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200",
                    "bg-background border-2 shadow-lg cursor-pointer hover:scale-110",
                    activeMarkerId === location.id
                      ? "border-primary text-primary scale-110"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {(() => {
                    const Icon = getMarkerIcon(location.type);
                    return (
                      <Icon className="h-6 w-6" />
                    );
                  })()}
                </div>
              </div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}