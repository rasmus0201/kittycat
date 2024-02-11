import { acceptHMRUpdate, defineStore } from "pinia";
import { reactive, toRefs } from "vue";

import { getAllCatFacts } from "@/api/cat-facts";
import { CatFact } from "@/types";

interface State {
  status: "initial" | "loading" | "loaded" | "failed";
  catFacts: CatFact[];
  favorites: CatFact[];
}

export const useCatFactsStore = defineStore(
  "favoriteDictionaries",
  () => {
    const state = reactive<State>({
      status: "initial",
      catFacts: [],
      favorites: [],
    });

    const load = async () => {
      state.status = "loading";
      try {
        const response = await getAllCatFacts({ limit: 100 });
        state.catFacts = response.data.map((fact, index) => ({
          ...fact,
          id: index,
        }));

        state.status = "loaded";
      } catch (error) {
        state.status = "failed";
      }
    };

    return {
      ...toRefs(state),

      load,
    };
  },
  {
    persist: {
      paths: ["catFacts", "favorites"],
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatFactsStore, import.meta.hot));
}
