import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import { GoldTitle, GrayTitle, Sectionlabel } from "@/components/reusePara";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVATARS, LOGOS } from "@/lib/data";
import Image from "next/image";
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
            <GrayTitle>
              Master interviews with interactive AI practice
            </GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>
          <p className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed">
            Bool 1:1 mock interviews with an AI interviewer that simulates real
            interview scenarios, providing instant feedback and personalized
            coaching to help you ace your next job interview.
          </p>
          <div className=" relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get Started
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="hero">
                Learn More →{" "}
              </Button>
            </Link>
          </div>

          <div className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8  lg:mt-6">
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={av.src}
                    alt="user avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via Prepzo
            </p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
          <CodeDemo duration={30000} writing />
        </div>
      </section>
      <section className="relative z-10 border-y border-white/10 py-14">
        <p className="text-center text-xs font-medium text-stone-600 tracking-widest uppercase mb-8">Interviwees landed roles at</p>
        <div className="flex flex-wrap items-center justify-center gap-24 px-6">
      {LOGOS.map((l,id)=>(
        <Image
          key={id}
          src={l.src}
          alt={l.alt}
          width={100}
          height={100}
        />
      ))}
        </div>
      </section>
    </div>
  );
};

export default page;
