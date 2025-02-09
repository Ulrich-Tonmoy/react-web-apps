import {
  getCoreCompetencies,
  getLanguages,
  getProficiencyLevels,
  getSkillCategories,
  getSkills,
  getSkillSubcategories,
} from "@/features/employee/skills/utils/api";
import { useQuery } from "@tanstack/react-query";

const useCoreCompetencies = () => {
  return useQuery({
    queryKey: ["coreCompetencies"],
    queryFn: getCoreCompetencies,
  });
};

const useProficiencyLevels = () => {
  return useQuery({
    queryKey: ["proficiencyLevels"],
    queryFn: getProficiencyLevels,
  });
};

const useSkillCategories = () => {
  return useQuery({
    queryKey: ["skillCategories"],
    queryFn: getSkillCategories,
  });
};

const useSkillSubcategories = (category: string) => {
  return useQuery({
    queryKey: ["skillSubcategories", { category }],
    queryFn: () => getSkillSubcategories(category),
    enabled: !!category,
  });
};

const useSkills = (subcategory: string) => {
  return useQuery({
    queryKey: ["skills", { subcategory }],
    queryFn: () => getSkills(subcategory),
    enabled: !!subcategory,
  });
};

const useLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });
};

export {
  useCoreCompetencies,
  useProficiencyLevels,
  useSkillCategories,
  useSkills,
  useSkillSubcategories,
  useLanguages,
};
