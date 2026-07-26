export function Bilingual({ en, zh }: { en: React.ReactNode; zh: React.ReactNode }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="zh">{zh}</span>
    </>
  );
}
