import { Transition, defineComponent } from "vue";
import "./index.scss";

// export const useDialog = () => {
//   const visiable = ref(false);
//   const triggerDialog = (e: unknown) => {
//     if (e instanceof Event && e.target === e.currentTarget) {
//       visiable.value = !visiable.value;
//     }
//   };
//   const Dialog: FunctionalComponent = (props, { slots, emit }) => {
//     return (
//       <>
//         {/* XXX Transition失效 */}
//         <Transition name="fade">
//           <div v-show={visiable.value} class={`mask`} onClick={triggerDialog}>
//             <div class="dialog">
//               {slots.title && <div class="dialog-title">{slots.title()}</div>}
//               {slots.default && (
//                 <div class="dialog-default">{slots.default()}</div>
//               )}
//               {slots.buttoms && (
//                 <div class="dialog-buttoms">{slots.buttoms()}</div>
//               )}
//             </div>
//           </div>
//         </Transition>
//       </>
//     );
//   };
//   return { Dialog, triggerDialog };
// };

export default defineComponent({
  props: {
    visible: Boolean,
  },
  setup(props, { slots }) {
    const { visible } = props;
    return () => (
      <>
        {/* XXX transition不生效 */}
        <Transition name="fade">
          <div
            v-show={visible}
            class={`mask`}
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
  },
});
