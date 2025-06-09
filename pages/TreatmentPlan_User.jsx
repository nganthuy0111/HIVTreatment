import React from 'react';
import HeaderUser from '../components/header_user';
import Footer from '../components/Footer';

const TreatmentPlanUser = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <HeaderUser userName="Nguyễn Văn B" isAnonymous={false} />
      <main className="flex-1 px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Menu chính</h3>
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-emerald-50 text-emerald-700 font-medium">
                  <Home className="h-5 w-5" />
                  <span>Trang chủ</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600 transition-colors">
                  <FileText className="h-5 w-5" />
                  <span>Phác đồ điều trị</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Lịch hẹn khám</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600 transition-colors">
                  <Activity className="h-5 w-5" />
                  <span>Theo dõi sức khỏe</span>
                </a>
              </nav>
            </div>
          </div>
          <div className="col-span-9">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-8">Phác đồ điều trị</h2>
              <p>Đây là giao diện dành cho bệnh nhân để xem phác đồ điều trị HIV.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TreatmentPlanUser;