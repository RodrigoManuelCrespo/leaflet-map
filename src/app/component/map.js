'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Map, marker, tileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css'

function App() {
    const [map, setMap] = useState();
    const mapInit = useRef(false);
    const initMap = () => {
        map && tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
    const addMarker = () => { // <===============
        map && marker([-33.8678, 151.21]).addTo(map)
    }

    useEffect(() => {
        if (!mapInit.current) {
            // Damos por inicializado el mapa
            mapInit.current = true;
            // Asignamos el contenedor del mapa
            setMap(
                new Map('map', {
                    center: [-33.8678, 151.21], // Centramos en Sidney
                    zoom: 15,
                }).setView([-33.8678, 151.21]) // Sidney
            )
        }
        if (map) {
            initMap();
        }
    }, [mapInit, map])
    return (
        <div id="map" style={{ width: "100%", height: '100vh' }}></div>
    );
}
export default App;