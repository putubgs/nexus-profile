import Image from 'next/image'
import { PageHeader } from '@/components/page-header'

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Nexus Solutions"
        description="Leading the way in business transformation and strategic consulting"
      />
      <div className="container py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8">
          <div className="relative h-[400px] w-full">
            <Image
              src="/abstract-company.jpg"
              alt="Business concept illustration"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
              <p className="mt-4 text-blue-600/80">
                To empower businesses with innovative solutions and strategic guidance, enabling them to thrive in an ever-evolving market landscape.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
              <p className="mt-4 text-blue-600/80">
                To be the leading catalyst for business transformation, recognized globally for our expertise and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

