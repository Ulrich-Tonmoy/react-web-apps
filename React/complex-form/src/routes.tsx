import { EmployeeAdditionalInfo } from "@/features/employee/additional-info/page";
import { EmployeeHistory } from "@/features/employee/history/page";
import { EmployeePersonalInfo } from "@/features/employee/personal-info/page";
import { EmployeeReview } from "@/features/employee/review/page";
import { EmployeeSkills } from "@/features/employee/skills/page";
import { EmployeeWrapper } from "@/features/employee/wrapper/page";
import { DashboardLayout } from "@/features/layout/components/dashboard-layout";
import { BrowserRouter, Route, Routes } from "react-router";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/employee" element={<EmployeeWrapper />}>
            <Route
              path="/employee/personal-info"
              element={<EmployeePersonalInfo />}
            />
            <Route path="/employee/history" element={<EmployeeHistory />} />
            <Route path="/employee/skills" element={<EmployeeSkills />} />
            <Route
              path="/employee/additional-info"
              element={<EmployeeAdditionalInfo />}
            />
            <Route path="/employee/review" element={<EmployeeReview />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RoutesWrapper };
