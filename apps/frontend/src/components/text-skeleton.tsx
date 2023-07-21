function TextSkeleton({
  fontSize,
  lineHeight = fontSize * 1.5,
}: {
  fontSize: number;
  lineHeight?: number;
}) {
  return (
    <div className="grid items-center" style={{ height: lineHeight }}>
      <div className="bg-neutral-700 rounded-sm" style={{ height: fontSize }} />
    </div>
  );
}

export default TextSkeleton;
