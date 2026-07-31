import { Helmet } from 'react-helmet-async'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | DesFlyer` : 'DesFlyer — Software Development & Product Engineering'
  const url = `https://www.desflyer.in${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
