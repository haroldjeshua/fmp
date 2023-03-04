import path from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        basic: path.resolve(__dirname, "basic/index.html"),
        photo: path.resolve(__dirname, "photo/index.html"),
        animated: path.resolve(__dirname, "animated/index.html"),
        sandbox: path.resolve(__dirname, "sandbox/index.html"),
      },
    },
  },
};
