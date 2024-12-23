import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/page-header'

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Our Team"
        description="Meet the experts behind our success"
      />
      <div className="container py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8">
          <div className="relative h-[400px] w-full">
            <Image
              src="/company-team.jpg"
              alt="Our team in action"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="transition-all hover:shadow-lg hover:border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Team Member {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-600/80">Position</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

