

export default {
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    },
    width: {
      required: false,
      type: String
    },
    height: {
      required: false,
      type: String
    }
  }
};
