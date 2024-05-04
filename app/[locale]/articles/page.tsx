import Image from "next/image";
import Link from "next/link";

async function getData() {
  const url = process.env.NEXTAUTH_URL;

  const res = await fetch(`${url}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Blog() {
  const data = await getData();
  console.log(data);
  return (
    <div className="mt-[110px]">
      {data.map((item: any) => (
        <Link
          href={`/blog/${item._id}`}
          key={item.id}
          className="flex items-center gap-12 mb-12"
        >
          <div>
            <img
              src={item.imageurl}
              width={400}
              height={250}
              className="object-cover w-[200px]"
              alt="post img"
            />
          </div>
          <div>
            <h1 className="mb-4">{item.title} </h1>
            <p className="text-[#999] text-xl">{item.description} </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
