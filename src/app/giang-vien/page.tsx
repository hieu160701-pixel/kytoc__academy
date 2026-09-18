import { InstructorCard } from "@/components/ui/InstructorCard";

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Phan Thị Hoa",
      role: "Trưởng phòng Mua hàng",
      company: "Kỳ Tốc Logistics",
      description: "Xử lí hơn 1000 đơn mua hàng với mạng lưới NCC khắp Trung Quốc",
      color: "teal",
      image: "/images/instructors/phan-thi-hoa.jpg",
    },
    {
      name: "Trần Hưng Đạo",
      role: "Trưởng phòng Đấu thầu đầu tư",
      company: "Tập đoàn Luxora (Vĩnh Yên, Bắc Giang)",
      description: "Kinh nghiệm 25 năm Quản lý chuỗi cung ứng cho các dự án chung cư cao tầng",
      color: "green",
      image: "/images/instructors/tran-hung-dao.jpg",
    },
    {
      name: "Nguyễn Thị Thoa",
      role: "Head of Purchasing",
      company: "Công ty cổ phần thương mại công nghiệp Deka Furniture",
      description: "Kinh nghiệm 20 năm Mua hàng trong lĩnh vực nội thất",
      color: "primary",
      image: "/images/instructors/nguyen-thi-thoa.jpg",
    },
    {
      name: "Trần Phương Anh",
      role: "Leader phòng Mua hàng",
      company: "Công ty Cổ phần Đầu tư Công nghệ SHT",
      description: "Quản lý chuỗi cung ứng cho 200 khách hàng SMEs tại Việt Nam",
      color: "primary",
      image: "/images/instructors/tran-phuong-anh.jpg",
    },
    {
      name: "Nguyễn Thị Linh",
      role: "Giám đốc Điều hành",
      company: "Kỳ Tốc Logistics",
      description: "Quản lý chuỗi cung ứng cho 200 khách hàng SMEs tại Việt Nam",
      color: "blue",
      image: "/images/instructors/nguyen-thi-linh.jpg",
    }
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Đội ngũ Giảng viên</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tại Kỳ Tốc Academy, người học được đồng hành bởi các chuyên gia và nhà quản lý đang trực tiếp làm nghề, mang đến góc nhìn thực tiễn từ nhiều lĩnh vực, thị trường và mô hình doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {instructors.map((instructor, i) => (
            <InstructorCard key={i} {...instructor} />
          ))}
        </div>
      </div>
    </div>
  );
}
