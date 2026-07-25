const defaultTransition = { type: "spring", stiffness: 300, damping: 30 };

export const slideUp = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: defaultTransition 
  }
};

export const slideDown = {
  hidden: { y: "-100%" },
  visible: { 
    y: 0, 
    transition: defaultTransition 
  }
};

export const slideLeft = {
  hidden: { x: "100%" },
  visible: { 
    x: 0, 
    transition: defaultTransition 
  }
};

export const slideRight = {
  hidden: { x: "-100%" },
  visible: { 
    x: 0, 
    transition: defaultTransition 
  }
};
