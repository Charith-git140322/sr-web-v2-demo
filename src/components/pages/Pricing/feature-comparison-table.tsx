"use client";

import React, { useState } from "react";
import { PRICING_PLANS } from "@/data/pricing-plans";

const FeatureComparisonTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("Free");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Compare All Features
      </h2>

      <div className="mb-4 md:hidden">
        <label htmlFor="plan-select" className="mr-2 font-medium">
          Compare Free with:
        </label>
        <select
          id="plan-select"
          className="rounded border border-gray-300 px-2 py-1"
          value={selectedPlan}
          onChange={handleChange}
        >
          {PRICING_PLANS.filter((plan) => plan.name !== "Free").map((plan) => (
            <option key={plan.name} value={plan.name}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-white text-gray-700">
            <tr>
              <th className="p-4 text-left align-top text-base font-semibold">
                Features
              </th>
              {PRICING_PLANS.map((plan) => (
                <th
                  key={plan.name}
                  className={`p-4 text-left align-top text-base font-semibold ${
                    plan.name !== "Free" && plan.name !== selectedPlan
                      ? "hidden md:table-cell"
                      : ""
                  }`}
                >
                  {plan.name}
                  <div className="mt-1 text-sm font-bold">
                    {plan.price}
                    {plan.price !== 0 && (
                      <span className="text-xs font-medium text-gray-500">
                        /month
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4 text-left align-top font-medium text-gray-700">
                Enrolments per course
              </td>
              {PRICING_PLANS.map((plan) => (
                <td
                  key={plan.name}
                  className={`p-4 text-start align-top ${
                    plan.name !== "Free" && plan.name !== selectedPlan
                      ? "hidden md:table-cell"
                      : ""
                  }`}
                >
                  {plan.enrolments}
                </td>
              ))}
            </tr>

            <tr className="border-t">
              <td className="p-4 align-top font-medium text-gray-700">
                Max number of courses
              </td>
              {PRICING_PLANS.map((plan) => (
                <td
                  key={plan.name}
                  className={`p-4 text-start align-top ${
                    plan.name !== "Free" && plan.name !== selectedPlan
                      ? "hidden md:table-cell"
                      : ""
                  }`}
                >
                  {plan.maxCourses}
                </td>
              ))}
            </tr>

            <tr className="border-t">
              <td className="p-4 align-top font-medium text-gray-700">
                Video Storage Options
              </td>
              {PRICING_PLANS.map((plan) => (
                <td
                  key={plan.name}
                  className={`p-4 text-left align-top text-sm ${
                    plan.name !== "Free" && plan.name !== selectedPlan
                      ? "hidden md:table-cell"
                      : ""
                  }`}
                >
                  <div>
                    YOUTUBE: <TickOrCross tick={plan.storage.youtube} />
                  </div>
                  <div>
                    GOOGLE DRIVE:{" "}
                    <TickOrCross tick={plan.storage.googleDrive} />
                  </div>
                  <div>
                    STREAMABLE: <TickOrCross tick={plan.storage.streamable} />
                  </div>
                  <div>
                    DROP BOX: <TickOrCross tick={plan.storage.dropbox} />
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

type TickOrCrossProps = { tick: boolean };

function TickOrCross({ tick }: TickOrCrossProps) {
  return tick ? (
    <span className="text-green-600">✓</span>
  ) : (
    <span className="text-red-500">✗</span>
  );
}

export default FeatureComparisonTable;
