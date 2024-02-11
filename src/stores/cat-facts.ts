import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, reactive, toRefs } from "vue";

import { getAllCatFacts } from "@/api/cat-facts";
import { CatFact } from "@/types";

interface State {
  status: "initial" | "loading" | "loaded" | "failed";
  catFacts: CatFact[];
}

export const useCatFactsStore = defineStore(
  "favoriteDictionaries",
  () => {
    const state = reactive<State>({
      status: "initial",
      catFacts: [],
    });

    const favorites = computed(() =>
      state.catFacts.filter((fact) => fact.favorite),
    );

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
        console.log(error);
        state.status = "failed";
      }
    };

    const setFavorite = (id: number, favorite: boolean) => {
      state.catFacts = state.catFacts.map((fact) => {
        if (fact.id !== id) {
          return fact;
        }

        return {
          ...fact,
          favorite,
        };
      });
    };

    return {
      ...toRefs(state),
      favorites,

      load,
      setFavorite,
    };
  },
  {
    persist: {
      paths: ["catFacts", "status"],
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatFactsStore, import.meta.hot));
}
