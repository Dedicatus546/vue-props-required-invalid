import { defineComponent } from "vue";

export const Comp1 = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // props.name is string
    const name = props.name;
  }
});
