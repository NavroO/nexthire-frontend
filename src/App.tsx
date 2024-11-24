import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;