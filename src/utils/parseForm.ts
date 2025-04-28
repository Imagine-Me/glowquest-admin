export const parseFormData = (formData: FormData) => {
  return formData.entries().reduce((acc, [key, val]) => {
    let parsedValue: unknown;
    try {
      parsedValue = JSON.parse(val as string);
    } catch {
      parsedValue = val;
    }
    acc[key] = parsedValue;
    return acc;
  }, {} as Record<string, unknown>);
};
