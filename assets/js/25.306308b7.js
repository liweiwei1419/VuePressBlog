(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{291:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"leetcode-第-1079-题：“活字印刷”题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-第-1079-题：“活字印刷”题解","aria-hidden":"true"}},[t._v("#")]),t._v(" LeetCode 第 1079  题：“活字印刷”题解")]),t._v(" "),a("p",[t._v("题解地址："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-tile-possibilities/solution/hui-su-suan-fa-python-dai-ma-by-liweiwei1419/",target:"_blank",rel:"noopener noreferrer"}},[t._v("回溯算法（Python 代码）"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("说明：文本首发在力扣的题解版块，更新也会在第 1 时间在上面的网站中更新，这篇文章只是上面的文章的一个快照，您可以点击上面的链接看到其他网友对本文的评论。")]),t._v(" "),a("p",[t._v("传送门："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-tile-possibilities/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1079. 活字印刷"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[t._v('输入："AAB"\n输出：8\n解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。\n示例 2：')]),t._v(" "),a("p",[t._v('输入："AAABBC"\n输出：188')]),t._v(" "),a("p",[t._v("提示：")]),t._v(" "),a("p",[t._v("1 <= tiles.length <= 7\ntiles 由大写英文字母组成")])]),t._v(" "),a("h2",{attrs:{id:"回溯算法（python-代码）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法（python-代码）","aria-hidden":"true"}},[t._v("#")]),t._v(" 回溯算法（Python 代码）")]),t._v(" "),a("p",[a("strong",[t._v("思路分析")]),t._v("：")]),t._v(" "),a("p",[t._v("这道题与 "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 第 90 题：子集 II"),a("OutboundLink")],1),t._v("很像，把 LeetCode 第 90 题的每一个解变成排列，就是这道题了。")]),t._v(" "),a("h3",{attrs:{id:"方法：回溯算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法：回溯算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法：回溯算法")]),t._v(" "),a("p",[t._v("由于是排列，我们不难想到，解决这个问题的思路应该是一个树形结构。不妨先从规模小的问题入手，以题目示例 1 的输入：“AAB”为例，可以画出树形图如下。")]),t._v(" "),a("p",[t._v("（温馨提示：下面的幻灯片中，有几页上有较多的文字，可能需要您停留一下，可以点击右下角的后退 “|◀” 或者前进 “▶|” 按钮控制幻灯片的播放。）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/86611a1790f0cd59a53f2c6e82a2fcf4ee30bd1c76b5989a9fe7d129f8d25442-1079-1.png",alt:"1079-1.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/ca0badefbbd5053af8fc12519f4e78f98f4afa377b66202eea607d0be33f2e5d-1079-2.png",alt:"1079-2.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/2cf88e64cede096223a3f1c14169a65ad87f376a5c68c6b88984aa74259de773-1079-3.png",alt:"1079-3.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/0e1f10d4937dac42c3f119d02c44bce58628095becc5562ef7b06b30266a8649-1079-4.png",alt:"1079-4.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/f07cce05beeb1c9fb91218535324e7ce4926b83f4e0d7a3b97eb46e6bee11739-1079-5.png",alt:"1079-5.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/17bd7d14715dbfaa2a2754c6a64d19173d5733694150b0d0e313566703dd2ac6-1079-6.png",alt:"1079-6.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/c0fc7ce8c4972c9ff1b41e6ef05eb0856347f7a88405dc28f2860d9bfc856d2e-1079-7.png",alt:"1079-7.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/0e98e076a9f631cd64a6506e63612b31be771ee87f6e43aa5815352aeb5c01c3-1079-8.png",alt:"1079-8.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/864fa954faf3774b3a6bc4ae2e411073fb15eef578c503399d901b0d069b23d1-1079-9.png",alt:"1079-9.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/75f390e54c3e0012ee4e871d3bb6b3cc68c7a7296c881c86ecb7b7bb87e0f482-1079-10.png",alt:"1079-10.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/42eb4a22c1ae87f256a7175d0a535a8d119c75983d1812eb68b6217bcc77db01-1079-11.png",alt:"1079-11.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/f3d7d44e36ff5aeeed0cbac791c847b874d5c973a3876ae531c2a584ae998e67-1079-12.png",alt:"1079-12.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/882d2a16cc40d58d3eb8b28c50886149c69cb7c87ce8717052ae21f6e2b0fd35-1079-13.png",alt:"1079-13.png"}})]),t._v(" "),a("p",[t._v("我们只要一开始做一个字母频次统计，如果当前这个字母的频次为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v("，就不再往下执行，马上要回溯了，在回溯的过程中一定要记得状态重置。")]),t._v(" "),a("p",[a("strong",[t._v("参考代码")]),t._v("：")]),t._v(" "),a("p",[t._v("Python 代码：")]),t._v(" "),a("div",{staticClass:"language-Python [] extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numTilePossibilities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" alpha "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" tiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n            res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n            res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])]),a("Vssue",{attrs:{title:"letter-tile-possibilities"}})],1)},[],!1,null,null,null);s.default=n.exports}}]);