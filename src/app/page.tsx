"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./styles.module.css";

const page: React.FC = () => {
  const ref = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const [items, setItems] = useState<string[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#D5C9FF",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#FF9577" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#805CFF" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#5CFF80" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(
      setTimeout(() => setItems(["Anticipate", "the", "Awesome"]), 2000)
    );
    ref.current.push(setTimeout(() => setItems(["Be", "Prepared "]), 5000));
    ref.current.push(setTimeout(() => setItems(["Coming", "Soon..."]), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <center>
      <section className="comming-div">
        <div className={styles.container}>
          <div className={styles.mainx}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div
                className={styles.transitionsItem}
                style={rest}
                onClick={reset}
              >
                <animated.div
                  style={{ overflow: "hidden", height: innerHeight }}
                >
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </center>
  );
};

export default page;
