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
              HỌC VIỆN ĐÀO TẠO SCM TRONG XUẤT NHẬP KHẨU<br />
              <span className="text-primary text-2xl md:text-4xl font-medium mt-4 block">Đào tạo chuyên nghiệp – Kết nối toàn cầu – Phát triển bền vững</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0">
              Đào tạo toàn diện các nghiệp vụ trong lĩnh vực Xuất nhập khẩu – Logistics – Supply Chain, từ Mua hàng & Sourcing, Sales/Customer Service, Chứng từ XNK, Hải quan, Vận tải, Kho vận đến Kế toán & Tuân thủ. Chương trình được thiết kế theo workflow thực tế của doanh nghiệp, giúp học viên hiểu toàn bộ chuỗi vận hành, sự liên kết giữa các bộ phận và phát triển năng lực chuyên môn theo từng vị trí nghề nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/khoa-hoc">
                <Button size="lg" className="text-base rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 w-full sm:w-auto">
                  Khám phá khóa học
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 Trụ Cột (Features) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sự khác biệt tại Kỳ Tốc</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Không học nghiệp vụ rời rạc. Học viên được tiếp cận quy trình thực tế, hiểu sự liên kết giữa các bộ phận và nắm được cách toàn bộ chuỗi Xuất nhập khẩu – Logistics – Supply Chain vận hành trong doanh nghiệp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Học từ đơn hàng thực tế</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Học và phân tích trực tiếp từ đơn hàng, chứng từ, quy trình và tình huống thực tế trong Mua hàng, Xuất nhập khẩu, Logistics và Quản trị Chuỗi cung ứng trên nhiều thị trường và phương thức vận tải.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Học từ người đang làm nghề</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Đội ngũ giảng viên là các chuyên gia và nhà quản lý đang trực tiếp làm việc trong ngành, mang kinh nghiệm và bài toán thực tế vào từng nội dung đào tạo.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-600 mb-4">
                  <BriefcaseBusiness className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Kết nối mạng lưới nghề nghiệp</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70">
                Kết nối học viên – giảng viên – chuyên gia – doanh nghiệp – đối tác, mở rộng cơ hội học hỏi, phát triển nghề nghiệp, hợp tác kinh doanh trong nước và quốc tế.
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
              <div className="text-sm md:text-base text-white/80">Hệ thống kho vận hành trong và ngoài nước</div>
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
              <p className="text-foreground/70">Các lộ trình đào tạo chuyên sâu được xây dựng từ nhu cầu thực tế của doanh nghiệp trong bối cảnh chuỗi cung ứng toàn cầu đang ngày càng phát triển.</p>
            </div>
            <Link href="/khoa-hoc" className="hidden md:flex text-primary font-medium hover:underline items-center">
              Xem tất cả <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Nghiệp vụ Logistics – Xuất nhập khẩu cho người mới"
              slug="logistics-cho-nguoi-moi"
              track="Logistics"
              color="bg-teal-700"
              duration="18 buổi"
              format="Offline / Hybrid"
              description="Trang bị kiến thức nền tảng và quy trình vận hành Logistics trong Xuất nhập khẩu – Chuỗi cung ứng."
              instructor="Nguyễn Thị Linh (Giám đốc Điều hành)"
              bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
            />
            <CourseCard
              title="Mua hàng & Tìm nguồn cung"
              slug="mua-hang-thuc-chien"
              track="Mua hàng"
              color="bg-green-700"
              duration="14 buổi"
              format="Offline / Hybrid"
              description="Trang bị năng lực Mua hàng & Tìm nguồn cung từ xác định nhu cầu, đánh giá nhà cung cấp, đến đàm phán."
              instructor="Phan Thị Hoa (Trưởng phòng Mua hàng)"
              bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            />
            <CourseCard
              title="Quản trị chuỗi cung ứng"
              slug="supply-chain-manager"
              track="SCM Manager"
              color="bg-blue-800"
              duration="12 buổi"
              format="Offline / Hybrid"
              description="Chương trình chuyên sâu dành cho nhân sự quản lý Chuỗi cung ứng, tập trung vào tư duy quản trị xuyên suốt."
              instructor="Trần Hưng Đạo (Trưởng phòng Đấu thầu đầu tư)"
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
            <p className="text-foreground/70 max-w-2xl mx-auto">Học từ những người đang làm nghề – các chuyên gia và nhà quản lý đang giữ vị trí chủ chốt trong Xuất nhập khẩu – Logistics – Supply Chain tại nhiều lĩnh vực khác nhau.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <InstructorCard
              name="Phan Thị Hoa"
              role="Trưởng phòng Mua hàng"
              company="Kỳ Tốc Logistics"
              description="Xử lí hơn 1000 đơn mua hàng từ mạng lưới NCC Trung Quốc"
              color="teal"
              image="/images/instructors/phan-thi-hoa.jpg"
            />
            <InstructorCard
              name="Trần Hưng Đạo"
              role="Trưởng phòng Đấu thầu đầu tư"
              company="Tập đoàn Luxora"
              description="Kinh nghiệm 25 năm Quản lý chuỗi cung ứng"
              color="green"
              image="/images/instructors/tran-hung-dao.jpg"
            />
            <InstructorCard
              name="Nguyễn Thị Thoa"
              role="Head of Purchasing"
              company="Công ty cổ phần thương mại công nghiệp Deka Furniture"
              description="Kinh nghiệm 20 năm Mua hàng trong lĩnh vực nội thất"
              color="primary"
              image="/images/instructors/nguyen-thi-thoa.jpg"
            />
            <InstructorCard
              name="Trần Phương Anh"
              role="Giám đốc Điều hành"
              company="Công ty TNHH Công nghiệp và TM Hosung VN"
              description="Quản lý chuỗi cung ứng cho 200 khách hàng SMEs tại Việt Nam"
              color="primary"
              image="/images/instructors/tran-phuong-anh.jpg"
            />
            <InstructorCard
              name="Nguyễn Thị Linh"
              role="Giám đốc Điều hành"
              company="Kỳ Tốc Logistics"
              description="Quản lý chuỗi cung ứng cho 200 khách hàng SMEs tại Việt Nam"
              color="blue"
              image="/images/instructors/nguyen-thi-linh.jpg"
            />
          </div>
        </div>
      </section>

      {/* 5.5 Học viên tiêu biểu (Alumni) */}
      <section className="py-20 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Học viên tiêu biểu</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Những học viên đã đưa kiến thức học được từ Kỳ Tốc vào thực tiễn, nâng cao năng lực nghề nghiệp và xây dựng mạng lưới nghề nghiệp giá trị trong hành trình phát triển sự nghiệp.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <InstructorCard
              name="Bùi Thu Trang (2001)"
              role="Chuyên viên mua hàng - Phòng Vật tư"
              company="Công ty TNHH Điện lạnh Hòa Phát"
              image="/images/alumni/student1.jpg"
              color="teal"
            />
            <InstructorCard
              name="Hoàng Kim Cúc (1999)"
              role="Chuyên viên mua hàng"
              company="Công ty Cổ phần 5S Fashion"
              image="/images/alumni/student2.jpg"
              color="primary"
            />
            <InstructorCard
              name="Bùi Ngọc Trâm (2001)"
              role="Chuyên viên XNK"
              company="Công ty Máy xây dựng Hải Âu"
              image="/images/alumni/student3.jpg"
              color="blue"
            />
            <InstructorCard
              name="Ngô Thuý Chinh (2001)"
              role="Chuyên viên khai báo Hải quan"
              company="Công ty TNHH Fukang Technology"
              image="/images/alumni/student4.png"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/50 font-medium mb-8 uppercase tracking-wider">Hệ sinh thái trải rộng các ngành nghề</p>
          <div className="flex flex-wrap justify-center items-center gap-12 transition-all duration-500">
            <img src="/images/partners/partner2.png" alt="Kỳ Tốc Logistics" className="h-12 md:h-16 object-contain" />
            <img src="/images/partners/partner3.png" alt="Beta Cinemas" className="h-12 md:h-16 object-contain" />
            <img src="/images/partners/partner4.png" alt="AEON" className="h-12 md:h-16 object-contain" />
            <img src="/images/partners/partner5.png" alt="1688" className="h-12 md:h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Gallery / Thực chiến Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Thực Chiến Không Chỉ Là Khẩu Hiệu</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Hình ảnh thực tế các hoạt động học tập, kiến tập tại kho bãi và những buổi xử lý chứng từ trực tiếp cùng chuyên gia của Kỳ Tốc Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image - 2x2 */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl h-[400px]">
              <img src="/images/gallery/pic2.jpg" alt="Hình ảnh thực tế Kỳ Tốc Academy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Small Image 1 */}
            <div className="relative group overflow-hidden rounded-2xl h-[192px]">
              <img src="/images/gallery/pic1.jpg" alt="Hình ảnh thực tế Kỳ Tốc Academy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Small Image 2 */}
            <div className="relative group overflow-hidden rounded-2xl h-[192px]">
              <img src="/images/gallery/pic4.jpg" alt="Hình ảnh thực tế Kỳ Tốc Academy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Wide Image */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl h-[192px]">
              <img src="/images/gallery/pic3.jpg" alt="Hình ảnh thực tế Kỳ Tốc Academy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Hệ sinh thái thực chiến */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hệ Sinh Thái Vận Hành Thực Tế</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Kỳ Tốc Academy kết nối hệ sinh thái doanh nghiệp, chuyên gia và đối tác đa ngành đa nghề, tạo điều kiện để học viên tiếp cận, thực hành và thử sức với các bài toán thực tế trong Mua hàng, Xuất nhập khẩu, Logistics và Quản trị Chuỗi cung ứng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-3xl mx-auto">
            {/* Ky Toc Logistics */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border">
                <img src="/images/partners/partner2.png" alt="Kỳ Tốc Logistics" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Kỳ Tốc Logistics</h3>
                <p className="text-foreground/70 text-sm mb-4">Đối tác vận hành trong hệ sinh thái Kỳ Tốc, cung cấp các giải pháp vận tải đa phương thức, xuất nhập khẩu, hải quan và chuỗi cung ứng. Các đơn hàng, dự án thực tế là nguồn dữ liệu quan trọng cho hoạt động đào tạo và phân tích tại Academy.</p>
                <div className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full inline-block">Nơi học viên được thực hành như một chuyên viên xuất nhập khẩu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Tương tác */}
      <section className="py-24 bg-card border-y relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pattern-dots-md text-primary/10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Sẵn sàng nâng tầm năng lực và mở rộng mạng lưới nghề nghiệp chưa?</h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Học từ thực tiễn, kết nối cộng đồng đa ngành và mở rộng cơ hội nghề nghiệp, hợp tác trong môi trường kinh doanh toàn cầu.
          </p>
          <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
            Đăng ký nhận tư vấn ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
