function BrowserDots() {
  return (
    <span className="browser-dots" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function TextBars({ count = 3 }: { count?: number }) {
  return (
    <span className="text-bars" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <i key={index} />
      ))}
    </span>
  );
}

function WireframeSheet() {
  return (
    <div className="specimen specimen-wireframe">
      <BrowserDots />
      <span className="wireframe-title" />
      <span className="wireframe-hero" />
      <span className="wireframe-copy">
        <TextBars count={4} />
      </span>
      <span className="wireframe-thumb wireframe-thumb-a" />
      <span className="wireframe-thumb wireframe-thumb-b" />
      <span className="wireframe-list">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function BrowserSpecimen() {
  return (
    <div className="specimen specimen-browser">
      <div className="browser-chrome">
        <BrowserDots />
        <span className="browser-address" />
      </div>
      <div className="browser-visual">
        <span className="visual-mountain visual-mountain-a" />
        <span className="visual-mountain visual-mountain-b" />
        <span className="visual-sun" />
      </div>
      <div className="browser-content">
        <div className="browser-copy">
          <span className="browser-heading" />
          <TextBars count={3} />
          <span className="browser-action" />
        </div>
        <span className="browser-placeholder" />
      </div>
      <div className="browser-features">
        <span>
          <i className="shape-circle" />
          <TextBars count={2} />
        </span>
        <span>
          <i className="shape-square" />
          <TextBars count={2} />
        </span>
        <span>
          <i className="shape-triangle" />
          <TextBars count={2} />
        </span>
      </div>
    </div>
  );
}

function InteractionSpecimen() {
  return (
    <div className="specimen specimen-interaction">
      <span className="tape" />
      <span className="toggle toggle-wide">
        <i />
      </span>
      <span className="toggle toggle-small">
        <i />
      </span>
      <span className="interaction-panel">
        <i className="interaction-avatar" />
        <TextBars count={2} />
        <i className="interaction-button" />
      </span>
      <span className="interaction-row">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function DiagramSpecimen() {
  return (
    <div className="specimen specimen-diagram">
      <span className="tape" />
      <span className="diagram-node diagram-root" />
      <span className="diagram-line diagram-line-a" />
      <span className="diagram-line diagram-line-b" />
      <span className="diagram-node diagram-child-a" />
      <span className="diagram-node diagram-child-b" />
      <span className="diagram-node diagram-leaf-a" />
      <span className="diagram-node diagram-leaf-b" />
      <span className="diagram-node diagram-leaf-c" />
    </div>
  );
}

function ImplementationStrip() {
  return (
    <div className="specimen specimen-strip">
      <i className="strip-dot strip-dot-a" />
      <i className="strip-dot strip-dot-b" />
      <i className="strip-dot strip-dot-c" />
      <i className="strip-dot strip-dot-d" />
      <span className="strip-line" />
      <i className="strip-control" />
    </div>
  );
}

export function SpecimenStack() {
  return (
    <div
      className="specimen-cluster"
      role="img"
      aria-label="A layered HTML wireframe, prototype, interaction panel, hierarchy diagram, and implementation strip."
    >
      <div aria-hidden="true">
        <WireframeSheet />
        <BrowserSpecimen />
        <InteractionSpecimen />
        <DiagramSpecimen />
        <ImplementationStrip />
      </div>
    </div>
  );
}
