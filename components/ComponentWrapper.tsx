function ComponentWrapper({
  className,
  children,
}: {
  children: React.ReactNode
  className?: string | undefined
}) {
  return <div className={`w-full max-w-[1280px] mx-auto ${className || ''}`}>{children}</div>
}

export default ComponentWrapper
