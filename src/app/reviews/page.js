// app/reviews/page.js (or pages/reviews.js)
import { ReviewCard } from "@/components/ReviewCard";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "John Doe",
      imageUrl:
        "https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg",
      review:
        "Absolutely love my new car from Supreme Motors! Fantastic service and quick delivery.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      imageUrl:
        "https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg",
      review:
        "Customer support was responsive and helped me pick the perfect SUV. Highly recommend!",
      rating: 4,
    },
    {
      name: "Carlos Vega",
      imageUrl:
        "https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg",
      review:
        "Smooth purchase process, and the car was in excellent condition. Would buy again.",
      rating: 5,
    },
    {
      name: "Maya Singh",
      imageUrl:
        "https://i.pinimg.com/736x/2c/e0/c8/2ce0c8e9423351561f91c33645141120.jpg",
      review:
        "Had a small issue with paperwork, but they resolved it quickly. Great experience overall.",
      rating: 4,
    },
    {
      name: "Liam Johnson",
      imageUrl:
        "https://i.pinimg.com/736x/6d/5e/05/6d5e05772a65bc525497fe65d82bdea4.jpg",
      review:
        "Amazing selection of vehicles and very knowledgeable staff. A+ experience.",
      rating: 5,
    },
    {
      name: "Sophie Müller",
      imageUrl:
        "https://i.pinimg.com/736x/e6/ae/09/e6ae097ce28239977b19b0480c82748b.jpg",
      review:
        "Got my dream car at a great price. They even detailed it before delivery. Top service!",
      rating: 5,
    },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">Customer Reviews</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}
