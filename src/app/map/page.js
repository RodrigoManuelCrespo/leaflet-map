'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { icon } from 'leaflet';

const ICON = icon({
    iconUrl: './placeholder.png',
    iconSize: [40, 40],
})

const Mapa = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <MapContainer style={{ height: '100vh', width: '100wh' }}
                center={[51.505, -0.09]} zoom={50} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={ICON} position={[51.505, -0.09]} />
            </MapContainer>
        </div>
    );
};

export default Mapa;
