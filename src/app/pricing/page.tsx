import { PRICING_PLANS, ADD_ONS } from "@/data/pricing-plans";
import PricingCard, {
  EnterprisePricingCard,
} from "@/components/pages/pricing/pricing-card";
import FeatureComparisonTable from "@/components/pages/pricing/feature-comparison-table";
import AddOnCard from "@/components/pages/pricing/add-on-card";
import InfoPageWrapper from "@/components/info-page-wrapper";

export default function Pricing() {
  return (
    <InfoPageWrapper title="Affordable Pricing with Free Plan">
      <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.name} className="flex justify-around">
            <PricingCard
              key={plan.name}
              title={plan.name}
              price={plan.price}
              description={[
                `${plan.enrolments} enrolments per course`,
                `Max number of courses: ${plan.maxCourses}`,
              ]}
              tableColor={plan.tableColor}
              tableTicks={plan.storage}
            />
          </div>
        ))}
        <div className="flex justify-around">
          <EnterprisePricingCard />
        </div>
      </div>

      <section>
        <FeatureComparisonTable />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Unlock More Features with Add-ons
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {ADD_ONS.map((addon, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-[300px] md:w-[380px]">
                <AddOnCard
                  title={addon.title}
                  price={addon.price}
                  description={addon.description}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </InfoPageWrapper>
  );
}
