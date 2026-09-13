import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Bộ phận tuyển sinh của Kỳ Tốc Academy luôn sẵn sàng tư vấn lộ trình học phù hợp nhất với định hướng nghề nghiệp của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cơ sở Hà Nội</h3>
                  <p className="text-foreground/70 text-sm">Tầng 3, Tòa nhà DPT VINA, Số 4B Vương Thừa Vũ, Khương Đình, Thanh Xuân, Hà Nội</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hotline</h3>
                  <p className="text-foreground/70 text-sm">098.765.4321 (Tư vấn tuyển sinh)</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-foreground/70 text-sm">academy@kytoc.vn</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Giờ làm việc</h3>
                  <p className="text-foreground/70 text-sm">Thứ 2 - Thứ 7: 8h30 - 17h30</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden border">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1d3724.896756616016!2d105.81938561533177!3d21.00078759424699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9a2ab5d491%3A0x6a213e488d5e1a38!2zVsawxqFuZyBUaOG7q2EgVsWpLCBLaMawxqFuZyBNYWksIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <Card className="shadow-lg border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Họ và tên *</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Nhập họ tên của bạn" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
                    <input type="tel" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Nhập số điện thoại" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Nhập email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Khóa học quan tâm</label>
                    <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Logistics cho người mới</option>
                      <option>Mua hàng thực chiến</option>
                      <option>Supply Chain Manager</option>
                      <option>Chưa xác định - Cần tư vấn</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Nội dung tin nhắn</label>
                    <textarea className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 h-32" placeholder="Ghi chú thêm (nếu có)"></textarea>
                  </div>
                  <Button className="w-full py-6 text-lg rounded-xl">Nhận tư vấn ngay</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
