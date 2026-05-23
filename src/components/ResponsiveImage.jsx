export function ResponsiveImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  sizes = '100vw',
  width,
  height,
}) {
  return (
    <div className={`relative overflow-hidden bg-ivory ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        width={width}
        height={height}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
