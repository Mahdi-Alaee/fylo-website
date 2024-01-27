function Button({ className, href, type, children }) {
  return (
    <>
      {href ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button type={type} className={className}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
