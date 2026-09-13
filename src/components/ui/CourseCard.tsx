import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe2 } from "lucide-react";

interface CourseCardProps {
  title: string;
  slug: string;
  track: string;
  color: string;
  duration: string;
  format: string;
  description: string;
  instructor: string;
  bgImage: string;
  isHot?: boolean;
}

export function CourseCard({ title, slug, track, color, duration, format, description, instructor, bgImage, isHot }: CourseCardProps) {
  return (
    <Link href={`/khoa-hoc/${slug}`} className="block h-full">
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-card flex flex-col h-full">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${bgImage}')` }}></div>
          <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${color}`}>
            {track}
          </div>
          {isHot && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              HOT
            </div>
          )}
        </div>
        <CardHeader className="pb-2 flex-grow">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-foreground/60 mt-2">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {duration}</span>
            <span className="flex items-center gap-1"><Globe2 className="w-4 h-4" /> {format}</span>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm text-foreground/70 line-clamp-2">
            {description}
          </p>
        </CardContent>
        <CardFooter className="pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex-shrink-0"></div>
            <span className="text-sm font-medium">{instructor}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
