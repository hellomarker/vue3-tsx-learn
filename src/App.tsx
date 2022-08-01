import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import './App.scss'

export default defineComponent({
  setup(props, { attrs, slots, emit }) {
    return () => (
      <>
        <RouterView></RouterView>
      </>
    );
  },
});
