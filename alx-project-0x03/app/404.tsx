import Layout from "@/components/layout/Layout";

export default function NotFoundPage() {
    return (
        <Layout>
            <div className="flex flex-col items-center justfity-center min-h-screen">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-xl text-gray-600 mt-4">Page not found</p>
            </div>
        </Layout>
    );
}