import Link from "next/link";
import { MessageCircle, PhoneCall, Share2, MapPin, Briefcase } from "lucide-react";

export default function StickyBar() {
  return (
    <>
      {/* Desktop side buttons */}
      <div className="hidden lg:flex fixed right-4 bottom-24 flex-col gap-4 z-50">
        <Link href="#" className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </Link>
        <Link href="#" className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <PhoneCall className="w-6 h-6" />
        </Link>
      </div>

      {/* Mobile bottom sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex items-center justify-around h-16 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-2">
        <Link href="#" className="flex flex-col items-center justify-center w-1/5 text-foreground/70 hover:text-primary transition-colors">
          <Share2 className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Facebook</span>
        </Link>
        <Link href="/khoa-hoc" className="flex flex-col items-center justify-center w-1/5 text-foreground/70 hover:text-primary transition-colors">
          <MapPin className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Khóa học</span>
        </Link>
        <div className="w-1/5 flex justify-center -mt-6">
          <Link href="tel:0904066068" className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-white">
            <PhoneCall className="w-6 h-6" />
          </Link>
        </div>
        <Link href="/tin-tuc" className="flex flex-col items-center justify-center w-1/5 text-foreground/70 hover:text-primary transition-colors">
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Tin tức</span>
        </Link>
        <Link href="/tuyen-dung" className="flex flex-col items-center justify-center w-1/5 text-foreground/70 hover:text-primary transition-colors">
          <Briefcase className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Việc làm</span>
        </Link>
      </div>
    </>
  );
}
