import * as SecureStore from "expo-secure-store";

export async function save_in_store<T>(key: string, value: T) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

export async function get_from_store<T>(key: string) {
  const json = await SecureStore.getItemAsync(key);
  if (!json) return undefined;

  const result = JSON.parse(json!);
  return result as T;
}

export async function remove_from_store(key: string) {
  await SecureStore.deleteItemAsync(key);
}
