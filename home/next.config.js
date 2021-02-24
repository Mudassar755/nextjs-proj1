const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/logo-maker/dashboard',
        destination: `${BLOG_URL}/logo-maker/dashboard`,
      },
      {
        source: '/logo-maker/dashboard/:path*',
        destination: `${BLOG_URL}/logo-maker/dashboard/:path*`,
      },
    ]
  },
}
