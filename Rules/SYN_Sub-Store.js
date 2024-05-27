/**
 * Update : 2023/12/07 19:37:30
 *
 * 1. 功能：为 SYN 已订阅用户快速在 SubStore 中添加低倍率节点；
 * 2. 感谢 @baixiaofei233 提供的思路；
 * 3. 请在 SubStore 中使用，具体使用：编辑->脚本操作->类型（链接）->
 * 填入本脚本链接（https://github.com/Aurora-20/PublicConfig/raw/main/SubStore/Operator.js）；
 *
 */

function operator(proxies) {
  /**
   * @param insertIndex: 插入元素的位置
   */
  let insertIndex = 0;
  /**
   * @param flag: 是否找到插入位置
   */
  let flag = false;
  // * 插入第一个元素（在 🇭🇰 的最后插入）
  for (const proxy of proxies) {
    // * 判断是否找到 🇭🇰
    if (/^🇭🇰.*$/.test(proxy.name)) {
      // * 找到插入位置
      flag = true;
    } else if (flag) {
      // * 🇭🇰 后的第一个元素
      flag = false;
      break;
    }
    // * 更新插入元素的位置
    insertIndex++;
  }
  // * 在 insertIndex 插入元素
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50013,
      name: "🇭🇰 HK 丁香酰氧胺 L (标准)",
    })
  );
  proxies.splice(
    insertIndex,
    1,
    Object.assign({}, proxies[1], {
      server: "traffic-in-03.811920.xyz",
      port: 50013,
      name: "🇭🇰 HK 丁香酰氧胺 L (广东)",
    })
  );
  // * 重置插入元素位置
  insertIndex = 0;
  for (const proxy of proxies) {
    if (/^🇸🇬.*$/.test(proxy.name)) {
      flag = true;
    } else if (flag) {
      flag = false;
      break;
    }
    insertIndex++;
  }
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 L (标准)",
    })
  );
  proxies.splice(
    insertIndex,
    1,
    Object.assign({}, proxies[1], {
      server: "traffic-in-03.811920.xyz",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 L (广东)",
    })
  );

  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 L",
    })
  );
  return proxies;
}
