"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { DateTimeFormatOptions } from "next-intl";

interface Props {
  title: string;
  imageurl: string;
  description: string;
  date: Date;
  creator: string;
}

export function ArticleCard({
  title,
  imageurl,
  description,
  date,
  creator,
}: Props) {
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
  return (
    <Card
      className="mt-8 md:mt-4 max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        className="bg-gray-100 dark:bg-white py-4 px-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img
          loading="lazy"
          src={imageurl}
          alt="article image"
          className="rounded-md"
        />
      </CardHeader>
      <CardBody
        className="px-6 py-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal dark:text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter
        className="bg-gray-100 dark:bg-gray-900 flex items-center justify-between py-3 px-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center gap-4 -space-x-3">
          <Tooltip content={creator}>
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="border-2 border-white hover:z-10"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </Tooltip>
          <h1 className="text-sm md:text-base dark:text-white">{creator}</h1>
        </div>
        <Typography
          className="font-normal dark:text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color="gray"
        >
          {formatTimestamp(date)}
        </Typography>
      </CardFooter>
    </Card>
  );
}
