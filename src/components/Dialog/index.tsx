import { FunctionalComponent, ref, reactive } from "vue";
import { Modal, ModalProps } from "ant-design-vue";

export const useDialog = () => {
  const visiable = ref(false);
  const triggerDialog = () => {
    visiable.value = !visiable.value;
    triggerVisiable();
  };
  let triggerVisiable = () => {};
  const Dialog: FunctionalComponent<ModalProps> = (props, { slots, emit }) => {
    if (typeof props.visible === "boolean")
      triggerVisiable = () => (props.visible = !props.visible);

    return (
      <Modal
        visible={visiable.value}
        onCancel={triggerDialog}
        okText="确定"
        cancelText="取消"
        {...props}
      >
        {slots}
      </Modal>
    );
  };
  return { Dialog, triggerDialog };
};
