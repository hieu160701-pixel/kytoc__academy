import { InstructorCard } from "@/components/ui/InstructorCard";

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Ms. Thoa",
      role: "Head of Purchasing",
      company: "CÔNG TY CỔ PHẦN XÂY DỰNG ĐÔNG ĐÔ VIỆT NAM",
      description: "Kinh nghiệm 20 năm Mua hàng trong lĩnh vực nội thất",
      color: "primary",
    },
    {
      name: "Mr. Đạo",
      role: "Head of Purchasing",
      company: "CĐT Luxora Vĩnh Yên, Bắc Giang",
      description: "Kinh nghiệm 25 năm Quản lý chuỗi cung ứng cho các dự án chung cư cao tầng",
      color: "green",
    },
    {
      name: "Ms. Hoa",
      role: "Head of Purchasing",
      company: "Kỳ Tốc Logistics",
      description: "Xử lí hơn 1000 đơn mua hàng với mạng lưới NCC khắp Trung Quốc",
      color: "teal",
    },
    {
      name: "Ms. Linh Đan",
      role: "Giám đốc Điều hành",
      company: "Kỳ Tốc Logistics",
      description: "Quản lý chuỗi cung ứng cho 200 khách hàng SMEs tại Việt Nam",
      color: "blue",
    }
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Đội ngũ Giảng viên</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tại Kỳ Tốc Academy, giảng viên của bạn không phải là những nhà lý thuyết. Họ là những chuyên gia đang trực tiếp vận hành hàng ngàn đơn hàng mỗi ngày trên tuyến Trung-Việt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((instructor, i) => (
            <InstructorCard key={i} {...instructor} />
          ))}
        </div>
      </div>
    </div>
  );
}
