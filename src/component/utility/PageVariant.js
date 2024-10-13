export const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "linear", duration:1, stiffness: 100 } },
    exit: {
        opacity: 0,
        x: "100vw", // Slide out to the right
        transition: { ease: "easeInOut", duration: 0.5 }
      }
};