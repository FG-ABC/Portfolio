"use client";

import { motion } from "framer-motion";

export function TransitionToRight({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function TransitionToLeft({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function TransitionUp({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
