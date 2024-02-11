async function parseResponse<T>(response: Response): Promise<T> {
  if (response.status === 204) {
    // HTTP No Content
    return {} as T;
  }

  try {
    return await response.json();
  } catch (e) {
    throw new Error("Invalid JSON");
  }
}

async function parseError<T>(response: Response): Promise<T> {
  let content = { code: "", message: "" };

  try {
    content = await response.json();
  } catch (e) {
    throw new Error("Invalid JSON");
  }

  throw new Error(`${content.code} (${content.message})`);
}

async function request<T>(url: string, options: RequestInit): Promise<T> {
  const response = await fetch(
    new Request(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    }),
  );

  if (!response.ok) {
    return parseError<T>(response);
  }

  return parseResponse<T>(response);
}

function getParamValue(value: unknown): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  return value.toString();
}

function buildQueryParameterString(data: Record<string, unknown>): string {
  const params = new URLSearchParams();

  const appendParam = (key: string, value: unknown) => {
    const paramValue = getParamValue(value);
    if (paramValue === undefined) {
      return;
    }

    params.append(key, paramValue.toString());
  };

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      value.forEach((v) => appendParam(key, v));
    } else {
      appendParam(key, value);
    }
  }

  return params.toString();
}

export function get<T>(
  url: string,
  params?: Record<string, unknown>,
  options?: RequestInit,
): Promise<T> {
  if (params) {
    url = `${url}?${buildQueryParameterString(params)}`;
  }

  return request<T>(url, {
    method: "GET",
    ...options,
  });
}
