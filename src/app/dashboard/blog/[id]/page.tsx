import BlogEditPage from "@/containers/blog/page";
interface IPageProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    params: Promise<{ id: number }>;
}
export default async function BlogPostPage({ params }: IPageProps) {
    const {id} = await params
    return <BlogEditPage id={id} />;
}
