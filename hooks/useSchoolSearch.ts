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
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const debouncedQuery = useDebouncedValue(searchQuery, 500);

  useEffect(() => {
    const fetchSchools = async () => {
      if (!debouncedQuery || debouncedQuery.length === 0) {
        setFilteredSchools([]);
        setIsSearching(false);
        setHasSearched(false);
        return;
      }

      setIsSearching(true);
      try {
        const schools = await searchSchools(debouncedQuery);
        setFilteredSchools(schools);
        setHasSearched(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setFilteredSchools([]);
        setHasSearched(true);
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
    setFilteredSchools([]);
    setIsSearching(false);
    setHasSearched(false);
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
    hasSearched,
    handleSearchChange,
    handleSelectSchool,
    handleCloseList,
    handleFocus,
    handleBlur,
  };
};
