"use client";

import CountUp from "react-countup";

interface CountNumberProps {
  end: number;
  suffix?: string;
}

export default function CountNumber({
  end,
  suffix = "",
}: CountNumberProps) {
  return (
    <CountUp
      end={end}
      duration={2.5}
      separator=","
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}