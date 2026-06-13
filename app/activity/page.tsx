// Next.js page placeholder for folder-based routing checks
// The main routing executes dynamically via /src/App.tsx inside our Vite React SPA.
import { ActivityPage } from "../../src/components/ActivityPage";

export default function ActivityPageNext() {
  return (
    <div className="bg-cream-light min-h-screen">
      <ActivityPage onBackToHome={() => { window.location.href = "/"; }} />
    </div>
  );
}
