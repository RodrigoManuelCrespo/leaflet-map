'use client'

import React, { useEffect, useRef, useState } from 'react';
import L, { Map, marker, tileLayer, } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { useSearchParams } from 'next/navigation'

function MapComponent() {
    const [map, setMap] = useState();

    const searchParams = useSearchParams()
    let lng = searchParams.get('lng')
    let lat = searchParams.get('lat')
    let img = searchParams.get('img')
    const mapInit = useRef(false);

    const initMap = () => {
        map && tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 50,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    }

    const addMarker = () => {
        if (searchParams.get('lng') && searchParams.get('lat')) {
            let icon
            if (img) {
                icon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style='background-color:#3d3d3d;' class='marker-pin'></div><img src="${img}">`,
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                });
            } else {
                icon = L.icon({
                    iconUrl: 'placeholder.png',
                    iconSize: 30,
                });
            }

            map && marker([lat, lng], { icon: icon }).addTo(map)
        }
    }

    useEffect(() => {
        if (!mapInit.current) {
            mapInit.current = true;
            setMap(
                new Map('map', {
                    center: [lat || -34.60490992036861, lng || -58.372628586250976],
                    zoom: 15,
                }).setView([lat || -34.60490992036861, lng || -58.372628586250976])
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