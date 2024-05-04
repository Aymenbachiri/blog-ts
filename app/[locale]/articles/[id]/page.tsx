import Image from "next/image";
import user from "/public/user.png";

import { DateTimeFormatOptions } from "next-intl";

interface Params {
  id: string;
  title: string;
  description: string;
  imageurl: string;
  updatedAt: Date;
  creator: string;
}

async function getData(id: string) {
  const url = process.env.NEXTAUTH_URL;
  const res = await fetch(`${url}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

function formatTimestamp(timestamp: Date) {
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}

export default async function page({ params }: { params: Params }) {
  const data = await getData(params.id);
  return (
    <div className="max-w-screen-xl mt-[50px] mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url('${data.imageurl}')`,
        }}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white dark:bg-black dark:text-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 dark:text-white font-bold text-3xl mb-2">
              {data.title}
            </h1>
            <h2 className="text-gray-700 dark:text-white text-xs mt-2 gap-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <span className="text-indigo-600 font-bold md:text-3xl hover:text-gray-900 transition duration-500 ease-in-out">
                {data.creator}
              </span>{" "}
            </h2>
            <p className="text-base leading-8 my-5">{data.description}</p>
            <p>{formatTimestamp(data.updatedAt)} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
