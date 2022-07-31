import { defineComponent } from "vue";
import { useDialog } from "@/components/Dialog";

export default defineComponent({
  setup() {
    const { Dialog } = useDialog();
    return () => (
      <>
        <img src={require("../../assets/logo.png")} alt="" />
        <button>弹窗</button>
        <Dialog></Dialog>
      </>
    );
  },
});
