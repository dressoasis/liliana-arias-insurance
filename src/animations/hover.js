export const hoverCard = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4, 
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
  tap: { scale: 0.98 }
};

export const hoverButton = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
  tap: { scale: 0.95 }
};
