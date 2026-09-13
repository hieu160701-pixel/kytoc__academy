import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, CalendarDays, Users } from "lucide-react";

import { notFound } from "next/navigation";

const courseData: Record<string, any> = {
  "logistics-cho-nguoi-moi": {
    title: "Logistics cho người mới",
    description: "Tổng quan vận hành SCM. Tuyến TQ-VN, Incoterms trên tuyến bộ, đặc tả hàng từ packing list.",
    price: "4.500.000đ",
    duration: "18 Buổi học",
    instructorName: "Mr. Tít",
    instructorRole: "Head of Logistics",
    instructorDesc: "Hơn 8 năm kinh nghiệm thực chiến xử lý hàng chục ngàn container cho các doanh nghiệp lớn.",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    outcomes: [
      "Hiểu toàn bộ quy trình Logistics tuyến Trung-Việt",
      "Xử lý thành thạo các tình huống rủi ro thực tế",
      "Khai báo hải quan, đọc hiểu và kiểm tra chứng từ",
      "Làm việc trực tiếp trên hệ thống của công ty FWD"
    ],
    curriculum: [
      {
        title: "Phần 1: Tổng quan và Kiến thức nền",
        items: ["Bản chất của Logistics tuyến bộ Trung - Việt", "Incoterms 2020 ứng dụng thực tế (EXW, FCA, DAF)", "Quy trình Mua hàng & Nhập khẩu uỷ thác"]
      },
      {
        title: "Phần 2: Xử lý chứng từ",
        items: ["Hợp đồng ngoại thương, Invoice, Packing List", "Bộ chứng từ vận tải (Bill of Lading / Waybill)", "Giấy chứng nhận xuất xứ (C/O Form E) và các lỗi thường gặp"]
      },
      {
        title: "Phần 3: Khai báo Hải quan & Kho vận",
        items: ["Sử dụng phần mềm ECUS5/VNACCS", "Phân luồng, tra mã HS Code, áp thuế suất", "Thực tập 2 buổi tại kho hàng thực tế của Kỳ Tốc"]
      }
    ]
  },
  "mua-hang-thuc-chien": {
    title: "Mua hàng thực chiến",
    description: "Vai trò Purchasing, Sourcing 1688, phân tích TCO, hoàn thuế XK TQ, đàm phán hợp đồng.",
    price: "5.500.000đ",
    duration: "14 Buổi học",
    instructorName: "Ms. Anna",
    instructorRole: "Head of Purchasing (H1)",
    instructorDesc: "Chuyên gia tìm kiếm nguồn hàng và tối ưu hóa chi phí (TCO) từ các xưởng sản xuất lớn nhất Quảng Châu.",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    outcomes: [
      "Tự tìm kiếm và đánh giá nhà cung cấp uy tín trên 1688, Taobao",
      "Kỹ năng đàm phán giá cả và MOQ với xưởng Trung Quốc",
      "Phân tích Tổng chi phí sở hữu (TCO) trước khi nhập hàng",
      "Tối ưu quy trình thanh toán và hoàn thuế xuất khẩu"
    ],
    curriculum: [
      {
        title: "Phần 1: Sourcing 1688 cơ bản & nâng cao",
        items: ["Công cụ tìm kiếm nguồn hàng, đánh giá nhà cung cấp", "Sử dụng từ khóa tiếng Trung chuyên ngành", "Các chỉ số uy tín xưởng cần quan tâm"]
      },
      {
        title: "Phần 2: Đàm phán và Ký kết hợp đồng",
        items: ["Kịch bản đàm phán giá, MOQ, điều kiện bảo hành", "Thanh toán an toàn qua Alipay, Wechat, T/T", "Lập và rà soát hợp đồng ngoại thương (Sales Contract)"]
      },
      {
        title: "Phần 3: Tối ưu TCO & Hoàn thuế",
        items: ["Phân tích TCO (Total Cost of Ownership)", "Nghiệp vụ hoàn thuế xuất khẩu tại Trung Quốc", "Lựa chọn phương án vận chuyển phù hợp"]
      }
    ]
  },
  "supply-chain-manager": {
    title: "Supply Chain Manager",
    description: "Khóa học Flagship. Engine 5 bước A1-A4, TCO trước khi chạy đơn, P&L giải pháp vận hành.",
    price: "8.500.000đ",
    duration: "12 Buổi học",
    instructorName: "Mr. Alex",
    instructorRole: "CEO - DPT VINA HOLDINGS",
    instructorDesc: "Kiến trúc sư của hệ sinh thái DPT VINA, tác giả của 'Engine 5 bước' độc quyền.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    outcomes: [
      "Làm chủ hệ thống vận hành Engine 5 bước độc quyền",
      "Quản trị P&L, tối ưu lợi nhuận cho toàn bộ chuỗi cung ứng",
      "Thiết kế cấu trúc phòng ban Logistics & Mua hàng",
      "Xây dựng chiến lược dự phòng rủi ro đứt gãy chuỗi"
    ],
    curriculum: [
      {
        title: "Phần 1: Engine 5 bước A1-A4",
        items: ["Khái quát mô hình quản trị chuỗi cung ứng hiện đại", "Giải phẫu Engine 5 bước A1-A4 của Kỳ Tốc", "Áp dụng mô hình vào doanh nghiệp vừa và nhỏ"]
      },
      {
        title: "Phần 2: Quản trị P&L và Tối ưu chi phí",
        items: ["Phân tích báo cáo lãi lỗ (P&L) trong Logistics", "Chiến lược cắt giảm chi phí chìm, chi phí cơ hội", "Tối ưu dòng tiền và quay vòng vốn"]
      },
      {
        title: "Phần 3: Thiết kế tổ chức & Quản trị rủi ro",
        items: ["Cơ cấu phòng Sourcing và Logistics", "Xây dựng KPIs cho nhân sự chuỗi cung ứng", "Kế hoạch ứng phó đứt gãy chuỗi cung ứng (BCP)"]
      }
    ]
  }
};

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const course = courseData[slug];
  
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="bg-primary pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Offline / Hybrid
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> {course.duration}</div>
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Hà Nội / Hồ Chí Minh</div>
                <div className="flex items-center gap-2"><Users className="w-5 h-5" /> Tối đa 20 Học viên</div>
              </div>
            </div>
            
            {/* Sidebar form (Desktop) */}
            <div className="hidden lg:block relative">
              <Card className="absolute top-0 right-0 w-full max-w-md shadow-2xl border-none">
                <div className="h-48 bg-gray-200 rounded-t-xl bg-cover bg-center" style={{ backgroundImage: `url('${course.bgImage}')` }}></div>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{course.price}</div>
                  <Button className="w-full text-lg py-6 rounded-xl mb-4" size="lg">Đăng ký giữ chỗ</Button>
                  <ul className="space-y-3 text-sm text-foreground/70 mb-6">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Cam kết hỗ trợ việc làm sau khóa học</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Tặng kèm bộ tài liệu chứng từ XNK thực tế</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Truy cập kho video bài giảng trọn đời</li>
                  </ul>
                  <p className="text-xs text-center text-foreground/50">Khai giảng dự kiến: 15/10/2026</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Content with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start h-14 bg-transparent border-b rounded-none mb-8">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none text-base px-6 h-full">Tổng quan</TabsTrigger>
                  <TabsTrigger value="curriculum" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none text-base px-6 h-full">Lộ trình học</TabsTrigger>
                  <TabsTrigger value="instructor" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none text-base px-6 h-full">Giảng viên</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none text-base px-6 h-full">Đánh giá</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-8 animate-in fade-in-50">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Bạn sẽ học được gì?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.outcomes.map((outcome: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                          <span className="text-foreground/80">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Nội dung chi tiết</h3>
                    <div className="prose max-w-none text-foreground/80">
                      <p>Khóa học này được thiết kế đặc biệt dành cho người muốn chuyển ngành hoặc sinh viên năm cuối muốn có ngay kinh nghiệm thực chiến. Thay vì học các lý thuyết kinh điển từ sách giáo khoa, bạn sẽ được đưa thẳng vào hệ thống vận hành của Kỳ Tốc - doanh nghiệp logistics đang xử lý hàng ngàn đơn hàng Trung-Việt mỗi ngày.</p>
                      <p>Mỗi buổi học là một case study được lấy ra từ chính những sự cố, các chuyến hàng thành công trong tuần qua của công ty. Bạn sẽ được làm quen với sức ép thực tế và cách giải quyết vấn đề của một nhân sự logistics chuyên nghiệp.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="curriculum" className="space-y-6 animate-in fade-in-50">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Lộ trình đào tạo ({course.duration})</h3>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((module: any, idx: number) => (
                      <div key={idx} className="border rounded-xl p-6 bg-card">
                        <h4 className="text-lg font-bold mb-2">{module.title}</h4>
                        <ul className="space-y-2 text-foreground/70">
                          {module.items.map((item: string, i: number) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor" className="animate-in fade-in-50">
                  <div className="flex flex-col md:flex-row gap-8 bg-card p-8 rounded-xl border">
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574')" }}></div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{course.instructorName}</h3>
                      <p className="text-primary font-medium mb-4">{course.instructorRole}</p>
                      <p className="text-foreground/80 mb-4">
                        {course.instructorDesc}
                      </p>
                      <p className="text-foreground/80">
                        Phong cách giảng dạy: "Lấy chứng từ thực tế đè lý thuyết". Không có câu hỏi nào từ học viên mà thực tế chưa từng trải qua.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="animate-in fade-in-50">
                  <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed">
                    <p className="text-foreground/60 mb-4">Chưa có đánh giá nào cho khóa học này.</p>
                    <Button variant="outline">Trở thành người đánh giá đầu tiên</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Mobile Registration Card */}
            <div className="lg:hidden mt-8">
              <Card className="w-full shadow-lg border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{course.price}</div>
                  <Button className="w-full text-lg py-6 rounded-xl mb-4" size="lg">Đăng ký giữ chỗ</Button>
                  <p className="text-xs text-center text-foreground/50 mb-6">Khai giảng dự kiến: 15/10/2026</p>
                  
                  <div className="flex items-center gap-3 py-3 border-t">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <span className="text-sm">Lịch học: Tối 3,5,7 (19h00 - 21h30)</span>
                  </div>
                  <div className="flex items-center gap-3 py-3 border-t">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Địa điểm: Tầng 3, tòa nhà DPT VINA</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
