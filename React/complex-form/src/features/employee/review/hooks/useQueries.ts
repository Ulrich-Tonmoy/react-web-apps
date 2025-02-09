import { getTermsAndConditions } from "@/features/employee/review/utils/api";
import { useQuery } from "@tanstack/react-query";

const useTermsAndConditions = () => {
  return useQuery({
    queryKey: ["termsAndConditions"],
    queryFn: getTermsAndConditions,
  });
};

export { useTermsAndConditions };
