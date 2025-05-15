import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FilterIcon from "../../public/icons/filter.svg";
import SearchIcon from "../../public/icons/search.svg";
import CheckIcon from "../../public/icons/check.svg";

const educationLevels = ["Advanced", "GCE A/L", "GCE O/L"];

type SearchBarProps = {
  selectedFilters?: string[];
  onFiltersChange?: (filters: string[]) => void;
  onSearch?: (query: string) => void;
  disableFilter?: boolean;
};
export default function SearchBar({
  disableFilter,
  selectedFilters,
  onFiltersChange,
  onSearch,
}: SearchBarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [localSelectedFilters, setLocalSelectedFilters] = useState<string[]>(
    selectedFilters ?? [],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedFilters) {
      setLocalSelectedFilters(selectedFilters);
    }
  }, [selectedFilters]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdownRefCurrent = dropdownRef.current;
      const dropdownButtonRefCurrent = dropdownButtonRef.current;

      const dropdownButtonRefCurrentContainsTarget =
        dropdownButtonRefCurrent?.contains(event.target as Node);
      const dropdownRefCurrentContainsTarget = dropdownRefCurrent?.contains(
        event.target as Node,
      );

      if (
        !dropdownButtonRefCurrentContainsTarget &&
        !dropdownRefCurrentContainsTarget
      ) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterClick = (_: React.MouseEvent) => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="w-300px flex h-[48px] items-center justify-between gap-2 rounded-full border border-[#A0A0A0] bg-[#F5E8DA] py-3 shadow-lg md:w-[342px]">
        <div className="flex flex-grow items-center px-4">
          <Image
            src={SearchIcon as string}
            alt="Search"
            width={20}
            height={20}
            className="mr-3"
          />
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full bg-transparent text-gray-700 focus:outline-none"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        <div className="relative">
          <button
            ref={dropdownButtonRef}
            className={`relative flex h-[48px] w-[95px] items-center gap-3 rounded-r-full border-none bg-[#C8A66B] px-2 py-2 opacity-50 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.4)]`}
            onClick={handleFilterClick}
            disabled={disableFilter}
          >
            {localSelectedFilters.length > 0 && (
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
            )}
            <span className="text-m text-white">Filter</span>
            <Image
              src={FilterIcon as string}
              alt="Filter"
              width={20}
              height={20}
            />
          </button>

          <div
            ref={dropdownRef}
            className={`absolute right-0 top-full z-50 mt-2 w-48 origin-top transform rounded-lg bg-white py-2 shadow-xl transition-all duration-200 ease-in-out ${
              isFilterOpen
                ? "pointer-events-auto scale-y-100 opacity-100"
                : "pointer-events-none scale-y-0 opacity-0"
            }`}
          >
            {educationLevels.map((level) => (
              <button
                key={level}
                onClick={() => {
                  const newFilters = localSelectedFilters.includes(level)
                    ? localSelectedFilters.filter((f) => f !== level)
                    : [...localSelectedFilters, level];

                  setLocalSelectedFilters(newFilters);
                  if (onFiltersChange) {
                    onFiltersChange(newFilters);
                  }
                }}
                className={`flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 ${
                  localSelectedFilters.includes(level)
                    ? "bg-gray-50 font-medium"
                    : ""
                }`}
              >
                <div className="flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white">
                  {localSelectedFilters.includes(level) && (
                    <Image
                      src={CheckIcon as string}
                      alt="Selected"
                      width={12}
                      height={12}
                      className="text-blue-600"
                    />
                  )}
                </div>
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
