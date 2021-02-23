const { BLOG_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/dashboard',
        destination: `${BLOG_URL}/logo-maker/dashboard`,
      },
      {
        source: '/dashboard/:path*',
        destination: `${BLOG_URL}/dashboard/:path*`,
      },
    ]
  },
}
