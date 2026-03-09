import { useState, useMemo, useRef, useEffect } from "react";
import { Country, City } from "country-state-city";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import "./CountryCitySelectStyle.css";

function SearchableSelect({
  options,
  value,
  onChange,
  placeholder,
  label,
  showSearch = true,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [search]);

  const filtered = useMemo(() => {
    if (!search) return options;

    const lower = search.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(lower));
  }, [options, search]);

  const selectedLabel = options.find((o) => o.value === value)?.label || "";

  return (
    <div>
      <label className="ccs-label">{label}</label>

      <div ref={containerRef} className="ccs-wrapper">
        <button
          type="button"
          className="ccs-select-btn"
          onClick={() => {
            setOpen(!open);
            setSearch("");
          }}
        >
          <span>{selectedLabel || placeholder}</span>
          <FaChevronDown size={14} />
        </button>

        {open && (
          <div className="ccs-dropdown">
            {showSearch && (
              <div className="ccs-search-box">
                <FaSearch size={14} />
                <input
                  className="ccs-search-input"
                  value={search}
                  autoFocus
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                />
              </div>
            )}

            <div ref={listRef} className="ccs-list">
              {filtered.length === 0 ? (
                <div className="ccs-empty">No results found</div>
              ) : (
                filtered.map((option) => (
                  <button
                    key={option.value}
                    className={`ccs-option ${
                      option.value === value ? "active" : ""
                    }`}
                    onClick={() => {
                      onChange(option.value, option);
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    {option.label}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CountryCitySelect({
  country,
  city,
  onCountryChange,
  onCityChange,
}) {
  const [countryIso, setCountryIso] = useState(() => {
    if (country) {
      const found = Country.getAllCountries().find((c) => c.name === country);
      return found?.isoCode || "";
    }
    return "";
  });

  const countryOptions = useMemo(() => {
    return Country.getAllCountries()
      .map((c) => ({
        label: `${c.flag} ${c.name}`,
        value: c.isoCode,
        extra: c.name,
      }))
      .sort((a, b) => a.extra.localeCompare(b.extra));
  }, []);

  const cityOptions = useMemo(() => {
    if (!countryIso) return [];

    const cities = City.getCitiesOfCountry(countryIso) || [];

    const seen = new Set();
    const unique = [];

    for (const c of cities) {
      if (!seen.has(c.name)) {
        seen.add(c.name);
        unique.push({
          label: c.name,
          value: c.name,
        });
      }
    }

    return unique.sort((a, b) => a.label.localeCompare(b.label));
  }, [countryIso]);

  return (
    <div className="ccs-container">
      <SearchableSelect
        label="Country"
        options={countryOptions}
        value={countryIso}
        placeholder="Select country"
        onChange={(isoCode, option) => {
          setCountryIso(isoCode);
          onCountryChange(option.extra, isoCode);
          onCityChange("");
        }}
      />

      <SearchableSelect
        label="City"
        options={cityOptions}
        value={city}
        placeholder={countryIso ? "Select city" : "Select country first"}
        onChange={(val) => onCityChange(val)}
      />
    </div>
  );
}
