import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Building2, MapPin, Target, Zap, BookOpen, TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Về Kỳ Tốc Academy</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-4">
            Học viện nghiệp vụ Chuỗi cung ứng (SCM) của những người đang ngày đêm chạy đơn. Chúng tôi tự hào mang đến môi trường đào tạo <span className="font-bold text-primary">thực chiến 100%</span>.
          </p>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            <strong>SCM (Supply Chain Management - Quản trị Chuỗi cung ứng)</strong> là toàn bộ quá trình quản lý luồng hàng hóa, dữ liệu và tài chính từ nhà cung cấp đến nhà sản xuất, nhà bán buôn, nhà bán lẻ và người tiêu dùng cuối cùng. Hiểu và làm chủ SCM giúp tối ưu hóa chi phí và tăng sức cạnh tranh cho doanh nghiệp.
          </p>
        </div>

        {/* Mục đích & Lợi ích */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          <Card className="border-none shadow-md bg-card">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mục Đích</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Rút ngắn khoảng cách giữa lý thuyết sách vở và thực tế doanh nghiệp. Đào tạo ra đội ngũ nhân sự SCM có thể bắt tay vào làm ngay, giảm thiểu rủi ro cho doanh nghiệp.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-card">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Triết Lý Đào Tạo</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                "Lấy chứng từ thực tế đè lý thuyết". Mỗi bài học đều là một case study thật sự đã và đang diễn ra tại các cửa khẩu, bến cảng trên tuyến Trung - Việt.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-card">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lợi Ích Học Viên</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Có ngay kinh nghiệm thực chiến tương đương 1-2 năm đi làm. Sở hữu network với các chuyên gia đầu ngành và cơ hội thực tập, làm việc trực tiếp tại Kỳ Tốc.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hệ sinh thái - Cầu nối thực tế */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tại sao chúng tôi dám cam kết "Thực Chiến"?</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Bởi vì đứng sau Kỳ Tốc Academy không phải là một trung tâm đào tạo đơn thuần, mà là toàn bộ hệ sinh thái doanh nghiệp <span className="font-bold">DPT VINA HOLDINGS</span> đang vận hành hàng ngàn đơn hàng mỗi ngày. Đây chính là "phòng lab" khổng lồ cho học viên.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-xl shadow-sm border">
                  <img src="/images/partners/partner2.png" alt="Kỳ Tốc Logistics" className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold">Kỳ Tốc Logistics</h3>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Đơn vị chủ lực trong việc vận tải đa phương thức và xử lý chuỗi cung ứng. Sở hữu hệ thống kho bãi trực tiếp tại Quảng Châu, Bằng Tường (Trung Quốc) và Hà Nội, TP.HCM (Việt Nam).
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><MapPin className="w-5 h-5 text-primary" /> Nơi thực hành Vận tải & Kho bãi</h4>
                  <p className="text-sm text-foreground/70">Học viên trực tiếp quan sát quy trình xếp dỡ, phân luồng hàng hóa và tối ưu chi phí vận tải đường bộ, đường biển.</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Nơi thực hành Xuất Nhập Khẩu A-Z</h4>
                  <p className="text-sm text-foreground/70">Làm quen với phần mềm hải quan, kiểm tra pháp lý hàng hóa thực tế thay vì bộ chứng từ giả định trên lớp.</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl bg-cover bg-center shadow-lg lg:order-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }}></div>
            <div className="lg:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-xl shadow-sm border">
                  <img src="/images/partners/partner1.png" alt="DEKA Furniture" className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-red-600">DEKA Furniture</h3>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Công ty CP Thương mại Công nghiệp DEKA - Đối tác chiến lược kiến tạo không gian. Chuyên cung ứng danh mục đa dạng gồm máy móc, vật tư xây dựng, vật tư hoàn thiện và nội thất. Đã và đang tham gia các dự án lớn như: Rạp chiếu phim (Aeon Beta Cinema, Beta Nowzone), Bệnh viện, Khu đô thị thương mại & NOXH (2000-4000 căn hộ), và hệ thống Resort khách sạn (500-1000 phòng).
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-red-600" /> Case study Sourcing & Nhập khẩu</h4>
                  <p className="text-sm text-foreground/70">Học viên được phân tích bài toán nhập khẩu trực tiếp, đàm phán giá từ hệ thống 300+ nhà cung cấp toàn cầu của DEKA.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-red-600" /> Quản trị rủi ro dự án</h4>
                  <p className="text-sm text-foreground/70">Học cách xử lý tiến độ, CO, CQ cho các dự án yêu cầu khắt khe về thời gian và chất lượng lắp đặt hoàn thiện.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
