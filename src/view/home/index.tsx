import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";
import { useDialog } from "@/components/Dialog";

export default defineComponent({
  name: "homePage",
  setup() {
    const { Dialog, triggerDialog } = useDialog();
    const visiable = ref(false);
    return () => (
      <>
        <img src={require("../../assets/logo.png")} alt="" />
        <Button onClick={triggerDialog}>弹窗</Button>
        <Dialog visible={visiable.value} onOk={triggerDialog}>
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
