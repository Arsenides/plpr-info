import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { LastUpdated } from 'nextra-theme-docs'


export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
    <Navbar
        logo={<b>北极星小站 - PolaPori中文翻译站</b>}
        // ... Your additional navbar options
    />
)
const footer = <Footer>
        一切官方资料版权归万代南梦宫所有，本站仅作为兴趣爱好交流使用，请勿用于商业用途。<br />
        https://beian.miit.gov.cn/ 鲁ICP备2025186228号-1<br />
        2025- {new Date().getFullYear()} @Arsenides
    </Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="zh-cn"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
                // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    // banner={banner} 暂时隐藏了Banner
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/Arsenides/plpr-info/tree/main/"

                    // 汉化布局
                    copyPageButton={false}
                    darkMode={true}
                    editLink="编辑此页" // 汉化了默认的编辑链接文本
                    feedback={{
                        content: "问题反馈", // 汉化了默认的feedback链接文本
                        labels: "feedback"
                    }}
                    
                     // 最后更新时间
                    lastUpdated={<LastUpdated 
                        locale="zh-CN"
                        children="最后更新于"
                    />}
                    themeSwitch={{
                        "dark" : "暗色模式",
                        "light" : "亮色模式",
                        "system" : "跟随系统"
                    }}
                    toc={{
                        "backToTop" : "回到顶部",
                        "title" : "目录"
                    }}
                    footer={footer}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}