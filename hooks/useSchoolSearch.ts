import { useState } from "react";
import { mockSchools } from "../mocks/schools";

export const useSchoolSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const filteredSchools =
    searchQuery.length > 0
      ? mockSchools.filter((school) =>
          school.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    if (selectedSchool) {
      setSelectedSchool(null);
    }
    if (text.length > 0) {
      setIsInputFocused(true);
    }
  };

  const handleSelectSchool = (school: { id: string; name: string }) => {
    setSelectedSchool(school.name);
    setSearchQuery("");
    setIsInputFocused(false);
  };

  const handleCloseList = () => {
    setSearchQuery("");
    setIsInputFocused(false);
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return {
    searchQuery,
    selectedSchool,
    isInputFocused,
    filteredSchools,
    handleSearchChange,
    handleSelectSchool,
    handleCloseList,
    handleFocus,
    handleBlur,
  };
};

