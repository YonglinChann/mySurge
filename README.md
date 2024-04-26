# 🌟阿林自用 分流规则、去广告模块/插件/重写 仓库

自整理、定期维护 的 网络工具 分流规则、Module 模块 / Plugin 插件 / Rewrite 重写。

## 维护周期 ⌛️

- **`AD-Naisi_QX.conf`** 及 **`AD-Ultra_QX.conf`** 重写文件为对应作者*去广告规则的定期手动备份，以防原远程规则出错时无法引用。
  - 更新周期为 **`4-8`** 天。
- **`ASN-China_QX.list`** 规则为当使用 **Quantumult X** 工具时而特别优化同步的 `ASN 分流规则` 。
  - 更新周期为 **`4-8`** 天。
- **`ChatGPT_QX.list`** 规则为当使用 **Quantumult X** 工具时而特别优化同步的 `ChatGPT 分流规则` 。
  - 更新周期为 **`13-15`** 天。
- **`剩余其它`** 去广告 模块/插件/重写 的更新周期将**视乎效果的变化**而同步，若出现如 `功能变化、失效` 等情况，**将视实际情况手动同步更新**。

## 兼容平台 📱

**<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Surge-HD.png" width="19" height="19"> Surge（全平台）**：带 **`.list`** 及 **`.sgmodule`** 后缀直接使用。<br>
**<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Loon-HD.png" width="19" height="19"> Loon**：带 **`.list`** 及 **`.plugin`** 及 **`_Loon`** 后缀直接使用。<br>
**<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/QuantumultX-HD.png" width="19" height="19"> Quantumult X**：带 **`_QX`** 及 **`.conf`** 后缀专为 **Quantumult X** 优化而使用。<br>
**<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Stash-HD.png" width="19" height="19"> Stash**：带 **`_Stash.yaml`** 后缀专为 **Stash** 优化而使用。<br>

- 💡其中仓库内不同平台的 模块/插件/重写 可使用 **[`Script-Hub`](https://github.com/Script-Hub-Org/Script-Hub)** 进行相互转换，转换后的效果已通过验证并可在各平台工具中流畅稳定使用。

## 规则使用顺序 🔢

请按 **以下顺序** 编写您的 **规则系统：**

- 顺序：  <br>
  --- 在您规则系统的**最后部分**加入👇🏻
  
  > 1️⃣ **`CN_Apple_Service.list`** 系列（或对应 QX / Stash 后缀工具类型选其一）<br>
  > 2️⃣ **`CN_Others.list`** 系列（或对应 QX /S tash 后缀根据工具类型选其一）
  
  --- 并在您的 **GeoIP / ASN 分流规则** 及 **Final / Match 最终规则** 前。
  <br>
- 解释：
  
  - **`ChatGPT_QX.list`** 为  **Quantumult X** 使用 `ChatGPT` 服务时而优化的分流规则，需要排列在 **下方两条规则** 以及您的 **GeoIP / ASN 分流规则** 及 **Final / Match 最终规则** 前。**请注意使用时**需开启 Quantumult X 中的 **`「策略偏好」`** 功能，并选择您的对应策略组，否则将自动创建名为【ChatGPT】的策略组、且可能不能正常使用该规则。
  - **`CN_Apple_Service.list`** 系列为 **Apple 平台基本分流规则**（不包含 Apple 平台的各项附加服务）。<br>其中规则**顶端优先拦截**所有 `cn 与 -cn 关键词` 相关域名，让大部分 `cn 直连请求` 与 `Apple 系统自带请求` 不必进入到最后的 GeoIP / ASN 分流中，**节约资源与性能**。
  - **`CN_Others.list`** 系列为 **个人补充直连分流规则**，作为某些无法最终被正确识别为直连请求的补充修正。<br>其中 **`_GeoIP_QX.list`** 后缀规则专门为  **Quantumult X** 使用 `GeoIP` 分流时而优化，因为该工具的规则系统对于 `GeoIP` 分流规则的加载顺序特殊。

## 工具类文件使用说明 🤖

- **`.sgmodule`** 后缀文件为 **<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Surge-HD.png" width="19" height="19"> Surge（全平台）** `模块` 文件。主要为 **去广告模块、服务提供商解锁检测模块** 等。
- **`.conf`** 后缀文件为 **<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/QuantumultX-HD.png" width="19" height="19"> Quantumult X** `重写` 文件。主要为 **去广告模块、服务提供商解锁检测模块** 等。
- **`.js`** 后缀文件为 `JavaScript 脚本` 文件。可以被 **<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/QuantumultX-HD.png" width="19" height="19"> Quantumult X** 和 **<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Loon-HD.png" width="19" height="19"> Loon** 来使用。主要为 **服务提供商解锁检测脚本、节点 IP 查询脚本** 等。
- **`.plugin`** 后缀文件为 **<img src="https://raw.githubusercontent.com/Centralmatrix3/Scripts/master/Gallery/Color/Loon-HD.png" width="19" height="19"> Loon** `插件` 文件。主要为 **节点 IP 查询插件** 等。

（❗️不同文件实现的功能可能与您已有的配置效果产生重复或冲突，请视自身情况合理挑选使用。）

## *鸣谢 🩷

除了个人的某些自(改)编规则外，其余引用的各大内容来自各大作者的辛勤付出和维护，在此特别感谢（排名不分先后）：

- **`@Yfamily`** [https://whatshub.top/](https://whatshub.top/)
- **`@blackmatrix7`** [https://github.com/blackmatrix7](https://github.com/blackmatrix7)
- **`@fmz200(奶思)`** [https://github.com/fmz200](https://github.com/fmz200)
- **`@lodepuly(可莉)`** [https://gitlab.com/lodepuly/vpn_tool/-/tree/master](https://gitlab.com/lodepuly/vpn_tool/-/tree/master)
- **`@Centralmatrix3(Matrix)`** [https://github.com/Centralmatrix3](https://github.com/Centralmatrix3)

## 免责声明 ⚠️

- 编写本项目主要目的为学习和研究，无法保证项目内容的合法性、准确性、完整性和有效性。
- 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
- 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
- 所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
- 所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
  <br>

