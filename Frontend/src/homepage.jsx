import React, { useState } from 'react';
import { Home, Users, PieChart, CalendarDays, MessageSquare, LineChart, Menu, LogOut } from 'lucide-react';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className={`bg-gray-800 w-64 min-h-screen p-4 border-r border-gray-700 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
        <h2 className="text-2xl font-semibold mb-4 text-center">RealEstate Pro</h2>
        <nav>
          <ul className="space-y-2">
            {[
              { name: 'Dashboard', icon: <Home className="mr-3 h-5 w-5" /> },
              { name: 'Clients', icon: <Users className="mr-3 h-5 w-5" /> },
              { name: 'Add Properties', icon: <PieChart className="mr-3 h-5 w-5" /> },
              { name: 'Appointments', icon: <CalendarDays className="mr-3 h-5 w-5" /> },
              { name: 'Messages', icon: <MessageSquare className="mr-3 h-5 w-5" /> },
              { name: 'Analytics', icon: <LineChart className="mr-3 h-5 w-5" /> },
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center p-2 text-gray-200 rounded hover:bg-gray-700">
                  {item.icon}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 shadow-md z-10 flex items-center justify-between p-4">
          <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6 text-gray-200" />
          </button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="text-gray-400 hover:text-gray-200">
            <LogOut className="h-5 w-5" />
          </button>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome back, User!</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Total Properties', value: '24' },
                { title: 'Active Listings', value: '12' },
                { title: 'New Leads', value: '8' },
                { title: 'Appointments', value: '5' },
              ].map((card) => (
                <div key={card.title} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                  <h3 className="text-sm font-medium text-gray-400">{card.title}</h3>
                  <div className="text-2xl font-bold">{card.value}</div>
                </div>
              ))}
            </div>

            {/* Recent Listings and Appointments */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-lg">Recent Listings</h3>
                <ul className="space-y-2 mt-4">
                  {[
                    { address: '123 Main St, Anytown, USA', time: 'Listed 2 days ago' },
                    { address: '456 Elm St, Somewhere, USA', time: 'Listed 5 days ago' },
                  ].map((listing) => (
                    <li key={listing.address} className="flex items-center">
                      <img src="/placeholder.svg" alt="Property" className="w-10 h-10 rounded mr-4" />
                      <div>
                        <p className="font-medium">{listing.address}</p>
                        <p className="text-sm text-gray-400">{listing.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-lg">Upcoming Appointments</h3>
                <ul className="space-y-2 mt-4">
                  {[
                    { title: 'Property Viewing', time: 'Today, 2:00 PM' },
                    { title: 'Client Meeting', time: 'Tomorrow, 10:00 AM' },
                  ].map((appointment) => (
                    <li key={appointment.title} className="flex items-center">
                      <CalendarDays className="w-10 h-10 p-2 rounded bg-gray-700 text-gray-200 mr-4" />
                      <div>
                        <p className="font-medium">{appointment.title}</p>
                        <p className="text-sm text-gray-400">{appointment.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
