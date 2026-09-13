import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Cập nhật Quy định Hải quan và Thuế XNK mới nhất 2026",
      excerpt: "Nắm bắt nhanh các thay đổi quan trọng trong thông tư mới về thủ tục thông quan hàng hóa tuyến biên giới đường bộ Việt - Trung.",
      date: "12/09/2026",
      author: "Admin KTL",
      category: "Kiến thức Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
    },
    {
      id: 2,
      title: "Bí quyết Sourcing Hàng 1688 Tận Xưởng, Tối Ưu TCO",
      excerpt: "Quy trình 5 bước đàm phán, thanh toán và vận chuyển để mang lại biên lợi nhuận cao nhất cho doanh nghiệp TMĐT.",
      date: "05/09/2026",
      author: "Ms. Anna",
      category: "Mua hàng & Sourcing",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
    },
    {
      id: 3,
      title: "Hướng dẫn lập Packing List và Commercial Invoice chuẩn 100%",
      excerpt: "Nghiệp vụ chứng từ cốt lõi giúp lô hàng không bao giờ bị giữ lại cửa khẩu chỉ vì lỗi sai sót mặt chữ.",
      date: "01/09/2026",
      author: "Ms. Hương",
      category: "Nghiệp vụ",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
    },
    {
      id: 4,
      title: "Phân biệt Incoterms 2020: FCA, DPU, DDP áp dụng tuyến bộ",
      excerpt: "Hiểu đúng bản chất của các điều kiện giao hàng và cách phân chia rủi ro thực tế khi thuê xe tải liên vận.",
      date: "25/08/2026",
      author: "Mr. Tít",
      category: "Kiến thức Logistics",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574"
    },
    {
      id: 5,
      title: "Quản trị Rủi ro trong Chuỗi cung ứng: Case study từ DEKA",
      excerpt: "Làm thế nào DEKA Furniture đảm bảo đúng tiến độ lắp đặt ghế rạp chiếu phim trong bối cảnh tắc biên?",
      date: "20/08/2026",
      author: "Mr. Alex",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
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
            <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-card flex flex-col h-full">
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
          ))}
        </div>
      </div>
    </div>
  );
}
