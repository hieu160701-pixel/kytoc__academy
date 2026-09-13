import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface InstructorCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  color: string; // e.g. "group-hover:border-primary", "group-hover:text-primary"
}

export function InstructorCard({ name, role, company, image, color }: InstructorCardProps) {
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
    <div className="flex flex-col items-center text-center group cursor-pointer bg-card p-6 rounded-xl border border-transparent hover:border-gray-100 hover:shadow-xl transition-all">
      <div className={`w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg ${borderColor} transition-colors`}>
        <div className="w-full h-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}></div>
      </div>
      <h3 className={`text-xl font-bold ${textColor} transition-colors`}>{name}</h3>
      <p className={`text-sm font-medium mb-2 ${textColor.replace('group-hover:', '')}`}>{role}</p>
      <p className="text-sm text-foreground/60">{company}</p>
    </div>
  );
}
