import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import { GoldTitle, GrayTitle, Sectionlabel } from "@/components/reusePara";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden">
        <StarsBackgroundDemo />
        <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
          <Badge variant="gold">Powered by AI - Now in Beta</Badge>
          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Crack the toughest interviews</GrayTitle>
            <br />
            <GoldTitle>with AI-powered mock interviews</GoldTitle>
          </h1>
          <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed">
            Bool 1:1 mock interviews with an AI interviewer that simulates real interview scenarios, providing instant feedback and personalized coaching to help you ace your next job interview.
          </p>
          <div className=" relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
             <Link href='/onboarding'>
               <Button variant="gold">Get Started</Button>
             </Link>
             <Link href='/explore'>
               <Button variant="outline">Learn More → </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
