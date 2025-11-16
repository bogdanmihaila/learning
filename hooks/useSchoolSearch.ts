import { useEffect, useState } from "react";
import type { School } from "../services/network";
import { searchSchools } from "../services/network";
import { useDebouncedValue } from "./useDebouncedValue";

export const useSchoolSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const debouncedQuery = useDebouncedValue(searchQuery, 500);

  useEffect(() => {
    const fetchSchools = async () => {
      if (!debouncedQuery || debouncedQuery.length === 0) {
        setFilteredSchools([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        const schools = await searchSchools(debouncedQuery);
        setFilteredSchools(schools);
      } catch (error) {
        console.error("Failed to fetch schools:", error);
        setFilteredSchools([]);
      } finally {
        setIsSearching(false);
      }
    };

    fetchSchools();
  }, [debouncedQuery]);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    if (selectedSchool) {
      setSelectedSchool(null);
    }
    if (text.length > 0) {
      setIsInputFocused(true);
      setIsSearching(true);
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
    setFilteredSchools([]);
    setIsSearching(false);
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

