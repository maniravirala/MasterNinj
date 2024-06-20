const LineBG = () => {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        background: `radial-gradient(circle at 50% 0%, rgba(255, 255, 0, 1) 0%, rgba(238, 130, 238, 0) 0%)`,
        WebkitMaskImage: `radial-gradient(circle at 50% 0%, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0) 50%)`,
        maskImage: `radial-gradient(circle at 50% 0%, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0) 50%)`,
      }}
    >
      <div
        className="lineBG absolute inset-0 h-full w-full"
        style={{
          backgroundSize: "48px 48px",
        }}
      ></div>
    </div>
  );
};

export default LineBG;
