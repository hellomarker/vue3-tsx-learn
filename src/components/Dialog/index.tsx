import { Transition, defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  name: "YDialog",
  props: {
    modelValue: Boolean,
  },
  setup(props, { slots,emit }) {
    return () => {
      return (
        <>
          {/* XXX transition不生效 */}
          <Transition name="fade">
            <div
              v-show={props.modelValue}
              class={`mask`}
              onClick={() => (emit('update:modelValue', false))}
            >
              <div class="dialog">
                {slots.title && <div class="dialog-title">{slots.title()}</div>}
                {slots.default && (
                  <div class="dialog-default">{slots.default()}</div>
                )}
                {slots.buttons && (
                  <div class="dialog-buttoms">{slots.buttons()}</div>
                )}
              </div>
            </div>
          </Transition>
        </>
      );
    };
  },
});
