const fs = require('fs');
const path = require('path');

const floralDir = path.join(__dirname, '..', 'src', 'assets', 'floral');

function getSvgData(filename) {
  const file = path.join(floralDir, filename);
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, 'utf8');
  const vb = content.match(/viewBox="([^"]+)"/)?.[1] || '0 0 100 100';
  const paths = [...content.matchAll(/<path[^>]+d="([^"]+)"/g)].map(m => m[1]);
  return { viewBox: vb, paths };
}

const pune = getSvgData('pune_border.svg');
const chappell = getSvgData('chappell_fleuron.svg');
const corner = getSvgData('floral_corner.svg');
const serlio = getSvgData('serlio_tailpiece.svg');

const code = `// Authentic Open-Source & Public-Domain Floral Motifs
// Sourced from Wikimedia Commons & Historical Archives
// Pune Leaf Border (Pune, India), Chappell & Co Fleuron, Art Nouveau Floral Corner, Serlio 1551 Arabesque

import React from 'react';

/**
 * Authentic Indian Ornamental Border with Leaf & Floral Motifs (Pune, India)
 * Open-source vector design from Wikimedia Commons (PD / CC0).
 */
export function PuneFloralBorder({
  className = '',
  color = '#d4a74a',
  opacity = 0.85,
  flipY = false
}: {
  className?: string;
  color?: string;
  opacity?: number;
  flipY?: boolean;
}) {
  return (
    <div
      className={\`pune-floral-border-wrapper \${className}\`}
      aria-hidden="true"
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: flipY ? 'scaleY(-1)' : undefined
      }}
    >
      <svg
        viewBox="${pune.viewBox}"
        fill={color}
        style={{ width: '100%', height: 'auto', display: 'block', opacity }}
        preserveAspectRatio="none"
      >
        <g>
          ${pune.paths.map(p => `<path d="${p}" />`).join('\n          ')}
        </g>
      </svg>
    </div>
  );
}

/**
 * Delicate Floral Fleuron Vignette (Chappell & Co archive, Open-Source)
 * Perfect as a divider between headings, menu categories, or under badges.
 */
export function FloralFleuronDivider({
  className = '',
  color = '#d4a74a',
  opacity = 0.85,
  size = 48
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      className={\`floral-fleuron-divider \${className}\`}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        opacity
      }}
    >
      <span
        style={{
          display: 'block',
          width: '40px',
          height: '1px',
          background: \`linear-gradient(to left, \${color}, transparent)\`
        }}
      />
      <svg
        viewBox="${chappell.viewBox}"
        fill={color}
        style={{ width: \`\${size}px\`, height: 'auto', display: 'block' }}
      >
        <path d="${chappell.paths[0]}" />
      </svg>
      <span
        style={{
          display: 'block',
          width: '40px',
          height: '1px',
          background: \`linear-gradient(to right, \${color}, transparent)\`
        }}
      />
    </div>
  );
}

/**
 * Intricate Floral Filigree Corner Flourish (Art Nouveau open-source archive)
 * Positioned in card corners or hero sections.
 */
export function FloralCornerAccent({
  className = '',
  color = '#d4a74a',
  opacity = 0.75,
  size = 60,
  position = 'top-left'
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  let transform = '';
  if (position === 'top-right') transform = 'scaleX(-1)';
  if (position === 'bottom-left') transform = 'scaleY(-1)';
  if (position === 'bottom-right') transform = 'scale(-1, -1)';

  return (
    <div
      className={\`floral-corner-accent floral-corner-\${position} \${className}\`}
      aria-hidden="true"
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        opacity,
        transform,
        pointerEvents: 'none'
      }}
    >
      <svg
        viewBox="${corner.viewBox}"
        fill={color}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path d="${corner.paths[0]}" />
      </svg>
    </div>
  );
}

${serlio && serlio.paths.length > 0 ? `
/**
 * Authentic Serlio 1551 Floral Arabesque Tailpiece Vignette
 */
export function SerlioArabesqueTailpiece({
  className = '',
  color = '#d4a74a',
  opacity = 0.8,
  size = 70
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      className={\`serlio-arabesque-tailpiece \${className}\`}
      aria-hidden="true"
      style={{ display: 'inline-block', opacity }}
    >
      <svg
        viewBox="${serlio.viewBox}"
        fill={color}
        style={{ width: \`\${size}px\`, height: 'auto', display: 'block' }}
      >
        ${serlio.paths.map(p => `<path d="${p}" />`).join('\n        ')}
      </svg>
    </div>
  );
}
` : ''}
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'components', 'FloralMotifs.tsx'), code);
console.log('Generated src/components/FloralMotifs.tsx successfully!');
