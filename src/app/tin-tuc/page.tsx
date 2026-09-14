import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      slug: "quan-ly-chuoi-cung-ung-vlxd-nhap-khau-tu-trung-quoc-2026-thuc-trang-toan-dien-giai-phap-toi-uu",
      title: "Quản lý chuỗi cung ứng VLXD nhập khẩu từ Trung Quốc 2026: Thực trạng và Giải pháp",
      excerpt: "Phân tích toàn diện thực trạng quản lý chuỗi cung ứng vật liệu xây dựng nhập khẩu từ Trung Quốc năm 2026 và các giải pháp tối ưu hóa chi phí, thời gian.",
      date: "14/09/2026",
      author: "Kỳ Tốc Academy",
      category: "Chuỗi Cung Ứng",
      image: "https://images.unsplash.com/photo-1541888081604-585e5091bf2e?q=80&w=2070"
    },
    {
      id: 2,
      slug: "cach-dam-phan-gia-voi-nha-cung-cap-trung-quoc",
      title: "Cách đàm phán giá với nhà cung cấp Trung Quốc hiệu quả nhất",
      excerpt: "Bí quyết thương lượng, các chiến thuật tâm lý và kinh nghiệm thực chiến giúp bạn đạt được mức giá TCO (Tổng chi phí sở hữu) tốt nhất từ các xưởng 1688, Taobao.",
      date: "10/09/2026",
      author: "Ms. Anna",
      category: "Mua hàng & Sourcing",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974"
    },
    {
      id: 3,
      slug: "hang-hoa-cong-nghe-trung-quoc",
      title: "Xu hướng nhập khẩu Hàng hóa Công nghệ từ Trung Quốc",
      excerpt: "Cập nhật các ngành hàng công nghệ tiềm năng, thủ tục nhập khẩu thiết bị điện tử và những rủi ro cần tránh khi tìm kiếm nguồn hàng công nghệ cao.",
      date: "05/09/2026",
      author: "Mr. Tít",
      category: "Nghiệp vụ",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
    },
    {
      id: 4,
      slug: "trung-viet-logistics",
      title: "Trung - Việt Logistics: Tuyến đường huyết mạch và những lưu ý",
      excerpt: "Tổng quan về năng lực vận tải tuyến biên giới đường bộ Việt - Trung, những cửa khẩu trọng điểm và bài toán giảm thiểu thời gian chờ thông quan.",
      date: "01/09/2026",
      author: "Mr. Alex",
      category: "Kiến thức Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
    },
    {
      id: 5,
      slug: "thue-nhap-khau-tu-trung-quoc-ve-viet-nam",
      title: "Biểu thuế xuất nhập khẩu ưu đãi đặc biệt ACFTA: Những điều cần biết",
      excerpt: "Hướng dẫn tra cứu HS code chuẩn xác, điều kiện áp dụng C/O form E để hưởng thuế suất 0% và các loại thuế nhập khẩu từ Trung Quốc về Việt Nam.",
      date: "25/08/2026",
      author: "Ms. Hương",
      category: "Kiến thức Logistics",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
    }
  ];

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tin tức & Blog</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tổng hợp các kiến thức chuyên ngành, báo cáo thị trường và các Case Study thực chiến từ hệ sinh thái Kỳ Tốc. Xem thêm tại <a href="https://kytoc.vn" target="_blank" className="text-primary hover:underline font-medium">kytoc.vn</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/tin-tuc/${post.slug}`} key={post.id} className="block group">
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${post.image}')` }}></div>
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-foreground/70 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Đọc tiếp <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
