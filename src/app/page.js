'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import("./component/map"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map></Map>
    </div>
  );
};

export default Home;
