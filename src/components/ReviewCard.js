// components/ReviewCard.js
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export function ReviewCard({ name, imageUrl, review, rating }) {
  return (
    <Card className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition duration-300 hover:scale-[1.015]">
      <CardHeader className="flex items-center gap-4 p-6">
        <Avatar className="h-14 w-14 ring-1 ring-gray-300 dark:ring-gray-600">
          {imageUrl ? (
            <AvatarImage src={imageUrl} alt={name} />
          ) : (
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </p>
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`transition-transform ${
                  i < rating
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                } hover:scale-110`}
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative px-6 pb-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <Quote className="absolute top-2 right-4 text-gray-300 dark:text-gray-600 opacity-20 w-6 h-6" />
        <p className="italic">{review}</p>
      </CardContent>
    </Card>
  );
}
