import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, CalendarDays, Users } from "lucide-react";

import { notFound } from "next/navigation";

const courseData: Record<string, any> = {
  "logistics-cho-nguoi-moi": {
    title: "Nghiệp vụ Logistics – Xuất nhập khẩu cho người mới",
    description: "Trang bị kiến thức nền tảng và quy trình vận hành Logistics trong Xuất nhập khẩu – Chuỗi cung ứng, từ điều kiện thương mại, chứng từ, vận tải đa phương thức, hải quan, kho vận đến nhận diện và xử lý rủi ro trong quá trình giao nhận hàng hóa.",
    price: "Liên hệ",
    duration: "18 Buổi học",
    instructorName: "Nguyễn Thị Linh",
    instructorRole: "Giám đốc Điều hành - Kỳ Tốc",
    instructorDesc: "Chuyên gia trong lĩnh vực Xuất nhập khẩu, thủ tục hải quan và thuế với nhiều năm kinh nghiệm trực tiếp trong vận hành.",
    instructorPhilosophy: "Học từ tình huống thực tế – Hiểu bản chất – Thực hành theo quy trình – Biết cách xử lý ngoại lệ trong vận hành.",
    instructorImage: "/images/instructors/nguyen-thi-linh.jpg",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    overview: [
      "Khóa học dành cho người mới vào ngành, người chuyển ngành hoặc muốn hệ thống hóa kiến thức Logistics – Xuất nhập khẩu. Nội dung sử dụng đơn hàng, chứng từ và tình huống thực tế từ hoạt động doanh nghiệp, giúp học viên hiểu sự liên kết giữa các bên tham gia và biết cách lựa chọn phương án vận hành phù hợp trên nhiều tuyến và thị trường.",
      "Học viên được tiếp cận quy trình vận hành xuyên suốt của một lô hàng, từ lựa chọn điều kiện thương mại và phương thức vận tải → chuẩn bị, kiểm tra chứng từ → tổ chức vận chuyển → khai báo hải quan → kho vận → giao nhận và xử lý các tình huống phát sinh."
    ],
    outcomes: [
      "Hiểu quy trình Logistics – Xuất nhập khẩu xuyên suốt từ đầu đến cuối.",
      "Đọc, kiểm tra và xử lý các chứng từ xuất nhập khẩu và vận tải cơ bản.",
      "Hiểu nguyên tắc khai báo hải quan, mã HS, thuế và phân luồng hàng hóa.",
      "Phân tích và xử lý các tình huống phát sinh trong vận tải, chứng từ, hải quan và giao nhận.",
      "Hiểu cách phối hợp giữa chủ hàng, nhà cung cấp, đơn vị giao nhận, hãng vận tải, đại lý hải quan, kho và các bên liên quan."
    ],
    curriculum: [
      {
        title: "Phần 1: Nền tảng Logistics & Xuất nhập khẩu",
        items: ["Tổng quan Logistics và Chuỗi cung ứng", "Incoterms 2020", "quy trình xuất nhập khẩu", "vai trò của các bên", "lựa chọn phương thức vận tải đường bộ – đường biển – đường hàng không – đường sắt – vận tải đa phương thức"]
      },
      {
        title: "Phần 2: Chứng từ Xuất nhập khẩu & Vận tải",
        items: ["Hợp đồng ngoại thương", "Hóa đơn thương mại", "Phiếu đóng gói", "Vận đơn đường biển, hàng không và đường bộ", "Chứng nhận xuất xứ (C/O)", "kiểm tra và nhận diện các lỗi chứng từ thường gặp"]
      },
      {
        title: "Phần 3: Hải quan & Kho vận",
        items: ["Thực hành ECUS5/VNACCS", "tra cứu và xác định mã HS; thuế suất; phân luồng", "quy trình thông quan", "tổ chức kho và giao nhận hàng hóa", "01 buổi tiếp cận/thực hành tại kho hàng thực tế của Kỳ Tốc"]
      }
    ]
  },
  "mua-hang-thuc-chien": {
    title: "Mua hàng & Tìm nguồn cung",
    description: "Trang bị năng lực Mua hàng & Tìm nguồn cung từ xác định nhu cầu, tìm kiếm và đánh giá nhà cung cấp, yêu cầu báo giá, phân tích tổng chi phí, đàm phán, hợp đồng, kiểm soát chất lượng đến quản trị hiệu suất nhà cung cấp trên thị trường trong nước và quốc tế.",
    price: "Liên hệ",
    duration: "14 Buổi học",
    instructorName: "Phan Thị Hoa",
    instructorRole: "Trưởng phòng Mua hàng - Kỳ Tốc Logistics",
    instructorDesc: "Với nhiều năm kinh nghiệm xử lý các bài toán mua hàng từ Trung Quốc và đàm phán tối ưu chi phí.",
    instructorPhilosophy: "Học từ bài toán mua hàng thực tế – Ra quyết định dựa trên dữ liệu và tổng chi phí – Xây dựng tư duy quản trị nhà cung cấp dài hạn.",
    instructorImage: "/images/instructors/phan-thi-hoa.jpg",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    overview: [
      "Chương trình hướng tới việc phát triển năng lực mua hàng toàn diện, giúp bạn không chỉ biết cách tìm kiếm sản phẩm trên các nền tảng TMĐT mà còn có khả năng đàm phán chuyên sâu, quản trị rủi ro và xây dựng mối quan hệ dài hạn với nhà cung cấp."
    ],
    outcomes: [
      "Tìm kiếm, sàng lọc và đánh giá nhà cung cấp dựa trên năng lực, chất lượng, chi phí, tiến độ và rủi ro.",
      "Thực hiện yêu cầu báo giá (RFQ), so sánh báo giá và đàm phán về giá, số lượng đặt hàng tối thiểu, thời gian giao hàng và điều kiện thanh toán.",
      "Phân tích Tổng chi phí sở hữu (TCO) thay vì chỉ so sánh giá mua.",
      "Hiểu tác động của thuế, logistics, thanh toán, chất lượng và tiến độ tới quyết định mua hàng.",
      "Xây dựng tư duy quản trị và phát triển nhà cung cấp dài hạn."
    ],
    curriculum: [
      {
        title: "Phần 1: Quy trình Mua hàng & Tìm nguồn cung",
        items: ["Từ nhu cầu/BOQ/thông số kỹ thuật → yêu cầu báo giá", "tìm kiếm & sàng lọc nhà cung cấp → so sánh → đàm phán", "đơn đặt hàng/hợp đồng → kiểm soát chất lượng → giao hàng", "Tiếp cận các kênh tìm nguồn quốc tế và các nền tảng B2B phù hợp"]
      },
      {
        title: "Phần 2: Đàm phán và Ký kết hợp đồng",
        items: ["Đàm phán giá, số lượng đặt hàng tối thiểu, thời gian giao hàng, chất lượng, bảo hành và điều kiện thanh toán", "nhận diện rủi ro thanh toán", "xây dựng và rà soát các điều khoản cơ bản trong hợp đồng thương mại"]
      },
      {
        title: "Phần 3: Tối ưu Tổng chi phí & Quản trị nhà cung cấp",
        items: ["Phân tích Tổng chi phí sở hữu (TCO)", "đánh giá tác động của phương án logistics tới quyết định mua hàng", "quản trị chất lượng, tiến độ, rủi ro và hiệu suất nhà cung cấp."]
      }
    ]
  },
  "supply-chain-manager": {
    title: "Quản trị chuỗi cung ứng",
    description: "Chương trình chuyên sâu dành cho nhân sự quản lý và người hướng tới vị trí quản lý Chuỗi cung ứng, tập trung vào tư duy quản trị xuyên suốt, kiểm soát chi phí, thiết kế tổ chức, xây dựng chỉ số hiệu quả và quản trị rủi ro trong chuỗi cung ứng.",
    price: "Liên hệ",
    duration: "12 Buổi học",
    instructorName: "Trần Hưng Đạo",
    instructorRole: "Trưởng phòng Đấu thầu đầu tư - Tập đoàn Luxora",
    instructorDesc: "Kiến trúc sư của các hệ sinh thái vận hành lớn, chuyên về quản trị chuỗi cung ứng toàn diện.",
    instructorPhilosophy: "Kết nối tư duy quản trị với bài toán vận hành thực tế; đặt học viên vào vai trò người quản lý để phân tích dữ liệu, chi phí, rủi ro và đưa ra quyết định.",
    instructorImage: "/images/instructors/tran-hung-dao.jpg",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    overview: [
      "Khóa học cung cấp cái nhìn toàn cảnh và chiến lược về chuỗi cung ứng. Bằng cách tiếp cận từ góc nhìn của nhà quản lý, học viên sẽ học được cách tối ưu hóa các dòng chảy giá trị, thiết lập các chỉ số KPI hiệu quả và đảm bảo chuỗi cung ứng hoạt động trơn tru ngay cả trong điều kiện nhiều biến động."
    ],
    outcomes: [
      "Hiểu và phân tích chuỗi cung ứng xuyên suốt thay vì quản lý từng nghiệp vụ riêng lẻ.",
      "Phân tích chi phí, doanh thu, lợi nhuận và hiệu quả của các phương án vận hành.",
      "Thiết kế cơ cấu và cơ chế phối hợp giữa Mua hàng – Xuất nhập khẩu – Logistics – Kho vận và các bộ phận liên quan.",
      "Xây dựng chỉ số đánh giá hiệu quả (KPI) cho hoạt động chuỗi cung ứng.",
      "Nhận diện rủi ro và xây dựng phương án dự phòng khi chuỗi cung ứng bị gián đoạn."
    ],
    curriculum: [
      {
        title: "Phần 1: Tư duy Quản trị Chuỗi cung ứng",
        items: ["Tổng quan mô hình quản trị chuỗi cung ứng", "phân tích dòng hàng – dòng thông tin – dòng tiền", "nhận diện các điểm nghẽn và mối liên kết giữa Mua hàng, Logistics, Xuất nhập khẩu, Kho vận, Tài chính và Kinh doanh"]
      },
      {
        title: "Phần 2: Quản trị Chi phí & Hiệu quả vận hành",
        items: ["Phân tích lãi – lỗ (P&L) của phương án vận hành", "Tổng chi phí sở hữu (TCO)", "chi phí trực tiếp, chi phí cơ hội và các yếu tố ảnh hưởng tới hiệu quả chuỗi cung ứng", "quản trị dòng tiền và vòng quay vốn"]
      },
      {
        title: "Phần 3: Thiết kế tổ chức & Quản trị rủi ro",
        items: ["Thiết kế cơ cấu Mua hàng – Logistics – Chuỗi cung ứng", "phân công chức năng và cơ chế phối hợp", "xây dựng KPI", "nhận diện rủi ro", "xây dựng kế hoạch duy trì hoạt động kinh doanh (BCP) khi chuỗi cung ứng bị gián đoạn"]
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
                      {course.overview ? course.overview.map((p: string, idx: number) => (
                        <p key={idx}>{p}</p>
                      )) : (
                        <>
                          <p>Khóa học này được thiết kế đặc biệt dành cho người muốn chuyển ngành hoặc sinh viên năm cuối muốn có ngay kinh nghiệm thực chiến. Thay vì học các lý thuyết kinh điển từ sách giáo khoa, bạn sẽ được đưa thẳng vào hệ thống vận hành của Kỳ Tốc - doanh nghiệp logistics đang xử lý hàng ngàn đơn hàng Trung-Việt mỗi ngày.</p>
                          <p>Mỗi buổi học là một case study được lấy ra từ chính những sự cố, các chuyến hàng thành công trong tuần qua của công ty. Bạn sẽ được làm quen với sức ép thực tế và cách giải quyết vấn đề của một nhân sự logistics chuyên nghiệp.</p>
                        </>
                      )}
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
                    <div className={`w-32 h-32 rounded-full flex-shrink-0 bg-top ${course.instructorImage?.includes('phan-thi-hoa') ? 'bg-white bg-contain bg-no-repeat' : 'bg-gray-300 bg-cover'}`} style={{ backgroundImage: `url('${course.instructorImage || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574"}')` }}></div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{course.instructorName}</h3>
                      <p className="text-primary font-medium mb-4">{course.instructorRole}</p>
                      <p className="text-foreground/80 mb-4">
                        {course.instructorDesc}
                      </p>
                      <p className="text-foreground/80">
                        {course.instructorPhilosophy ? (
                          <span className="italic">"{course.instructorPhilosophy}"</span>
                        ) : (
                          <>Phong cách giảng dạy: "Lấy chứng từ thực tế đè lý thuyết". Không có câu hỏi nào từ học viên mà thực tế chưa từng trải qua.</>
                        )}
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
            

          </div>
        </div>
      </section>
    </div>
  );
}
