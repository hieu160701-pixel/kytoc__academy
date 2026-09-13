import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Heart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-12 flex items-center">
              <img src="/logo.jpg" alt="Kỳ Tốc Academy" className="h-full w-auto object-contain" />
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/gioi-thieu" className="text-sm font-medium hover:text-primary transition-colors">Giới thiệu</Link>
            <Link href="/khoa-hoc" className="text-sm font-medium hover:text-primary transition-colors">Khóa học</Link>
            <Link href="/giang-vien" className="text-sm font-medium hover:text-primary transition-colors">Giảng viên</Link>
            <Link href="/tin-tuc" className="text-sm font-medium hover:text-primary transition-colors">Tin tức</Link>
            <Link href="/lien-he" className="text-sm font-medium hover:text-primary transition-colors">Liên hệ</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <User className="w-5 h-5" />
            </Button>
          </div>
          <Button className="hidden lg:flex rounded-full bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20">
            Nhận tư vấn
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
