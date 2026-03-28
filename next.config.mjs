import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
    // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({
    images: {
        unoptimized: true // 禁用图片优化
    }
    // ... Add regular Next.js options here
})