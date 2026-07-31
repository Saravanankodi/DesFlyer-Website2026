export default function GlassPanel({ className = '', children, as: Tag = 'div', ...props }) {
  return (
    <Tag className={`glass rounded-2xl ${className}`} {...props}>
      {children}
    </Tag>
  )
}
