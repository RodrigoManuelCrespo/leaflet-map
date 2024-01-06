'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import("./component/map"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapComponent />
    </div>
  );
};

export default Home;
