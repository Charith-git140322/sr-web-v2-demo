import { FilledButton } from "@/components/buttons";
import { cn, thousandSeparator } from "@/lib/utils";

type PricingCardProps = {
  title: string;
  price: number;
  description: string[];
  tableColor: string;
  tableTicks: {
    youtube: boolean;
    googleDrive: boolean;
    streamable: boolean;
    dropbox: boolean;
  };
};

export default function PricingCard({
  title,
  price,
  description,
  tableColor,
  tableTicks,
}: PricingCardProps) {
  return (
    <div className="max-h-[500px] w-[300px] rounded-xl bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl md:w-[350px]">
      <h2 className="text-2xl font-bold">{title}</h2>
      <h4 className="text-sm font-bold">
        LKR {thousandSeparator(price)}
        {price !== 0 && (
          <span className="align-middle text-xs font-light text-slate-500">
            /month
          </span>
        )}
      </h4>
      <hr className="my-4 border-t border-solid border-gray-300" />
      <ul className="list-inside list-disc py-3 text-sm font-semibold">
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <table className="w-full border-separate border-spacing-0 rounded-lg border border-gray-400">
        <thead>
          <tr>
            <th
              colSpan={2}
              className={cn(
                "rounded-t-lg px-4 py-3 text-left font-semibold text-gray-900",
                tableColor,
              )}
            >
              Video file storage destination
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="border-b border-gray-300 px-4 py-3 font-medium text-gray-900">
              YOUTUBE
            </td>
            <td className="border-b border-gray-300 px-4 py-3 text-center text-xl">
              <TickOrCross tick={tableTicks.youtube} />
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="border-b border-gray-300 px-4 py-3 font-medium text-gray-900">
              GOOGLE DRIVE
            </td>
            <td className="border-b border-gray-300 px-4 py-3 text-center text-xl">
              <TickOrCross tick={tableTicks.googleDrive} />
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="border-b border-gray-300 px-4 py-3 font-medium text-gray-900">
              STREAMABLE
            </td>
            <td className="border-b border-gray-300 px-4 py-3 text-center text-xl">
              <TickOrCross tick={tableTicks.streamable} />
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="rounded-bl-lg px-4 py-3 font-medium text-gray-900">
              DROP BOX
            </td>
            <td className="rounded-br-lg px-4 py-3 text-center text-xl">
              <TickOrCross tick={tableTicks.dropbox} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

type TickOrCrossProps = {
  tick: boolean;
};
function TickOrCross({ tick }: TickOrCrossProps) {
  return tick ? (
    <span className="text-green-600">✓</span>
  ) : (
    <span className="text-red-500">✗</span>
  );
}

export function EnterprisePricingCard() {
  return (
    <div className="h-[440px] w-[300px] rounded-xl bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl md:w-[350px]">
      <h2 className="text-2xl font-bold">Enterprise</h2>
      <h4 className="text-sm font-bold">
        <br />
      </h4>
      <hr className="my-4 border-t border-solid border-gray-300" />

      <div className="flex items-center justify-center pt-5">
        <FilledButton className="w-full bg-amber-400 hover:bg-amber-500">
          Contact Us
        </FilledButton>
      </div>
    </div>
  );
}
