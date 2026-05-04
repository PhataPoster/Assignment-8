"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const SeeMoreBtn = () => {

  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <animated.div style={springs}>
      <div>
        <Link href="/all-books" className="inline-block mt-10 mb-10">
          <Button className="bg-(--brand-500) text-white hover:brightness-95 active:brightness-90">
            See More <FaArrowRight />
          </Button>
        </Link>
      </div>
    </animated.div>
  );
};

export default SeeMoreBtn;