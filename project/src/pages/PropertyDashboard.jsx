import React from 'react';
import OverviewCard from '../components/PropertyDashboard/OverviewCard';
import RoomStatusChart from '../components/PropertyDashboard/RoomStatusChart';
import HousekeepingStatusChart from '../components/PropertyDashboard/HousekeepingStatusChart';
import Notifications from '../components/PropertyDashboard/Notifications';
import ActivityFeed from '../components/PropertyDashboard/ActivityFeed';

const PropertyDashboard = () => { 
  const arrival = 44;
  const departure = 12;
  const guests = 44;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Property 1</h1>

      {/* Overview Card */}
      <div className="mb-6">
        <OverviewCard 
          arrival={arrival} 
          departure={departure} 
          guests={guests} 
        />
      </div>

      {/* Room Status and Housekeeping Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
         
          <RoomStatusChart />
        </div>
        <div>
         
          <HousekeepingStatusChart />
        </div>
      </div>

      {/* Notifications and Activity Feed */}
      <div className="grid grid-cols-2 gap-4">
        <Notifications />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default PropertyDashboard;
