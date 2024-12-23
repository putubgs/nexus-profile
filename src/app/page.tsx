import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart,
  Brain,
  Building,
  Users,
} from "lucide-react";
import { ImageModal } from "@/components/image-modal";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/abstract-company.jpg"
            alt="Abstract business background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              <span className="block">Transform Your Business</span>
              <span className="block text-blue-200">With Expert Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl drop-shadow">
              Nexus Solutions provides strategic consulting services to help
              businesses thrive in today&apos;s competitive landscape. Let us
              guide you towards success.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  size="lg"
                  asChild
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.3C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services to help your business grow and
              succeed in today&apos;s competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Strategic Consulting",
                description:
                  "Develop winning strategies to drive your business forward.",
                icon: Brain,
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "Performance Optimization",
                description:
                  "Streamline operations and maximize efficiency for better results.",
                icon: BarChart,
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Corporate Development",
                description:
                  "Expand your business through mergers, acquisitions, and partnerships.",
                icon: Building,
                color: "bg-purple-100 text-purple-600",
              },
              {
                name: "Leadership Development",
                description:
                  "Cultivate strong leaders to guide your organization to success.",
                icon: Users,
                color: "bg-orange-100 text-orange-600",
              },
            ].map((feature) => (
              <Card
                key={feature.name}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`rounded-full p-3 mr-4 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
                <div className={`h-1 w-full ${feature.color.split(" ")[0]}`} />
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-gray-200 bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </section>

      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Company Gallery
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Glimpses of our corporate events, partnerships, and milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/company-galleries.jpg",
                title: "Networking Event 2023",
                description:
                  "Annual business networking event bringing together industry leaders",
              },
              {
                src: "/company-gallery.jpg",
                title: "Corporate Reception",
                description:
                  "Exclusive corporate gathering celebrating our partnerships",
              },
              {
                src: "/corporate-partnership-uob.webp",
                title: "Strategic Partnership",
                description:
                  "Establishing new corporate alliances and collaborations",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <ImageModal src={item.src} alt={item.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 bg-blue-50 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Let&apos;s work together to unlock your company&apos;s full
                potential. Our expert team is ready to provide the guidance and
                solutions you need.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/contact">
                    Get started
                    <ArrowRight
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>
    </div>
  );
}
