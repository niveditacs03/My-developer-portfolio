import React, { useEffect, useRef } from 'react';

const SpinningDonut = () => {
  const preRef = useRef(null);

  useEffect(() => {
    let A = 0, B = 0;
    const interval = setInterval(() => {
      const b = [];
      const z = [];
      const width = 100;
      const height = 60;
      const background = ' ';
      const chars = '@$#&%8XO=*;:~-. ';

      for (let k = 0; k < width * height; k++) {
        b[k] = background;
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;

          const x = Math.floor(width / 2 + width * 0.5 * D * (l * h * m - t * n));
          const y = Math.floor(height / 2 + height * 0.25 * D * (l * h * n + t * m));
          const o = Math.floor(x + width * y);
          const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
          
          if (height > y && y > 0 && x > 0 && width > x && D > z[o]) {
            z[o] = D;
            b[o] = chars[N > 0 ? N : 0];
          }
        }
      }

      if (preRef.current) {
        let output = '';
        for (let k = 0; k < b.length + 1; k++) {
          output += k % width ? b[k] : '\n';
        }
        preRef.current.innerText = output;
      }

      A += 0.04;
      B += 0.08;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      ref={preRef}
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        lineHeight: '12px',
        whiteSpace: 'pre',
        color: 'black',            
        backgroundColor: 'transparent', 
        padding: '20px',
        overflow: 'hidden',
      }}
      className='-mt-45'
    ></pre>
  );
};

export default SpinningDonut;
