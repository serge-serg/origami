const API_URL = "http://localhost:4000/";

export async function getItems(section = "homepage") {
  const res = await fetch(`${API_URL}${section}`);
  if (!res.ok) throw new Error("Failed to load items");
  return res.json();
}

export async function fetchFiguresFiltered(filters = {}) {
  const params = new URLSearchParams();
  const ApiFig = `${API_URL}allFigures`;
  if (filters.type) params.append("type", filters.type);
  if (filters.complexity) params.append("complexity", filters.complexity);
  if (filters.size) params.append("size", filters.size);
  const url = params.toString() ? `${ApiFig}?${params.toString()}` : ApiFig;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load figures");
  return res.json();
}

export async function searchItem(searchValue) {
  const params = new URLSearchParams();

  if (searchValue && searchValue.trim()) {
    params.append("alt_like", searchValue.trim());
  }

  const url = `${API_URL}allFigures?${params.toString()}`;
  console.log("Search URL:", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error searching items");

  return res.json();
}

export async function getItem(path) {
  const res = await fetch(`${API_URL}allFigures?alt=${path}`);
  if (!res.ok) throw new Error("Failed to load item");
  return res.json();
}
