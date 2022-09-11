import { defineComponent } from "vue";

const comp2Props = {
  name: {
    type: String,
    required: true,
  },
}

export const Comp2 = defineComponent({
  props: comp2Props,
  setup(props) {
    // props.name is string | undefined
    const name = props.name;
  }
});
