import Layout from "@/components/layout/Layout";
import Button from "@/components/common/Button";

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-xl font-bold mb-4"> Welcome to Splash App</h1>
        <p className="mb-6 text-gray-700">
          A modern Next.Js application
        </p>
        <Button label="Get Started" onClick={() => alert("Button clicked")} />
      </div>
    </Layout>
  )
}
