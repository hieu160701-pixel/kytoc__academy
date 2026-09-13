import { CourseCard } from "@/components/ui/CourseCard";

export default function CoursesPage() {
  const courses = [
    {
      title: "Logistics cho người mới",
      slug: "logistics-cho-nguoi-moi",
      track: "Logistics",
      color: "bg-teal-700",
      duration: "18 buổi",
      format: "Offline / Hybrid",
      description: "Tổng quan vận hành SCM. Tuyến TQ-VN, Incoterms trên tuyến bộ, đặc tả hàng từ packing list.",
      instructor: "Mr. Tít (Head H1)",
      bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    },
    {
      title: "Mua hàng thực chiến",
      slug: "mua-hang-thuc-chien",
      track: "Mua hàng",
      color: "bg-green-700",
      duration: "14 buổi",
      format: "Offline / Hybrid",
      description: "Vai trò Purchasing, Sourcing 1688, phân tích TCO, hoàn thuế XK TQ, đàm phán hợp đồng.",
      instructor: "Ms. Anna (Head H2)",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },
    {
      title: "Kho vận Trung-Việt",
      slug: "kho-van-trung-viet",
      track: "Kho vận",
      color: "bg-purple-700",
      duration: "10 buổi",
      format: "Offline / Hybrid",
      description: "Quy trình lưu kho bãi, đóng gói chuẩn xuất khẩu, điều phối xe tải, khai thác hàng rời.",
      instructor: "Mr. Alex (CEO)",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    },
    {
      title: "Chứng từ & Hải quan",
      slug: "chung-tu-hai-quan",
      track: "Chứng từ",
      color: "bg-blue-600",
      duration: "12 buổi",
      format: "Offline / Hybrid",
      description: "Đọc hiểu CO, CQ, BL, tờ khai hải quan. Phân luồng, tra mã HS code, xử lý C/O Form E.",
      instructor: "Ms. Hương (Head H2)",
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
    },
    {
      title: "Supply Chain Manager",
      slug: "supply-chain-manager",
      track: "SCM Manager",
      color: "bg-blue-800",
      duration: "12 buổi",
      format: "Offline / Hybrid",
      description: "Khóa học Flagship. Engine 5 bước A1-A4, TCO trước khi chạy đơn, P&L giải pháp vận hành.",
      instructor: "Mr. Alex (CEO)",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
      isHot: true,
    }
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Danh sách Khóa học</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Các lộ trình đào tạo chuyên sâu được xây dựng từ thực tiễn. Học trên chứng từ thật, xử lý case study thực tế từ hệ thống kho vận Kỳ Tốc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
