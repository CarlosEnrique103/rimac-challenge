"use client";
import BusinessLayout from "@/components/layouts/BusinessLayout";
import ActiveIndicator from "@/components/UI/ActiveIndicator";
import PlanTypeCard from "@/components/UI/PlanTypeCard";
import ProgressTracker from "@/components/UI/ProgressTracker";
import ServiceTypeCard from "@/components/UI/ServiceTypeCard";
import UserDetail from "@/components/UserDetail";
import { BASE_URL_PLANS } from "@/const/url";
import { client } from "@/core/api/client";
import { useStepsStore } from "@/store/useStepsStore";
import { useUserStore } from "@/store/useUserStore";
import { getAge } from "@/utils/getAge";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BusinessPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | "">("");

  const { userData, setSelectedPlan: updatePlanSelected } = useUserStore();

  const { currentStep, goToStep } = useStepsStore();

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data } = await client.get(BASE_URL_PLANS);
      return data.list.filter(
        (plan: Plan) => getAge(userData.birthDate) || 18 <= plan.age
      );
    },
    enabled: false,
  });

  if (isLoading || isFetching) {
    return (
      <BusinessLayout>
        <ProgressTracker />
        <ActiveIndicator />
      </BusinessLayout>
    );
  }

  return (
    <BusinessLayout>
      <ProgressTracker />

      {currentStep === 1 && (
        <div className="business__cards">
          <div className="business__cards-text">
            <h2 className="text--heading-secondary-main">
              Rocío ¿Para quién deseas cotizar?
            </h2>
            <p className="text--heading-secondary-sub">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>

          <div className="business__cards-service-cards">
            <ServiceTypeCard
              variant="personal"
              selected={selectedService === "personal"}
              onSelect={(variant) => {
                setSelectedService(variant);
                refetch();
              }}
            />

            <ServiceTypeCard
              variant="someone-else"
              selected={selectedService === "someone-else"}
              onSelect={(variant) => {
                setSelectedService(variant);
                refetch();
              }}
            />
          </div>

          <div className="business__plans">
            {data?.length > 0 &&
              data.map((plan: Plan) => (
                <PlanTypeCard
                  key={plan.name}
                  onSelect={(plan) => {
                    updatePlanSelected(plan);
                    goToStep(2);
                  }}
                  plan={plan}
                />
              ))}
          </div>
        </div>
      )}

      {currentStep === 2 && <UserDetail />}
    </BusinessLayout>
  );
};

export default BusinessPage;
