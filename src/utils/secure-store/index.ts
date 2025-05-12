import * as SecureStore from "expo-secure-store";

export async function saveInSecureStore<T>(key: string, value: T) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

export async function getFromSecureStore<T>(key: string) {
  const json = await SecureStore.getItemAsync(key);
  if (!json) return undefined;

  const result = JSON.parse(json!);
  return result as T;
}

export async function removeFromSecureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}
