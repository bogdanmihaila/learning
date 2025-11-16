import { useState } from "react";
import { mockSchools } from "../mocks/schools";
import { useDebouncedValue } from "./useDebouncedValue";

export const useSchoolSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const debouncedQuery = useDebouncedValue(searchQuery, 500);

  const isSearching = searchQuery !== debouncedQuery && searchQuery.length > 0;

  const filteredSchools =
    debouncedQuery && debouncedQuery.length > 0
      ? mockSchools.filter((school) =>
          school.name.toLowerCase().includes(debouncedQuery.toLowerCase())
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
    isSearching,
    hasSearched: !!debouncedQuery && debouncedQuery.length > 0,
    handleSearchChange,
    handleSelectSchool,
    handleCloseList,
    handleFocus,
    handleBlur,
  };
};

