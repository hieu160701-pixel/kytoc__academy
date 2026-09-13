import Link from "next/link";
import { Share2, Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white p-2 rounded-lg inline-block">
                <img src="/logo.jpg" alt="Kỳ Tốc Academy" className="h-12 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              Học viện nghiệp vụ SCM thực chiến. Đào tạo nhân sự chất lượng cao cho ngành Logistics và Chuỗi cung ứng, với mạng lưới hệ sinh thái doanh nghiệp mạnh mẽ.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Khóa học</h3>
            <ul className="space-y-3">
              <li><Link href="/khoa-hoc/logistics" className="hover:text-white transition-colors">Logistics cho người mới</Link></li>
              <li><Link href="/khoa-hoc/mua-hang" className="hover:text-white transition-colors">Mua hàng thực chiến</Link></li>
              <li><Link href="/khoa-hoc/kho-van" className="hover:text-white transition-colors">Kho vận Trung-Việt</Link></li>
              <li><Link href="/khoa-hoc/chung-tu" className="hover:text-white transition-colors">Chứng từ & Hải quan</Link></li>
              <li><Link href="/khoa-hoc/scm" className="hover:text-white transition-colors">Supply Chain Manager</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Chính sách & Hỗ trợ</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
              <li><Link href="/chinh-sach" className="hover:text-white transition-colors">Điều khoản & Bảo mật</Link></li>
              <li><Link href="/thanh-toan" className="hover:text-white transition-colors">Hướng dẫn thanh toán</Link></li>
              <li><Link href="/tuyen-dung" className="hover:text-white transition-colors">Cơ hội việc làm</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Số 4 Ngõ 183 Hoàng Văn Thái, P. Phương Liệt, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0904.066.068</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>academy@kytoc.vn</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© 2026 Công ty TNHH DPT VINA HOLDINGS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
