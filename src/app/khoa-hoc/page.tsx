import { CourseCard } from "@/components/ui/CourseCard";

export default function CoursesPage() {
  const courses = [
    {
      title: "Nghiệp vụ Logistics – Xuất nhập khẩu cho người mới",
      slug: "logistics-cho-nguoi-moi",
      track: "Logistics",
      color: "bg-teal-700",
      duration: "18 buổi",
      format: "Offline / Hybrid",
      description: "Trang bị kiến thức nền tảng và quy trình vận hành Logistics trong Xuất nhập khẩu – Chuỗi cung ứng.",
      instructor: "Nguyễn Thị Linh (Giám đốc Điều hành)",
      bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    },
    {
      title: "Mua hàng & Tìm nguồn cung",
      slug: "mua-hang-thuc-chien",
      track: "Mua hàng",
      color: "bg-green-700",
      duration: "14 buổi",
      format: "Offline / Hybrid",
      description: "Trang bị năng lực Mua hàng & Tìm nguồn cung từ xác định nhu cầu, đánh giá nhà cung cấp, đến đàm phán.",
      instructor: "Phan Thị Hoa (Trưởng phòng Mua hàng)",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },

    {
      title: "Quản trị chuỗi cung ứng",
      slug: "supply-chain-manager",
      track: "SCM Manager",
      color: "bg-blue-800",
      duration: "12 buổi",
      format: "Offline / Hybrid",
      description: "Chương trình chuyên sâu dành cho nhân sự quản lý Chuỗi cung ứng, tập trung vào tư duy quản trị xuyên suốt.",
      instructor: "Trần Hưng Đạo (Trưởng phòng Đấu thầu đầu tư)",
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
            Các chương trình đào tạo chuyên sâu được xây dựng từ thực tiễn doanh nghiệp, giúp học viên phát triển năng lực nghề nghiệp thông qua quy trình, chứng từ, đơn hàng và tình huống thực tế trong Mua hàng – Xuất nhập khẩu – Logistics – Quản trị Chuỗi cung ứng.
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
