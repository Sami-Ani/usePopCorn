import { useState, useEffect } from "react";
export function useLocalStorageState(initialState) {
  const [value, setValue] = useState(function () {
    const stored = localStorage.getItem(value);
    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value]);
}
