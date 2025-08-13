import React from "react";
import { useTheme } from "../contextProjet.js/contextTheme";

export default function Staration({ level }) {
  const { theme } = useTheme();
  const starColors = theme === "dark" ? "#FFD700" : "#070707ff";
  const starVazias = theme === "dark" ? "#ffffff" : "#6e6d6dff";
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < level) {
      stars.push(
        <span
          key={i}
          style={{
            color: starColors,
            fontSize: "2.8rem",
            transition: "color 0.3s ease",
          }}
        >
          ★
        </span>
      );
    } else {
      stars.push(
        <span
          key={i}
          style={{
            color: starVazias,
            fontSize: "2.8rem",
            transition: "color 0.3s ease",
          }}
        >
          ☆
        </span>
      );
    }
  }
  return <div>{stars}</div>;
}
