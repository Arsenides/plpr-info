import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
    search: false // 禁用搜索
    // ... Add Nextra-specific options here
})

// Export the final Next.js config with Nextra included
export default withNextra({
    // ... Add regular Next.js options here
})