import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  imageAlt?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
  linkColor?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  link,
  imageAlt = title,
  className,
  backgroundColor = "#0C2449",
  textColor = "white",
  descriptionColor = "rgb(209 213 219 / 0.9)",
  linkColor = "white",
}: ServiceCardProps) {
  const hasImage = image && image.trim() !== "";

  return (
    <Card
      className={cn(
        "border-none overflow-hidden hover:shadow-xl transition-shadow rounded-xl",
        className
      )}
      style={{ backgroundColor }}
    >
      <div className="relative w-full overflow-hidden aspect-[16/9]">
        {hasImage ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center">
            <ImageOff
              className="w-16 h-16 text-gray-400 mb-3"
              strokeWidth={1.5}
            />
            <p className="text-gray-400 font-medium text-sm">
              Không có hình ảnh
            </p>
          </div>
        )}
      </div>

      <CardHeader className="pb-2 pt-5">
        <CardTitle
          className="text-2xl font-bold leading-tight"
          style={{ color: textColor }}
        >
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <CardDescription
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: descriptionColor }}
        >
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-0 pb-5">
        <Button
          asChild
          variant="ghost"
          className="hover:bg-transparent p-0 h-auto font-normal text-sm"
        >
          <Link
            href={link}
            className="inline-flex items-center gap-2"
            style={{ color: linkColor }}
          >
            Xem thêm
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
