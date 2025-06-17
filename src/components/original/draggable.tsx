"use client"
import React, { useCallback, useEffect, useState } from 'react';

interface DraggableProps {
  children: React.ReactNode;
  ignoreTags?: (keyof HTMLElementTagNameMap)[];
  initialPosition: { x: number; y: number };
}

const Draggable = ({
  children,
  ignoreTags,
  initialPosition,
}: DraggableProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [elementStart, setElementStart] = useState(initialPosition);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (ignoreTags) {
      const upperIgnoreTags = ignoreTags?.map((tag) => tag.toUpperCase());
      const target = e.target as HTMLElement;
      if (upperIgnoreTags.includes(target.tagName)) return;
    }
    
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
    setElementStart({ ...position });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setPosition({
        x: elementStart.x + deltaX,
        y: elementStart.y + deltaY,
      });
    },
    [isDragging, dragStart, elementStart],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <div
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="absolute top-0 left-0 w-fit z-10 cursor-pointer origin-top-left select-none"
      >
        {children}
      </div>
    </div>
  );
};

export default Draggable;