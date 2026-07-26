export function Campfire() {
  return (
    <div className="campfire" aria-hidden="true">
      <div className="campfire-glow" />
      <div className="campfire-flame campfire-flame-back" />
      <div className="campfire-flame campfire-flame-front" />
      <div className="campfire-logs">
        <span className="campfire-log campfire-log-a" />
        <span className="campfire-log campfire-log-b" />
      </div>
      <div className="campfire-embers">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
