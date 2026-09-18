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
            Kỳ Tốc Academy được phát triển trong hệ sinh thái Kỳ Tốc Logistics, với định hướng kết nối đào tạo chuyên môn cùng thực tiễn vận hành trong Mua hàng, Xuất nhập khẩu, Logistics, Quản trị Chuỗi cung ứng và các lĩnh vực nghề nghiệp liên quan.
          </p>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Các chương trình được xây dựng dựa trên quy trình, chứng từ và tình huống thực tế, kết hợp với kinh nghiệm của đội ngũ chuyên gia đang trực tiếp hoạt động trong ngành. Không chỉ dừng lại ở đào tạo, Kỳ Tốc Academy hướng tới xây dựng mạng lưới nghề nghiệp đa ngành, kết nối học viên – chuyên gia – giảng viên – doanh nghiệp – đối tác trong nước và quốc tế.
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
                Kết nối kiến thức với thực tiễn, phát triển năng lực nghề nghiệp và xây dựng mạng lưới nghề nghiệp đa ngành, giúp cá nhân và doanh nghiệp sẵn sàng tham gia môi trường kinh doanh toàn cầu.
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
                Học từ thực tế – Thực hành theo quy trình – Kết nối đúng người. Mỗi chương trình tập trung vào khả năng ứng dụng, tư duy giải quyết vấn đề và năng lực thích ứng.
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
                Phát triển năng lực thực hành thông qua quy trình, chứng từ và tình huống thực tế; mở rộng mạng lưới nghề nghiệp; đồng thời tiếp cận cơ hội nghề nghiệp, hợp tác kinh doanh.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hệ sinh thái - Cầu nối thực tế */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Điều gì tạo nên tính thực tiễn tại Kỳ Tốc Academy?</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Kỳ Tốc Academy kết nối với hệ sinh thái doanh nghiệp, chuyên gia và đối tác đang trực tiếp hoạt động trên thị trường. Đây là nguồn đơn hàng, tình huống, kinh nghiệm và bài toán thực tế, giúp nội dung đào tạo luôn gắn với yêu cầu công việc và nhu cầu của doanh nghiệp.
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
                Đơn vị vận hành trong hệ sinh thái Kỳ Tốc, cung cấp các giải pháp vận tải đa phương thức, logistics xuyên biên giới, xuất nhập khẩu, hải quan và quản trị chuỗi cung ứng trên nhiều tuyến và thị trường.
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><MapPin className="w-5 h-5 text-primary" /> Thực hành Vận tải & Kho bãi</h4>
                  <p className="text-sm text-foreground/70">Học viên tiếp cận các bài toán thực tế về lựa chọn phương thức vận tải, tổ chức kho vận, phân luồng hàng hóa, thời gian vận chuyển, chi phí và chất lượng dịch vụ.</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Thực hành Xuất Nhập Khẩu A-Z</h4>
                  <p className="text-sm text-foreground/70">Học viên phân tích chứng từ, điều kiện thương mại quốc tế, mã HS, xuất xứ hàng hóa, thủ tục hải quan và các yêu cầu kiểm tra chuyên ngành.</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}></div>
          </div>


        </div>
      </div>
    </div>
  );
}
