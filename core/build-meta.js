import Head from 'next/head'

import pkg from '../package.json'

const DEFAULT_META = {
  name: pkg.name,
  description: pkg.description,
  url: pkg.homepage,
  image: '/static/img/banner.png',
  logo: '/static/img/logo.png'
}

export default opts => {
  const meta = Object.assign({}, DEFAULT_META, opts)

  const name = meta.repo || meta.name
  const fullName =
    meta.owner && meta.repo ? `${meta.owner}/${meta.repo}` : meta.name

  return (
    <Head>
      {/* <!-- Basic --> */}
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <link rel='icon' type='image/png' href={meta.logo} />

      {/* <!-- Search Engine --> */}
      <meta name='date' content={meta.updatedAt} />
      <meta name='description' content={meta.description} />
      <meta name='image' content={meta.image} />
      <link rel='canonical' href={meta.url} />
      <title children={`${fullName}: ${meta.description}`} />
      <meta name='author' content={meta.owner} />
      <meta
        name='viewport'
        content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
      />
      {/* <!-- Twitter --> */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={name} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta property='og:title' content={name} />
      <meta property='og:logo' content={meta.logo} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:url' content={meta.url} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:updated_time' content={meta.updatedAt} />
      {/* <!-- Schema.org for Google  --> */}
      <meta itemProp='name' content={name} />
      <meta itemProp='description' content={meta.description} />
      <meta itemProp='image' content={meta.image} />
    </Head>
  )
}
