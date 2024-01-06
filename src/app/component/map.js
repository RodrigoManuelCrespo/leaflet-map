'use client'

import React, { useEffect, useRef, useState } from 'react';
import L, { Map, marker, tileLayer, } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { useSearchParams } from 'next/navigation'

function MapComponent() {
    const searchParams = useSearchParams()
    const lng = searchParams.get('lng')
    const lat = searchParams.get('lat')

    var greenIcon = L.icon({
        iconUrl: 'placeholder.png',
        iconSize: 50,
    });

    const [map, setMap] = useState();
    const mapInit = useRef(false);
    const initMap = () => {
        map && tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 50,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    }
    const addMarker = () => {
        map && marker([lat, lng], { icon: greenIcon }).addTo(map)
    }

    useEffect(() => {
        if (!mapInit.current) {
            mapInit.current = true;
            setMap(
                new Map('map', {
                    center: [lat, lng],
                    zoom: 15,
                }).setView([lat, lng])
            )
        }
        if (map) {
            initMap();
            addMarker();
        }
    }, [mapInit, map])
    return (
        <div id="map" style={{ width: "100%", height: '100vh' }}></div>
    );
}
export default MapComponent;