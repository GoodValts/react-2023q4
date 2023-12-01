export const convertToBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString() || '';
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export function convertFromBase64(base64String: string): string {
  const mimeType = base64String.match(/data:([^;]+);/)?.[1];
  const encodedData = base64String.split(',')[1];
  const decodedData = atob(encodedData);
  const arrayBuffer = new ArrayBuffer(decodedData.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < decodedData.length; i++) {
    uint8Array[i] = decodedData.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: mimeType });
  const objectUrl = URL.createObjectURL(blob);
  return objectUrl;
}
