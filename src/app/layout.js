//*import { Content, Inter } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "antd/es/layout/layout";
import AppHeader from "@/components/AppHeader";
import Sider from "antd/es/layout/Sider";
import AppSideMenu from "@/components/AppSideMenu";
import { Content } from "antd/es/layout/layout";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <AppHeader />
            <Layout hasSider>
              <Sider
                theme="light"
                style={{
                  position: "fixed",
                  top: "64px",
                  left: 0,
                  borderRight: "1px solid #f1f1f1",
                  height: "calc(100vg - 64px)",
                }}
              >
                <AppSideMenu />
              </Sider>
              <Layout style={{ marginLeft: "200px" }}>
                <Content
                  style={{ padding: "16px", minHeight: "calc(100vh -64px" }}
                >
                  {children}</Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}