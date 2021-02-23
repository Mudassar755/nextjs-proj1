const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/logo-maker/dashboard`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ]
  },
}
