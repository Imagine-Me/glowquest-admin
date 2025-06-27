import CommonMenuPage from "@/containers/menuPage/commonMenuPage";

interface IPageProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  params: Promise<{ page: string }>;
}

export default async function Brand({ params }: IPageProps) {
  const { page } = await params;
  return <CommonMenuPage page={page} />;
}
