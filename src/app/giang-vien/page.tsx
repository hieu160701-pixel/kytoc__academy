import { InstructorCard } from "@/components/ui/InstructorCard";

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Ms. Thoa",
      role: "Head of Purchasing",
      company: "Đông Đô",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576",
      color: "primary",
    },
    {
      name: "Mr. Đạo",
      role: "Head of Purchasing",
      company: "CĐT Luxora Vĩnh Yên, Bắc Giang",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574",
      color: "green",
    },
    {
      name: "Ms. Hoa",
      role: "Head of Purchasing",
      company: "Kỳ Tốc",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661",
      color: "teal",
    },
    {
      name: "Ms. Linh",
      role: "Giám đốc Điều hành",
      company: "Kỳ Tốc",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?q=80&w=2661",
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
