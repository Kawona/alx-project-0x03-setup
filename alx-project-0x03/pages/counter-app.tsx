import Layout from "@/components/layouts/Layout";
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Counter App</h1>
        <p className="text-xl mb-4">Current Count: {count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </Layout>
  );
}
