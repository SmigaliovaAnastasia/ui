import { environment } from "../config/environment/environment";

export async function handleFileUpload (value: FileList | null) : Promise<string | undefined> {
  if (value) {
    const dataTransfer = new FormData;
    dataTransfer.append('file', value[0]);
    const response = await fetch(`${environment.clientServerApiUrl}/upload`, {
      method: 'POST',
      body: dataTransfer
    });
    
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data.filename);
    }
  };
}