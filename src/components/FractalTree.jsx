import React, { useRef, useEffect } from 'react';

const FractalTree = () => {
  const canvasRef = useRef(null);
  const requestId = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let frameCount = 0;
    
    function branch(len, angle) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();
      ctx.translate(0, -len);
      
      if (len > 4) {
        ctx.save();
        ctx.rotate(angle);
        branch(len * 0.67, angle);
        ctx.restore();
        
        ctx.save();
        ctx.rotate(-angle);
        branch(len * 0.67, angle);
        ctx.restore();
      }
    }
    
    function draw() {
      frameCount++;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgb(0, 3, 3)';
      ctx.lineWidth = 2;
      ctx.save();
      
      ctx.translate(width / 2, height);
      

      const angle = Math.sin(frameCount * 0.003) * Math.PI / 2;
      branch(105, angle);
      
      ctx.restore();
      
      requestId.current = requestAnimationFrame(draw);
    }
    
    draw();
    
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={350}
      style={{ display: 'block', margin: 'auto', backgroundColor: 'transparent' }}
    />
  );
};

export default FractalTree;
