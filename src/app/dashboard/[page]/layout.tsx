interface IPageLayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  children: React.ReactNode;
}

export default async function PageLayout({ children }: IPageLayoutProps) {
  return children;
}
