# 照片纪念网站

这是一个可直接部署到 GitHub Pages 的静态照片纪念网站，不需要安装任何软件或服务器。

## 文件结构

```text
├── index.html       网站内容、照片标题和纪念文字
├── style.css        网站视觉样式和手机适配
├── script.js        菜单与照片点击放大功能
└── images/          照片文件夹（目前为示例占位图）
```

## 替换为自己的照片

1. 把自己的照片放进 `images` 文件夹，例如 `images/family-01.jpg`。
2. 打开 `index.html`，找到 `data-image="images/photo-01.svg"` 和紧随其后的 `src="images/photo-01.svg"`，改成新照片路径，例如 `images/family-01.jpg`。
3. 同时修改 `alt`、`data-caption` 和照片卡片内的文字，使其对应照片内容。
4. 首页大图由 `style.css` 中 `.hero` 的背景图片控制；可将其中的 `images/photo-04.svg` 改为自己的横向照片。

建议使用 JPG、PNG 或 WebP 图片；单张尽量压缩到 1–2 MB 以下，以便手机加载更快。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个公开仓库。若希望网址为 `https://你的用户名.github.io`，仓库名应为 `你的用户名.github.io`。
2. 将本项目的全部文件和 `images` 文件夹上传到仓库的根目录，提交更改。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`，文件夹选 `/(root)`，然后保存。
5. 稍等一两分钟，GitHub Pages 会显示网站网址。以后更新并提交文件，网站会自动更新。
