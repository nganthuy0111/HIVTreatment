import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-100 to-stone-50 border-t border-stone-200 mt-auto">
      <div className="max-w-full px-8 py-12">
        <div className="grid grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-800">HIV Care System</h3>
            </div>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Hệ thống chăm sóc và điều trị HIV toàn diện, bảo mật và hiệu quả. 
              Được phát triển với công nghệ AI tiên tiến.
            </p>
            <div className="flex items-center space-x-2 text-stone-500">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Hệ thống hoạt động ổn định</span>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-stone-600 hover:text-emerald-600 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-emerald-600" />
                <div>
                  <div className="font-medium">Email hỗ trợ</div>
                  <div className="text-sm">support@hivcare.vn</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-stone-600 hover:text-emerald-600 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-emerald-600" />
                <div>
                  <div className="font-medium">Hotline 24/7</div>
                  <div className="text-sm">1900 1234</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Hỗ trợ & Chính sách</h4>
            <div className="space-y-3">
              <a href="#" className="block text-stone-600 hover:text-emerald-600 transition-colors font-medium">
                Hướng dẫn sử dụng
              </a>
              <a href="#" className="block text-stone-600 hover:text-emerald-600 transition-colors font-medium">
                Chính sách bảo mật
              </a>
              <a href="#" className="block text-stone-600 hover:text-emerald-600 transition-colors font-medium">
                Điều khoản sử dụng
              </a>
              <a href="#" className="block text-stone-600 hover:text-emerald-600 transition-colors font-medium">
                Câu hỏi thường gặp
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg mt-4">
                Hỗ trợ trực tuyến
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-stone-800 mb-6">Trạng thái hệ thống</h4>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-medium">API Server</span>
                </div>
                <div className="text-green-600 text-sm mt-1">Hoạt động bình thường</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-medium">Database</span>
                </div>
                <div className="text-green-600 text-sm mt-1">Kết nối ổn định</div>
              </div>
              <div className="text-stone-500 text-sm">
                <div>Phiên bản: v2.1.0</div>
                <div>Cập nhật: 09/06/2025</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-200 mt-12 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <p className="text-stone-600">
                © 2025 HIV Care System. Bảo lưu mọi quyền.
              </p>
              <span className="text-stone-400">|</span>
              <p className="text-stone-500">
                Phát triển bởi <span className="font-semibold text-emerald-600">xAI</span> - Công nghệ AI cho y tế
              </p>
            </div>
            <div className="flex items-center space-x-4 text-stone-400 text-sm">
              <span>Server: VN-HCM-01</span>
              <span>•</span>
              <span>Uptime: 99.9%</span>
              <span>•</span>
              <span>Response: 45ms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;