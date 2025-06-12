import { FilledButton } from "@/components/buttons";
import { PlayCircle } from "lucide-react";

interface AddOnCardProps {
  title: string;
  price: string | null;
  description: string;
}

export default function AddOnCard({
  title,
  price,
  description,
}: AddOnCardProps) {
  const isContactOnly = !price;

  return (
    <div className="h-[150px] max-w-[400px] rounded-xl border border-gray-200 bg-white p-4 shadow transition hover:shadow-md">
      <div className="flex items-start gap-2">
        <PlayCircle className="mt-1 text-amber-800" />
        <div className="flex flex-col gap-1">
          <h3 className="text-md font-bold text-gray-900 md:text-lg">
            {title}
          </h3>
          {!isContactOnly && (
            <>
              <p className="md:text-md text-sm font-semibold text-gray-700">
                {price}
              </p>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </>
          )}
          <div className="flex items-center pt-5">
            {isContactOnly && (
              <FilledButton>
                <a href="mailto:support@studyreserve.com">Contact Us</a>
              </FilledButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
