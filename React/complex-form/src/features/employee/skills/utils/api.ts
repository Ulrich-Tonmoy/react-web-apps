import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";
const mockSkillCategories = [
  {
    label: "Technical Skills",
    value: "1",
    children: [
      {
        label: "Programming Languages",
        value: "1.1",
        children: [
          { label: "Python", value: "1.1.1" },
          { label: "Java", value: "1.1.2" },
          { label: "C++", value: "1.1.3" },
          { label: "JavaScript", value: "1.1.4" },
        ],
      },
      {
        label: "Software Proficiency",
        value: "1.2",
        children: [
          { label: "Microsoft Excel", value: "1.2.1" },
          { label: "Adobe Creative Suite", value: "1.2.2" },
          { label: "Salesforce", value: "1.2.3" },
        ],
      },
      {
        label: "Data Analysis",
        value: "1.3",
        children: [
          { label: "SQL", value: "1.3.1" },
          { label: "R", value: "1.3.2" },
          { label: "Tableau", value: "1.3.3" },
          { label: "Google Analytics", value: "1.3.4" },
        ],
      },
      {
        label: "Web Development",
        value: "1.4",
        children: [
          { label: "HTML", value: "1.4.1" },
          { label: "CSS", value: "1.4.2" },
          { label: "React", value: "1.4.3" },
          { label: "Node.js", value: "1.4.4" },
        ],
      },
      {
        label: "Network Administration",
        value: "1.5",
        children: [
          { label: "Cisco networking", value: "1.5.1" },
          { label: "Firewall management", value: "1.5.2" },
          { label: "VPN configuration", value: "1.5.3" },
        ],
      },
    ],
  },
  {
    label: "Soft Skills",
    value: "2",
    children: [
      {
        label: "Communication",
        value: "2.1",
        children: [
          { label: "Verbal communication", value: "2.1.1" },
          { label: "Written communication", value: "2.1.2" },
          { label: "Active listening", value: "2.1.3" },
        ],
      },
      {
        label: "Teamwork",
        value: "2.2",
        children: [
          { label: "Collaboration", value: "2.2.1" },
          { label: "Conflict resolution", value: "2.2.2" },
          { label: "Adaptability", value: "2.2.3" },
        ],
      },
      {
        label: "Problem Solving",
        value: "2.3",
        children: [
          { label: "Critical thinking", value: "2.3.1" },
          { label: "Analytical skills", value: "2.3.2" },
          { label: "Creativity", value: "2.3.3" },
        ],
      },
      {
        label: "Time Management",
        value: "2.4",
        children: [
          { label: "Prioritization", value: "2.4.1" },
          { label: "Multitasking", value: "2.4.2" },
          { label: "Meeting deadlines", value: "2.4.3" },
        ],
      },
      {
        label: "Emotional Intelligence",
        value: "2.5",
        children: [
          { label: "Empathy", value: "2.5.1" },
          { label: "Self-regulation", value: "2.5.2" },
          { label: "Interpersonal skills", value: "2.5.3" },
        ],
      },
    ],
  },
  {
    label: "Leadership Skills",
    value: "3",
    children: [
      {
        label: "Project Management",
        value: "3.1",
        children: [
          { label: "Agile methodologies", value: "3.1.1" },
          { label: "Risk management", value: "3.1.2" },
          { label: "Resource allocation", value: "3.1.3" },
        ],
      },
      {
        label: "Decision Making",
        value: "3.2",
        children: [
          { label: "Strategic thinking", value: "3.2.1" },
          { label: "Data-driven decision-making", value: "3.2.2" },
          { label: "Consensus building", value: "3.2.3" },
        ],
      },
      {
        label: "Mentoring",
        value: "3.3",
        children: [
          { label: "Coaching", value: "3.3.1" },
          { label: "Providing feedback", value: "3.3.2" },
          { label: "Developing others", value: "3.3.3" },
        ],
      },
      {
        label: "Change Management",
        value: "3.4",
        children: [
          { label: "Leading through change", value: "3.4.1" },
          { label: "Stakeholder engagement", value: "3.4.2" },
          { label: "Communication strategies", value: "3.4.3" },
        ],
      },
      {
        label: "Vision and Strategy",
        value: "3.5",
        children: [
          { label: "Long-term planning", value: "3.5.1" },
          { label: "Innovation", value: "3.5.2" },
          { label: "Goal setting", value: "3.5.3" },
        ],
      },
    ],
  },
  {
    label: "Industry Specific Skills",
    value: "4",
    children: [
      {
        label: "Healthcare",
        value: "4.1",
        children: [
          { label: "Patient care", value: "4.1.1" },
          { label: "Medical coding", value: "4.1.2" },
          { label: "HIPAA compliance", value: "4.1.3" },
        ],
      },
      {
        label: "Finance",
        value: "4.2",
        children: [
          { label: "Financial analysis", value: "4.2.1" },
          { label: "Budgeting", value: "4.2.2" },
          { label: "Tax regulations", value: "4.2.3" },
        ],
      },
      {
        label: "Marketing",
        value: "4.3",
        children: [
          { label: "SEO", value: "4.3.1" },
          { label: "Content creation", value: "4.3.2" },
          { label: "Market research", value: "4.3.3" },
        ],
      },
      {
        label: "Manufacturing",
        value: "4.4",
        children: [
          { label: "Quality control", value: "4.4.1" },
          { label: "Lean manufacturing", value: "4.4.2" },
          { label: "Supply chain management", value: "4.4.3" },
        ],
      },
      {
        label: "Education",
        value: "4.5",
        children: [
          { label: "Curriculum development", value: "4.5.1" },
          { label: "Classroom management", value: "4.5.2" },
          { label: "Educational technology", value: "4.5.3" },
        ],
      },
    ],
  },
  {
    label: "Digital Skills",
    value: "5",
    children: [
      {
        label: "Social Media Management",
        value: "5.1",
        children: [
          { label: "Content creation", value: "5.1.1" },
          { label: "Analytics", value: "5.1.2" },
          { label: "Community engagement", value: "5.1.3" },
        ],
      },
      {
        label: "Cybersecurity",
        value: "5.2",
        children: [
          { label: "Threat assessment", value: "5.2.1" },
          { label: "Risk management", value: "5.2.2" },
          { label: "Incident response", value: "5.2.3" },
        ],
      },
      {
        label: "Cloud Computing",
        value: "5.3",
        children: [
          { label: "AWS", value: "5.3.1" },
          { label: "Azure", value: "5.3.2" },
          { label: "Google Cloud Platform", value: "5.3.3" },
        ],
      },
      {
        label: "E-commerce",
        value: "5.4",
        children: [
          { label: "Online sales strategies", value: "5.4.1" },
          { label: "Payment processing", value: "5.4.2" },
          { label: "Customer service", value: "5.4.3" },
        ],
      },
      {
        label: "Digital Design",
        value: "5.5",
        children: [
          { label: "UI/UX design", value: "5.5.1" },
          { label: "Graphic design", value: "5.5.2" },
          { label: "Video editing", value: "5.5.3" },
        ],
      },
    ],
  },
  {
    label: "Research and Analytical Skills",
    value: "6",
    children: [
      {
        label: "Market Research",
        value: "6.1",
        children: [
          { label: "Survey design", value: "6.1.1" },
          { label: "Data collection", value: "6.1.2" },
          { label: "Trend analysis", value: "6.1.3" },
        ],
      },
      {
        label: "Scientific Research",
        value: "6.2",
        children: [
          { label: "Experimental design", value: "6.2.1" },
          { label: "Data interpretation", value: "6.2.2" },
          { label: "Statistical analysis", value: "6.2.3" },
        ],
      },
      {
        label: "Financial Research",
        value: "6.3",
        children: [
          { label: "Investment analysis", value: "6.3.1" },
          { label: "Risk assessment", value: "6.3.2" },
          { label: "Economic forecasting", value: "6.3.3" },
        ],
      },
      {
        label: "Policy Analysis",
        value: "6.4",
        children: [
          { label: "Regulatory research", value: "6.4.1" },
          { label: "Impact assessment", value: "6.4.2" },
          { label: "Legislative analysis", value: "6.4.3" },
        ],
      },
      {
        label: "User Research",
        value: "6.5",
        children: [
          { label: "Usability testing", value: "6.5.1" },
          { label: "User interviews", value: "6.5.2" },
          { label: "Persona development", value: "6.5.3" },
        ],
      },
    ],
  },
  {
    label: "Sales and Customer Service Skills",
    value: "7",
    children: [
      {
        label: "Sales Techniques",
        value: "7.1",
        children: [
          { label: "Negotiation", value: "7.1.1" },
          { label: "Relationship building", value: "7.1.2" },
          { label: "Closing strategies", value: "7.1.3" },
        ],
      },
      {
        label: "Customer Support",
        value: "7.2",
        children: [
          { label: "Troubleshooting", value: "7.2.1" },
          { label: "Product knowledge", value: "7.2.2" },
          { label: "Customer retention", value: "7.2.3" },
        ],
      },
      {
        label: "Account Management",
        value: "7.3",
        children: [
          { label: "Client relationship management", value: "7.3.1" },
          { label: "Upselling", value: "7.3.2" },
          { label: "Contract negotiation", value: "7.3.3" },
        ],
      },
      {
        label: "Lead Generation",
        value: "7.4",
        children: [
          { label: "Networking", value: "7.4.1" },
          { label: "Cold calling", value: "7.4.2" },
          { label: "Inbound marketing", value: "7.4.3" },
        ],
      },
      {
        label: "CRM Software",
        value: "7.5",
        children: [
          { label: "Salesforce", value: "7.5.1" },
          { label: "HubSpot", value: "7.5.2" },
          { label: "Zoho CRM", value: "7.5.3" },
        ],
      },
    ],
  },
  {
    label: "Creative Skills",
    value: "8",
    children: [
      {
        label: "Content Creation",
        value: "8.1",
        children: [
          { label: "Writing", value: "8.1.1" },
          { label: "Blogging", value: "8.1.2" },
          { label: "Video production", value: "8.1.3" },
        ],
      },
      {
        label: "Graphic Design",
        value: "8.2",
        children: [
          { label: "Logo design", value: "8.2.1" },
          { label: "Branding", value: "8.2.2" },
          { label: "Illustration", value: "8.2.3" },
        ],
      },
      {
        label: "Artistic Skills",
        value: "8.3",
        children: [
          { label: "Photography", value: "8.3.1" },
          { label: "Painting", value: "8.3.2" },
          { label: "Sculpture", value: "8.3.3" },
        ],
      },
      {
        label: "Creative Writing",
        value: "8.4",
        children: [
          { label: "Copywriting", value: "8.4.1" },
          { label: "Storytelling", value: "8.4.2" },
          { label: "Scriptwriting", value: "8.4.3" },
        ],
      },
      {
        label: "Music and Performing Arts",
        value: "8.5",
        children: [
          { label: "Instrument proficiency", value: "8.5.1" },
          { label: "Acting", value: "8.5.2" },
          { label: "Stage production", value: "8.5.3" },
        ],
      },
    ],
  },
];

const getCoreCompetencies = async (): Promise<AutocompleteOption[]> => {
  await wait();

  return [
    {
      label: "Project Management",
      value: "1",
    },
    {
      label: "Communication",
      value: "2",
    },
    {
      label: "Technical Skills",
      value: "3",
    },
    {
      label: "Leadership",
      value: "4",
    },
    {
      label: "Problem-Solving",
      value: "5",
    },
    {
      label: "Other",
      value: "6",
    },
  ];
};

const getProficiencyLevels = async (): Promise<AutocompleteOption[]> => {
  await wait();

  return [
    {
      label: "Beginner",
      value: "1",
    },
    {
      label: "Intermediate",
      value: "2",
    },
    {
      label: "Advanced",
      value: "3",
    },
  ];
};

const getSkillCategories = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return mockSkillCategories.map((category) => ({
    label: category.label,
    value: category.value,
  }));
};

const getSkillSubcategories = async (
  categoryId: string
): Promise<AutocompleteOption[]> => {
  await wait();
  const category = mockSkillCategories.find((cat) => cat.value === categoryId);
  if (!category) return [];

  return category.children.map((subcategory) => ({
    label: subcategory.label,
    value: subcategory.value,
  }));
};

const getSkills = async (
  subcategoryId: string
): Promise<AutocompleteOption[]> => {
  await wait();
  for (const category of mockSkillCategories) {
    const subcategory = category.children.find(
      (sub) => sub.value === subcategoryId
    );
    if (subcategory) {
      return subcategory.children.map((skill) => ({
        label: skill.label,
        value: skill.value,
      }));
    }
  }
  return [];
};

const getLanguages = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    { value: "1", label: "English" },
    { value: "2", label: "Spanish" },
    { value: "3", label: "French" },
    { value: "4", label: "German" },
    { value: "5", label: "Chinese" },
    { value: "6", label: "Japanese" },
    { value: "7", label: "Korean" },
    { value: "8", label: "Arabic" },
    { value: "9", label: "Hindi" },
    { value: "10", label: "Portuguese" },
    { value: "11", label: "Russian" },
    { value: "12", label: "Italian" },
  ];
};

export {
  getCoreCompetencies,
  getProficiencyLevels,
  getSkillCategories,
  getSkillSubcategories,
  getSkills,
  getLanguages,
};
