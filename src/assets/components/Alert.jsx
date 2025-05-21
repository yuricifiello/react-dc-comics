export default function Alert({
  text = "Si è verificato un errore",
  textColor = "#721c24",
  backgroundColor = "#f8d7da",
}) {
  const style = {
    color: textColor,
    backgroundColor: backgroundColor,
    border: `1px solid ${textColor}`,
  };

  return (
    <div className="alert-box" style={style}>
      {text}
    </div>
  );
}
