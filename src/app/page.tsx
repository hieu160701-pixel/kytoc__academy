import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BriefcaseBusiness, Globe2, BookOpen, Clock, PlayCircle } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { InstructorCard } from "@/components/ui/InstructorCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[600px] flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Học viện nghiệp vụ SCM<br />
              <span className="text-primary">của người đang chạy đơn</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Học trên đơn thật — làm trên tuyến Trung-Việt. Chúng tôi đào tạo nghiệp vụ Supply Chain, Logistics và Mua hàng bằng quy trình thực chiến.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-base rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30">
                Khám phá khóa học
              </Button>
              <Button size="lg" variant="outline" className="text-base rounded-full px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md">
                <PlayCircle className="mr-2 w-5 h-5" /> Video giới thiệu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 Trụ Cột (Features) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sự khác biệt tại Kỳ Tốc</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Không lý thuyết suông. Mọi kiến thức đều được đúc kết từ hệ thống vận hành thực tế đang chạy hàng ngàn đơn hàng mỗi ngày.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Học trên đơn thật</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Case study từ packing list thực tế, incoterms trên tuyến bộ (EXW, FCA, DAF) - không sử dụng case giả định.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Giảng từ người đang làm</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Đội ngũ giảng viên là các Head đang trực tiếp vận hành: H1 Mua hàng, H2 Chứng từ, H3/H4 Kho TQ & VN.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-600 mb-4">
                  <BriefcaseBusiness className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Thực tập tại Kỳ Tốc</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Trải nghiệm thực tế tại hệ thống kho HN / HCM / TQ. Ưu tiên tuyển dụng nội bộ cho học viên xuất sắc.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Thống kê (Stats) */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Học viên tốt nghiệp</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-sm md:text-base text-white/80">Làm việc đúng ngành</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base text-white/80">Giảng viên thực chiến</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-sm md:text-base text-white/80">Hệ thống kho thực tế</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Khóa học nổi bật */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Khóa học tiêu biểu</h2>
              <p className="text-foreground/70">Các lộ trình đào tạo chuyên sâu được xây dựng từ thực tiễn.</p>
            </div>
            <Link href="/khoa-hoc" className="hidden md:flex text-primary font-medium hover:underline items-center">
              Xem tất cả <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Logistics cho người mới"
              slug="logistics-cho-nguoi-moi"
              track="Logistics"
              color="bg-teal-700"
              duration="18 buổi"
              format="Offline / Hybrid"
              description="Tổng quan vận hành SCM. Tuyến TQ-VN, Incoterms trên tuyến bộ, đặc tả hàng từ packing list."
              instructor="Mr. Tít (Head H1)"
              bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
            />
            <CourseCard
              title="Mua hàng thực chiến"
              slug="mua-hang-thuc-chien"
              track="Mua hàng"
              color="bg-green-700"
              duration="14 buổi"
              format="Offline / Hybrid"
              description="Vai trò Purchasing, Sourcing 1688, phân tích TCO, hoàn thuế XK TQ, đàm phán hợp đồng."
              instructor="Ms. Anna (Head H2)"
              bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            />
            <CourseCard
              title="Supply Chain Manager"
              slug="supply-chain-manager"
              track="SCM Manager"
              color="bg-blue-800"
              duration="12 buổi"
              format="Offline / Hybrid"
              description="Khóa học Flagship. Engine 5 bước A1-A4, TCO trước khi chạy đơn, P&L giải pháp vận hành."
              instructor="Mr. Alex (CEO)"
              bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
              isHot={true}
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full">Xem tất cả khóa học</Button>
          </div>
        </div>
      </section>

      {/* 5. Giảng viên (Instructors) */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Đội ngũ Giảng viên</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Học từ những người đang trực tiếp chạy hàng ngàn đơn hàng mỗi ngày.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <InstructorCard
              name="Mr. Alex"
              role="CEO / SCM Manager"
              company="DPT VINA HOLDINGS"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574"
              color="primary"
            />
            <InstructorCard
              name="Ms. Anna"
              role="Head of Purchasing (H1)"
              company="Kỳ Tốc Logistics"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576"
              color="green"
            />
            <InstructorCard
              name="Mr. Tít"
              role="Head of Logistics"
              company="Kỳ Tốc Logistics"
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574"
              color="teal"
            />
            <InstructorCard
              name="Ms. Hương"
              role="Head of Docs (H2)"
              company="Kỳ Tốc Logistics"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* 6. Đối tác (Partners Marquee) */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-medium text-foreground/50 mb-8 uppercase tracking-widest">ĐỐI TÁC CHIẾN LƯỢC CỦA CHÚNG TÔI</p>
          <div className="flex space-x-12 animate-marquee items-center justify-center opacity-70">
            <div className="text-2xl font-bold font-mono">DPT VINA</div>
            <div className="text-2xl font-bold font-mono text-red-600">KỲ TỐC LOGISTICS</div>
            <div className="text-2xl font-bold font-mono text-red-700">DEKA FURNITURE</div>
            <div className="text-2xl font-bold font-mono">EMPEROR</div>
            <div className="text-2xl font-bold font-mono">BONA</div>
          </div>
        </div>
      </section>

      {/* 6.5 Hệ sinh thái thực chiến */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hệ Sinh Thái Vận Hành Thực Tế</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Học viên tại Kỳ Tốc Academy không chỉ học trên giấy. Các bạn được tiếp xúc và xử lý các case study từ mạng lưới doanh nghiệp thực tế của chúng tôi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Ky Toc Logistics */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary text-xl font-bold">KTL</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Kỳ Tốc Logistics</h3>
                <p className="text-foreground/70 text-sm mb-4">Đơn vị Vận tải đa phương thức & Dịch vụ XNK. Xử lý hàng ngàn container trên tuyến Trung - Việt với hệ thống kho bãi trực tiếp tại Quảng Châu, Bằng Tường, Hà Nội, TP.HCM.</p>
                <div className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full inline-block">Nơi học viên thực hành thủ tục Hải quan</div>
              </div>
            </div>

            {/* DEKA Furniture */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-full bg-red-600/10 flex-shrink-0 flex items-center justify-center text-red-600 text-xl font-bold">DEKA</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">DEKA Furniture</h3>
                <p className="text-foreground/70 text-sm mb-4">Công ty CP Thương mại Công nghiệp DEKA. Đối tác kiến tạo không gian, cung ứng trọn gói nội thất nhập khẩu cao cấp cho các rạp chiếu phim hàng đầu (Beta, Aeon).</p>
                <div className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full inline-block">Nguồn Case study Mua hàng & Sourcing 1688</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Tương tác */}
      <section className="py-24 bg-card border-y relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pattern-dots-md text-primary/10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Sẵn sàng bước vào ngành Logistics?</h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Gia nhập cộng đồng học viên Kỳ Tốc Academy ngay hôm nay để nhận được sự hướng dẫn trực tiếp từ các chuyên gia vận hành.
          </p>
          <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
            Đăng ký nhận tư vấn ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
