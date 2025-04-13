import "./style.css";
import { divide } from "./utils/math.ts";
import { svgToWebP } from "./utils/webp.ts";
let myLog: null | Function;
const logModule = async () => {
  const { log } = await import("./utils/log.ts");

  myLog = log;
};

logModule();
// 在需要使用模块的地方
async function useModule() {
  try {
    const myModule = await myLog;
    (myModule as Function)("lazy load"); // 使用模块中的函数
  } catch (error) {
    console.error("模块尚未加载或加载失败:", error);
  }
}

setTimeout(() => {
  useModule();
}, 1000);

svgToWebP("./typescript.svg")
  .then((blob) => {
    console.log("WebP 图片 URL:", blob);
    const url = URL.createObjectURL(blob);
    // 可以将 URL 设置到 img 标签或下载
  })
  .catch((error) => {
    console.log(error);
  });
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Welcome to here</h2>
    <p>divide(2, 2) = ${divide(2, 2)}</p>
    <img src="data:image/svg+xml;base64,Li90eXBlc2NyaXB0LnN2Zw==" alt="google logo" />
    <img src="./typescript.svg" alt="google logo" />
  </div>
`;
