const defaultTransition = { type: "spring", stiffness: 200, damping: 20 };

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: defaultTransition 
  }
};

export const scaleOut = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: defaultTransition 
  }
};
