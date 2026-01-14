export default function Card({ as: Tag = "article", className = "", children }) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
