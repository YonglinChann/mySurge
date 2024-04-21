# 🌟自用 分流规则、去广告模块/插件/重写 仓库

自整理、定期维护 的 网络工具分流规则、Module模块 / Plugin插件 / Rewrite重写。

## 维护周期 ⌛️

- **`AD-Naisi_QX.conf`** 及 **`AD-Ultra_QX.conf`** 规则为对应作者*去广告规则的定期手动备份，以防原远程规则出错时无法引用。
  - 更新周期为 **`4-8`** 天。
- **`ASN-China_QX.list`** 规则为当使用 **Quantumult X** 工具时而特别优化同步的 `ASN 分流规则` 。
  - 更新周期为 **`4-8`** 天。
- **`剩余其它`** 去广告 模块/插件/重写 的更新周期将**视乎效果的变化**而同步，若出现如 `功能变化、失效` 等情况，**将视实际情况手动同步更新**。

## 兼容平台 📱

**Surge（全平台）**：带 **`.list`** 及 **`.sgmodule`** 后缀直接使用。<br>
**Loon**：带 **`.list`** 及 **`.plugin`** 后缀直接使用。<br>
**Quantumult X**：带 **`_QX.list`** 及 **`.conf`** 后缀专为 **Quantumult X** 优化而使用。<br>
**Stash**：带 **`_Stash.yaml`** 后缀专为 **Stash** 优化而使用。

## 规则使用顺序 🔢

请按 **以下顺序** 编写您的 **规则系统：**

- 顺序：  <br>
  --- 在您规则系统的**最后部分**加入👇🏻
  
  > 1️⃣ **`CN_Apple_Service.list`** 系列（或对应 QX/Stash 后缀工具类型选其一）
  > 2️⃣ **`CN_Others.list`** 系列（或对应 QX/Stash 后缀根据工具类型选其一）
  
  --- 并在您的 **GeoIP / ASN 分流规则** 及 **Final / Match 最终规则** 前。
  <br>
- 解释：
  
  - **`CN_Apple_Service.list`** 系列为 **Apple 平台基本分流规则**（不包含 Apple 平台的各项附加服务），其中规则**顶端优先拦截**所有`cn 与 -cn 关键词`相关域名，让大部分 `cn 直连请求` 与 `Apple 系统自带请求` 不必进入到最后的 GeoIP / ASN 分流中，**节约资源与性能**。
  - **`CN_Others.list`** 系列为 **个人补充直连分流规则**，作为某些无法最终被正确识别为直连请求的补充修正。其中 **`_GeoIP_QX.list`** 后缀规则专门为  **Quantumult X** 使用 `GeoIP` 分流时而优化，因为该工具的规则系统对于 `GeoIP` 分流规则的加载顺序特殊。

## 鸣谢 🩷

除了个人的某些自(改)编规则外，其余引用的各大内容来自各大作者的辛勤付出和维护，在此特别感谢（排名不分先后）：

- **`@Yfamily`** [https://whatshub.top/](https://whatshub.top/)
- **`@blackmatrix7`** [https://github.com/blackmatrix7](https://github.com/blackmatrix7)
- **`@fmz200(奶思)`** [https://github.com/fmz200](https://github.com/fmz200)
- **`@lodepuly(可莉)`** [https://gitlab.com/lodepuly/vpn_tool/-/tree/master](https://gitlab.com/lodepuly/vpn_tool/-/tree/master)
- **`@Centralmatrix3(Matrix)`** [https://github.com/Centralmatrix3](https://github.com/Centralmatrix3)
