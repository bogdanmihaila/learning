import Toast from "react-native-toast-message";
import i18n from "../i18n";

const USE_MOCK_API = true;

const MOCK_API_URL = "https://691a07019ccba073ee94a6cf.mockapi.io/api/v1";
const SKOLEINTRA_API_URL = "https://naimain.m.akoleintra.dk/restapi/sites/v1";

export interface School {
  id: string;
  name: string;
}

interface MockApiSchool {
  id: string;
  name: string;
}

interface RealApiSchool {
  id: string;
  name: string;
}

const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const searchSchoolsOnMockApi = async (query: string): Promise<School[]> => {
  const data = await fetchData<MockApiSchool[]>(`${MOCK_API_URL}/getSchools`);

  return data.filter((school) =>
    school.name.toLowerCase().includes(query.toLowerCase())
  );
};

const searchSchoolsOnRealApi = async (query: string): Promise<School[]> => {
  const data = await fetchData<RealApiSchool[]>(
    `${SKOLEINTRA_API_URL}/?startsWith=${encodeURIComponent(query)}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return data.map((school) => ({
    id: school.id,
    name: school.name,
  }));
};

export const searchSchools = async (query: string): Promise<School[]> => {
  if (query.trim().length === 0) {
    return [];
  }

  try {
    if (USE_MOCK_API) {
      return await searchSchoolsOnMockApi(query);
    } else {
      return await searchSchoolsOnRealApi(query);
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: i18n.t("errors.fetchFailed"),
      position: "bottom",
    });
    throw error;
  }
};
