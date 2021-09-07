import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <header><Header /></header>
        <main>{children}</main>
        <footer><Footer title='감사합니다.' description='' /></footer>
      </Container>
    </>
  )
}

export default Layout
