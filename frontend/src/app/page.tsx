"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { FiShield, FiClock, FiDollarSign } from "react-icons/fi";
import {GiTicket} from "react-icons/gi";

export default function LandingPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-background text-foreground"> 

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GiTicket className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">PARKINGA</span> 
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push("/auth/login")}>
              Login
            </Button>
            <Button onClick={() => router.push("/auth/register")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
  Goodbye Parking Chaos
  <br />
  <span className="text-primary">Hello Smart Spaces!</span>
</h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
  Simplify your parking operations with our all-in-one smart management platform. 
  Track availability, control access, and automate payments effortlessly.
</p>
<Button size="lg" onClick={() => router.push("/auth/register")}>
  Get Started with Smart Parking
</Button>

        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ {
    icon: GiTicket,
    title: "Digital Ticketing",
    desc: "Generate and manage parking tickets digitally to reduce manual entry and errors.",
  },
  {
    icon: FiShield,
    title: "Role-Based Access",
    desc: "Provide secure, permission-based access for admins and users with detailed control.",
  },
  {
    icon: FiClock,
    title: "Slot Availability",
    desc: "View and monitor real-time parking slot availability to avoid congestion and confusion.",
  },
  {
    icon: FiDollarSign,
    title: "Usage-Based Billing",
    desc: "Automatically calculate charges based on time and slot usage for fair billing.",
  }].map((feature, i) => (
            <div key={i} className="p-6 bg-card text-card-foreground rounded-lg shadow-sm"> 
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border"> {/* ✅ Theme-based border and background */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GiTicket className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">PARKINGA</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PARKINGA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
