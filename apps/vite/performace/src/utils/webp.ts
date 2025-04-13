export function svgToWebP(svgString) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
    console.log(img.src);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("WebP 转换失败"));
        }
      }, "image/webp");
    };

    img.onerror = () => {
      reject(new Error("SVG 图片加载失败"));
    };
  });
}
