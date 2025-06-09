import React, { useState, useEffect } from 'react';
import { User, LogOut, Clock, Shield, Phone, Mail, Heart, Settings, Bell, Search, Activity, FileText, Calendar, Users, BarChart3, Home } from 'lucide-react';

const HeaderUser = ({ userName = "Bệnh nhân", isAnonymous = false }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Ho_Chi_Minh'
    }) + ' +07, ' + date.toLocaleDateString('vi-VN');
  };

  return (
    <header className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 text-white shadow-xl">
      <div className="max-w-full px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-emerald-500 p-3 rounded-xl shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">HIV Care System</h1>
              <p className="text-emerald-100 text-sm">Hệ thống chăm sóc và điều trị HIV toàn diện</p>
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-200">
              <Home className="h-5 w-5" />
              <span className="font-medium">Trang chủ</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-200">
              <FileText className="h-5 w-5" />
              <span className="font-medium">Phác đồ điều trị</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-200">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Lịch hẹn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all duration-200">
              <Activity className="h-5 w-5" />
              <span className="font-medium">Theo dõi</span>
            </a>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-emerald-300" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..."
                className="bg-emerald-600 bg-opacity-50 text-white placeholder-emerald-200 pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:bg-opacity-70 transition-all"
              />
            </div>
            <div className="flex items-center space-x-2 text-emerald-100 bg-emerald-600 bg-opacity-30 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5" />
              <div className="text-right">
                <div className="text-sm font-medium">{formatTime(currentTime)}</div>
              </div>
            </div>
            <button className="relative p-2 rounded-lg hover:bg-emerald-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center space-x-3 bg-emerald-600 bg-opacity-30 px-4 py-2 rounded-lg">
              <User className="h-6 w-6" />
              <div className="text-right">
                <div className="font-medium">
                  {isAnonymous ? "Người dùng ẩn danh" : userName}
                </div>
                <div className="text-emerald-200 text-xs">Bệnh nhân</div>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-emerald-600 transition-colors">
              <Settings className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-400 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg">
              <LogOut className="h-5 w-5" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;