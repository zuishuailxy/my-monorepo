function svgToWebP(svgString) {
  return new Promise((resolve, reject) => {
    // 创建一个 Image 对象
    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;

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

// 使用示例
const svgString = `
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
  </svg>
`;

svgToWebP(svgString)
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    console.log("WebP 图片 URL:", url);
    // 可以将 URL 设置到 img 标签或下载
  })
  .catch((error) => {
    console.error(error);
  });
