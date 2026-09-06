export type SkillGroup = {
  labelEn: string;
  labelZh: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    labelEn: "Languages",
    labelZh: "编程语言",
    items: ["C#", "Python", "Java", "JavaScript", "HTML/CSS"],
  },
  {
    labelEn: "Web",
    labelZh: "网页开发",
    items: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
  },
  {
    labelEn: "Game Dev",
    labelZh: "游戏开发",
    items: ["Unity", "C#"],
  },
  {
    labelEn: "Tools",
    labelZh: "工具",
    items: ["Claude Code", "Git", "GitHub Actions"],
  },
];
