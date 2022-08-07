import { FunctionalComponent, ref, Transition, computed } from "vue";
import "./index.scss";

export const useDialog = () => {
  const visiable = ref(false);
  const triggerDialog = (e: unknown) => {
    visiable.value = !visiable.value;
    if (e instanceof PointerEvent) {
    }
  };
  const showStyle = computed(() => {
    return "fade";
  });
  const Dialog: FunctionalComponent = (props, { slots, emit }) => {
    return (
      <>
        <Transition name="fade">
          <div v-show={visiable.value} class={`mask`} onClick={triggerDialog}>
            <div class="dialog">
              {slots.title && <div class="dialog-title">{slots.title()}</div>}
              {slots.default && (
                <div class="dialog-default">{slots.default()}</div>
              )}
              {slots.buttoms && (
                <div class="dialog-buttoms">{slots.buttoms()}</div>
              )}
            </div>
          </div>
        </Transition>
      </>
    );
  };
  return { Dialog, triggerDialog };
};
