export type ProjectType = "account" | "video" | "software" | "paper";
export type Room = "ROOM 01" | "ROOM 02" | "ROOM 03" | "ROOM 04";

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
  tags: string[];
  // ROOM 01
  platform?: string;
  handle?: string;
  // ROOM 02
  videoUrl?: string;
  // ROOM 04
  abstract?: string;
  publication?: string;
  authors?: string[];
  pdfUrl?: string;
  // shared
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  // ── ROOM 01 ──────────────────────────────────────────────────────────
  {
    slug: "douyin-aigc",
    type: "account",
    room: "ROOM 01",
    title: "抖音 AIGC 创作账号",
    year: 2024,
    order: 1,
    featured: true,
    cover: "/images/placeholder.jpg",
    coverAlt: "抖音账号主页截图",
    description: "专注 AIGC 视频创作，累计发布短片若干条。",
    tags: ["抖音", "AIGC"],
    platform: "抖音",
    handle: "@yourusername",
    links: [{ label: "账号主页", url: "https://www.douyin.com" }],
  },

  // ── ROOM 02 ──────────────────────────────────────────────────────────
  {
    slug: "aigc-film-demo",
    type: "video",
    room: "ROOM 02",
    title: "Demo — AIGC 短片",
    year: 2024,
    order: 1,
    featured: true,
    cover: "/images/placeholder.jpg",
    coverAlt: "AIGC短片封面",
    description: "使用 AI 工具制作的短片示例。",
    tags: ["AIGC", "短片"],
    links: [{ label: "Bilibili", url: "https://www.bilibili.com" }],
  },

  // ── ROOM 03 ──────────────────────────────────────────────────────────
  {
    slug: "software-demo",
    type: "software",
    room: "ROOM 03",
    title: "软件项目示例",
    year: 2025,
    order: 1,
    featured: true,
    cover: "/images/placeholder.jpg",
    coverAlt: "软件界面截图",
    description: "解决了某个问题的工具。",
    tags: ["Python", "Web"],
    links: [
      { label: "GitHub", url: "https://github.com" },
    ],
  },

  // ── ROOM 04 ──────────────────────────────────────────────────────────
  {
    slug: "paper-demo",
    type: "paper",
    room: "ROOM 04",
    title: "论文标题示例",
    year: 2025,
    order: 1,
    featured: true,
    cover: "/images/placeholder.jpg",
    coverAlt: "论文首页截图",
    description: "一句话概括研究方向和贡献。",
    tags: ["NLP", "LLM"],
    abstract: "这里填写论文摘要。",
    publication: "会议/期刊名称",
    authors: ["作者一", "作者二"],
    pdfUrl: "/papers/demo.pdf",
    links: [{ label: "论文", url: "https://arxiv.org" }],
  },
];

// Helper: get the featured project for a given room (first featured, fallback first)
export function getFeatured(room: Room): Project {
  return (
    projects.find((p) => p.room === room && p.featured) ??
    projects.find((p) => p.room === room)!
  );
}

// Helper: get all projects for a room, sorted by order
export function getByRoom(room: Room): Project[] {
  return projects
    .filter((p) => p.room === room)
    .sort((a, b) => a.order - b.order);
}
