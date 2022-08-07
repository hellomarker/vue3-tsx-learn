import { defineComponent, ref } from "vue";
import { useDialog } from "@/components/Dialog";

export default defineComponent({
  name: "homePage",
  setup() {
    const { Dialog, triggerDialog } = useDialog();
    return () => (
      <>
        <img src={require("../../assets/logo.png")} alt="" />
        <button onClick={triggerDialog}>弹窗</button>
        <Dialog>
          {{
            title: "这是标题",
            default: <div>
              <del>这是内容~</del>
              <span>这才是内容</span>
            </div>,
          }}
        </Dialog>
      </>
    );
  },
});
