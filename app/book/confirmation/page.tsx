import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col items-center justify-center antialiased px-6">
      <div className="w-20 h-20 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12" />
      </div>
      <h1 className="text-3xl font-bold text-primary mb-2">Booking Confirmed</h1>
      <p className="text-body-md text-on-surface-variant mb-8 text-center max-w-md">
        Your booking with Elena Rostova is confirmed. We will see you soon.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-11 px-5 text-label-lg rounded-md bg-secondary text-white font-semibold hover:bg-[#0B7C72] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
