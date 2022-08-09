import { defineComponent, ref } from "vue";
import { Dialog } from "@/components";

export default defineComponent({
  name: "homePage",
  setup() {
    const visible = ref(false);
    const triggerDialog = () => {
      visible.value = !visible.value;
    };
    return () => {
      // console.log(visible.value)
      return (
        <>
          <img src={require("../../assets/logo.png")} alt="" />
          <button onClick={triggerDialog}>弹窗</button>
          <Dialog visible={visible.value}>
            {{
              title: () => "这是标题",
              default: () => (
                <div>
                  <del>这是内容~</del>
                  <span>这才是内容</span>
                </div>
              ),
            }}
          </Dialog>
        </>
      );
    };
  },
});
