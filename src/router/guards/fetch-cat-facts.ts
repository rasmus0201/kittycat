import { useCatFactsStore } from "@/stores";

export async function fetchCatFacts(): Promise<void> {
  const catFactsStore = useCatFactsStore();
  if (catFactsStore.status === "initial" || catFactsStore.status === "failed") {
    await catFactsStore.load();
  }
}
