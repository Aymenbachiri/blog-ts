"use client";
import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getData() {
  const url = process.env.NEXTAUTH_URL;

  return fetch(`/api/posts`, {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });
}
interface Data {
  _id: string;
  title: string;
  description: string;
  imageurl: string;
  updatedAt: Date;
  creator: string;
}

export default function Blog() {
  const [data, setData] = useState<Data[]>([]);
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] || "en";

  useEffect(() => {
    getData()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-[110px]">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4">
          <Link
            href={`/${currentLanguage}/articles/${item._id}`}
            className="flex items-center gap-12 mb-12"
          >
            <ArticleCard
              title={item.title}
              description={item.description}
              imageurl={item.imageurl}
              date={item.updatedAt}
              creator={item.creator}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
