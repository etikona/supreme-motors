import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BrandPage({ params }) {
  const filePath = path.join(process.cwd(), "public", "new_cars.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const brands = JSON.parse(fileData);

  const brand = brands.find(
    (b) =>
      b.brand_name.toLowerCase() ===
      decodeURIComponent(params.brand).toLowerCase()
  );

  if (!brand) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {brand.brand_name} Models
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brand.models.map((model) => (
          <div key={model.model} className="bg-white rounded-xl shadow p-6">
            <div className="h-40 relative mb-4">
              <Image
                src={model.image}
                alt={model.model}
                fill
                className="object-cover rounded"
                unoptimized={!model.image.startsWith("/")}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{model.model}</h2>
            <p className="text-gray-600 mb-2">
              {model.body_type} | {model.car_type}
            </p>
            <p className="text-gray-800 font-bold">{model.price}</p>
            <p className="mt-2 text-sm text-gray-500">{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
