import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface InstructorCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  description?: string;
  color: string; // e.g. "group-hover:border-primary", "group-hover:text-primary"
}

export function InstructorCard({ name, role, company, image, description, color }: InstructorCardProps) {
  // Extracting border and text colors from the string (simplified mapping)
  const borderColor = color.includes("primary") ? "group-hover:border-primary" :
                      color.includes("green") ? "group-hover:border-green-600" :
                      color.includes("teal") ? "group-hover:border-teal-600" :
                      "group-hover:border-blue-600";
                      
  const textColor = color.includes("primary") ? "group-hover:text-primary" :
                    color.includes("green") ? "group-hover:text-green-600" :
                    color.includes("teal") ? "group-hover:text-teal-600" :
                    "group-hover:text-blue-600";

  return (
    <div className="flex flex-col items-center text-center group cursor-pointer bg-card p-6 rounded-xl border border-border shadow-sm hover:border-gray-300 hover:shadow-xl transition-all h-full">
      {image && (
        <div className={`w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg ${borderColor} transition-colors flex-shrink-0`}>
          <div className={`w-full h-full bg-top ${image?.includes('phan-thi-hoa') ? 'bg-white bg-contain bg-no-repeat' : 'bg-gray-300 bg-cover'}`} style={{ backgroundImage: `url('${image}')` }}></div>
        </div>
      )}
      <h3 className={`text-xl font-bold ${textColor} transition-colors ${!image ? 'mb-2' : ''}`}>{name}</h3>
      <p className={`text-sm font-medium mb-2 ${textColor.replace('group-hover:', '')}`}>{role}</p>
      <p className="text-sm text-foreground/60 font-medium mb-4">{company}</p>
      {description && (
        <p className="text-sm text-foreground/80 mt-auto leading-relaxed border-t pt-4">
          {description}
        </p>
      )}
    </div>
  );
}
