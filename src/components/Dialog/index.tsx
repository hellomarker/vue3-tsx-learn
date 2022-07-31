import { FunctionalComponent } from "vue";

export const useDialog = () => {
  const Dialog: FunctionalComponent = (props, { slots, emit }) => {
    return (
      <>
        1
      </>
    )
  };
  return { Dialog };
};
