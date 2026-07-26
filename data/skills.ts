// EDIT ME: replace with your real skills.
export type SkillGroup = {
  labelEn: string;
  labelZh: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    labelEn: "Languages",
    labelZh: "编程语言",
    items: ["JavaScript", "Python", "C#", "HTML/CSS"],
  },
  {
    labelEn: "Web",
    labelZh: "网页开发",
    items: ["React", "Next.js", "Node.js"],
  },
  {
    labelEn: "Game Dev",
    labelZh: "游戏开发",
    items: ["Unity", "C#"],
  },
  {
    labelEn: "Tools",
    labelZh: "工具",
    items: ["Git", "VS Code", "Figma"],
  },
];
