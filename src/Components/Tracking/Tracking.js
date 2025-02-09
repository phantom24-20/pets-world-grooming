import React, { useState, lazy, Suspense } from 'react';
import 'leaflet/dist/leaflet.css';

// Lazy load MapComponent to improve performance
const MapComponent = lazy(() => import('./Map'));

export default function OrderTracking({ orderId }) {
  const [stages] = useState([
    { id: 1, name: 'Ordered', completed: true },
    { id: 2, name: 'Packed', completed: true },
    { id: 3, name: 'Shipped', completed: true },
    { id: 4, name: 'Out for Delivery', completed: false },
    { id: 5, name: 'Delivered', completed: false },
  ]);

  const trackLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve location');
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Tracking for ID: {orderId}</h2>
      <div className="flex justify-between w-full mb-6">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center flex-1 relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${stage.completed ? 'bg-green-500' : 'bg-gray-300'}`}>{index + 1}</div>
            <span className="text-sm text-gray-700 mt-1">{stage.name}</span>
            {index < stages.length - 1 && (
              <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 h-1 w-full ${stage.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-72 border rounded-lg overflow-hidden shadow">
        <Suspense fallback={<div>Loading Map...</div>}>
          <MapComponent position={[20.5937, 78.9629]} />
        </Suspense>
      </div>
      <button onClick={trackLocation} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
        Track Live GPS Location
      </button>
    </div>
  );
}
