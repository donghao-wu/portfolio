export type ProjectType = "account" | "video" | "software" | "paper";
export type Room =
  | "ROOM 01"
  | "ROOM 02"
  | "ROOM 03"
  | "ROOM 04"
  | "ROOM 05"
  | "ROOM 06";

/** 展厅在作品卡片、详情页、筛选等处展示的中文标题（与首页展厅一致） */
export const ROOM_LABELS: Record<Room, string> = {
  "ROOM 01": "AIGC 创作账号",
  "ROOM 02": "AIGC 短片",
  "ROOM 03": "AI 产品",
  "ROOM 04": "学术论文",
  "ROOM 05": "校企联合",
  "ROOM 06": "传统影视",
};

export function roomTitle(room: Room): string {
  return ROOM_LABELS[room];
}

export interface Project {
  slug: string;
  type: ProjectType;
  room: Room;
  title: string;
  year: number;
  order: number;
  featured: boolean;
  cover: string;
  coverAlt: string;
  description: string;
  descriptionImages?: { src: string; alt: string; caption?: string }[];
  tags: string[];
  // ROOM 01
  platform?: string;
  handle?: string;
  // ROOM 02
  videoUrl?: string;
  viewingNote?: string;
  // ROOM 04 — PDF 放在 public/papers/，pdfUrl 写 "/papers/文件名.pdf"
  abstract?: string;
  publication?: string;
  authors?: string[];
  pdfUrl?: string;
  /** 为 false 时仅显示下载/外链，不嵌入浏览器预览（默认 true） */
  pdfShowEmbed?: boolean;
  // shared
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  // ── ROOM 01 ──────────────────────────────────────────────────────────
  {
    slug: "douyin-aigc",
    type: "account",
    room: "ROOM 01",
    title: "抖音 · AI网友小卡",
    year: 2026,
    order: 1,
    featured: true,
    cover: "/images/room-01.png",
    coverAlt: "抖音 AI网友小卡 账号内容截图",
    description:
      "用 AIGC 的模式打造 AI 网友小卡的 IP，为观众提供简单易懂的 AI 工具测评与讲解。",
    tags: ["抖音", "AIGC", "AI网友小卡"],
    platform: "抖音",
    handle: "抖音号：50802510547",
    links: [{ label: "账号主页", url: "https://v.douyin.com/ylg0emJXYaY/" }],
  },
  {
    slug: "douyin-jiang-caicai",
    type: "account",
    room: "ROOM 01",
    title: "抖音 · 蒋成才",
    year: 2026,
    order: 2,
    featured: false,
    cover: "/images/2.png",
    coverAlt: "抖音 蒋成才 账号头像截图",
    description:
      "用 AIGC 的模式打造蒋成才的 IP，为观众用悬疑剧情讲述心理学知识。",
    tags: ["抖音", "AIGC", "蒋成才", "心理学"],
    platform: "抖音",
    handle: "抖音号：94454923094",
    links: [{ label: "账号主页", url: "https://v.douyin.com/APDmXW_sQ8E/" }],
  },
  {
    slug: "kuaishou-jiang-caicai",
    type: "account",
    room: "ROOM 01",
    title: "快手 · 蒋成才",
    year: 2026,
    order: 3,
    featured: false,
    cover: "/images/jccks.jpg",
    coverAlt: "快手 蒋成才 账号头像截图",
    description:
      "用 AIGC 的模式打造蒋成才的 IP，为观众用悬疑剧情讲述心理学知识。",
    tags: ["快手", "AIGC", "蒋成才", "心理学"],
    platform: "快手",
    handle: "快手号：5355439682",
    links: [{ label: "账号主页", url: "https://v.kuaishou.com/JNM6kkH1" }],
  },
  {
    slug: "xiaohongshu-jiang-caicai",
    type: "account",
    room: "ROOM 01",
    title: "小红书 · 蒋成才",
    year: 2026,
    order: 4,
    featured: false,
    cover: "/images/jccxhs.png",
    coverAlt: "小红书 蒋成才 账号头像截图",
    description:
      "用 AIGC 的模式打造蒋成才的 IP，为观众用悬疑剧情讲述心理学知识。",
    tags: ["小红书", "AIGC", "蒋成才", "心理学"],
    platform: "小红书",
    handle: "小红书号：740332678",
    links: [{ label: "账号主页", url: "https://xhslink.com/m/4dUYHPLyGAH" }],
  },
  {
    slug: "douyin-yiqixue-waiyu",
    type: "account",
    room: "ROOM 01",
    title: "抖音 · 壹起学外语",
    year: 2026,
    order: 5,
    featured: false,
    cover: "/images/yqxwy.png",
    coverAlt: "抖音 壹起学外语 账号头像截图",
    description:
      "用 AIGC 的模式演绎英文绘本故事，为婴幼儿英语教学提供助力。",
    tags: ["抖音", "AIGC", "壹起学外语", "儿童绘本"],
    platform: "抖音",
    handle: "抖音号：78911539178",
    links: [{ label: "账号主页", url: "https://v.douyin.com/kavbjHxbucw/" }],
  },
  {
    slug: "douyin-yihao-pianchang",
    type: "account",
    room: "ROOM 01",
    title: "抖音 · 壹号片场",
    year: 2025,
    order: 6,
    featured: false,
    cover: "/images/yhpc.png",
    coverAlt: "抖音 壹号片场 账号头像截图",
    description: "为壹号片场进行 AIGC 方面的宣传。",
    tags: ["抖音", "AIGC", "壹号片场", "品牌宣传"],
    platform: "抖音",
    handle: "抖音号：30142643991",
    links: [{ label: "账号主页", url: "https://v.douyin.com/N8TZ42I19-0/" }],
  },

  // ── ROOM 02 ──────────────────────────────────────────────────────────
  {
    slug: "aigc-short-film-01",
    type: "video",
    room: "ROOM 02",
    title: "当我用AI的方式打开《一代宗师》",
    year: 2025,
    order: 1,
    featured: false,
    cover: "/images/ydzs.jpg",
    coverAlt: "静帧",
    description: "AIGC 模仿《一代宗师》经典片段。",
    tags: ["AIGC", "短片", "Bilibili"],
    links: [{ label: "Bilibili", url: "https://b23.tv/7vMk9ls" }],
  },
  {
    slug: "aigc-yihao-demo-reel",
    type: "video",
    room: "ROOM 02",
    title: "壹号片场 AIGC demo合集",
    year: 2025,
    order: 2,
    featured: false,
    cover: "/images/demo.jpg",
    coverAlt: "静帧",
    description: "AIGC 初期 demo 合集尝试。",
    tags: ["AIGC", "短片", "Bilibili"],
    links: [{ label: "Bilibili", url: "https://b23.tv/NbPk3xR" }],
  },
  {
    slug: "aigc-mibao-youhun",
    type: "video",
    room: "ROOM 02",
    title: "《秘堡幽魂》",
    year: 2025,
    order: 3,
    featured: false,
    cover: "/images/salvatore.jpg",
    coverAlt: "静帧",
    description:
      "一座中世纪的古堡，一位优雅的贵妇人，到底藏着什么秘密呢……",
    tags: ["AIGC", "短片", "Bilibili"],
    links: [{ label: "Bilibili", url: "https://b23.tv/x4C9XiN" }],
  },
  {
    slug: "aigc-ygdn-stress-promo",
    type: "video",
    room: "ROOM 02",
    title: "阳光电源压力测试宣传片",
    year: 2026,
    order: 4,
    featured: false,
    cover: "/images/yg2.jpg",
    coverAlt: "静帧",
    description:
      "阳光电源压力测试宣传片，本人负责视频中 AIGC 部分生成视频。",
    tags: ["宣传片", "阳光电源", "微信视频号"],
    viewingNote:
      "发布于微信视频号「阳光-光储充」，暂无公开网页链接，请在微信内搜索该视频号观看。",
  },
  {
    slug: "aigc-ygdn-fangfu-promo",
    type: "video",
    room: "ROOM 02",
    title: "阳光电源防腐测试宣传片",
    year: 2026,
    order: 5,
    featured: false,
    cover: "/images/yg1.jpg",
    coverAlt: "静帧",
    description:
      "阳光电源防腐测试宣传片，本人负责视频中 AIGC 部分生成视频。",
    tags: ["宣传片", "阳光电源", "微信视频号"],
    viewingNote:
      "发布于微信视频号「阳光-光储充」，暂无公开网页链接，请在微信内搜索该视频号观看。",
  },
  {
    slug: "aigc-zgsy-kepu-xuanchuan",
    type: "video",
    room: "ROOM 02",
    title: "中国石油科普宣传片",
    year: 2025,
    order: 6,
    featured: false,
    cover: "/images/zgsy.jpg",
    coverAlt: "静帧",
    description:
      "中国石油科普宣传片，本人帮助制作团队进行 AIGC 赋能，降本增效。",
    tags: ["科普", "中国石油", "微信视频号"],
    viewingNote:
      "发布于微信视频号「中国石油」，暂无公开网页链接，请在微信内搜索该视频号观看。",
  },
  {
    slug: "aigc-moshibaozugong-xiongzhai",
    type: "video",
    room: "ROOM 02",
    title: "末世包租公：从接管凶宅开始",
    year: 2025,
    order: 7,
    featured: false,
    cover: "/images/mj.jpg",
    coverAlt: "静帧",
    description:
      "末世包租公：从接管凶宅开始，本人参与并完成全剧集资产、视频生成全流程，按时交付所有剧集。",
    tags: ["AIGC", "漫剧", "红果"],
    links: [
      { label: "红果", url: "https://novelquickapp.com/s/JH3ZgznIitQ/" },
    ],
  },

  // ── ROOM 03 ──────────────────────────────────────────────────────────
  {
    slug: "lingshu-xuanjing",
    type: "software",
    room: "ROOM 03",
    title: "灵枢玄镜",
    year: 2026,
    order: 1,
    featured: false,
    cover: "/images/ls.jpeg",
    coverAlt: "logo",
    description:
      "AI + 开源紫微斗数数据库、星座 API 打造的年轻人专属算卦 App：紫微斗数、塔罗、星座、六爻、周易、MBTI、合盘等，轻松好上手，并有专业数据支撑。",
    tags: ["AI", "算命", "星座"],
    links: [
      { label: "官网", url: "http://47.102.138.151/app" },
      { label: "GitHub", url: "https://github.com/donghao-wu/Lingshu" },
    ],
  },
  {
    slug: "yijing-aigc-canvas",
    type: "software",
    room: "ROOM 03",
    title: "壹镜",
    year: 2026,
    order: 2,
    featured: false,
    cover: "/images/yj1.png",
    coverAlt: "logo",
    description:
      "AIGC 全流程工作流工具：从剧本拆解、分析、生成分镜大纲与资产提示词，到生图无限画布一体化（域名备案中，官网链接可能暂时无法访问）。",
    tags: ["AI", "AIGC", "无限画布"],
    links: [
      { label: "官网", url: "https://www.luciuswu.art/" },
      { label: "GitHub", url: "https://github.com/donghao-wu/aigc-canvas" },
    ],
  },
  {
    slug: "job-assistant",
    type: "software",
    room: "ROOM 03",
    title: "求职小助手",
    year: 2026,
    order: 3,
    featured: false,
    cover: "/images/qz.jpeg",
    coverAlt: "logo",
    description:
      "AI + 代码一键填入求职表格：用户可上传简历与个人信息，通过网页插件一键填入申请表，减少重复填写；同时支持 AI 改简历、JD 匹配分析、模拟面试及招聘信息导航等功能。",
    tags: ["AI", "求职助手", "网页插件"],
    links: [
      { label: "官网", url: "http://110.40.140.2:8005/" },
      { label: "GitHub", url: "https://github.com/donghao-wu/job-assistant" },
    ],
  },
  {
    slug: "accompany-app",
    type: "software",
    room: "ROOM 03",
    title: "陪伴型聊天 APP（未命名）",
    year: 2026,
    order: 4,
    featured: false,
    cover: "/images/pb.png",
    coverAlt: "logo",
    description:
      "AI + Qwen 大模型（星尘）赋能的角色扮演式情感陪伴聊天 App：用户可与预设角色仿真互动、解锁新内容，也可自建角色并发布至广场供他人体验。产品尚未上线，暂无官网。以下为产品中两个页面的界面展示。",
    descriptionImages: [
      {
        src: "/images/zs1.png",
        alt: "陪伴型聊天 App 页面一界面截图",
        caption: "页面一 · 界面展示",
      },
      {
        src: "/images/zs2.png",
        alt: "陪伴型聊天 App 页面二界面截图",
        caption: "页面二 · 界面展示",
      },
    ],
    tags: ["AI", "AIGC", "情感陪伴", "角色扮演"],
    links: [{ label: "GitHub", url: "https://github.com/donghao-wu/accompany" }],
  },

  // ── ROOM 04 ──────────────────────────────────────────────────────────
  // 本地 PDF：放入 public/papers/
  {
    slug: "thesis",
    type: "paper",
    room: "ROOM 04",
    title: "学位论文（Thesis）",
    year: 2025,
    order: 1,
    featured: true,
    cover: "/images/room-04.png",
    coverAlt: "学位论文",
    description:
      "学位论文全文 PDF，由本人上传至本站展示；传播与使用范围以本人已获授权为准。",
    tags: ["学位论文", "Thesis"],
    abstract: "摘要与目录等见 PDF 内文；下方支持在线预览与下载。",
    authors: ["Donghao Wu"],
    pdfUrl: "/papers/Thesis.pdf",
  },
  {
    slug: "academic-paper",
    type: "paper",
    room: "ROOM 04",
    title: "学术论文（Paper）",
    year: 2025,
    order: 2,
    featured: false,
    cover: "/images/oxy.jpg",
    coverAlt: "学术论文",
    description:
      "学术论文 PDF，由本人上传至本站展示；传播与使用范围以本人已获授权为准。",
    tags: ["学术论文", "Paper"],
    abstract: "摘要与正文见 PDF 内文；下方支持在线预览与下载。",
    authors: ["Donghao Wu"],
    pdfUrl: "/papers/Paper.pdf",
  },

  // ── ROOM 05 ──────────────────────────────────────────────────────────
  {
    slug: "zhengzhou-sias-school-enterprise",
    type: "software",
    room: "ROOM 05",
    title: "西亚斯校企联合",
    year: 2026,
    order: 1,
    featured: true,
    cover: "/images/room-05.jpeg",
    coverAlt: "西亚斯校企联合",
    description:
      "旨在走进校园，进行深度校企联合，为大学生宣讲AI带来的社会变革，技术更新，未来方向；本人作为主讲人之一，为大学生进行关于AI信息发展的宣讲，对现阶段火爆的AI产品进行培训",
    tags: ["校企", "宣讲", "AI"],
    links: [],
  },
  {
    slug: "henan-muye-economic-university-school-enterprise",
    type: "software",
    room: "ROOM 05",
    title: "河南牧业经济学院校企联合",
    year: 2026,
    order: 2,
    featured: false,
    cover: "/images/my.webp",
    coverAlt: "河南牧业经济学院校企联合",
    description:
      "旨在走进校园，进行深度校企联合，为大学生宣讲AI带来的社会变革，技术更新，未来方向；本人作为主讲人之一，为大学生进行关于AI信息发展的宣讲，对现阶段火爆的AI产品进行培训",
    tags: ["校企", "宣讲", "AI"],
    links: [],
  },
  {
    slug: "zhongyuan-university-tech-school-enterprise",
    type: "software",
    room: "ROOM 05",
    title: "河南中原工学院校企联合",
    year: 2026,
    order: 3,
    featured: false,
    cover: "/images/zyg.jpeg",
    coverAlt: "河南中原工学院校企联合",
    description:
      "旨在走进校园，进行深度校企联合，为大学生宣讲AI带来的社会变革，技术更新，未来方向；本人作为主讲人之一，为大学生进行关于AI信息发展的宣讲，对现阶段火爆的AI产品进行培训",
    tags: ["校企", "宣讲", "AI"],
    links: [],
  },

  // ── ROOM 06 ──────────────────────────────────────────────────────────
  {
    slug: "huazhong-menghua",
    type: "video",
    room: "ROOM 06",
    title: "画中梦华",
    year: 2025,
    order: 1,
    featured: true,
    cover: "/images/room-06.jpg",
    coverAlt: "封面",
    description: `大象新闻中心大象剧场团队短剧，本人参与前期短剧策划，风格定调，剧情打磨全流程。

获奖与入选：
• 2025年第七批入选国家广电总局「跟着微短剧去旅行」创作计划
• 「大河之南·精品短剧」创作传播工程优秀作品
• 北京大视听·追光计划国际微短剧大赛优秀作品
• 2025年「跟着微短剧游中国」推荐作品`,
    tags: ["短剧", "传统影视", "红果"],
    links: [{ label: "红果", url: "https://novelquickapp.com/s/CoVezqiwklw/" }],
  },
  {
    slug: "hangzhou-asian-games-nongchao",
    type: "video",
    room: "ROOM 06",
    title: "杭州亚运会宣传片 - 《弄潮》",
    year: 2022,
    order: 2,
    featured: false,
    cover: "/images/hz.png",
    coverAlt: "封面",
    description: `2022年杭州亚运会宣传片，本人于2022年7月开始参与宣传片竞标的前期策划，概念提出，于2022年9月竞标成功，12月定方案开始拍摄

• 官方视频号第一个突破10w+点赞视频`,
    tags: ["宣传片", "亚运会", "B站"],
    links: [{ label: "Bilibili", url: "https://www.bilibili.com/video/BV16P411i7yA/" }],
  },
];

// Helper: get the featured project for a given room (first featured, fallback first)
export function getFeatured(room: Room): Project | undefined {
  return (
    projects.find((p) => p.room === room && p.featured) ??
    projects.find((p) => p.room === room)
  );
}

// Helper: get all projects for a room, sorted by order
export function getByRoom(room: Room): Project[] {
  return projects
    .filter((p) => p.room === room)
    .sort((a, b) => a.order - b.order);
}
